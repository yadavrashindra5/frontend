import { createContext, useMemo, useState } from "react";

const UserContext = createContext("rashindra");


const UserContextProvider = ({ children }) => {
    const [name,setName]=useState("rashindra");
    const value=useMemo(()=>name,[name]);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


export { UserContext, UserContextProvider };