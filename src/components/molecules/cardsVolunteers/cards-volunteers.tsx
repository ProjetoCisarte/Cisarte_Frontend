import { Baseboard, Collaborator, Header, CollaboratorImg } from "./cards-volunteers-styles";

interface CardsVolunteersProps{
    img:string
    Alt:string
    Title:string
    SubTitle: string
}

const CardsVolunteers = ({img, Title, SubTitle, Alt}: CardsVolunteersProps) => {
    return(
        <Collaborator>
            <Header>
                <CollaboratorImg>
                <img src={img} alt={Alt} />
                </CollaboratorImg>
            </Header>
            <Baseboard>
                <h4>{Title}</h4>
                <h5>{SubTitle}</h5>
            </Baseboard>
        </Collaborator>
    )
}

export default CardsVolunteers;