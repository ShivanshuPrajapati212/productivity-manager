import * as React from "react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-zinc-900">
      <div className="bg-zinc-900 h-screen flex flex-col container mx-auto">
        <div className="my-5 mx-4">
        <NavBar />
        </div>
      </div>
    </div>
  );
}

export default App;
