import React from "react";

const ShinyEffect = ({ left, right, top, size = 500 }) => {
  const positionStyle = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: `-1`,
  };

//   if(left !== undefined){
//     positionStyle.left
//   }
  return <div>ShinyEffect</div>;
};

export default ShinyEffect;
