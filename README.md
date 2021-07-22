# sb_39-07-08_ReactComponentDesign-LightsOut

## Technology Stack
- **Front-end**: ReactJS
- **Back-end**: n/a

## Assignment Details

Assignment involved completing the logic needed for the *Lights Out* logic puzzle. The coding provided an opportunity to work with React events where the state and events occur in different component functions.


## Additional Details

**Enhancements**
- An additional component, `RowOfCells`, was added to increase the readability of the board build in `Board.js`. Instead of the entire table build of the board occurring cell by cell in `Board.js`, only the major `table` elements are built in `Board.js` and each row is built in `RowOfCells.js` which adds a `Cell` component for each item in the row. 


**Difficulties**
- Falling into the trap and starting to read [LIGHTS OUT: DETERMINING SOLVABILITY ON
RECTANGULAR BOARDS](https://ida.mtholyoke.edu/bitstream/handle/10166/693/375.pdf) and actually trying to investigate how to deliver a solvable board to the player via the 'simple trick' mentioned in the exercise.
- The board build got confusing with all the {} and a few returns and having nested `.map()` calls with all their associated (, {, and returns added to the confusion!
- Unsuccessful attempts to resolve the `Each child in a list should have a unique "key" prop` warning. Adding `key=*keyVal*` where *keyVal* was a row number for the `<tr>` or the coordinate pair, `y-x`, for each `<td>` did not work. The `key` tag never appeared in the rendered element.

