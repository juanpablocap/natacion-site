import { Navigate } from 'react-router-dom' 

const AdminRoute = ({children}) => {

    const user = localStorage.getItem('user');

return ( 
        
        user? user.role === 'admin'? children : <Navigate to="/home" /> : <Navigate to="/login" />

     )
}
 
export default AdminRoute;