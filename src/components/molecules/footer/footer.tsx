import { Link } from "react-router-dom";
import { ContainerInformation, ContainerLinksFooter, LinksFooter, LogoFooter, IconsFooter, SpanFooter, FinalFooter, LineYellow } from "./footer-styles";

const Footer = () => {
    return (
        <footer>
            <LineYellow />
            <ContainerInformation>
                <LogoFooter>
                    <img src="/assets/icons/cisarte-logo.svg" alt="Logo da Cisarte" />
                </LogoFooter>
                <ContainerLinksFooter>
                    <LinksFooter>
                        <h3>Navegação</h3>
                        <p>Quem somos</p>
                        <Link to="/oficinaDeArtes">
                            <p>Atividades</p>                      
                        </Link>                       
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
                            <a href="https://web.facebook.com/cisarteSP" target="_blank">
                                <img src="/assets/icons/logo-facebook.svg" alt="Ícone do Facebook preto" />
                            </a>
                            <a href="https://www.linkedin.com/company/cisarte/" target="_blank">
                                <img src="/assets/icons/logo-linkedin.svg" alt="Ícone do Linkedin preto" />
                            </a>
                            <a href="https://www.instagram.com/cisarte.rua/" target="_blank">
                                <img src="/assets/icons/logo-instagram.svg" alt="Ícone do Instagram preto" />
                            </a>
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
    );
};

export default Footer;