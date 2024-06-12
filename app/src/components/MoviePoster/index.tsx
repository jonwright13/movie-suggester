import React, { FC, useState } from "react";
import { Icon } from "../Icons/index";
import { Movie, Tv, Title } from "../../types/apiProps";
import { Name } from "../../types/interfaceProps";
import { Poster, Img, Controls } from "./style";
import { useApp } from "../../hooks/useAppContext";

const baseUrl = "https://image.tmdb.org/t/p/";

interface MoviePosterProps {
  movie: Movie & Tv;
  header: string;
  setTitle: React.Dispatch<React.SetStateAction<Title>>;
}

const MoviePoster: FC<MoviePosterProps> = ({ movie, header, setTitle }) => {
  const { handleAddRating } = useApp();
  const [show, setShow] = useState(false);

  const handleClick = (name: Name) => {
    handleAddRating(name, movie);
  };

  const handleSelect = () => {
    setTitle(movie);
  };

  return (
    <Poster
      title={movie.title}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Img
        src={`${baseUrl}w780${movie.poster_path}`}
        alt=""
        onClick={handleSelect}
      />
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
