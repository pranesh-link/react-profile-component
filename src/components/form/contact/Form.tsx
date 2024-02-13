import {
  FormEvent,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import emailjs from "@emailjs/browser";
import {
  ActionBtn,
  CustomModalComponent,
  FlexBox,
} from "../../../common/Elements";
import classNames from "classnames";
import {
  ContactFormData,
  ContactFormError,
  ContactFormFields,
  ContactFormValid,
  CONTACT_FORM_STATUS,
  FormFieldValueType,
} from "../../../store/types";
import { FormField } from "../common/FormField";
import { ProfileContext } from "../../../store/context";
import { getPreloadedAsset, isNetworkOnline } from "../../../common/Utils";
import {
  getDecryptedConfig,
  getDefaultContactFormData,
  transformMailRequest,
  validateField,
} from "../Utils";
import { isMobile } from "react-device-detect";
import {
  ProgressMessage,
  StatusWrap,
  StatusMessage,
  Retry,
  ActionsWrap,
  Form,
  FormHeader,
  FormSubmit,
} from "../common/Elements";

interface IContactFormProps {
  closeModal: () => void;
}

export const ContactForm = (props: IContactFormProps) => {
  const {
    data: {
      forms: { contactForm: form },
    },
    emailJsConfig,
  } = useContext(ProfileContext);
  const { preloadedAssets } = useContext(ProfileContext);

  const { statusMessages, messages, label, fields } = form;

  const defaultFormData = useMemo(
    () => getDefaultContactFormData(fields),
    [fields]
  );

  const requiredFields = useMemo(
    () => fields.filter((i) => i.required),
    [fields]
  );

  const { closeModal } = props;

  const [formData, setFormData] = useState<ContactFormData>(defaultFormData);
  const [formValid, setFormValid] = useState<ContactFormValid | null>(null);
  const [formError, setFormError] = useState<ContactFormError | null>(null);
  const [formDisabled, setFormDisabled] = useState<boolean>(true);
  const [contactFormStatus, setContactFormStatus] = useState(
    isNetworkOnline()
      ? CONTACT_FORM_STATUS.FORM_FILL
      : CONTACT_FORM_STATUS.OFFLINE
  );
  const [online, setOnline] = useState(isNetworkOnline());
  const [allowRetry, setAllowRetry] = useState(false);
  const [hasReviewedForm, setHasReviewedForm] = useState<boolean>(false);

  const resetFields = () => {
    setFormData(defaultFormData);
    setContactFormStatus(CONTACT_FORM_STATUS.FORM_FILL);
    setHasReviewedForm(false);
    setFormDisabled(true);
  };

  const formStatusIconMap = useMemo(
    () => ({
      [CONTACT_FORM_STATUS.FORM_FILL]: "",
      [CONTACT_FORM_STATUS.SENDING]: getPreloadedAsset(
        preloadedAssets,
        "loadingAnimation"
      ),
      [CONTACT_FORM_STATUS.SUCCESS]: getPreloadedAsset(
        preloadedAssets,
        "successAnimation"
      ),
      [CONTACT_FORM_STATUS.ERROR]: getPreloadedAsset(
        preloadedAssets,
        "errorAnimation"
      ),
      [CONTACT_FORM_STATUS.OFFLINE]: getPreloadedAsset(
        preloadedAssets,
        "offlineAnimation"
      ),
      [CONTACT_FORM_STATUS.REVIEW]: "",
    }),
    [preloadedAssets]
  );

  const handleMailRequest = () => {
    setContactFormStatus(CONTACT_FORM_STATUS.SENDING);
    setAllowRetry(false);
    const [serviceId, templateId, publicKey] = getDecryptedConfig(
      [
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        emailJsConfig.publicKey,
      ],
      form.key
    );

    const transformedPaylod = transformMailRequest(
      formData,
      form.transformFields
    );

    emailjs.send(serviceId, templateId, transformedPaylod, publicKey).then(
      () => {
        setContactFormStatus(CONTACT_FORM_STATUS.SUCCESS);
        setTimeout(() => resetFields(), 3000);
      },
      () => {
        setContactFormStatus(CONTACT_FORM_STATUS.ERROR);
        setAllowRetry(true);
      }
    );
  };

  const sendEmail = (
    e:
      | FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (online) {
      handleMailRequest();
    } else {
      setContactFormStatus(CONTACT_FORM_STATUS.OFFLINE);
      setAllowRetry(true);
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (online) {
      if (hasReviewedForm) {
        sendEmail(e);
      } else {
        setContactFormStatus(CONTACT_FORM_STATUS.REVIEW);
      }
    } else {
      setContactFormStatus(CONTACT_FORM_STATUS.OFFLINE);
    }
  };

  const isFormSubmit = useMemo(
    () => contactFormStatus === CONTACT_FORM_STATUS.SENDING,
    [contactFormStatus]
  );

  const displayStatus = useMemo(
    () =>
      [
        CONTACT_FORM_STATUS.SUCCESS,
        CONTACT_FORM_STATUS.ERROR,
        CONTACT_FORM_STATUS.SENDING,
        CONTACT_FORM_STATUS.OFFLINE,
        CONTACT_FORM_STATUS.REVIEW,
      ].indexOf(contactFormStatus) > -1,
    [contactFormStatus]
  );

  const isSending = useMemo(
    () => contactFormStatus === CONTACT_FORM_STATUS.SENDING,
    [contactFormStatus]
  );

  const isSuccess = useMemo(
    () => contactFormStatus === CONTACT_FORM_STATUS.SUCCESS,
    [contactFormStatus]
  );

  const isError = useMemo(
    () => contactFormStatus === CONTACT_FORM_STATUS.ERROR,
    [contactFormStatus]
  );

  const isOffline = useMemo(
    () => contactFormStatus === CONTACT_FORM_STATUS.OFFLINE,
    [contactFormStatus]
  );

  const isReview = useMemo(
    () => contactFormStatus === CONTACT_FORM_STATUS.REVIEW,
    [contactFormStatus]
  );

  const updateInput = (
    value: FormFieldValueType,
    field: string,
    valueId?: string
  ) => {
    if (valueId) {
      setFormData({
        ...formData,
        [field as ContactFormFields]: {
          ...(formData[field as ContactFormFields] as Record<string, any>),
          [valueId]: value,
        },
      });
    } else {
      setFormData({ ...formData, [field as ContactFormFields]: value });
    }
  };

  const handleValidation = (value: FormFieldValueType, field: string) => {
    const validation = validateField(
      form,
      formError,
      formValid,
      requiredFields,
      value,
      field
    );
    setFormError(validation.formError);
    setFormValid(validation.formValid);
    setFormDisabled(validation.formDisabled);
  };

  const handleReviewAndEdit = useCallback(() => {
    setHasReviewedForm(true);
    setContactFormStatus(CONTACT_FORM_STATUS.FORM_FILL);
  }, []);

  const displayStatusInfo = useMemo(() => {
    const icon = formStatusIconMap[contactFormStatus];
    const message = statusMessages[contactFormStatus];
    const retryMessage = isError || isOffline ? messages.retry : "";

    return { icon, message, retryMessage };
  }, [
    formStatusIconMap,
    contactFormStatus,
    statusMessages,
    messages.retry,
    isError,
    isOffline,
  ]);

  const StatusIcon = () => {
    return (
      <>
        {displayStatusInfo.icon && (
          <img
            className="form-status-image"
            alt="Form status"
            height="35px"
            src={displayStatusInfo.icon}
          />
        )}
      </>
    );
  };

  useEffect(() => {
    if (online && contactFormStatus === CONTACT_FORM_STATUS.OFFLINE) {
      setContactFormStatus(CONTACT_FORM_STATUS.FORM_FILL);
    }
  }, [online, contactFormStatus]);

  useEffect(() => {
    window.addEventListener("online", () => setOnline(true));
    window.addEventListener("offline", () => setOnline(false));

    return () => {
      window.addEventListener("online", () => setOnline(true));
      window.addEventListener("offline", () => setOnline(false));
    };
  }, []);

  const IconMessage = memo(() => {
    return (
      <>
        <StatusIcon />
        <ProgressMessage
          dangerouslySetInnerHTML={{ __html: displayStatusInfo.message }}
        />
      </>
    );
  });

  return (
    <>
      <CustomModalComponent
        isOpen={displayStatus}
        className="contact-form-status-modal-content"
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => {
          if (isError || isOffline) {
            setContactFormStatus(CONTACT_FORM_STATUS.FORM_FILL);
          }
        }}
      >
        <StatusWrap direction="column">
          <StatusMessage
            direction={isError || isOffline ? "column" : "row"}
            justifyContent="space-evenly"
            alignItems="center"
            className={classNames(contactFormStatus, {
              "high-border": isSending || isSuccess,
            })}
          >
            {isError || isOffline ? (
              <FlexBox alignItems="center">
                <IconMessage />
              </FlexBox>
            ) : (
              <IconMessage />
            )}

            <Retry
              href=""
              className={classNames({
                hide: !allowRetry,
              })}
              onClick={sendEmail}
            >
              {displayStatusInfo.retryMessage}
            </Retry>
          </StatusMessage>
          {isReview && (
            <ActionsWrap
              className={classNames({ "review-status": isReview })}
              justifyContent="center"
              alignItems="center"
            >
              <ActionBtn className="review-edit" onClick={handleReviewAndEdit}>
                {label.reviewEdit}
              </ActionBtn>
              <ActionBtn className="send" onClick={sendEmail}>
                {label.submit}
              </ActionBtn>
            </ActionsWrap>
          )}
        </StatusWrap>
      </CustomModalComponent>
      <Form isMobile={isMobile} onSubmit={handleFormSubmit}>
        <FormHeader>{form.header}</FormHeader>
        {fields.map((field, index) => {
          const fieldName = field.name as ContactFormFields;
          return (
            <FormField
              key={index}
              defaultMaxLength={form.defaultMaxLength}
              autoFocus={online && index === 0}
              field={field}
              fieldValue={formData[fieldName]}
              fieldValid={formValid?.[fieldName]}
              fieldError={formError?.[fieldName]}
              updateInput={updateInput}
              validateField={handleValidation}
              isFormSubmit={isFormSubmit}
            />
          );
        })}

        <ActionsWrap justifyContent="space-between" alignItems="center">
          <ActionBtn className="close" onClick={closeModal}>
            {label.close}
          </ActionBtn>
          <FormSubmit
            disabled={formDisabled || isFormSubmit}
            className={classNames({
              disabled: formDisabled || isFormSubmit,
            })}
            type="submit"
          >
            {isFormSubmit ? label.submitting : label.submit}
          </FormSubmit>
        </ActionsWrap>
      </Form>
    </>
  );
};
