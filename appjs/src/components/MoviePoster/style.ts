import styled from "styled-components";

export const Poster = styled.div<{
  title: string;
}>`
  position: relative;
`;

export const Img = styled.img<{
  src: string;
  alt: string;
}>`
  height: 250px;
  margin-right: 20px;
  width: 200px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #282c34;
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  position: absolute;
  z-index: 10;
  bottom: 0;
  margin-bottom: 20px;
  margin-left: 40px;
  color: white;
`;
