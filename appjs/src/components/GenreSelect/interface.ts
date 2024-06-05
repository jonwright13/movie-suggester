import { ChangeEvent } from "react";
import { SelectionProps, DropdownsProps } from "../../types/interfaceProps.ts";

export default interface GenreSwitchSelectProps {
  selection: SelectionProps;
  dropdowns: DropdownsProps;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
