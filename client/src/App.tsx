import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [answer, setAnswer] = useState("");

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api")
    console.log(response.data.values)
  }

  useEffect(() => {
    fetchAPI()
  }, [])


  const handleYesNo = (type: string) => {
    if (type == "yes")
      setAnswer("Je n'en doutais pas une seconde, entrez je vous prie.")
    if (type == "no")
      setAnswer("Veuillez quitter ces lieux, sombre gueux.")
  }

  return (
    <div>
      <h1>Salut les nobles</h1>
      <p>Tu fais partie de la haute ?</p>
      <button onClick={() => handleYesNo("yes")}>Bien evidemment</button>
      <button onClick={() => handleYesNo("no")}>Hein ?</button>
      <p>{answer}</p>
    </div>
  );
}


export default App
