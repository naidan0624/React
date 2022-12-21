import React, { useState } from "react";
import "./index.css";
const winCases = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = () => {
  const [currSymbol, setcurrSymbol] = useState("x");
  const [tileData, settileData] = useState({});
  const [isWin, setisWin] = useState(false);

  const checkWiner = (tileIdx) => {
    const tileDataTemp = { ...tileData, [tileIdx]: currSymbol };
    const currSymbolLocation = Object.keys(tileDataTemp).filter(
      (key) => tileDataTemp[key] === currSymbol
    );
    winCases.forEach((winCase) => {
      if (winCase.every((num) => currSymbolLocation.includes(num.toString()))) {
        setisWin(true);
      }
    });

    console.log(tileDataTemp);
    setcurrSymbol((currState) => (currState === "X" ? "0" : "X"));
    settileData(tileDataTemp);
  };

  return (
    <div>
      <span>{`${currSymbol} turn`}</span>
      <button onClick={()=>{
        settileData({})
        setcurrSymbol('X')
      }}> Restart</button>
      <div className="tic-tac-toe-container">
        {[...Array(9)].map((tile, tileIdx) => {
          return (
            <button
              className="tic-tac-toe-buttons"
              onClick={() => {
                !tileData[tileIdx] && !isWin && checkWiner(tileIdx);
              }}
            >
              {tileData[tileIdx]}
            </button>
          );
        })}
      </div>
      <div>{isWin ? "Win" : ""}</div>
    </div>
  );
};

export default TicTacToe;
