import { ListIconText } from "../molecules/list-icon-text"
import { StyleListComponent } from "./list-about-styles"


export const ListAboutUs = () =>{

    const list=[

        {
            icon:"public/assets/icons/icon-pessoas.svg",
            text:"Mais de 29 mil atendimentos, oferecendo suporte, oportunidades e um atendimento humanizado que vai além da simples assistência",
            alt:"icone de pessoas"
            
        },
        {
            icon:"public/assets/icons/icon-uniao.svg",
            text:"Incentivamos o cooperativismo popular e solidário. Com oficinas e projetos em diversas áreas, buscamos não apenas oferecer ajuda imediata, mas também estimular a autonomia e a saída definitiva das ruas.",
            alt:"icone pessoas unidas"
            
        },
        {
            icon:"public/assets/icons/icon-casa.svg",
            text:" Associação comunitária sociocultural sem fins lucrativos. Desde nossa fundação em 2016, no Viaduto Pedroso 111, Bela Vista, SP, nos tornamos um espaço de esperança e renovação para a população em situação de rua.",
            alt:"icone casa"
            
        },
        {
            icon:"public/assets/icons/icon-estrela.svg",
            text:"Contamos com espaços como salas de aulas, cine-debate, teatro, biblioteca, cozinha-escola, ateliê de costura, serigrafia e sala de inclusão digital, entre outras oficinas e atividades, para garantir um acolhimento completo.",
            alt:"icone estrela"
            
        }
   
    ]

    return(
        <>
        <StyleListComponent>
        {list.map((list, index) => {
                return (
                    <ListIconText text={list.text} icon={list.icon} alt={list.alt} key={index} />
                )
            }
            )}
        </StyleListComponent>
        </>
    )
}