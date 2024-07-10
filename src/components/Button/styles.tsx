import styled from "styled-components";
import { colors } from "../../styles/index";

export const StyledButton = styled.button`
  border-radius: 999px;
  border: 2px solid ${colors.darkPurple};
  background-color: white;
  padding: 0.25rem 1rem;
  font-size: 18px;
  font-weight: 600;
  color: ${colors.fontColor};
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
