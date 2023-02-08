import React from "react";
import useCard from "../hooks/useCard";

const Card = ({ card, className }) => {
  const [cardUrl] = useCard(card);
  return <img className={"drop-shadow-lg rounded-2xl shadow-2xl " + className} src={cardUrl} alt="Card-Img" />;
};

export default Card;
