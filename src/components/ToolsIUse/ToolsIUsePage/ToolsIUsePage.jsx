import { useState, useEffect } from "react";
import RunningTextLine from "../RunningTextLine/RunningTextLine";
import { useInView } from "react-intersection-observer";

function ToolsIUsePage() {
  const [lineData, setLineData] = useState([]);

  useEffect(() => {
    import("../../../data/runningLines.json")
      .then(({ lines }) => {
        // Set the projects data.
        setLineData(lines);
      })
      .catch((err) => {
        console.error("Failed to load projects data: ", err);
      });
  }, []);

  return (
    <div className="w-full h-screen bg-main-800">
     {lineData.map((line) => (
        <RunningTextLine key={line.id} data={line} />
      ))}
    </div>
  );
}

export default ToolsIUsePage;
