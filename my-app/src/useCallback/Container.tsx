import React, { useState } from "react";
import Count from "./Count";
import Five from "./Five";
import "./Container.css";

const Container = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (

    <div className="Container">
      <h5>Счетчик 1:</h5>
      <div className="Counter">
        <button className="Btn-count"
          onClick={() => {
            setCount1(count1 + 1);
          }}
        >
          +
        </button>

        <Count id={1} value={count1} />
      </div>

      <h5>Счетчик 2:</h5>
      <div className="Counter">
        <button className="Btn-count"
          onClick={() => {
            setCount2(count2 + 1);
          }}
        >
          +
        </button>
        <Count id={2} value={count2} />
        <Five value = {count2}/>
      </div>
    </div>
  );
};

export default Container;
