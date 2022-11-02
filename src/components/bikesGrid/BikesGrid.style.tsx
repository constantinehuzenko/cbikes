import styled from "styled-components";

export const StyledBikesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.5rem;
  margin-top: 1rem;
`;

export const StyledBikeCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
  z-index: 10;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -10;
    border-radius: 1rem;
    opacity: 0;
    transition: 1s linear;
    background-image: url("https://media0.giphy.com/media/g5RG6k6d0KDLr7ZF3y/giphy.gif?cid=790b7611d253f665b47e9c884a6bb653db58807f0f4494a5&rid=giphy.gif&ct=g");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: darken;
  }

  &:hover::after {
    opacity: 0.1;
  }
`;

export const StyledBikeImage = styled.div`
  display: flex;
  margin-top: 1rem;
  img {
    max-width: 100%;
  }
`;

export const StyledBottomOfBikeCard = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin-top: 8px;

  h3 {
    margin: 0 8px 0 0;
  }

  button {
    position: absolute;
    right: -37px;
    bottom: -37px;
    width: 50px;
    height: 50px;
    transition: 0.2s linear;
    border: 0;
    border-radius: 50px;
    background: #ffffff;
    font-size: 1.7rem;
    font-weight: 900;

    &:hover {
      cursor: pointer;
      color: #e5ebed;
      background: #000000;
    }

    &:before {
      position: absolute;
      z-index: -1;
      top: calc(50% - 65px / 2);
      left: calc(50% - 65px / 2);
      width: 65px;
      height: 65px;
      content: "";
      border-radius: 50px;
      background: #e5ebed;
    }
  }
`;
