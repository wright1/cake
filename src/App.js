import React, { useState, useEffect } from "react";
import { Main, Container } from "./styles/style";
import Slide from "./components/slide";



const App = () => {
  const [items, setItems]= useState([]);
  useEffect(() => {
    const data ="https://api.myjson.com/bins/ea8gg"; 
    fetch(data)
    .then(res => res.json())
    .then(json => setItems(json));

  },[]);
  return (
    <Main>

      <Container>
        {
          items.map((item) => {
            return <Slide key={item.id} src={item.image} alt={item.name} />
          })
        }
      </Container>
    </Main>
  )
};

export default App;
