import { getBlanks, invertPlayer, Field } from '../game'
import { randomMove, winningMove } from './bot'

// the medium bot plays a wining move, if it can
// or blocks the opponent from winning
// or plays the center field if it can
// otherwise it plays a random move
export function mediumMove (board: Field[], own: Field): number {
  const nextSelfWinningMove: number = winningMove(board, own)
  if (nextSelfWinningMove !== -1) {
    return nextSelfWinningMove
  }

  const nextOpponentWinningMove: number = winningMove(
    board,
    own == Field.PLAYER1 ? Field.PLAYER2 : Field.PLAYER1
  )
  if (nextOpponentWinningMove !== -1) {
    return nextOpponentWinningMove
  }

  if (board[4] === Field.EMPTY) {
    return 4
  }
  const blanks: number[] = getBlanks(board)
  const randomPosition: number = randomMove(blanks.length)

  return randomPosition
}

// this bot just tries to block a win
// otherwise it plays a random move
export function pettyMove (board: Field[], own: Field): number {
  const otherPlayer = own === Field.PLAYER1 ? Field.PLAYER2 : Field.PLAYER1
  const opponentWinMove = winningMove(board, otherPlayer)

  if (opponentWinMove !== -1) {
    return opponentWinMove
  } else {
    const blankFields = getBlanks(board)
    return blankFields[randomMove(blankFields.length)]
  }
}
