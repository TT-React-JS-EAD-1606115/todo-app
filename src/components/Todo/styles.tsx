import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import { colors } from "../../styles/index";

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  > span {
    font-size: 18px;
  }
`;

export const CheckIcon = styled(FaCheckCircle)`
  fill: ${colors.darkPurple};
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const UnCheckIcon = styled(FaRegCircle)`
  fill: ${colors.darkPurple};
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const TrashIcon = styled(FaTrash)`
  fill: ${colors.fontColor};
  width: 22px;
  height: 22px;
  margin-left: auto;
`;
