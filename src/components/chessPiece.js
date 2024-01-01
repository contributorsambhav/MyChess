import React from 'react';
import './ChessBoard.css';

const ChessPiece = ({ pieceType, color }) => {
  const pieceStyles = {
    width: '120%',
    height: '120%',
    marginRight: '20%',
  };

  const drawChessPiece = (ctx) => {
    // Set up colors based on the provided 'color' prop
    const pieceColor = color === 'white' ? "#708090" : '#000';

    // Draw a simple representation of the chess piece based on 'pieceType'
    switch (pieceType) {
      case 'K':
        // Draw a simple King symbol
        ctx.font = '30px Arial';
        ctx.fillStyle = pieceColor;
        ctx.fillText('♚', 10, 30);
        break;

      case 'Q':
        // Draw a simple Queen symbol
        ctx.font = '30px Arial';
        ctx.fillStyle = pieceColor;
        ctx.fillText('♛', 10, 30);
        break;

      case 'R':
        // Draw a simple Rook symbol
        ctx.font = '30px Arial';
        ctx.fillStyle = pieceColor;
        ctx.fillText('♜', 10, 30);
        break;

      case 'B':
        // Draw a simple Bishop symbol
        ctx.font = '30px Arial';
        ctx.fillStyle = pieceColor;
        ctx.fillText('♝', 10, 30);
        break;

      case 'N':
        // Draw a simple Knight symbol
        ctx.font = '30px Arial';
        ctx.fillStyle = pieceColor;
        ctx.fillText('♞', 10, 30);
        break;

      case 'P':
        // Draw a simple Pawn symbol
        ctx.font = '30px Arial';
        ctx.fillStyle = pieceColor;
        ctx.fillText('♟', 10, 30);
        break;

      default:
        // Handle an unknown piece type
        break;
    }
  };

  return (
    <canvas
      className="chess-piece"
      style={pieceStyles}
      width="50"
      height="50"
      ref={(canvas) => {
        if (canvas) {
          const ctx = canvas.getContext('2d');
          drawChessPiece(ctx);
        }
      }}
    />
  );
};

export default ChessPiece;
