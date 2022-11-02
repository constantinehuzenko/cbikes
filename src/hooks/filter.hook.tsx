import { useState } from "react";
import { DEFAULT_MAX_PRICE } from "../common/constants";
import { Category, FilterState } from "../common/types";
import { bikesList } from "../data";

export const useFilter = () => {
  const [filterState, setFilterState] = useState<FilterState>({
    currentCategory: Category.all,
    maxPrice: DEFAULT_MAX_PRICE,
  });

  const filteredBikesList = bikesList.filter((bike) => {
    const price = bike.price <= filterState.maxPrice;
    const type =
      bike.category === filterState.currentCategory ||
      filterState.currentCategory === "all";

    if (price && type) {
      return bike;
    }
  });

  const handleCurrentCategory = (categoryId: string) =>
    setFilterState((prev) => ({ ...prev, currentCategory: categoryId }));

  const handleMaxPrice = (maxPrice: string) =>
    setFilterState((prev) => ({ ...prev, maxPrice: Number(maxPrice) }));

  return { filterState, filteredBikesList, handleCurrentCategory, handleMaxPrice };
};
