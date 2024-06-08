export type type = "movie" | "tv" | "all";
export type Quality = "low" | "medium" | "high" | "original";

export interface Endpoints {
  [key: string]: string;
}

export interface Qualities {
  low: string;
  medium: string;
  high: string;
  original: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface GenrePropsList {
  genres: Genre[];
}

export type LanguagePropsList = LanguageProps[];

export interface LanguageProps {
  english_name: string;
  name: string;
  iso_639_1: string;
}

export interface Movie {
  poster_path: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface Tv {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path: string;
  first_air_date?: string;
  name: string;
  vote_average?: number;
  vote_countr?: number;
}

export interface MovieList {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface TvList {
  page: number;
  results: Tv[];
  total_results: number;
  total_pages: number;
}
