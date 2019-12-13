import styled, { createGlobalStyle } from "styled-components";

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
  height: 40vh;
  margin: 5vh auto;
  position: absolute;
  transition: transform 0.8s, opacity 0.5s;
  cursor: pointer;
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
  margin-bottom: 3rem;
  align-items: center;
  justify-content: center;
  font-family: "Bebas Neue", cursive;
  font-size: 2.3rem;
  color: #340744;
`;
export const Span = styled.span`
  font-family: "Kristi", cursive;
  margin-top: -0.5rem;
`;
export const BtnContainer = styled.div`
  display: flex;
  width: 40vw;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 80vh;
`;
export const Button = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50rem;
  background: transparent;
  border: 1px solid #340744;
  outline: none;
  &:hover {
    color: #741aac;
    border: 1px solid #741aac;
  }
`;
export const Modal = styled.div`
  visibility: hidden;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: #340744;
`;
export const ModalContent = styled.div`
  margin: 15vh auto;
  padding: 5vw;
  border: 0.3px solid #340744;
  width: 80vw;
  background-color: #f7eef5;
  overflow: auto;
`;
export const ModalButton = styled.button`
  font-size: 3rem;
  background-color: #340744;
  float: right;
  border: none;
  outline: none;
  padding: 1rem;
  color: #f7eef5;
  cursor: pointer;
`;
export const ModalSpan = styled(Span)`
  font-size: 3rem;
`;
export const UL = styled.ul`
  font-family: "Open Sans";
`;
