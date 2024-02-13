import styled from "styled-components";
import { FlexBoxSection, FlexBox, ActionBtn } from "../../../common/Elements";

const FieldLabel = styled.label<{ isMobile: boolean }>`
  flex-basis: 30%;
  font-weight: 600;
  margin-right: 10px;

  @media only screen and (max-width: 767px) {
    flex-basis: 40%;
  }
`;

const FieldWrap = styled(FlexBoxSection)`
  &:not(.has-child-field) {
    margin-bottom: 20px;
  }
  .required-asterisk {
    color: #ee4b2b;
    padding-left: 5px;
  }
  input,
  textarea {
    padding-left: 7px;
  }
  .phone-input {
    width: 100%;
    font-family: Open Sans, sans-serif !important;
    input {
      border-color: transparent;
      font-family: Open Sans, sans-serif !important;
      outline: none;
      border-radius: 5px;
      height: 25px;
      width: 100%;
      padding-left: 5px;
    }
  }

  @media only screen and (max-width: 767px) {
    .phone-input {
      &.error {
        input {
          border: 1px solid #ee4b2b;
        }
      }
    }
  }
`;

const TextInput = styled.input`
  width: 100%;
  height: 25px;
  border-radius: 5px;
  border-color: transparent;
  outline: none;
  font-family: Open Sans, sans-serif !important;
  font-size: 14px;
  @media only screen and (max-width: 767px) {
    &.error {
      border: 1px solid #ee4b2b;
    }
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  border-radius: 5px;
  border-color: transparent;
  outline: none;
  min-height: 100px;
  font-family: Open Sans, sans-serif !important;
  font-size: 14px;
  @media only screen and (max-width: 767px) {
    &.error {
      border: 1px solid #ee4b2b;
    }
  }
`;

const RemainingCharacters = styled.span`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.4px;
  .remaining-characters {
    padding-right: 1.5px;
  }
  .lesser-to-no-characters {
    color: #ee4b2b;
  }
  .less-characters {
    color: #ffa500;
  }
  .field-maxlength {
    padding-left: 1.5px;
  }
`;

const InputWrap = styled(FlexBox)`
  width: 100%;
`;

const Error = styled.span`
  margin-top: 5px;
  font-size: 12px;
  color: #ee4b2b;
  margin-right: 10px;
  font-style: italic;
  font-weight: 600;
`;

const CheckboxInput = styled.input`
  margin: 0;
  margin-right: 10px;
  height: 20px;
  width: 20px;
  cursor: pointer;
  -webkit-appearance: none;
  background: #fff;
  border-radius: 3px;
  border: 0.5px solid #ccc;
  &:checked {
    background-color: #3f9c35;
    border: none;
    box-shadow: transparent 0 -1px 0px 1px, inset transparent 0 -1px 0px,
      #3f9c35 0 2px 20px;
    color: #99a1a7;
  }
  &:not(:checked):hover {
    border: none;
    box-shadow: transparent 0 -1px 0px 1px, inset transparent 0 -1px 0px,
      #3498db 0 2px 20px;
  }
`;

const CheckboxInputLabel = styled.label`
  font-size: 13px;
  letter-spacing: 0.5px;
  &.checked {
    font-weight: 600;
  }
`;

const CheckboxTick = styled(ActionBtn)`
  padding: 0;
  position: absolute;
  left: 4px;
  top: 0px;
  height: 13px;
`;

const CheckboxInputWrap = styled(FlexBox)`
  width: 100%;
  position: relative;
`;

const Form = styled.form<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  background: #f0f0f0;
  outline: none;
  padding: 20px 30px;
  border-radius: 15px;

  @media only screen and (max-width: 767px) {
    padding: 15px;
  }
`;

const StatusWrap = styled(FlexBox)`
  border-radius: min(50px, (480px - 400px + 1px) * 9999);
  background: #f0f0f0;
  padding: 5px 15px;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

const StatusMessage = styled(FlexBox)`
  background: #f0f0f0;
  border-radius: 15px;
  &.error {
    padding: 5px 15px;
  }
  &.high-border {
    border-radius: 30px;
    padding: 5px 0;
  }
`;

const ActionsWrap = styled(FlexBoxSection)`
  margin: 20px 0 0px;
  &.review-status {
    margin: 10px 0 5px;
  }

  .close,
  .review-edit,
  .send {
    font-size: 15px;
    padding: 10px 25px;
    background: #ee4b2b;
    opacity: 0.85;
    border-radius: 20px;
    color: #f0f0f0;
    &:hover {
      opacity: 1;
    }
    @media only screen and (max-width: 767px) {
      opacity: 1;
    }
  }
  .review-edit,
  .send {
    padding: 5px 15px;
  }

  .review-edit {
    margin-right: 10px;
    background: #b21807;
  }

  .send {
    background: #3fc935;
  }
`;

const FormSubmit = styled(ActionBtn)`
  background: #3498db;
  color: #f0f0f0;
  font-size: 15px;
  letter-spacing: 0.5px;
  border-color: transparent;
  border-radius: 20px;
  padding: 10px 25px;
  font-family: Open Sans, sans-serif !important;
  opacity: 0.85;
  &:not(.disabled):hover {
    opacity: 1;
  }
  &.disabled {
    background: #8a8982;
    cursor: default;
  }

  @media only screen and (max-width: 767px) {
    opacity: 1;
  }
`;

const Retry = styled.a`
  margin-left: 10px;
  margin-top: 10px;
  font-weight: bold;
  color: #3fc935;
  letter-spacing: 0.3px;
  flex-basis: 15%;
`;

const ProgressMessage = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  font-weight: 600;
`;

const FormHeader = styled.h2`
  text-align: center;
  margin: 0px;
  padding-bottom: 25px;
`;

export {
  CheckboxTick,
  Error,
  FieldLabel,
  FieldWrap,
  InputWrap,
  RemainingCharacters,
  TextArea,
  TextInput,
  CheckboxInput,
  CheckboxInputLabel,
  CheckboxInputWrap,
  Form,
  StatusWrap,
  StatusMessage,
  ActionsWrap,
  FormSubmit,
  Retry,
  ProgressMessage,
  FormHeader,
};
