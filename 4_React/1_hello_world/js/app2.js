import React from "react";
import ReactDOM from "react-dom";

const droids = ["C3-PO", "c3-po", "R2-D2", "r2-d2"];

function DroidList(props) {
  const droids = props.droids;
  return (
    <ul>
      {droids.map((droid) => (
        <li key={droid}>{droid}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(<DroidList droids={droids} />, document.getElementById("app"));
