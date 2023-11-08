import React, { useEffect, useState } from 'react';
import AttemptRow from './AttemptRow';
import { MazeDataProvider } from './MazeDataContext';


function Maze() {
    const [maze, setMaze] = useState(Array(6).fill(<AttemptRow />));

    return (
        <div className='maze'>
            <MazeDataProvider value={ { maze, setMaze } }>
                { maze.map((row, index) => (
                    <div key={ index }>{ row }</div>
                ))}
           </MazeDataProvider>
        </div>
    );
}

export default Maze;