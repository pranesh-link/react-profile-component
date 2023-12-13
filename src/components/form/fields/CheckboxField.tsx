import classNames from "classnames";
import {
  getPreloadedAsset,
  isStringBooleanRecord,
} from "../../../common/Utils";
import { IFormField } from "../../../store/types";
import {
  CheckboxInput,
  CheckboxInputLabel,
  CheckboxInputWrap,
  CheckboxTick,
} from "../common/Elements";
import { useContext, useMemo } from "react";
import { ProfileContext } from "../../../store/context";

interface ICheckboxFieldProps {
  field: IFormField;
  fieldValue: string | Record<string, boolean>;
  handleCheckboxChange: (id: string) => void;
}

export const CheckboxField = (props: ICheckboxFieldProps) => {
  const { field, fieldValue, handleCheckboxChange } = props;
  const { preloadedAssets } = useContext(ProfileContext);

  const icon = useMemo(
    () => getPreloadedAsset(preloadedAssets, "whiteTick"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <>
      {(field?.values || []).map(item => {
        const isChecked = isStringBooleanRecord(fieldValue)
          ? fieldValue[item.value]
          : false;
        return (
          <CheckboxInputWrap
            alignItems="center"
            key={item.value}
            id={item.value}
          >
            <CheckboxInput
              id={item.value}
              type="checkbox"
              onChange={() => {
                handleCheckboxChange(item.value);
              }}
              checked={isChecked}
            />
            {isChecked && (
              <CheckboxTick
                id={item.value}
                src={icon}
                onClick={() => {
                  handleCheckboxChange(item.value);
                }}
              />
            )}
            <CheckboxInputLabel className={classNames({ checked: isChecked })}>
              {item.label}
            </CheckboxInputLabel>
          </CheckboxInputWrap>
        );
      })}
    </>
  );
};
