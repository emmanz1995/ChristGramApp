import React from 'react';
import { StyledNavbar, StyledNav, NavbarHeader, UnorderedList, List, StyledLink } from './NavbarStyles';
import { AuthService } from "../../../services/authService";
import { useHistory } from 'react-router-dom';

const Navbar = ({ currentUser }) => {
    const history = useHistory();
    const handleSignout = (evt) => {
        evt.preventDefault();
        AuthService.onSignout()
        history.push('/');
    }
    return (
        <StyledNavbar>
            <StyledNav>
                <NavbarHeader onClick={() => history.push('/home')}>Christogram</NavbarHeader>
                <UnorderedList>
                    {currentUser ? <List><StyledLink href="/profile">{currentUser.user.name}</StyledLink></List> : <List><StyledLink href="/signup">Sign Up</StyledLink></List>}
                    {/*{currentUser ? <List><StyledLink href=""><i className="fab fa-gratipay fa-2x" /></StyledLink></List> : ''}*/}
                    {currentUser ? <List><StyledLink href="/createpost">Create Posts</StyledLink></List> : ''}
                    {currentUser ? <List><StyledLink href="" onClick={handleSignout}>Sign Out</StyledLink></List> : <List><StyledLink href="">About</StyledLink></List>}
                </UnorderedList>
            </StyledNav>
        </StyledNavbar>
    );
}
export default Navbar;
