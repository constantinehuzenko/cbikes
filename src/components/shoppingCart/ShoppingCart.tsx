import { IMG_PATH } from "../../common/constants";
import { Bike } from "../../common/types";
import {
  StyledCartImg,
  StyledCartItem,
  StyledDeleteButton,
  StyledOrderButton,
  StyledScrollingList,
  StyledShoppingCart,
  StyledTitle,
} from "./ShoppingCart.style";

interface IProps {
  shoppingCart: Array<Bike>;
  removeBikeFromCart: (removeId: string) => void;
}

const getOrderSum = (cart: Array<Bike>) =>
  cart.reduce((acc, el) => acc + el.price, 0);

export const ShoppingCart = ({ shoppingCart, removeBikeFromCart }: IProps) => {
  if (!shoppingCart.length) {
    return null;
  }

  return (
    <StyledShoppingCart>
      <StyledScrollingList>
        {shoppingCart.map((bike) => (
          <StyledCartItem key={bike.id}>
            <StyledTitle>
              <h5>{bike.name}</h5>
              <span>{bike.price}$</span>
              <StyledDeleteButton onClick={() => removeBikeFromCart(bike.id)}>
                X
              </StyledDeleteButton>
            </StyledTitle>

            <StyledCartImg>
              <img src={`${IMG_PATH}${bike.imgSrc}`} alt="" />
            </StyledCartImg>
          </StyledCartItem>
        ))}
      </StyledScrollingList>

      <StyledOrderButton>ORDER {getOrderSum(shoppingCart)}$</StyledOrderButton>
    </StyledShoppingCart>
  );
};
