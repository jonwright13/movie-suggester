import React, { FC, useState } from "react";
import { Icon } from "../Icons/index.tsx";
import { Movie, Tv } from "../../types/apiProps.ts";
import { Name } from "../../types/interfaceProps.ts";
import { Poster, Img, Controls } from "./style.ts";
import { useApp } from "../../hooks/useAppContext.tsx";

const baseUrl = "https://image.tmdb.org/t/p/";

interface MoviePosterProps {
  movie: Movie & Tv;
  header: string;
}

const MoviePoster: FC<MoviePosterProps> = ({ movie, header }) => {
  const { handleAddRating } = useApp();
  const [show, setShow] = useState(false);

  const handleClick = (name: Name) => {
    handleAddRating(name, movie);
  };

  return (
    <Poster
      title={movie.title}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Img src={`${baseUrl}w780${movie.poster_path}`} alt="" />
      {show ? (
        <Controls className="poster-controls">
          <Icon
            type="watchlist"
            title="Add to Watchlist"
            checked={header === "watchlist"}
            onClick={handleClick}
          />
          <Icon
            type="watched"
            title="Watched"
            checked={header === "watched"}
            onClick={handleClick}
          />
          <Icon
            type="ignore"
            title="Ignore"
            checked={header === "ignore"}
            onClick={handleClick}
          />
        </Controls>
      ) : null}
    </Poster>
  );
};

export default MoviePoster;
