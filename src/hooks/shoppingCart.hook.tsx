import { useState } from "react";
import { Bike } from "../common/types";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<Array<Bike>>([]);

  const addBikeToCart = (bike: Bike) =>
    setShoppingCart((prev) => [...prev, bike]);
  const removeBikeFromCart = (deleteId: string) =>
    setShoppingCart((prevBikes) =>
      prevBikes.filter((bike) => bike.id !== deleteId)
    );

  return { shoppingCart, addBikeToCart, removeBikeFromCart };
};
