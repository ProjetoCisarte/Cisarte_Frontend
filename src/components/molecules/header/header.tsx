import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "./header.styles";
import Logo from "../../../../public/assets/icons/cisarte-logo.png";
import { createGlobalStyle } from 'styled-components'


const Header = () => {

  const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

  return (
    <Navbar collapseOnSelect expand="lg" style={{"boxShadow": "0px 2px 4px rgba(0, 0, 0, 0.1)" , "padding": "15px 0px"}}>
      <GlobalStyle />
        <Container>
        <img src={Logo} alt="Logo da Cisarte"></img>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end justify-content-xl-around align-items-center"
          >
            <Nav>
              <Link>
              <div className="mx-3">
                <Nav.Link href="#">Home</Nav.Link>
              </div>
              </Link>
              <Link>
              <div className="mx-3">
                <Nav.Link href="#">Quem somos</Nav.Link>
              </div>
              </Link>
              <Link>
              <div className="mx-3">
                <Nav.Link href="#">Atividades</Nav.Link>
              </div>
              </Link>
              <Link>
              <div className="mx-3">
                <Nav.Link href="#">Doação</Nav.Link>
              </div>
              </Link>
              <Link>
              <div className="mx-3">
                <Nav.Link href="#">Voluntários</Nav.Link>
              </div>
              </Link>
              <Link>
              <div className="mx-3">
                <Nav.Link href="#">Contato</Nav.Link>
              </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Header;