import { memo, ReactNode } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #fff;
  border-radius: 12px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: unset;
  }
`;

export const Filter = memo(({ children }: { children: ReactNode }) => (
  <StyledForm>{children}</StyledForm>
));
