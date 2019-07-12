import React, {useState, useEffect} from "react";
import axios from 'axios';
import Card from './components/nasaCard'
import "./App.css";

function App() {
  const [data, setData]= useState("");

  useEffect(() => {
      axios
      .get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
      .then(res => setData(res.data));
      
   
  }, []);
  return (
    <>
     <Card data={data} />
    </>
  );
}

export default App;
