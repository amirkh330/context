import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const Values = () => useContext(Context);

export default function StageManeger({ children }) {
    const [count, setCount] = useState(0);
    const value = {
        count,
        incrementFunc: () => setCount(count + 1),
        decrementFunc: () => setCount(count - 1),
    };

    return (
        <>
            <Context.Provider value={value}>{children}</Context.Provider>
        </>
    );
}
