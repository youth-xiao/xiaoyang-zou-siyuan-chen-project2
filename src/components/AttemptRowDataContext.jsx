import React, { createContext, useContext, useState } from 'react';

const AttemptRowDataContext = createContext();

export const useAttemptRowData = () => useContext(AttemptRowDataContext);

export const AttemptRowDataProvider = ({ children }) => {
  const [letters, setLetters] = useState(['', '', '', '', '']);

  const updateLetter = (index, letter) => {
    setLetters((prevLetters) => {
      const newLetters = [...prevLetters];
      newLetters[index] = letter;
      return newLetters;
    });
  };

  return (
    <AttemptRowDataContext.Provider value={{ letters, updateLetter }}>
      {children}
    </AttemptRowDataContext.Provider>
  );
};
