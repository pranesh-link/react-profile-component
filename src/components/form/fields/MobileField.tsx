import classNames from "classnames";
import PhoneInput from "react-phone-number-input";
import { FormFieldValueType } from "react-profile-component/store";

interface IMobileFieldProps {
  fieldValid?: boolean;
  autoFocus: boolean;
  isFormSubmit: boolean;
  fieldValue: FormFieldValueType;
  handleMobileInputChange: (value: string) => void;
}
export const MobileField = (props: IMobileFieldProps) => {
  const {
    autoFocus,
    fieldValid,
    fieldValue,
    isFormSubmit,
    handleMobileInputChange,
  } = props;

  return (
    <PhoneInput
      autoFocus={autoFocus}
      disabled={isFormSubmit}
      defaultCountry="IN"
      international
      limitMaxLength
      countryCallingCodeEditable={false}
      className={classNames("phone-input", {
        error: fieldValid === false,
      })}
      value={fieldValue as string}
      onChange={handleMobileInputChange}
    />
  );
};
