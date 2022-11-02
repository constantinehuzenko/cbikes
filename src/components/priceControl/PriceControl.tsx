import {
  StyledCount,
  StyledPriceControl,
  StyledPriceControlWrapper,
} from "./PriceControl.style";
import { DEFAULT_MAX_RANGE, DEFAULT_MIN_RANGE } from "../../common/constants";

interface IProps {
  maxPrice: number;
  handleMaxPrice: (maxPrice: string) => void;
}

export const PriceControl = ({ maxPrice, handleMaxPrice }: IProps) => (
  <StyledPriceControlWrapper>
    <StyledPriceControl
      type="range"
      min={DEFAULT_MIN_RANGE}
      max={DEFAULT_MAX_RANGE}
      value={maxPrice}
      onChange={(e) => handleMaxPrice(e.target.value)}
    />

    <StyledCount>price to {maxPrice}$</StyledCount>
  </StyledPriceControlWrapper>
);
