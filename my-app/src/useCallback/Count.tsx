import React from "react";

const render = {
  count1: 0,
  count2: 0,
};

const Count = ({ id, value }) => {
  console.log(`Count ${id} отрисовался: ${++render[`count${id}`]}`);

  return (
    <div>
      <span>{value}</span>
    </div>
  );
};

export default Count;
