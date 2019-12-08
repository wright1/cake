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
  const count = useRef(1);
  let width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  useEffect(() => {
    const data = "https://api.myjson.com/bins/ea8gg";
    fetch(data)
      .then(res => res.json())
      .then(json => setItems(json));
  }, []);
  const handleRightClick = e => {
    console.log(width)
    //mobile view
    const imgList = e.target.parentNode.previousSibling.childNodes
    if (width < 1025){
    if( slideRef.current === 0) return;
    // this give me a node list of all the images - first image is last on list
    ;
    console.log(slideRef)
    imgList[slideRef.current].style.transform = `translateX(${700}px)`;
    slideRef.current--;
    } else {
      //console.log(count.current);
      if(count.current === 7) return;
      let current = imgList[count.current];
      let added = count.current +2;
      // the center image is always showing
      current.style.display = "initial";
      // as we move forward remove the very first image
      if (count.current > 1) imgList[count.current - 2].style.display = "none";
      // remove left image
      imgList[count.current - 1].style.display = "none";
      imgList[count.current + 1].style.display = "initial";
      // add new image
      imgList[added].style.display = "initial"
      count.current+= 2;
    }
  };
  const handleLeftClick = e => {
    // mobile view
    const imgList = e.target.parentNode.previousSibling.childNodes
    if(width < 1025){
    if(slideRef.current === 8) return;
    slideRef.current++;
    imgList[slideRef.current].style.transform = `translateX(${-0.5}px)`;
    } else {
      count.current -= 2;
      if(count.current < 1) count.current = 1;
      const current = imgList[count.current];
    
      console.log(count.current, imgList)
      imgList[count.current-1].style.display = "initial";
      current.style.display = "initial";
      imgList[count.current +1].style.display = "initial"; 
    }
    
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
