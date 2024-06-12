import React, { useState, ChangeEvent, FC } from "react";
import GenreSwitchSelect from "../GenreSelect/index";
import MovieCard from "../MovieCard/index";
import fetchDiscover from "../../api/fetchDiscover";
import { useApp } from "../../hooks/useAppContext";
import { Mode } from "../../types/interfaceProps";
import { Movie, Tv } from "../../types/apiProps";
import {
  SuggesterContainer,
  GetSuggestionsButton,
  ButtonContainer,
  Errors,
} from "./style";
import {
  DropdownContainer,
  SelectContainer,
  Select,
  Label,
  Option,
} from "../../style/style";

const Suggester: FC<{ mode: Mode }> = ({ mode }) => {
  const { token, storedValue, dropdowns, selection, setSelection } = useApp();

  const [title, setTitle] = useState<Movie | Tv | null | undefined>(null);
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelection((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGet = async () => {
    setTitle((prev) => {
      setError("");
      return null;
    });

    await fetchDiscover(token, selection, storedValue)
      .then((data) => setTitle(data))
      .catch((error) => setError(error));
  };

  return (
    <SuggesterContainer>
      <DropdownContainer>
        <SelectContainer>
          <Label>Type</Label>
          <Select placeholder="all" name="type" onChange={handleChange}>
            <Option value={selection.type} disabled hidden>
              {selection.type}
            </Option>
            {dropdowns.type?.map((item, index) => (
              <Option key={index} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </SelectContainer>
        <GenreSwitchSelect
          selection={selection}
          dropdowns={dropdowns}
          handleChange={handleChange}
        />
        <SelectContainer>
          <Label>Langauge</Label>
          <Select
            placeholder="Select Language"
            name="language"
            onChange={handleChange}
          >
            <Option value={selection.language} disabled hidden>
              {selection.language}
            </Option>
            {dropdowns.languages.map((item, index) => (
              <Option key={index} value={item.iso_639_1}>
                {item.english_name}
              </Option>
            ))}
          </Select>
        </SelectContainer>
      </DropdownContainer>
      {mode === "suggester" && title ? (
        <MovieCard title={title} selection={selection} handleGet={handleGet} />
      ) : null}
      {error !== "" ? <Errors>{error}</Errors> : null}
      <ButtonContainer>
        <GetSuggestionsButton onClick={handleGet}>
          Get Suggestion
        </GetSuggestionsButton>
      </ButtonContainer>
    </SuggesterContainer>
  );
};

export default Suggester;
