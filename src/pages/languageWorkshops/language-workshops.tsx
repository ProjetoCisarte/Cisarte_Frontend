import { Article } from "../../components/molecules/article/article"
import { Banner } from "../../components/molecules/banner/banner"
import { DialogCard } from "../../components/molecules/dialog/dialog-card"
import Footer from "../../components/molecules/footer/footer"
import Header from "../../components/molecules/header/header"
import { WorkshopCard } from "../../components/molecules/workshopCard/workshop-card"
import { ContainerCardsDesks, ContainerNavigationCards, ContainerWorkshopCard, Subtitle } from "./language-workshops-styles"

const LanguageWorkshops = () => {


    return (
        <>
            <Header />
            <Banner img="/public/assets/background/art-workshop-fund.jpg" description="oficinas de línguas" />
            <Article title="Conheça nossas oficinas" paragraph="Clique em cada atividade para saber mais!" textAlign="center" />
            <ContainerCardsDesks>
                <DialogCard title="Aulas De Inglês"
                    content="Nessa oficina valorizamos o aprendizado e acreditamos que todos devem ter o direito de aprender uma segunda língua e ser introduzidos a novas culturas. As aulas de inglês são dadas por pessoas disponíveis em dedicar seu tempo em atividades não remuneradas para oferecer a população em situação de rua a oportunidade de aprender um novo idioma."
                    imgSrc="/public/assets/imgs/oficina-ingles.png"
                    imgAlt="professor em frente uma lousa ensinando" />

                <DialogCard title="Aulas de Japonês"
                    content="As aulas de japonês foram solicitadas pelos frequentadores do espaço, que aprensentaram curiosidade e necessidade de aprender e ter o domínio do idioma japonês. As aulas são dadas por pessoas que falam e escrevem o idioma, e que se dispõem a levar esse conhecimento às pessoas em situação de rua."
                    imgSrc="/public/assets/imgs/oficina-japones.png"
                    imgAlt="uma tabela com tabelas japonesas" />
            </ContainerCardsDesks>

            <ContainerNavigationCards>
                <Subtitle>Confira outras oficinas</Subtitle>
                <ContainerWorkshopCard>
                    <WorkshopCard navigateDesk="/oficinaDeArtes" description="Oficinas de Artes" img="/public/assets/imgs/oficinas-artes.png" />
                    <WorkshopCard navigateDesk="/oficinaBemEstareSaude" description="Oficinas de bem-estar e saúde" img="/public/assets/imgs/bem-estar-e-saude.png" />
                    <WorkshopCard navigateDesk="/oficinaServicos" description="Oficinas de serviços" img="/public/assets/imgs/servicos.png" />
                </ContainerWorkshopCard>
            </ContainerNavigationCards>

            <Footer />
        </>
    )
}

export default LanguageWorkshops