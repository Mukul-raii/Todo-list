import { useState } from "react";

import Todos from "./assets/components/Todo/Todos";
import "./App.css";

function App() {
  return (
    <>
      <h1 className=" text-black text-center font-bold flex flex-row siz-50 justify-center m-5  text-7xl text-gray-500 ">
        Todo
      </h1>
      <Todos/>

    </>
  );
}

export default App;
