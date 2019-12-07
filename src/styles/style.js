import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 0.2rem;
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    width: 67vw;
    height: 35vh;
    margin: auto;
    overflow: hidden; 
  }
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;
export const Img = styled.img`
  width: 75vw;
  height: auto;
  margin: 5vh auto;
  position: absolute;
  transition: transform 0.5s, opacity 0.5s;
  @media only screen and (min-width: 1024px) {
    width: 20vw;
    margin: 1vw;
    position: static;
  }
`;
