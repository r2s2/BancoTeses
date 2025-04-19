import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [teses, setTeses] = useState([]);
  const [dispositivos, setDispositivos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedTeses = localStorage.getItem('teses');
        const savedDispositivos = localStorage.getItem('dispositivos');
        
        if (savedTeses) {
          setTeses(JSON.parse(savedTeses));
        }
        
        if (savedDispositivos) {
          setDispositivos(JSON.parse(savedDispositivos));
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('teses', JSON.stringify(teses));
    }
  }, [teses, loading]);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('dispositivos', JSON.stringify(dispositivos));
    }
  }, [dispositivos, loading]);

  const addTese = (tese) => {
    const newTese = {
      ...tese,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    };
    setTeses((prev) => [...prev, newTese]);
  };

  return (
    <DataContext.Provider value={{ teses, dispositivos, addTese }}>
      {children}
    </DataContext.Provider>
  );
};