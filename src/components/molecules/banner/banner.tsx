import { BannerContainer,TextBanner } from "./banner-styles";

interface BannerProps{
    description:string
    img:string
}

export const Banner =({description,img}: BannerProps) =>{
    return(
        <BannerContainer bgImage={img} >
            <TextBanner>{description}</TextBanner>
        </BannerContainer>
    )
}