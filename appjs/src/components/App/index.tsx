import React, { useState, FC } from "react";
import Preferences from "../Preferences/index.tsx";
import { Mode } from "../../types/interfaceProps.ts";
import Suggester from "../Suggester/index.tsx";
import {
  AppHeader,
  Header,
  ControlsContainer,
  ChangeModeButton,
} from "./style.ts";

const App: FC = () => {
  const [mode, setMode] = useState<Mode>("suggester");

  const handleModeChange = () => {
    setMode((prev) => {
      if (prev === "suggester") {
        return "preferences";
      } else {
        return "suggester";
      }
    });
  };

  return (
    <AppHeader>
      <Header>Movie Suggester</Header>

      <ControlsContainer className="options-container">
        <ChangeModeButton onClick={handleModeChange}>
          {mode === "suggester" ? "View Preferences" : "Get Suggestions"}
        </ChangeModeButton>
      </ControlsContainer>

      {mode === "suggester" ? <Suggester mode={mode} /> : <Preferences />}
    </AppHeader>
  );
};

export default App;
