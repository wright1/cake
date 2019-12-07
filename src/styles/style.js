import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
  width: 100%;
  height: 100%;
}
body{
  margin: 0;
  border: 0;
  height: 100%
  width: 100%
}
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  align-items: center;
`;
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
export const Img = styled.img`
  width: 75vw;
  height: 45vh;
  margin: 5vh auto;
  position: absolute;
  transition: transform 0.5s, opacity 0.5s;
  @media only screen and (min-width: 1024px) {
    width: 20vw;
    margin: 1vw;
    position: static;
  }
`;
export const Title = styled.div`
display: flex;
flex-direction: column;
width: 80vw;
height: 25vh;
align-items: center;
justify-content: center;
font-family: 'Bebas Neue', cursive;
font-size: 2rem;
`;
export const Span = styled.span`
font-family: 'Kristi', cursive;
margin-top: -0.5rem;
`;
