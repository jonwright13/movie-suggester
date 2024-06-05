import React, { FC } from "react";
import { IconContainer } from "./style.ts";
import { IconProps } from "./interface.ts";
import IconSwitch from "./IconSwitch.tsx";

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
