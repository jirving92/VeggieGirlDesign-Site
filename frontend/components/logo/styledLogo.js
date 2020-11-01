import styled from 'styled-components';

const StyledLogoContainer = styled.div`
width: 85%;
margin: 0 auto;
padding: 0 15px;
display: block;
`;

const StyledImage = styled.img`
padding-top: 50px;
padding-bottom: 50px;
width: 300px;
    height: 300px;
    object-fit: contain;
`;

const StyledOuterImage = styled.div`
margin: 0 auto;
display: flex;
justify-content: center;
`;

export {StyledLogoContainer, StyledImage, StyledOuterImage}