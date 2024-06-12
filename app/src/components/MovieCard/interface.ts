import { SelectionProps } from "../../types/interfaceProps";
import { Title } from "../../types/apiProps";

export interface MovieCardProps {
  title: Title;
  selection: SelectionProps;
  handleGet: any;
}
