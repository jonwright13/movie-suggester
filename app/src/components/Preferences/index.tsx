import React, { useState } from "react";
import HorizonalMovieList from "../HorizonalMovieList/index";
import { Container, PopoverContainer, PopoverContent } from "./style";
import { Title } from "../../types/apiProps";
import { Name } from "../../types/interfaceProps";
import { useApp } from "../../hooks/useAppContext";
import MovieCard from "../MovieCard";

const Preferences = () => {
  const { storedValue, selection } = useApp();
  const [title, setTitle] = useState<Title>(null);

  const keys: string[] = ["watchlist", "watched", "ignore"];

  const handleClickAway = () => {
    setTitle(null);
  };

  const isVisible = title !== null;

  console.log(storedValue);

  if (storedValue) {
    return (
      <Container>
        {keys.map((key: string) => (
          <HorizonalMovieList
            key={key}
            header={key}
            movies={storedValue[key as Name]}
            setTitle={setTitle}
          />
        ))}
        {
          <PopoverContainer isVisible={isVisible} onClick={handleClickAway}>
            <PopoverContent isVisible={isVisible}>
              <MovieCard
                title={title}
                selection={selection}
                handleGet={false}
              />
            </PopoverContent>
          </PopoverContainer>
        }
      </Container>
    );
  } else {
    return <Container>Add some movies to your lists first.</Container>;
  }
};

export default Preferences;
