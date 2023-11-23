import React, {useMemo} from "react";

let renderCount = 0;

const Five = ({ value }) => {
  console.log(`is Five отрисовался ${++renderCount} раз`);
  const getResult = useMemo(() => {
    let i = 0;
    while (i < 600000000) i++;
    return value === 5 ? "Это ПЯТЬ" : "Это НЕ ПЯТЬ";
  },[value]);

  return <h3 className="Result">{getResult}</h3>;
};

export default Five;
