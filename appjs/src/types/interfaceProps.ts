import { ReactNode } from "react";
import { type } from "./apiProps";
import { Genre, LanguageProps, Movie, Tv } from "./apiProps";

export interface SelectionProps {
  type: type;
  genre: string;
  language: string;
}

export interface DropdownsProps {
  type?: type[];
  genresAll: Genre[];
  genresMovie: Genre[];
  genresTv: Genre[];
  languages: LanguageProps[];
}

export interface Preferences {
  watchlist: number[];
  watched: number[];
  ignore: number[];
}

export interface AppContextProps {
  token: Token | null;
  key: Token | null;
  storedValue: Preferences;
  handleAddRating: (name: Name, item: Movie | Tv) => void;
  dropdowns: DropdownsProps;
}

export interface AppContextProviderProps {
  children: ReactNode;
}

export type Token = string | undefined;

export type API_KEY = string | undefined;

export type Name = keyof Preferences;

export type Mode = "suggester" | "preferences";
