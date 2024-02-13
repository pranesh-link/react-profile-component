import classNames from "classnames";
import { FormFieldValueType, IFormField } from "../../../store/types";
import { TextArea } from "../common/Elements";

interface ITextAreaFieldProps {
  fieldValid?: boolean;
  autoFocus: boolean;
  field: IFormField;
  isFormSubmit: boolean;
  fieldValue: FormFieldValueType;
  handleTextChange: (value: string) => void;
}
export const TextAreaField = (props: ITextAreaFieldProps) => {
  const {
    autoFocus,
    field,
    fieldValid,
    fieldValue,
    handleTextChange,
    isFormSubmit,
  } = props;

  return (
    <TextArea
      placeholder={field.placeholder}
      autoFocus={autoFocus}
      disabled={isFormSubmit}
      className={classNames({
        error: fieldValid === false,
      })}
      maxLength={field.maxLength}
      name={field.name}
      value={fieldValue as string}
      onChange={(e) => handleTextChange(e.target.value)}
    />
  );
};
