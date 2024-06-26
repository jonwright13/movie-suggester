import React, { FC } from "react";
import StarRating from "../StarRating/index";
import { usePrefs } from "../../hooks/usePrefs";
import { Icon } from "../Icons/index";
import { Quality, Qualities, Movie, Tv } from "../../types/apiProps";
import { Name } from "../../types/interfaceProps";
import { MovieCardProps } from "./interface";
import {
  Card,
  Container,
  Title,
  Released,
  Description,
  ButtonsContainer,
  Poster,
} from "./style";

const baseUrl: string = "https://image.tmdb.org/t/p/";

const getUrl = (
  path: string,
  quality: Quality,
  qualities: Qualities
): string => {
  if (!path) return "";
  return `${baseUrl}${qualities[quality]}${path}`;
};

const getBackdropUrl = (path: string, quality: Quality = "medium"): string => {
  return getUrl(path, quality, {
    low: "w300",
    medium: "w780",
    high: "w1280",
    original: "original",
  });
};

const MovieCard: FC<MovieCardProps> = ({
  title,
  selection,
  handleGet = false,
}) => {
  const { storedValue, handleAddRating } = usePrefs();

  if (title !== null) {
    const handleRating = (name: Name) => {
      handleAddRating(name, title);
      if (handleGet) handleGet();
    };

    const prefs = {
      watched: title ? storedValue.watched.includes(title.id) : false,
      watchlist: title ? storedValue.watchlist.includes(title.id) : false,
      ignore: title ? storedValue.ignore.includes(title.id) : false,
    };

    const heading: string | undefined =
      selection.type === "movie" ? (title as Movie).title : (title as Tv).name;

    const released: string | undefined =
      selection.type === "movie"
        ? (title as Movie).release_date
        : (title as Tv).first_air_date;

    return (
      <Card>
        <Poster src={`${getBackdropUrl(title.poster_path)}`} alt="" />
        <Container>
          <Title>{heading}</Title>
          <StarRating value={title.vote_average} />
          <Released>Released: {released}</Released>
          <Description>{title.overview}</Description>
          <ButtonsContainer>
            <Icon
              type="watchlist"
              title="Add to Watchlist"
              checked={prefs.watchlist}
              onClick={handleRating}
            />
            <Icon
              type="watched"
              title="Watched"
              checked={prefs.watched}
              onClick={handleRating}
            />
            <Icon
              type="ignore"
              title="Ignore"
              checked={prefs.ignore}
              onClick={handleRating}
            />
          </ButtonsContainer>
        </Container>
      </Card>
    );
  } else {
    return (
      <Card>
        <Title>No Film Found</Title>
      </Card>
    );
  }
};

export default MovieCard;
