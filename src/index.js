import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.css';

class Square extends React.Component{
    render(){
        return(
            <button className="board-button">
                {this.props.value}
            </button>
        )
    }
}
class Board extends React.Component{
    renderSquare(i){
        return <Square value={i} />
    }
    render()
    {
        const playerdet = "Turn for Player : X";
        return(
            <div className="main-Board">
                <div className="board-top">{playerdet}</div>
            <div className="board-row">
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
            </div>
            <div className="board-row">
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
            </div>
            <div className="board-row">
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                {this.renderSquare(10)}
            </div>
            </div>
        )
    }
}
class Game extends React.Component{
    render(){
        return(<div className="main-Game">
        <div className="Game-board">
            <Board/>
        </div>
        <div className="Game-info">
            <p>Game Status</p>
            <p>Game Todo</p>
        </div>
        </div>)
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game/>)