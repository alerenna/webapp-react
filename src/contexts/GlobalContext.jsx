import { createContext, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider }