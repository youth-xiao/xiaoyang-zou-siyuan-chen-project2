import React, { createContext, useContext, useState } from 'react';

const AttemptRowDataContext = createContext();

export const useAttemptRowData = () => useContext(AttemptRowDataContext);

export const AttemptRowDataProvider = ({ children }) => {
    const [attemptRowData, setAttemptRowData] = useState(Array(5).fill(''));

    return (
        <AttemptRowDataContext.Provider value={ { attemptRowData, setAttemptRowData } }>
            { children }
        </AttemptRowDataContext.Provider>
    );
};