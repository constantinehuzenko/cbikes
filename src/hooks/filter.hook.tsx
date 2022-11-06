import { useCallback, useMemo, useState } from "react";
import { DEFAULT_MAX_PRICE } from "../common/constants";
import { Bike, Category, FilterState } from "../common/types";
import { bikesList } from "../data";

export const useFilter = () => {
  const [filterState, setFilterState] = useState<FilterState>({
    currentCategory: Category.all,
    maxPrice: DEFAULT_MAX_PRICE,
  });

  const filteredBikesList = useMemo(
    () =>
      bikesList.filter((bike) => {
        const price = bike.price <= filterState.maxPrice;
        const type =
          bike.category === filterState.currentCategory ||
          filterState.currentCategory === "all";

        if (price && type) {
          return bike;
        }
      }),
    [filterState.currentCategory, filterState.maxPrice]
  );

  const handleCurrentCategory = useCallback(
    (categoryId: string) =>
      setFilterState((prev) => ({ ...prev, currentCategory: categoryId })),
    []
  );

  const handleMaxPrice = useCallback(
    (maxPrice: string) =>
      setFilterState((prev) => ({ ...prev, maxPrice: Number(maxPrice) })),
    []
  );

  return {
    filterState,
    filteredBikesList,
    handleCurrentCategory,
    handleMaxPrice,
  };
};
