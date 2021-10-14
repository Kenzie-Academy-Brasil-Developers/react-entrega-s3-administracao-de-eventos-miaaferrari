import { createContext, useState } from "react";

export const WeddingContext = createContext();

export const WeddingProvider = ({ children }) => {
    const [wedding, setWedding] = useState([]);

    const addToWedding = (product) => {
        setWedding([...wedding, product]);
    }

    const removeFromWedding = (product) => {
        const i = wedding.indexOf(product);
        const newList = wedding.filter((prod) => wedding.indexOf(prod) !== i);
        setWedding(newList);
    }

    return (
        <WeddingContext.Provider value={{wedding, setWedding, addToWedding, removeFromWedding}}>
            {children}
        </WeddingContext.Provider>
    )

}
