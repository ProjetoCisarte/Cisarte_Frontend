import { CardConteiner, ButtonCard,} from "./card"

interface CardsProps {

    icon:string
    title:string
    text:string
    alt:string
}

export const CardKnow = ({icon, title, text, alt}: CardsProps) =>{

    return(
        <>
        <CardConteiner>
            {icon && <img src={icon} alt={alt} />}
            <h4>{title}</h4>
            <p>{text}</p>
            <ButtonCard>
                Saiba Mais
            </ButtonCard>
        </CardConteiner>
        </>
    )

}