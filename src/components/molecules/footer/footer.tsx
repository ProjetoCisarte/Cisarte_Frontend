import Logo from "../../../public/assets/icons/cisarte-logo.png";
import LogoFacebook from "../../../public/assets/icons/logo-facebook.svg";
import LogoInstagram from "../../../public/assets/icons/logo-instagram.svg";
import LogoLinkedin from "../../../public/assets/icons/logo-linkedin.svg";
import { ContainerInformation, ContainerLinksFooter, LinksFooter, LogoFooter, IconsFooter, SpanFooter, FinalFooter, LineYellow } from "./footer.styles";
// import { Link } from "react-router-dom";

function Footer() {
    return(
        <>
        <footer>
            <LineYellow />
            <ContainerInformation>
                <LogoFooter>
                    <img src={Logo} alt="Logo da Cisarte"></img>
                </LogoFooter>
                <ContainerLinksFooter>
                    <LinksFooter>
                        <h3>Navegação</h3>
                            <p>Quem somos</p>                       
                            <p>Atividades</p>                      
                            <p>Doação</p>                       
                            <p>Seja um voluntário</p>
                    </LinksFooter>
                    <LinksFooter>
                        <h3>Fale Conosco</h3>
                        <a href="tel:1126452469">
                            <p>(11) 2645-2469</p>
                        </a>
                        <a href="tel:11963584568">
                            <p>(11) 96358-4568 | (11) 96459-3915</p>
                        </a>
                        <a href="mailto:projeto@cisarte.org.br">
                            <p>projeto@cisarte.org.br</p>
                        </a>
                        <IconsFooter>
                            <img src={LogoFacebook} alt="Ícone do Facebook preto" />
                            <img src={LogoLinkedin} alt="Ícone do Linkedin preto" />
                            <img src={LogoInstagram} alt="Ícone do Instagram preto" />
                        </IconsFooter>
                    </LinksFooter>
                </ContainerLinksFooter>
            </ContainerInformation>
            <SpanFooter />
            <FinalFooter>
                <p>Centro de Inclusão pela Arte, Cultura, Trabalho e Educação - CNPJ 37.830.782/0001-04</p>
                <p>Cisarte© 2024.</p>
            </FinalFooter>
        </footer>
        </>
    )
}

export default Footer