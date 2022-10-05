import Carusel from "../components/Carusel/Carusel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header"
import NewsBoard from "../components/NewsBoard/NewsBoard";


const Home = () => {
    return ( 
        <>
        <Header />
        <br/>
        <Carusel />
        <NewsBoard />
        
        <Footer />
        </>
     );
}
 
export default Home;