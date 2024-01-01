import React from 'react';
import './ChessBoard.css';
import ChessPiece from './chessPiece';

const ChessBoard = () => {
  // Function to generate the chess board squares
  const renderSquares = () => {
    const squares = [];

    // Define the initial arrangement of chess pieces
    const initialPieces = [
      ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      Array(8).fill(''),
      Array(8).fill(''),
      Array(8).fill(''),
      Array(8).fill(''),
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ];

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isDarkSquare = (row + col) % 2 === 1;
        const squareColor = isDarkSquare ? 'dark' : 'light';

        const piece = initialPieces[row][col];

        squares.push(
          <div
            key={`${row}-${col}`}
            className={`square ${squareColor}`}
          >
            {piece && (
              <ChessPiece
                pieceType={piece.toUpperCase()} // Ensure pieceType is uppercase
                color={piece === piece.toLowerCase() ? 'black' : 'white'} // Set color based on case
              />
            )}
          </div>
        );
      }
    }

    return squares;
  };

  return (
    <div className="chess-board">
      {renderSquares()}
    </div>
  );
};

export default ChessBoard;
