import { WorkshopCard } from "../../molecules/workshopCard/workshop-card";
import { WsConteinerCard } from "./home-card-styles";


export const WsCardHome = () => {

    const cards = [

        {
            description: "Oficina de Artes",
            img: "/public/assets/imgs/oficinas-artes.png"

        },
        {
            description: "Oficinas de Bem-Estar e Saúde",
            img: "/public/assets/imgs/bem-estar-e-saude.png"

        },
        {
            description: "Oficinas de Serviços",
            img: "/public/assets/imgs/oficina-servicos.png"

        },
        {
            description: "Oficinas de Línguas",
            img: "/public/assets/imgs/oficina-linguas.png"

        }

    ]

    return (

        <WsConteinerCard>
            {cards.map((cards, index) => {
                return (
                    <WorkshopCard  description={cards.description} img={cards.img} key={index} navigateDesk={""} />
                )
            }
            )}
        </WsConteinerCard>
    )
}
