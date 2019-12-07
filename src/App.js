import React, { useState, useEffect, useRef } from "react";
import {
  Main,
  Container,
  GlobalStyle,
  Button,
  BtnContainer
} from "./styles/style";
import Slide from "./components/slide";
import Header from "./components/header";

const App = () => {
  const [items, setItems] = useState([]);
  // this varible keeps a reference of which image we are seeing
  const slideRef = useRef(8);
  useEffect(() => {
    const data = "https://api.myjson.com/bins/ea8gg";
    fetch(data)
      .then(res => res.json())
      .then(json => setItems(json));
  }, []);
  const handleRightClick = e => {
    if( slideRef.current === 0) return;
    // this give me a node list of all the images - first image is last on list
    const imgList = e.target.parentNode.previousSibling.childNodes[slideRef.current];
    console.log(slideRef)
    imgList.style.transform = `translateX(${700}px)`;
    slideRef.current--;
  };
  const handleLeftClick = e => {
    if(slideRef.current === 8) return;
    slideRef.current++;
    const imgList = e.target.parentNode.previousSibling.childNodes[slideRef.current];
    imgList.style.transform = `translateX(${-0.5}px)`;
    
    
  }

  return (
    <>
      <GlobalStyle />
      <Main>
        <Header />
        <Container>
          {items.map(item => {
            return <Slide key={item.id} src={item.image} alt={item.name} />;
          })}
        </Container>
        <BtnContainer>
          <Button onClick={handleLeftClick}>&#10094;</Button>
          <Button onClick={handleRightClick}>&#10095;</Button>
        </BtnContainer>
      </Main>
    </>
  );
};

export default App;
