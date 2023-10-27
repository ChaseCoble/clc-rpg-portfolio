import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";

function App() {
  const [allItems, setAllItems] = useState({});
  useEffect(() => {
    const fetchAll = async () => {
      try{
        const response = await fetch("localhost:5000/get", {
          method: "GET",
          mode: "cors",
          cache: "no-cache"
        });
        const data = await response.json();
        setAllItems(data);
      }catch (error){
        console.log(error)
      }
    }
    fetchAll();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is merely a data reciever
        </p>
      </header>
      <p>{allItems}</p>
    </div>
  );
}

export default App;
