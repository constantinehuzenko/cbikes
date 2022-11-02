import styled from "styled-components";

export const StyledCategoryWrapper = styled.div`
  display: flex;
  max-width: 275px;
  width: 100%;
  margin-right: 1.5rem;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: .75rem;
  }
`;

export const StyledCategoryItem = styled.div<{ isChecked: boolean }>`
  display: flex;
  flex-grow: 1;

  input {
    position: absolute;
    opacity: 0;
    z-index: -1000;
  }

  label {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    color: ${({ isChecked }) => (isChecked ? "#fff" : "#000")};
    background-color: ${({ isChecked }) => (isChecked ? "#000" : "#e5ebed")};
    border-radius: 50px;
    cursor: pointer;
    transition: 0.2s linear;
  }
`;
