import React from "react";
import styled from 'styled-components';
import Link from 'next/link'

const HeaderNavigation = styled.div`
top: 0px;
z-index: 10;
background-color: #fff;
display: block;
font-size: 13px;
line-height: 1.5;
color: #333;
`;

const Container = styled.div`
width: 85%;
margin: 0 auto;
padding: 0 15px;
`;

const HeaderNav = styled.nav`
border-top: 1px solid #eaeaea;
border-bottom: 1px solid #eaeaea;
`;

const NavUl = styled.ul`
clear: both;
padding-left: 0;
margin: 0;
list-style-type: none;
font-family: Montserrat, sans-serif;
font-weight: 400;
text-align: center;
`;

const MenuItemLi = styled.li`
position: relative;
white-space: no-wrap;
display: inline-block;
box-sizing: border-box;
`;

const MenuItemA = styled.a`
font-size: 11px;
color: #757575;
letter-spacing: 1.5px;
text-transform: uppercase;
margin: 0 15px;
padding: 20px 0;
text-decoration: none;
display: inline-block;
text-align: center;
&:hover {
    color: #333;
    text-decoration: none;
}
`;
export default function Menu() {
    return (
        <HeaderNavigation>
            <Container>
                <HeaderNav>
                    <NavUl>
                        <MenuItemLi>
                            <Link href="/">
                                <MenuItemA>Home</MenuItemA>
                            </Link>
                        </MenuItemLi>
                        <MenuItemLi>
                            <Link href="/">
                                <MenuItemA>Shop</MenuItemA>
                            </Link>
                        </MenuItemLi>
                        <MenuItemLi>
                            <Link href="/">
                                <MenuItemA>Blog</MenuItemA>
                            </Link>
                        </MenuItemLi>
                        <MenuItemLi>
                            <Link href="/">
                                <MenuItemA>About</MenuItemA>
                            </Link>
                        </MenuItemLi>
                        <MenuItemLi>
                            <Link href="/">
                                <MenuItemA>Contact</MenuItemA>
                            </Link>
                        </MenuItemLi>
                    </NavUl>
                </HeaderNav>
            </Container>
        </HeaderNavigation>
    )
}