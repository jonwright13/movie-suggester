import { SelectionProps } from "../../types/interfaceProps.ts";
import { Movie, Tv } from "../../types/apiProps.ts";

export interface MovieCardProps {
  title: Movie | Tv | null;
  selection: SelectionProps;
  handleGet: any;
}
