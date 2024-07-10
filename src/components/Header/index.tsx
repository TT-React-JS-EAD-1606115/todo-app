import logo from "../../assets/logo.jpg";
import { HeaderContainer, Logo } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="header-logo" />
    </HeaderContainer>
  );
};
