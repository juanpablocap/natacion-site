import { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import logo from '../../img/logo.png';


const Header = () => {

  const {user, setUser} = useContext(UserContext)

  useEffect(() => {
    const userLogged = JSON.parse(localStorage.getItem('user'))
    if (userLogged){
      setUser(userLogged);
      console.log('se setio:', Date(), userLogged)
    } 
  }, [setUser]);
  
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.clear();
    setUser(null)
    navigate('/landing')
    window.reload()
    console.log("El usuario:", user.email, "cerro sesion...")
    
  }

  return (
    <>
    <br/>
    <br/>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <img className="nav-link" src={logo} alt="First slide" />
          <Navbar.Brand ><Link className="nav-link" to="/home" ></Link></Navbar.Brand>
          <Navbar.Brand ><Link className="nav-link" to="/home">Home</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/news">Noticias</Link>
              <Link className="nav-link" to="/contact">Contacto</Link>
              {user? 
              <Link className="nav-link" to={"/dashboard"}>Dashboard</Link> : null}
            </Nav>
            <Nav>
              <Nav className="nav-link">
                {user? user.email 
              : null}
              </Nav>
              {user? 
              <Link  onClick={logOut} className="nav-link">Logout</Link> 
              :  // ver bien esto..!! poner en componente
              <>
              <Link to="/registro" className="nav-link">Registro</Link>
              <Link to="/login" className="nav-link">Login</Link>
              </>
              }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
