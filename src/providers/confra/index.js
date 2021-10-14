import { createContext, useState } from "react";

export const ConfraContext = createContext();

export const ConfraProvider = ({ children }) => {
    const [confra, setConfra] = useState([]);

    const addToConfra = (product) => {
        setConfra([...confra, product]);
    }

    const removeFromConfra = (product) => {
        const i = confra.indexOf(product);
        const newList = confra.filter((prod) => confra.indexOf(prod) !== i);
        setConfra(newList);
    }

    return (
        <ConfraContext.Provider value={{confra, setConfra, addToConfra, removeFromConfra}}>
            {children}
        </ConfraContext.Provider>
    )
}