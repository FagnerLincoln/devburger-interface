
import { navLinks } from "./NavLinks";
import  Logo from '../../assets/logo.svg';
import { NavLink, Container, NavLinkContainer, Footer,  } from "./styles";
import { SignOut } from "@phosphor-icons/react";
import {useUser} from '../../hooks/UserContext';
import { useResolvedPath } from "react-router-dom";


export function SideNavAdmin (){
const {logout} = useUser();
const {pathname} = useResolvedPath();


    return (
        <Container>
            <img src= {Logo} alt= "Hamburger Logo Devburger"/>
            <NavLinkContainer>
             {navLinks.map((link) => (
<NavLink 
key={link.id} 
to={link.path}
$isActive={pathname === link.path}
>
    {link.icon}
    <span>{link.label}</span>
</NavLink>
          ))}
            </NavLinkContainer>
            <Footer>
                <NavLink to='/login' onClick={logout}>
                    <SignOut/>
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>
    )
}