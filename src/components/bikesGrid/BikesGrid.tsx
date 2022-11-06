import { Bike } from "../../common/types";
import { uuid } from "../../utils/uuid";
import {
  StyledBottomOfBikeCard,
  StyledBikesGrid,
  StyledBikeCard,
  StyledBikeImage,
} from "./BikesGrid.style";
import { IMG_PATH } from "../../common/constants";
import { memo } from "react";

interface IProps {
  filteredBikesList: Array<Bike>;
  addBikeToCart: (bike: Bike) => void;
}
interface IGridItemProps {
  bike: Bike;
  addBikeToCart: (bike: Bike) => void;
}

const GridItem = memo(({ bike, addBikeToCart }: IGridItemProps) => (
  <StyledBikeCard key={bike.id}>
    <StyledBikeImage>
      <img src={`${IMG_PATH}${bike.imgSrc}`} alt="" />
    </StyledBikeImage>

    <StyledBottomOfBikeCard>
      <h3>{bike.name}</h3>
      <button onClick={() => addBikeToCart({ ...bike, id: uuid() })}>+</button>
      <span>{bike.price}$</span>
    </StyledBottomOfBikeCard>
  </StyledBikeCard>
));

export const BikesGrid = memo(
  ({ filteredBikesList, addBikeToCart }: IProps) => (
    <StyledBikesGrid>
      {filteredBikesList.map((bike) => (
        <GridItem key={bike.id} bike={bike} addBikeToCart={addBikeToCart} />
      ))}
    </StyledBikesGrid>
  )
);
