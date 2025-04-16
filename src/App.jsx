import { useState } from 'react'
import './App.css'
import {Board} from './Board'

export default function App() {
  const [squares, setSquares] = useState([Array(9).fill(null)]);
  const [currentStep, setCurrentStep] = useState(0);
  const [xIsNext,setXIsNext] = useState(true);

  function HandleClick(i){
      const current = squares[currentStep];  //storing current array

      if(current[i] || checkWinner(current)) return;

      const currentSquares = current.slice(); //copying current array
       currentSquares[i] = xIsNext ? "X" : "O";

       const prevHistory = squares.slice(0,currentStep+1);
       setSquares([...prevHistory,currentSquares]);
       setXIsNext(!xIsNext);
       setCurrentStep(prevHistory.length);
    }
  function checkWinner(currentArray){
          //  let currentArray = squares[currentStep];
            let winningCombination = [
                [0,1,2], [3,4,5], [6,7,8],
                [0,3,6], [1,4,7], [2,5,8],
                [0,4,8], [2,4,6]
                ];
            for(let [a,b,c] of winningCombination){
                if(currentArray[a] && currentArray[a] == currentArray[b] && currentArray[a] == currentArray[c])
                    return currentArray[a];
            }
        return null;
  }
  function undo(){
      if (currentStep === 0) return;
      setCurrentStep(currentStep-1);
      setXIsNext((currentStep-1)%2===0);
  }

  function clearArray(){
      setSquares([Array(9).fill(null)]);
      setXIsNext(true);
      setCurrentStep(0);
  }
  function jumpTo(move){
      setCurrentStep(move);
      setXIsNext(move % 2 === 0);
      }
  const winner = checkWinner(squares[currentStep]);
  const status = winner ? `${winner} is winner` : `Next Player: ${xIsNext ? "X" : "O"} `;
  return (
      <div style={{
                       display: 'grid',
                       placeItems: 'center'
                        // full screen height
                   }}>
          <h1>TIC TAC TOE</h1>
          <div>
            <h2>{status}</h2>
            <button style={{padding:"2px", margin: "10px"}} onClick={undo}>Undo</button>
          </div>
        <Board squares = {squares[currentStep]} onClick = {HandleClick}/>
        <button style={{padding:"2px", margin: "10px"}} onClick={clearArray}>Restart</button>
        <div>
            <h3>Time Travel</h3>
            <ul>
                {squares.map((_,move) => (
                    <li key={move} style={{padding:"2px", margin: "10px"}}>
                    <button onClick={() => jumpTo(move)}>{move === 0 ? "go to game start" : `go to move : ${move}`}</button>
                    </li>
                    )
                 )}
            </ul>
        </div>
      </div>
  );
}


