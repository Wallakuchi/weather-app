import React, { createContext, useState } from "react";

//Create App-Context
export const AppContext = createContext({
    detail:null,
    setDetail:()=>null,
    place:null,
    setPlace:()=>null
})

//Establish Provider Component
export const AppProvider = ({children}) => {
    const [detail, setDetail] = useState([]);
    const [place, setPlace] = useState("")

    return (
        <AppContext.Provider value={{detail, setDetail, place, setPlace}}>
            {children}
        </AppContext.Provider>
    )
}