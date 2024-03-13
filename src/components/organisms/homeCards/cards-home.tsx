import { CardKnow } from "../../molecules/cards/cards";
import { CardsBar } from "./card-home-styles";

export const CardsHome = () =>{

    const cards =[
        {
            icon:"public/assets/icons/heart.svg",
            title:"Missão Transformadora",
            text:"Conheça a associação sociocultural sem fins lucrativos, fundada em 2016, que tem transformado vidas oferecendo suporte e oportunidades à população em situação de rua.",
            alt:"Icone mão com coração"
        },
        {
            icon:"public/assets/icons/donation.svg",
            title:"Seja um Doador",
            text:"Torne-se um doador do CISARTE e contribua para a realização de projetos sociais, cursos e oficinas que promovem oportunidades e dignidade.",
            alt:"Icone mão doando moeda"
        },
        {
            icon:"public/assets/icons/charity.svg",
            title:"Faça Parte da Transformação",
            text:"Junte-se à nossa equipe como voluntario e contribua para oferecer suporte, oportunidades e um atendimento humanizado à população em situação de rua",
            alt:"icone mãos levantadas"
        }
    ]

    return(
        <CardsBar>
            {cards.map((cards, index) =>{
                return(
                    <CardKnow icon={cards.icon} title={cards.title} text={cards.text} alt={cards.alt} key={index}/>
                )
            }
            )}
        </CardsBar>

    )

}