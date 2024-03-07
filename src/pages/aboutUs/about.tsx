import Header from "../../components/molecules/header/header"
import { Footer } from "../../components/molecules/footer/footer"
import { Banner } from "../../components/molecules/banner/banner"
import { Article } from "../../components/molecules/article/article"
import { ListAboutUs } from "./components/orgarnism/list-about"
import { AboutArticle, MainAboutUs, AboutSection, ConteinerAboutUs } from "./about-styles"

export const AboutUs = () => {

    return (
        <body>
            <Header />
            <MainAboutUs>
                <Banner description="Quem somos nós" img="public/assets/background/fundo.png" />
                <AboutArticle>
                    <div>
                        <Article subtitle="Conheça o CISARTE" title="Centro de integração Social pela Arte, Trabalho e Educação." />
                        <p>O CISARTE é um espaço inclusivo que visa oferecer suporte à população em situação de rua por meio de arte, educação e assistência social. Mais do que um refúgio, representa uma oportunidade de recomeço e reintegração na sociedade.</p>
                        <p>O CISARTE promove o acesso a direitos e informações, incentivando o cooperativismo por meio de oficinas nas áreas de arte, cultura, trabalho, educação, assistência social e saúde. O objetivo é estimular empreendimentos solidários e auxiliar na saída das pessoas das ruas.</p>
                        <p>Com uma abordagem multidisciplinar, busca melhorar a qualidade de vida das pessoas em situação de rua, proporcionando atendimento humanizado focado no resgate da identidade e dignidade. A equipe voluntária oferece suporte em empreendimentos da economia solidária, atendimento jurídico, psicológico, odontológico, formação e conscientização de direitos.</p>
                    </div>
                    <img src="public/assets/imgs/img-about.png" alt="" />
                </AboutArticle>

                <AboutSection>
                    <ConteinerAboutUs>
                        <div>
                            <img src="public/assets/icons/icon alvo.svg" alt="Icone de Alvo" />
                            <div>
                                <h5>Missão</h5>
                                <p>Promover a porta de saída para pessoas em situação de rua, através de metodologias participativas e multidisciplinares  </p>
                            </div>
                        </div>
                        <div>
                            <img src="public/assets/icons/icon diamante.svg" alt="icone de diamante" />
                            <div>
                                <h5>Visão</h5>
                                <p>Ser referencia na criação de novo paradigma humanitário no desenvolvimento de trabalho com  Pop-rua, através de uma atuação pautada pela Justiça Social, Solidariedade, Cidadania e Garantia de Direto </p>
                            </div>
                        </div>
                        <div>
                            <img src="public/assets/icons/icon hand heart.svg" alt="icone mão estendida com coração" />
                            <div>
                                <h5>Valores</h5>
                                <p>Resgatar a autonomia da Pop-rua com respeito, ética e transparencia</p>
                            </div>
                        </div>
                    </ConteinerAboutUs>
                    <img src="public/assets/imgs/img-about-2.png" alt="imagem espaço cisarte" />
                </AboutSection>
                <section>
                    <ListAboutUs/>
                </section>
            </MainAboutUs>
            <Footer />
        </body>
    )
}