import { Field, Mode } from "../game";
import { easyMove } from "./easy";
import { hardMove } from "./hard";
import { mediumMove, pettyMove } from "./medium";

export type BotMove = (board: Field[], own: Field) => number;

export function moveWithMode(mode: Mode): BotMove | undefined {
  switch (mode) {
    case Mode.EASY:
      return easyMove;
    case Mode.PETTY:
      return pettyMove;
    case Mode.MEDIUM:
      return mediumMove;
    case Mode.HARD:
      return hardMove;
    case Mode.HUMAN || Mode.ONLINE:
      return undefined;
    default:
      return undefined;
  }
}

// winningMove returns a move player can play to win
// if there is no winning move, it returns -1
export function winningMove(board: Field[], player: Field): number {
  const winCombinations: number[][] = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  for (const [a, b, c] of winCombinations) {
    // Check if two cells are filled by the player and the third is empty
    if (board[a] === player && board[b] === player && board[c] === Field.EMPTY)
      return c;
    if (board[a] === player && board[c] === player && board[b] === Field.EMPTY)
      return b;
    if (board[b] === player && board[c] === player && board[a] === Field.EMPTY)
      return a;
  }

  return -1;
}

export function randomMove(bounds: number): number {
  return Math.floor(Math.random() * bounds);
}
