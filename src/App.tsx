import { Header } from "./components/header/Header";
import { Filter } from "./components/filter/Filter";
import { BikesGrid } from "./components/bikesGrid/BikesGrid";
import { CategoryButtonsGroup } from "./components/categoryButtonsGroup/CategoryButtonsGroup";
import { PriceControl } from "./components/priceControl/PriceControl";
import { ShoppingCart } from "./components/shoppingCart/ShoppingCart";
import { useFilter } from "./hooks/filter.hook";
import { useShoppingCart } from "./hooks/shoppingCart.hook";
import { WEB_APP_NAME } from "./common/constants";

export const App = () => {
  const {
    filterState: { currentCategory, maxPrice },
    filteredBikesList,
    handleCurrentCategory,
    handleMaxPrice,
  } = useFilter();
  const { shoppingCart, addBikeToCart, removeBikeFromCart } = useShoppingCart();

  return (
    <>
      <Header title={WEB_APP_NAME} />
      <Filter>
        <CategoryButtonsGroup
          currentCategory={currentCategory}
          handleCurrentCategory={handleCurrentCategory}
        />
        <PriceControl maxPrice={maxPrice} handleMaxPrice={handleMaxPrice} />
      </Filter>
      <BikesGrid
        filteredBikesList={filteredBikesList}
        addBikeToCart={addBikeToCart}
      />
      <ShoppingCart shoppingCart={shoppingCart} removeBikeFromCart={removeBikeFromCart} />
    </>
  );
};
