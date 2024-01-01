import "./App.css";

import ChessBoard from "./components/ChessBoard";
import LabelTop from "./components/LabelTop";
import NumLabel from "./components/NumLabel";

import React, { Component } from "react";
import ChessPiece from "./components/chessPiece";
//news api key 06454ab3934b4aea83409ae14d4825ba

export default class App extends Component {
  render() {
    return (
      <>

        <div className="ChessBox">
          <LabelTop></LabelTop>
          <div className="horizontal">
            <NumLabel />
          </div>
          <div className="horizontal">
            <ChessBoard></ChessBoard>
          </div>
          <div className="horizontal">
            <NumLabel></NumLabel>
          </div>
          <LabelTop></LabelTop>
        </div>
        <div className="chess-piece">
        <ChessPiece pieceType={"K"} color={"white"} />
        </div>
      </>
    );
  }
}
