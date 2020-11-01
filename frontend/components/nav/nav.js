import React from "react";
import Link from "next/link"
import styled from 'styled-components'
import { faFacebookF, faTwitter, faInstagram, faEtsy } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {StyledIcon, StyledSocialMediaIcon, SocialMediaBar, SearchBar, StyledContainer, StyledNav} from './styledNav'
import Query from "../query";
import CATEGORIES_QUERY from "../../queries/category/categories";

const Nav = () => {
  return (
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
  );
};

export default Nav;