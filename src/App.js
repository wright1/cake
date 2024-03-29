import React, { useState, useEffect, useRef } from "react";
import {
  Main,
  Container,
  GlobalStyle,
  Button,
  BtnContainer,
  UL
} from "./styles/style";
import Slide from "./components/slide";
import Header from "./components/header";
import FullModal from "./components/modal";

const App = () => {
  const [items, setItems] = useState([]);
  const [recipeObj, setRecipeObj] = useState([]);
  const [name, setName] = useState("");
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
    //mobile view
    const imgList = e.target.parentNode.previousSibling.childNodes;
    if (width < 1025) {
      if (slideRef.current === 0) return;
      // this give me a node list of all the images - first image is last on list
      imgList[slideRef.current].style.transform = `translateX(${700}px)`;
      slideRef.current--;
    } else {
      if (count.current === 7) return;
      let current = imgList[count.current];
      let added = count.current + 2;
      // the center image is always showing
      current.style.display = "initial";
      // as we move forward remove the very first image
      if (count.current > 1) imgList[count.current - 2].style.display = "none";
      // remove left image
      imgList[count.current - 1].style.display = "none";
      imgList[count.current + 1].style.display = "initial";
      // add new image
      imgList[added].style.display = "initial";
      count.current += 2;
    }
  };
  const handleLeftClick = e => {
    // mobile view
    const imgList = e.target.parentNode.previousSibling.childNodes;
    if (width < 1025) {
      if (slideRef.current === 8) return;
      slideRef.current++;
      imgList[slideRef.current].style.transform = `translateX(${-0.5}px)`;
    } else {
      // fullwidth view
      count.current -= 2;
      if (count.current < 1) count.current = 1;
      const current = imgList[count.current];

      imgList[count.current - 1].style.display = "initial";
      current.style.display = "initial";
      imgList[count.current + 1].style.display = "initial";
    }
  };
  const recipe = e => {
    // filter the correct recipe object
    const dessert = items.filter(item => {
      return e.target.alt === item.name;
    });
    // set the object into state
    setRecipeObj(dessert);
    setName(e.target.alt);
    // popUp modal
    const modal = e.target.parentNode.parentNode.firstChild;
    modal.style.visibility = "visible";
  };
  const closeModal = e => {
    e.target.parentNode.style.visibility = "hidden";
  };
  return (
    <>
      <GlobalStyle />
      <Main>
        <FullModal
          onClick={closeModal}
          title={name}
          ingredient={recipeObj.map(item => {
            return item.ingredients.map((ingredient, i) => {
              return <UL key={`${new Date().getTime}${i}`}>{ingredient}</UL>;
            });
          })}
          method={recipeObj.map(item => {
            return item.method.map((step, i) => {
              return <UL key={`${new Date().getTime}${i}`}>{step}</UL>;
            });
          })}
        />
        <Header />
        <Container>
          {items.map(item => {
            return (
              <Slide
                key={item.id}
                src={item.image}
                alt={item.name}
                onClick={recipe}
              />
            );
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
