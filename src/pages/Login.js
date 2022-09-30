
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LoginForm from "../components/LoginForm/LoginForm";


const Login = () => {
    return ( 
        <>
        <Header />
        <br/>
        <div className="d-flex justify-content-center">
            <LoginForm /> 
        </div>
        <Footer />
        </>
        
     );
}
 
export default Login;