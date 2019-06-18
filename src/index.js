/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
      <button
        className="square"
        onClick={props.onClick}>
        {props.value}
      </button>
    );
  }


class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    //two loops to draw board
    let squares = [];
    for(let i = 0; i < 3; i++) {
      let row = [];
      for(let j = 0; j < 3; j++) {
        row.push(this.renderSquare(i * 3 + j));
      }
      squares.push(<div key={i} className="board-row">{row}</div>);
    }

    return (
      <div>{squares}</div>
    );
  }
}



class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      isDescending: true,
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history : history.concat([{
      squares : squares,
      selected : i,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  jumpTo(step)  {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ===0,
    })
  }
  sortHistory() {
    this.setState({
      isDescending:!this.state.isDescending,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const click = () => {
      if(this.state.isDescending){
        return "list v";
      }else{
        return "list ^";
      }
    }
    const moves = history.map((step, move) => {
    console.log("stepNumber "+this.state.stepNumber);
    console.log("move "+move);

    const selected = step.selected;
    const desc = move ?
      'Go to move #' + move + getPosition(selected):
      'Go to game start';
    return (
        <li  key={move}>
                            {/*bold class if move === stepNumber*/}
          <button className={move===this.state.stepNumber ? 'list-item-selected' : ''}
          onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares ={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{this.state.isDescending ? moves : moves.reverse()/*here switch moves array order*/}</ol>
          <button onClick={() => this.sortHistory()}>
          {click()}
          </button>
        </div>
      </div>
    );
  }
}

//function with (col,row) positions
const getPosition = (move) => {
  const positionMap = {
    0: ' (1, 1)',
    1: ' (1, 2)',
    2: ' (1, 3)',
    3: ' (2, 1)',
    4: ' (2, 2)',
    5: ' (2, 3)',
    6: ' (3, 1)',
    7: ' (3, 2)',
    8: ' (3, 3)',
  };
  return positionMap[move];
};

function calculateWinner(squares) {
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
}
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
