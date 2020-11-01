import styled from 'styled-components';

const StyledNav = styled.div`
background-color: #f5f5f5;
padding: 8px 0;
border-sizing: border-box;
display: block;
height: 38px;

font-size: 13px;
line-height: 1.5;
color: #333;
`;

const StyledContainer = styled.div`
margin: 0 auto;
padding: 0 15px;
height: 22px;
width: 85%;
`;

const SearchBar = styled.div`
float: left;`;

const SocialMediaBar = styled.ul`
float: right;
margin-top: 1px;
padding: 0;
list-style: none;
margin-bottom: 0
`;

const StyledSocialMediaIcon = styled.li`
margin-right: 30px;
float: left;
display: list-item;
`;

const StyledIcon = styled.a`
color: #757575;
height: 19px;
`;

export {StyledIcon, StyledSocialMediaIcon, SocialMediaBar, SearchBar, StyledContainer, StyledNav}