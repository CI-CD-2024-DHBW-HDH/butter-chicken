import { easyMove } from "../../logic/bots/easy";


test("test easyMove detects winning move", () => {
    const board = [1,1,0,0,0,0,0,0,0];
    const own = 1;

    expect(easyMove(board, own)).toBe(2);

  });

test("test easyMove returns random move", () => {
    const board = [1,0,0,0,0,0,0,0,0];
    const own = 1;

    expect(easyMove(board, own)).toBeGreaterThan(0);
    expect(easyMove(board, own)).toBeLessThanOrEqual(9);

  });

  export {};
  