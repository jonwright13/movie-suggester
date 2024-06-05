import styled from "styled-components";
import { ChangeEvent } from "react";
import { type } from "../types/apiProps.ts";

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 2px 2px 2px black;

  &&&:hover {
    filter: brightness(80%);
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 10vw;
`;

export const Label = styled.label`
  color: white;
  text-align: center;
  font-size: 30px;
`;

export const Select = styled.select<{
  placeholder: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}>`
  padding: 4px 10px;
  border: none;
  border-radius: 4px;
  text-transform: capitalize;
`;

export const Option = styled.option<{
  value: type | number | string;
}>`
  text-transform: capitalize;
  transform: 1s;
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
`;
