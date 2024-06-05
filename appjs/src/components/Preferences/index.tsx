import React, { FC } from "react";
import HorizonalMovieList from "../HorizonalMovieList/index.tsx";
import { Container } from "./style.ts";
import { Name } from "../../types/interfaceProps.ts";
import { useApp } from "../../hooks/useAppContext.tsx";

const Preferences: FC = () => {
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
  }
};

export default Preferences;
