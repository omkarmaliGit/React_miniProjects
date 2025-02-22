import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  const colorsName = [
    "red",
    "blue",
    "green",
    "black",
    "yellow",
    "pink",
    "purple",
    "lavender",
  ];

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
        // onClick={() => setColor("")}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {colorsName.map((cName) => (
              <button
                key={cName}
                onClick={() => setColor(cName)}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: cName }}
              >
                {cName}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
