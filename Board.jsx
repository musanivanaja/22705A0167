import React, { useState } from 'react';
import Square from './Square';
import './Board.css'; // Import your CSS file for styling

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if (winner || squares[index]) return;

        const newSquares = [...squares];
        newSquares[index] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);

        setWinner(calculateWinner(newSquares));
        setXIsNext(!xIsNext);
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    };

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        setWinner(null);
    };

    let status;
    if (winner) {
        status = Winner: ${winner};
    } else if (squares.every((square) => square !== null)) {
        status = 'It\'s a draw!';
    } else {
        status = Next player: ${xIsNext ? 'X' : 'O'};
    }

    return (
        <div className="board">
            <h1>Tic Tac Toe</h1>
            <div className="status">{status}</div>
            <div className="grid">
                {squares.map((square, index) => (
                    <Square key={index} value={square} onClick={() => handleClick(index)} />
                ))}
            </div>
            <button className="reset-button" onClick={resetGame}>
                Reset Game
      </button>
        </div>
    );
};

export default Board;

reset - button; {
    margin - top: 20px;
    padding: 10px 20px;
    font - size: 16px;
    cursor: pointer;
}