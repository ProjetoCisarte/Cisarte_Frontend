import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "./header-styles";
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

const Header = () => {

  const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

  const navigate = useNavigate();

  
  const navigateToHome = () => {
    navigate("/");
  };                           
  
  const navigateToAboutUs = () => {
    navigate("/sobre-nos");
  };                           
  const navigateToDonation = () => {
    navigate("/doacao");
  };                           
  
  const navigateToVolunteers = () => {
  navigate("/voluntariado");
  };

  const navigateToContactUs = () => {
    navigate("/faleconosco");
  };

  const navigateToArtWorkshop = () => {
    navigate("/oficinaDeArtes");
  };              

  return (
    <Navbar collapseOnSelect expand="lg" style={{"boxShadow": "0px 2px 4px rgba(0, 0, 0, 0.1)" , "padding": "15px 0px"}}>
      <GlobalStyle />
        <Container>
        <img src="/public/assets/icons/cisarte-logo.svg" alt="Logo da Cisarte"></img>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end justify-content-xl-around align-items-center"
          >
            <Nav>
              <Link>
              <div className="mx-3" onClick={navigateToHome}>
                <Nav.Link>Home</Nav.Link>
              </div>
              </Link>
              <Link>
              <div className="mx-3" onClick={navigateToAboutUs}>
                <Nav.Link>Quem somos</Nav.Link>
              </div>
              </Link>
              <Link>
              <div className="mx-3">
                <Nav.Link onClick={navigateToArtWorkshop}>
                  Atividades
                </Nav.Link>
              </div>
              </Link>
              <Link>
              <div className="mx-3" onClick={navigateToDonation}>
                <Nav.Link>Doação</Nav.Link>
              </div>
              </Link>
              <Link>
              <div className="mx-3">
                <Nav.Link onClick={navigateToVolunteers}>
                  Voluntários
                </Nav.Link>
              </div>
              </Link>
              <Link>
              <div className="mx-3">
                <Nav.Link onClick={navigateToContactUs}>
                  Contato
                </Nav.Link>
              </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Header;