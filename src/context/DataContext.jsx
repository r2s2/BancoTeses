import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [teses, setTeses] = useState([]);
    const [dispositivos, setDispositivos] = useState([]);

    const addTese = (newTese) => {
        setTeses((prevTeses) => [...prevTeses, newTese]);
    };

    const addDispositivo = (newDispositivo) => {
        setDispositivos((prevDispositivos) => [...prevDispositivos, newDispositivo]);
    };

    return (
        <DataContext.Provider value={{ teses, addTese, dispositivos, addDispositivo }}>
            {children}
        </DataContext.Provider>
    );
};