import { Article } from "../../components/molecules/article/article"
import Header from "../../components/molecules/header/header"
import { CardsHome } from "../../components/organisms/homeCards/cards-home"
import Button from "../../components/atoms/button/button"
import { WsCardHome } from "../../components/organisms/worshopsHome/home-card"
import Footer from "../../components/molecules/footer/footer"
import { IntroductionHome, CardVideo, ContainerMain, IntroductionText, ContainerVoluntary, VoluntaryArticle, ContainerArticle, DonationArticle, WsContainer } from "./home-styles"

export const Home = () =>{

  return (

    <body>
      <Header />
      <ContainerMain>
        <IntroductionHome>
          <IntroductionText>
            <Article title="Centro de integração Social pela Arte, Trabalho e Educação." subtitle="Conheça o CISARTE" paragraph="Um espaço inclusivo que visa oferecer suporte à população em situação de rua por meio de arte, educação e assistência social." />
            <Button title="Seja um apoiador" variant="secundario" />
          </IntroductionText>
          <CardVideo>
            <button><img src="/public/assets/icons/icon-play.svg" alt="" /></button>
          </CardVideo>
        </IntroductionHome>


        <CardsHome />
        <ContainerArticle>
          <ContainerVoluntary>
            <img src="/public/assets/imgs/seja-voluntario.svg" alt="" />
            <VoluntaryArticle>
              <Article title="Seja um voluntario" subtitle="Junte se ao Cisarte" paragraph="Junte-se à nossa equipe como voluntario e contribua para oferecer suporte, oportunidades e um atendimento humanizado à população em situação de rua" />
              <div>
                <p><span>+20</span> Oficinas</p>
                <p> <span>150-200</span> Atendimentos por dia</p>
              </div>
              <Button title="Quero ser voluntario" variant="secundario" />
            </VoluntaryArticle>

          </ContainerVoluntary>
          <DonationArticle>
            <img src="public/assets/imgs/seja-doador.svg" alt="" />
            <div>
              <Article subtitle="Apoie o projeto" title="Seja um Doador" paragraph="Ao doar para o CISARTE você não só estará fazendo uma ação solidária, como também estará contribuindo para o melhor da sociedade, pois a sua doação será direcionada as principais necessidades do projeto." />
              <Button title="Clique para Doar" variant="secundario" />
            </div>
          </DonationArticle>
        </ContainerArticle>

        <WsContainer>
          <h3>
          Nossas Oficinas
          </h3>
          <WsCardHome/>
          <h4>Clique e confira todas oficinas</h4>
        </WsContainer>

      </ContainerMain>
    
    <Footer/>
    </body>

  )
}

