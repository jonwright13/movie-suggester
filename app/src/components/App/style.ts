import styled from "styled-components";
import { Button } from "../../style/style";

export const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
`;

export const Header = styled.h1`
  color: white;
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-bottom: 10px;
`;

export const ChangeModeButton = styled(Button)`
  background-color: lightBlue;
`;
