import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  width: 30vw;
  padding: 20px;
  border: 1px solid #282c34;
  background-color: white;
  border-radius: 12px;
  box-shadow: 5px 5px 5px black;
`;

export const Container = styled.div`
  position: relative;
`;

export const Title = styled.h3`
  color: #282c34;
  font-size: 24px;
  margin-bottom: 6px;
`;

export const Released = styled.h4`
  color: #282c34;
  font-weight: normal;
  font-size: 14px;
  margin: 0px 0px;
`;

export const Description = styled.p`
  font-size: 15px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 5px;
  bottom: 0;
  flex-direction: row;
  gap: 20px;
`;

export const Poster = styled.img<{
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
