/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext,ReactNode,useState,useContext } from 'react';
import Cookies from 'js-cookie'


export const AuthContext = createContext<any>(null)




const AuthProvider = ({children}:{children:ReactNode}) =>{
    const [isAuthenticated,setIsAuthenticated] = useState(true)
    const [user,setUser] = useState(null)

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
        Cookies.remove('access_token')
        setIsAuthenticated(false)

    }

    

    return (
        <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated,setUser,user,logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider


export const useAuth =() =>{

    if(!AuthContext){
        console.log('useAuth must be used inside Auth provider')
    }
    return useContext(AuthContext)
}