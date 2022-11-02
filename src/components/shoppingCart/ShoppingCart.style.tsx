import styled from "styled-components";

export const StyledShoppingCart = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  z-index: 100;
  bottom: 0px;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  background: white;
`;

export const StyledScrollingList = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  height: 100%;
`;

export const StyledCartItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin: 0 0.5rem;
  min-width: 150px;
  height: 100%;
  border-radius: 10px;
  background: #e5ebed;
`;

export const StyledCartImg = styled.div`
  height: 65px;

  img {
    margin-top: 0.25rem;
    height: 100%;
  }
`;

export const StyledTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  h5 {
    word-break: keep-all;
  }

  span {
    margin-left: 4px;
    font-size: 12px;
  }
`;

export const StyledDeleteButton = styled.button`
  position: absolute;
  right: -8px;
  top: -8px;
  width: 22px;
  height: 22px;
  transition: 0.2s linear;
  color: white;
  border: 0;
  border-radius: 50px;
  background: #000000;
  font-size: 0.5rem;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    color: #000000;
    border: 1px inset #000000;
    background: #fff;
  }
`;

export const StyledOrderButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80px;
  padding: 0 12px;
  transition: 0.2s linear;
  text-transform: uppercase;
  color: white;
  border: 1px solid #000000;
  border-radius: 4px;
  background: black;

  &:hover {
    cursor: pointer;
    color: #000000;
    border: 1px solid #000000;
    background: #ffffff;
  }
`;
