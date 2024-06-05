import styled from "styled-components";

export const IconContainer = styled.div<{
  checked: boolean;
}>`
  display: flex;
  align-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  transition: 0.1s;
  outline: ${(props) => (props.checked ? "2px solid green" : "none")};

  /* Hover state */
  &:hover {
    background-color: rgba(1, 179, 179, 0.712);
    cursor: pointer;
  }

  /* Active state */
  &:active {
    filter: brightness(75%);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
