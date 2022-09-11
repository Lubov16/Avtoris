//import React from 'react';
import Board from '../Game/Board';
import { useState } from 'react';
import { calculateWinner } from '../../helper';

import './Game.css';

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
        const boardCopy = [...board];

        // определить был клик на ячейку или игра закончина

        if (winner || boardCopy[index])  
        return;

        // определить чей ход 

        boardCopy[index] = xIsNext ? 'x' : '0';

        // обновить стейт

        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }
    
    const startNewGame = () => {
        return (
            <button 
            className = "start_btn" 
            onClick={() => setBoard(Array(9).fill(null))}
            > Очистить поле </button>
        )
    }

    return (
        <div className="wrapper">
            { startNewGame() }
            <Board squares = {board} click = {handleClick} />
            <p className = 'game__info'>
                {winner ? 'Победитель ' + winner : 'Ход ' + (xIsNext ? 'x' : '0')}
            </p>
        </div>
    )
}

export default Game;