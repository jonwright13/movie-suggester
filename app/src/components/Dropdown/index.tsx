import React, { ChangeEvent, FC } from "react";
import { SelectContainer, Label, Select, Option } from "../../style/style";
import { type } from "../../types/apiProps";

interface DropdownProps {
  label: string;
  placeholder: string;
  name: string;
  options: any[];
  defaultOptionText: string;
  defaultOptionValue: type | number | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Dropdown: FC<DropdownProps> = ({
  label,
  placeholder,
  name,
  options,
  defaultOptionText,
  defaultOptionValue,
  onChange,
}) => {
  return (
    <SelectContainer>
      <Label>{label}</Label>
      <Select placeholder={placeholder} name={name} onChange={onChange}>
        <Option value={defaultOptionValue}>{defaultOptionText}</Option>
        {options.map((item, index) => (
          <Option key={index} value={item.id}>
            {item.name}
          </Option>
        ))}
      </Select>
    </SelectContainer>
  );
};

export default Dropdown;
