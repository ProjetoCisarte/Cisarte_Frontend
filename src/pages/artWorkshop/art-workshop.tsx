import { Article } from "../../components/molecules/article/article"
import { Banner } from "../../components/molecules/banner/banner"
import { DialogCard } from "../../components/molecules/dialog/dialog-card"
import Footer from "../../components/molecules/footer/footer"
import Header from "../../components/molecules/header/header"
import { WorkshopCard } from "../../components/molecules/workshopCard/workshop-card"
import { ContainerCardsDesks, ContainerNavigationCards, ContainerWorkshopCard, Subtitle } from "./art workshop-styles"

const ArtWorkshop = () => {


  return (
    <>
      <Header />
      <Banner img="/public/assets/background/art-workshop-fund.jpg" description="oficina de artes" />
      <Article title="Conheça nossas oficinas" paragraph="Clique em cada atividade para saber mais!" textAlign="center" />
      <ContainerCardsDesks>
        <DialogCard title="Música"
          content="A música, presente na vida de todos, desperta emoções, ritmo e estimula a prática física. O contato com instrumentos musicais no CISARTE desenvolve percepções sensoriais e emocionais, proporcionando diversão e experiências não vividas na rua. A oficina é aberta a pessoas em situação de rua interessadas em música e canto."
          imgSrc="/public/assets/imgs/oficina-musica.png"
          imgAlt="homem tocando violão" />

        <DialogCard title="Teatro"
          content="O teatro auxilia expressividade de sentimentos e emoções profundas, estimula a prática de atividades em grupo e percepção corporal  e a leitura de textos poéticos e/ou dramáticos. São ensaiadas e realizadas diversas peças teatrais por frenquentadores do CISARTE junto com os professores."
          imgSrc="/public/assets/imgs/oficina-teatro.png"
          imgAlt="sala de teatro" />

        <DialogCard title="Auditório"
          content="O CISARTE dispõe de um auditório específico  para palestras, apresentações, reuniões, debates, entre outros tópicos, onde o conhecimento e formação política para a população em situação rua é compartilhado."
          imgSrc="/public/assets/imgs/oficina-auditorio.png"
          imgAlt="sala de aula" />
      </ContainerCardsDesks>

      <ContainerNavigationCards>
        <Subtitle>Confira outras oficinas</Subtitle>
        <ContainerWorkshopCard>
        <WorkshopCard navigateDesk="/oficinaBemEstareSaude" description="Oficinas de bem-estar e saúde" img="/public/assets/imgs/bem-estar-e-saude.png" />
        <WorkshopCard navigateDesk="/oficinaServicos" description="Oficinas de serviços" img="/public/assets/imgs/servicos.png" />
        <WorkshopCard navigateDesk="/oficinaLinguas" description="Oficinas de línguas" img="/public/assets/imgs/linguas.png" />
        </ContainerWorkshopCard>
      </ContainerNavigationCards>

      <Footer />
    </>
  )
}

export default ArtWorkshop