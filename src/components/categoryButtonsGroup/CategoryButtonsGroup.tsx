import { memo } from "react";
import {
  StyledCategoryWrapper,
  StyledCategoryItem,
} from "./CategoryButtonsGroup.style";

// TODO: Move it to another file;
export const bikeCategoryList = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "road",
    name: "Road",
  },
  {
    id: "mountain",
    name: "Mountain",
  },
  {
    id: "bmx",
    name: "BMX",
  },
];

interface IProps {
  currentCategory: string;
  handleCurrentCategory: (categoryId: string) => void;
}

// TODO: Rename this component;
export const CategoryButtonsGroup = memo(
  ({ currentCategory, handleCurrentCategory }: IProps) => (
    <StyledCategoryWrapper>
      {bikeCategoryList.map((category) => {
        const isChecked = category.id === currentCategory;

        return (
          <StyledCategoryItem
            key={category.id}
            isChecked={isChecked}
            onClick={() => handleCurrentCategory(category.id)}
          >
            <input
              onChange={() => null}
              type="radio"
              id={category.id}
              checked={isChecked}
            />
            <label>{category.name}</label>
          </StyledCategoryItem>
        );
      })}
    </StyledCategoryWrapper>
  )
);
