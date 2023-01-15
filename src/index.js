import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css';
 
class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:null,
        };
    }
    render(){
        return(
            <button className="square" onClick={()=>this.setState({value:"X"})}>
                {this.state.value}
            </button>
        )
    }
}
class Board extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            squares : Array(9).fill(null),
        };
    }
    renderSquare(i)
    {
        return <Square value={this.state.squares[i]}/>
    }
    render(){
        const status = "Turn to Player :"
        return(
            <div className="main-Board">
                <div className="board-status">{status}</div>
                <div className="board-squares">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-squares">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="board-squares">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        )
    }
}
class Game extends React.Component{
    render(){
        return(
            <div className="game-main">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div className="game-status"></div>
                    <div className="game-todo"></div>
                </div>
            </div>
        )
    }
}

const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>)