import React, { FC, useEffect } from "react";

import "./App.css";
import { useActions } from "./hooks/useActions";
import { useAppSelector } from "./hooks/useAppSelector";


const App: FC = () => {
 const {data} = useAppSelector(state => state.coins)
  const {loadData} =useActions()
  useEffect(()=>{loadData()},[])
  
  return <div className="app">app</div>;
};

export default App;
