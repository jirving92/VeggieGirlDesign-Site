import React from "react";
import {StyledLogoContainer, StyledOuterImage, StyledImage} from './styledLogo';

const Logo = ({url}) => {
  return (
      <StyledLogoContainer>
              <StyledOuterImage>
                  <StyledImage src={url}></StyledImage>
              </StyledOuterImage>
            </StyledLogoContainer> 
  );
};

export default Logo;