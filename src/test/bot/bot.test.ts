import { winningMove } from "../../logic/bots/bot";
import { Field, newBoard } from "../../logic/game";


test("test WinningMove",() =>{
    const winCombinations: number[][] = [
        [1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 0, 0, 0]]

    for(const item of winCombinations){
        let tori = newBoard()
        tori = item
        expect(winningMove(tori,Field.PLAYER1)).not.toBe(-1)
    }
})

export {}