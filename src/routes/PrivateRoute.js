import { Navigate } from 'react-router-dom' // componente para la redireccion

const PrivateRoute = ({children}) => {

    const user = localStorage.getItem('user');

return ( 
        
        user? children : <Navigate to="/login" />

     )
}
 
export default PrivateRoute;