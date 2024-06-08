import { SelectionProps } from "../../types/interfaceProps";
import { Movie, Tv } from "../../types/apiProps";

export interface MovieCardProps {
  title: Movie | Tv | null;
  selection: SelectionProps;
  handleGet: any;
}
