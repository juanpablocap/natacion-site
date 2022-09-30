import { createContext, useState } from 'react';

export const UserContext = createContext()

const UserProvider = ({children}) => {
const [user, setUser] = useState(null)

    return ( 
        <UserContext.Provider value={{  // es un objeto, lleva {} ojo! - aqui paso todo lo que se va a compartir
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
     );
}
 
export default UserProvider;