import { createContext, useMemo, useState } from "react";

const ThemeContext = createContext("light");

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    const value=useMemo(()=>{return { theme, setTheme }},[theme]);
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}


export { ThemeContext, ThemeProvider };