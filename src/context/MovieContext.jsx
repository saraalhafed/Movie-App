import { createContext } from "react";

const MovieContext =createContext();
export const MovieProvider = ({children})=>{
    return (

        <MovieContext.Provider value={{}} >
            {children}
        </MovieContext.Provider>
    )
}

/* custom hook */
export const useMovie= useContext(MovieContext);