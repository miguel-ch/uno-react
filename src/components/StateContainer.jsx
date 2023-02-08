import React, { useState } from "react";

const StateContainer = ({ state }) => {
  const [barColor, setBarColor] = useState();

  return <div className="w-screen top-0 p-1 fixed text-center z-50 text-white bg-green-500">We are ready to start</div>;
};

export default StateContainer;
