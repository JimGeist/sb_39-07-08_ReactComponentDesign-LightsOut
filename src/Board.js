import React, { useState } from "react";
import RowOfCells from "./RowOfCells";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       1  1  .     (where . is off, and 1 is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 5, ncols = 5, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  /** Default board is 5 x 5                                                */

  function createBoard() {
    const randomTrueFalse = () => Math.round(Math.random()) ? true : false;

    let initialBoard = [];
    let row = Array.from({ length: ncols });

    // TODO: create array-of-arrays of true/false values
    for (let y = 0; y < nrows; y++) {
      initialBoard.push(row.map(x => randomTrueFalse()))
    }

    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.

    let x = 0;
    let y = 0;
    // using a while so we can immediately end when a lit cell is encountered 
    while (y < nrows) {
      while (x < ncols) {
        if (board[y][x]) {
          // a lit cell was encountered. The player has not won.
          return false;
        }
        x++;
      }
      // reset x
      x = 0;
      y++;
    }

    // The entire board was checked and no lit cells were found.
    // The player has won.
    return true;

  }

  function flipCellsAround(coord) {

    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      const newBoard = oldBoard.map(row => {
        return [...row]
      })

      // TODO: in the copy, flip this cell and the cells around it
      // two for loops 
      //  fixed x: starts at y - 1 and flips (y-1),x; (y),x; and (y+1),x
      //  fixed y: starts at x -1 and flips y,(x-1); y,(x+1); y(x) is skipped, it was 
      //   already flipped.
      for (let ctrY = y - 1; ctrY < y + 2; ctrY++) {
        flipCell(ctrY, x, newBoard);
      }
      for (let ctrX = x - 1; ctrX < x + 2; ctrX = ctrX + 2) {
        flipCell(y, ctrX, newBoard);
      }

      // TODO: return the copy
      return newBoard;
    });
  }

  // if the game is won, just show a winning msg & render nothing else
  // TODO
  if (hasWon() === true) {
    return <h1>Congratulations, you won!</h1>
  }

  // make table board. The RowOfCells component was created to 'simplifiy' and increase
  //  the readability of the board build. 
  return (
    <table className="Board">
      <tbody>
        {
          board.map((row, idxY) => (

            <RowOfCells y={idxY} row={row} flipCellsAroundMe={flipCellsAround} />

          ))
        }
      </tbody>
    </table>

  )

}

export default Board;
