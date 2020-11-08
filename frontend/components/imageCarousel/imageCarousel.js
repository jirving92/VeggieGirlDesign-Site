import React from "react";
import styled from 'styled-components';
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

const StyledImage = styled.img`
max-height: 400px;
object-fit: contain;
`;

const StyledCarousel = styled.div`
max-height: 400px;
background-color: grey;
width: 85%;
margin: 0 auto;
padding: 0 15px;
margin-top: 40px;
`;

export default function ImageCarousel({imageUrls}) {
    console.log('image urls: ' + imageUrls);
    return (
        <StyledCarousel>
    <Carousel>
{imageUrls.map((photoUrl) => {
console.log("photo url " + photoUrl.url);
const imageUrl =
        process.env.NODE_ENV !== "development"
          ? photoUrl.url
          : process.env.REACT_APP_BACKEND_URL + photoUrl.url;

          return(
            <Carousel.Item interval={1000}>
            <StyledImage
              className="d-block w-100"
              src={imageUrl}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
              </Carousel.Item>)
})}

</Carousel>
</StyledCarousel>
    )
}