import styled from "styled-components";
import { colors } from "../../styles/index";

export const Container = styled.div`
  width: 100%;
`;

export const AddContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TodosContainer = styled.div`
  background-color: ${colors.whitePurple};
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-top: 2rem;
`;
