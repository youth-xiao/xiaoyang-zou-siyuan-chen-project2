import React, { createContext, useContext, useEffect, useState } from 'react';

const CardDataContext = createContext();

export const useCardData = () => useContext(CardDataContext);

export const CardDataProvider = ({ children }) => {
    const [letter, setLetter] = useState('');
    
    useEffect(() => {
        const handleKeyPress = (event) => {
            setLetter(event.key);
        };

        const handleDelete = (event) => {
            if (event.key === 'Delete' || event.key === 'Backspace') {
                setLetter('');
            }
        };

        window.addEventListener('keypress', handleKeyPress);
        window.addEventListener('keydown', handleDelete);


        return () => {
            window.removeEventListener('keypress', handleKeyPress);
            window.removeEventListener('keydown', handleDelete);
        };
    }, []);

  return (
    <CardDataContext.Provider value={{ letter, setLetter }}>
      {children}
    </CardDataContext.Provider>
  );
};
