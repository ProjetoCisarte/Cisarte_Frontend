import styled from "styled-components";

interface BannerContainerProps{
   bgImage:string

}

export const BannerContainer = styled.section<BannerContainerProps>`
background-image: url(${(props) => props.bgImage});
background-position: 0;
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 25.4rem;
display: flex;
justify-content: center;
align-items: center;


@media screen and (max-width:870px) {
        height: 19rem;
    }
`

export const TextBanner = styled.h4`
font-size: 3rem;
color: #fff;
width: 40%;
text-align: center;
padding: 10px;
font-weight: 700;
text-transform: uppercase;


@media screen and (max-width:670px) {
        font-size: 2rem;
    }
`