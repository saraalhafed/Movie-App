import { createContext, useContext } from "react";

 const AuthContext=createContext();


export  const AuthProvider =({children})=>{
   



    
 return (
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
 )

 }
 /* custom hook ,useContext */
export const useAuth =()=>useContext(AuthContext)