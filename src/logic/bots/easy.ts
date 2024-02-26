import { Field, getBlanks } from "../game";
import { randomMove, winningMove } from "./bot";

// the easy bot plays a winning move, if it can
// otherwise, it plays a random move
export function easyMove(board: Field[], own: Field): number {
  var winningPos = winningMove(board, own);
  if (winningPos !== -1) {
    return winningPos;
  } else {
    var blanks = getBlanks(board);
    var randomPos = randomMove(blanks.length);
    return blanks[randomPos];
  }
}
