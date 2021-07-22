import React from "react";
import Cell from "./Cell";

import "./RowOfCells.css";

/** Builds a table row of cells for the game board.
 *
 * This has no state --- just three props:
 * - y: the number for the row we are building. Thw row number (y) and the 
 *    column number provide the coordinates, y-x, for the flipCellsAroundMe
 *    callback.
 * 
 * - row: a row from the game board. A row contains the information for ncols
 *    of cells. Right now, that information is only the lit state. A cell 
 *    component is built for each cell in row.
 * 
 * - flipCellsAroundMe: a function rec'd from the board which is passed through
 *      to the cell component. The function will get the coordinates added.
 *
 **/

function RowOfCells({ y, row, flipCellsAroundMe }) {

  return (

    <tr className="RowOfCells">
      {row.map((cell, idxX) => {
        const coord = `${y}-${idxX}`;
        return <Cell flipCellsAroundMe={() => flipCellsAroundMe(coord)} isLit={cell} />
      })}
    </tr>

  )

}

export default RowOfCells;
