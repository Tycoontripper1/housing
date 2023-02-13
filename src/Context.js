import React, { useState, useContext } from "react";
const Context = React.createContext();

function ContextProvider({children}){
    const [darkTheme, setDarkTheme]= useState(false)

    return(
        <Context.Provider value={{darkTheme, setDarkTheme}}>
            {children}
        </Context.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(Context)
}

export {Context, ContextProvider}