import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./base";
import { Token, SelectionProps, Preferences } from "../types/interfaceProps";
import { Movie, Tv, MovieList, TvList } from "../types/apiProps";

interface Endpoints {
  all: string;
  movie: string;
  tv: string;
}

const endpoints: Endpoints = {
  all: "/discover/movie",
  movie: "/discover/movie",
  tv: "/discover/tv",
};

const getRandNum = (low: number, high: number): number => {
  return Math.max(low, Math.round(Math.random() * high));
};

const getRandIndex = (res: MovieList | TvList): number => {
  const rand: number = getRandNum(1, 20);
  const fixer: number = Math.min(rand, res.results.length - 1);
  return fixer;
};

let fetchCounter = 0;
let pageMax = 500;

const fetchDiscover = async (
  token: Token | null,
  selection: SelectionProps,
  prefs: Preferences
) => {
  const handleFetch = async (): Promise<MovieList | TvList> => {
    const params = {
      page: getRandNum(1, pageMax).toString(),
      with_genres: selection.genre === "all" ? "" : [selection.genre],
      with_original_language:
        selection.language === "all" ? "" : selection.language,
    };
    const query: AxiosRequestConfig = {
      method: "GET",
      url: `${BASE_URL}${endpoints[selection.type]}`,
      params: params,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    return await axios
      .request(query)
      .then((res) => {
        // console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        // console.log("Error", err);
        return [];
      });
  };

  const getTitle = (res: MovieList | TvList, allIds: number[]): Movie | Tv => {
    const title: Movie | Tv | null = res
      ? res.results[getRandIndex(res)]
      : null;

    if (title !== null) {
      if (title.id !== undefined && allIds.includes(title.id)) {
        return getTitle(res, allIds);
      }

      return title;
    } else {
      return getTitle(res, allIds);
    }
  };

  const allIds = Object.values(prefs).flat();

  let res = await handleFetch();

  if (res.results.length === 0) {
    if (fetchCounter < 30) {
      // console.log("New Discover Call", fetchCounter);
      fetchCounter += 1;
      pageMax = res.total_pages;
      setTimeout(() => {
        fetchDiscover(token, selection, prefs);
      }, 500);
    } else {
      throw new Error("No suggestions found. Please try again...");
    }
  } else {
    const title = getTitle(res, allIds);

    return title;
  }
};

export default fetchDiscover;
