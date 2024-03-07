import { Link } from "react-router-dom"
import { WorkshopCardContainer, TextDescription } from "./workshop-card-styles"

interface WorkshopCardProps{
    description:string
    img:string
    navigateDesk : string
}

export const WorkshopCard =({description,img, navigateDesk}: WorkshopCardProps) =>{
    return(
        <Link to={navigateDesk} style={{ textDecoration: 'none' }}>
        <WorkshopCardContainer bgImage={img} >
            <TextDescription>{description}</TextDescription>
        </WorkshopCardContainer>
        </Link>
    )
}