import { createContext, useState } from "react";

export const GraduationContext = createContext();

export const GraduationProvider = ({ children }) => {
    const [graduation, setGraduation] = useState([]);

    const addToGraduation = (product) => {
        setGraduation([...graduation, product]);
    }

    const removeFromGraduation = (product) => {
        const i = graduation.indexOf(product);
        const newList = graduation.filter((prod) => graduation.indexOf(prod) !== i);
        setGraduation(newList);
    }

    return (
        <GraduationContext.Provider value={{ graduation, setGraduation, addToGraduation, removeFromGraduation }}>
            {children}
        </GraduationContext.Provider>
    )
}