import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");

  function handleColorChange(newchildColor){
    const newColor = getRandomColor()
    setColor(newColor)
    const childColor = getRandomColor()
    setChildrenColor(childColor)
    console.log(newColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleColorChange}/>
      <Child color={childrenColor} onChangeColor={handleColorChange}/>
    </div>
  );
}

export default Parent;
