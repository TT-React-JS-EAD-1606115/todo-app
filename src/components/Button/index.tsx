import { ComponentProps } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends ComponentProps<"button"> {}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
