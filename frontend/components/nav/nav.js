import React from "react";
import Link from "next/link"
import styled from 'styled-components'
import { faFacebookF, faTwitter, faInstagram, faEtsy } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Query from "../query";
import CATEGORIES_QUERY from "../../queries/category/categories";

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
const Nav = () => {
  return (
    // <div>
      <StyledNav>
        <StyledContainer>
          <SearchBar>Type to search...</SearchBar>
          <SocialMediaBar>
            <StyledSocialMediaIcon>
              <StyledIcon>
              <FontAwesomeIcon icon={faFacebookF} size='xs'/>
              </StyledIcon>
            </StyledSocialMediaIcon>
            <StyledSocialMediaIcon>
              <StyledIcon>
              <FontAwesomeIcon icon={faTwitter} size='xs'/>
              </StyledIcon>
            </StyledSocialMediaIcon>
            <StyledSocialMediaIcon>
              <StyledIcon href="https://www.instagram.com/veggiegirldesign" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size='xs'/>
              </StyledIcon>
            </StyledSocialMediaIcon>
            <StyledSocialMediaIcon>
              <StyledIcon>
              <FontAwesomeIcon icon={faEtsy} size='xs'/>
              </StyledIcon>
            </StyledSocialMediaIcon>
          </SocialMediaBar>
        </StyledContainer>
      </StyledNav>
      // <Query query={CATEGORIES_QUERY} id={null}>
      //   {({ data: { categories } }) => {
      //     return (
      //       <div>
      //         <nav className="uk-navbar-container" data-uk-navbar>
      //           <div className="uk-navbar-left">
      //             <ul className="uk-navbar-nav">
      //               <li>
      //                 <Link href="/">
      //                   <a>Strapi Blog</a>
      //                 </Link>
      //               </li>
      //             </ul>
      //           </div>

      //           <div className="uk-navbar-right">
      //             <ul className="uk-navbar-nav">
      //               {categories.map((category, i) => {
      //                 return (
      //                   <li key={category.id}>
      //                     <Link
      //                       href={{
      //                         pathname: "category",
      //                         query: { id: category.id }
      //                       }}
      //                     >
      //                       <a className="uk-link-reset">{category.name}</a>
      //                     </Link>
      //                   </li>
      //                 );
      //               })}
      //             </ul>
      //           </div>
      //         </nav>
      //       </div>
      //     );
      //   }}
      // </Query>
    // </div> 
  );
};

export default Nav;