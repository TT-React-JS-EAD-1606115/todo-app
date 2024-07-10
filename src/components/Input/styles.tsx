import styled from "styled-components";
import { colors } from "../../styles/index";

export const StyledInput = styled.input`
  border-radius: 999px;
  border: 2px solid ${colors.whitePurple};
  padding: 0.25rem 1rem;
  font-size: 18px;
  width: 100%;
  background-color: ${colors.whitePurple};
  transition: border-color 0.3s;

  &:focus {
    border-color: ${colors.darkPurple};
  }

  &::placeholder {
    font-style: italic;
  }
`;
