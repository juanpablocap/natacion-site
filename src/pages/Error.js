import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Error = () => {
    return ( 
        <>
        <Header />
        <p>Pagina de Error 404!</p>
        <Link to="/home" className="nav-link">Regresar al Home</Link>
        <Footer />
        </>
        
     );
}
 
export default Error;