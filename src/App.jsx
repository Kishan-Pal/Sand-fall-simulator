import { useState } from "react";
import SandBox from "./SandBox";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-slate-800">
      <h1 className="text-xl text-center text-white">Sand fall simulation </h1>
      <p className="text-white">(click or drag to add sand)</p>
      <SandBox />
    </div>
  );
}

export default App;
