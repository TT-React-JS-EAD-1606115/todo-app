import { ComponentProps } from "react";
import { StyledInput } from "./styles";

interface InputProps extends ComponentProps<"input"> {}

export const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};
