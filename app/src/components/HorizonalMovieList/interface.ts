import { Title } from "../../types/apiProps";

export interface HorizontalMovieListProps<T extends number> {
  header: string;
  movies: T[];
  setTitle: React.Dispatch<React.SetStateAction<Title>>;
}
