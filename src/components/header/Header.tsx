import { memo } from "react";
import styled from "styled-components";

interface IHeaderProps {
  title: string;
}

const StyledH1 = styled.h1`
  font-weight: 900;
  margin: 0.5rem 0;
  padding: 0;
`;

export const Header = memo(({ title }: IHeaderProps) => (
  <header>
    <StyledH1>{title}</StyledH1>
  </header>
));
