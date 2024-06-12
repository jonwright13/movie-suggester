import React, { useEffect, useState } from "react";
import HorizontalScroll from "../HorizontalScroll/index";
import MoviePoster from "../MoviePoster/index";
import { Column, Title, Content, List } from "./style";
import { HorizontalMovieListProps } from "./interface";
import fetchDetails from "../../api/fetchById";
import { useApp } from "../../hooks/useAppContext";

const HorizonalMovieList = <T extends number>({
  header,
  movies,
  setTitle,
}: HorizontalMovieListProps<T>) => {
  const { token } = useApp();
  const [page, setPage] = useState<number>(1);
  const [titles, setTitles] = useState<any[]>([]);

  const getTitles = async () => {
    const start = Math.max((page - 3) * 2, 0);
    const end = Math.min(page * 3, movies.length);
    const movieList: T[] = [...movies].reverse();

    const result = await Promise.all(
      movieList.map(async (item, index) => {
        const id = item;
        let data: any;
        if (item !== null) {
          if (index >= start && index <= end) {
            data = await fetchDetails(token, id);
          } else {
            data = { id: item, poster_path: "" };
          }
          return (
            <MoviePoster
              key={index}
              movie={data}
              header={header}
              setTitle={setTitle}
            />
          );
        }
      })
    );

    setTitles(result);
  };

  useEffect(() => {
    getTitles();
    // eslint-disable-next-line
  }, [page, movies]);

  return (
    <Column>
      <Content>
        <Title>{header}</Title>
      </Content>

      <HorizontalScroll setPage={setPage}>
        <List>{titles}</List>
      </HorizontalScroll>
    </Column>
  );
};

export default HorizonalMovieList;
