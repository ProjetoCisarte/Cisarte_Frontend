import { WorkshopCardContainer, TextDescription } from "./workshop-card-styles"

interface WorkshopCardProps{
    description:string
    img:string
}

export const WorkshopCard =({description,img}: WorkshopCardProps) =>{
    return(
        <WorkshopCardContainer bgImage={img} >
            <TextDescription>{description}</TextDescription>
        </WorkshopCardContainer>
    )
}