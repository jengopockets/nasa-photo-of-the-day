import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from 'axios';
import "./App.css";
const Image = styled.img``

function App() {
  const [data, setData]= useState("");

  useEffect(() => {
      axios
      .get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
      .then(res => setData(res.data));
      
   
  }, []);
  return (
    <>
     <Image src={data.url} alt="image of the day"/>
    </>
  );
}

export default App;
