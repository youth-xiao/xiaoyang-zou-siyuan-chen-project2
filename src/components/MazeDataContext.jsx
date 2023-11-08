import React, { createContext, useContext, useState } from 'react';

const MazeDataContext = createContext();

export const useMazeData = () => useContext(MazeContext);

export const MazeDataProvider = ({ children }) => {
    const [mazeData, setMaze] = useState(Array(6).fill(null));
    
    return (
        <MazeDataContext.Provider value={ { mazeData, setMaze } }>
            { children }
        </MazeDataContext.Provider>
    );
};