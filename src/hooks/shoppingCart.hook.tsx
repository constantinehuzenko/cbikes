import { useCallback, useState } from "react";
import { Bike } from "../common/types";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<Array<Bike>>([]);

  const addBikeToCart = useCallback(
    (bike: Bike) => setShoppingCart((prevBikes) => [...prevBikes, bike]),
    []
  );

  const removeBikeFromCart = useCallback(
    (deleteId: string) =>
      setShoppingCart((prevBikes) =>
        prevBikes.filter((bike) => bike.id !== deleteId)
      ),
    []
  );
  return { shoppingCart, addBikeToCart, removeBikeFromCart };
};
