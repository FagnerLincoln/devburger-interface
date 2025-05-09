import { UserCircle, ShoppingCart } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";

import {
  Container,
  Content,
  HeaderLink,
  LinkContainer,
  Logout as StyledLogout, // Renomeado aqui
  Navigation,
  Options,
  Profile,
} from "./styles";

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const { pathname } = useResolvedPath();

  function logoutUser() {
    logout(); // Chama a função logout correta do contexto
    navigate("/login"); // Navega para a página de login
  }

  console.log(userInfo);
  
  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to="/" $isActive={pathname === "/"}>
              Home
            </HeaderLink>
            <hr />
            <HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>
              Cardápio
            </HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCircle color="#fff" size={24} />
            <div>
              <p>
                Olá, <span>{userInfo.name}</span>
              </p>
              <StyledLogout onClick={logoutUser}>Sair</StyledLogout> {/* Ajustado aqui */}
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCart color="#fff" size={24} />
            <HeaderLink to="/carrinho">Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}
