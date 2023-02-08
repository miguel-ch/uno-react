import { useEffect, useState } from "react";

const useCard = (card) => {
  const [cardImg, setCardImg] = useState(null);

  useEffect(() => {
    loadCard(card);
  }, []);

  // Load a new card
  const loadCard = (card) => {
    let imgUrl = "../assets/cards";
    if (card) imgUrl += `/${card.color}/${card.value}.png`;
    else imgUrl += "/empty.png";
    setCardImg(new URL(imgUrl, import.meta.url));
  };

  return [cardImg, loadCard];
};

export default useCard;
