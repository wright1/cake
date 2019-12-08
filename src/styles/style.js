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
    width: 66vw;
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
  transition: transform 0.8s, opacity 0.5s;
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
font-size: 2.3rem;
color: #340744;
`;
export const Span = styled.span`
font-family: 'Kristi', cursive;
margin-top: -0.5rem;
`;
export const BtnContainer = styled.div`
display: flex;
width: 40vw;
justify-content: space-between;
position: fixed;
top: 80vh;
`;
export const Button = styled.button`
width: 3rem;
height: 3rem;
border-radius: 50rem;
background: transparent;
border: 0.5px solid grey;
outline: none;
&:hover{
  color: #741AAC;
}
`;
