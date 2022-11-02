import styled from "styled-components";

export const StyledPriceControlWrapper = styled.div`
  position: relative;
  display: flex;
  height: 28.5px;
  max-width: 375px;
  min-width: 200px;
  width: 100%;
  flex-grow: 1;

  @media (max-width: 600px) {
    max-width: 575px;
  }
`;

export const StyledCount = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  color: white;
  mix-blend-mode: difference;
  font-size: 12px;
`;

export const StyledPriceControl = styled.input`
  -webkit-appearance: none;
  position: relative;
  overflow: hidden;
  height: 28px;
  width: 100%;
  cursor: pointer;
  border-radius: 20px;

  ::-webkit-slider-runnable-track {
    background: #e5e5ed;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0px;
    height: 28px;
    box-shadow: -400px 0 0 400px black;
    border: 2px solid #000;
  }
  ::-moz-range-track {
    height: 28px;
    background: #000;
  }
  ::-moz-range-thumb {
    background: #000;
    height: 28px;
    width: 20px;
    border: 3px solid #000;
    border-radius: 0 !important;
    box-shadow: -200px 0 0 200px black;
    box-sizing: border-box;
  }
  ::-ms-fill-lower {
    background: black;
  }
  ::-ms-thumb {
    background: #000;
    border: 2px solid #000;
    height: 28px;
    width: 20px;
    box-sizing: border-box;
  }
  ::-ms-ticks-after {
    display: none;
  }
  ::-ms-ticks-before {
    display: none;
  }
  ::-ms-track {
    background: #000;
    color: transparent;
    height: 28px;
    border: none;
  }
  ::-ms-tooltip {
    display: none;
  }
`;
