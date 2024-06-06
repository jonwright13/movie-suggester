import React from "react";
import HorizonalMovieList from "../HorizonalMovieList/index";
import { Container } from "./style";
import { Name } from "../../types/interfaceProps";
import { useApp } from "../../hooks/useAppContext";

const Preferences = () => {
  const { storedValue } = useApp();

  const keys: string[] = ["watchlist", "watched", "ignore"];

  if (storedValue) {
    return (
      <Container>
        {keys.map((key: string) => (
          <HorizonalMovieList
            key={key}
            header={key}
            movies={storedValue[key as Name]}
          />
        ))}
      </Container>
    );
  } else {
    return <Container>Add some movies to your lists first.</Container>;
  }
};

export default Preferences;
