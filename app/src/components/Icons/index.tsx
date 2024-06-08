import React, { FC } from "react";
import { IconContainer } from "./style";
import { IconProps } from "./interface";
import IconSwitch from "./IconSwitch";

export const Icon: FC<IconProps> = ({ type, title, checked, onClick }) => {
  const handleClick = () => {
    onClick(type);
  };

  return (
    <IconContainer checked={checked} onClick={handleClick} title={title}>
      <IconSwitch type={type} />
    </IconContainer>
  );
};
