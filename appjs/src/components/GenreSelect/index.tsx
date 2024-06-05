import React, { FC } from "react";
import GenreSwitchSelectProps from "./interface.ts";
import Dropdown from "../Dropdown/index.tsx";

const GenreSwitchSelect: FC<GenreSwitchSelectProps> = ({
  selection,
  dropdowns,
  handleChange,
}) => {
  let options: any[];
  switch (selection.type) {
    case "all":
      options = dropdowns.genresAll;
      break;
    case "movie":
      options = dropdowns.genresMovie;
      break;
    case "tv":
      options = dropdowns.genresTv;
      break;
    default:
      options = dropdowns.genresAll;
      break;
  }

  return (
    <Dropdown
      label="Genre"
      placeholder="Select Genre"
      name="genre"
      options={options}
      defaultOptionText={selection.genre}
      defaultOptionValue={selection.type}
      onChange={handleChange}
    />
  );
};

export default GenreSwitchSelect;
