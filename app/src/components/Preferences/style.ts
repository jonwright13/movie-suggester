import styled from "styled-components";

export const Container = styled.div`
  border: none;
  width: 38vw;

  @media only screen and (max-device-width: 1024px) {
    width: 80vw;
  }
`;

export const PopoverContent = styled.div<{
  isVisible: Boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Adding a subtle shadow for depth. */
  transform: translate(50%, 100%);
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
`;

export const PopoverContainer = styled.div<{
  isVisible: Boolean;
}>`
  position: fixed;
  background-color: ${(props) =>
    props.isVisible ? "rgba(0, 0, 0, 0.5)" : "transparent"};
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  top: 0;
  left: 0;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  transition: all ease 300ms;
`;
