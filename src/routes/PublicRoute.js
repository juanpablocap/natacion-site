
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {

    const user = localStorage.getItem('user')  //chequeamos si esta logeado y lo mandamos 
                                                //home
    return ( 
       
        user?  <Navigate to="/home" /> : children
     );
}
 
export default PublicRoute;
 