import styled from 'styled-components';

export const StyledNavbar = styled.div`
  background-color: ${props => props.theme.White};
  height: 50px;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.SecondaryColor};
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
export const NavbarHeader = styled.h1`
  cursor: pointer;
`;
export const UnorderedList = styled.ul`
  display: flex;
  align-items: center
`;
export const List = styled.li`
  list-style: none;
`;
export const StyledLink = styled.a`
  text-decoration: none;
  margin: 0 10px;
`;
