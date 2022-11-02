import { Bike } from "../../common/types";
import { uuid } from "../../utils/uuid";
import {
  StyledBottomOfBikeCard,
  StyledBikesGrid,
  StyledBikeCard,
  StyledBikeImage,
} from "./BikesGrid.style";
import { IMG_PATH } from "../../common/constants";

interface IProps {
  filteredBikesList: Array<Bike>;
  addBikeToCart: (bike: Bike) => void;
}

export const BikesGrid = ({ filteredBikesList, addBikeToCart }: IProps) => (
  <StyledBikesGrid>
    {filteredBikesList.map((bike) => (
      <StyledBikeCard key={bike.id}>
        <StyledBikeImage>
          <img src={`${IMG_PATH}${bike.imgSrc}`} alt="" />
        </StyledBikeImage>

        <StyledBottomOfBikeCard>
          <h3>{bike.name}</h3>
          <button onClick={() => addBikeToCart({ ...bike, id: uuid() })}>
            +
          </button>
          <span>{bike.price}$</span>
        </StyledBottomOfBikeCard>
      </StyledBikeCard>
    ))}
  </StyledBikesGrid>
);
