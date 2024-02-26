import { won, Field } from "../../logic/game";

test("first row player 1, player 1 win", () => {
  const board: Field[] = [Field.PLAYER1, Field.PLAYER1, Field.PLAYER1];
  expect(won(board)).toBe(Field.PLAYER1);
});

test("second row player 1, player 1 win", () => {
  const board: Field[] = [
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.PLAYER1,
    Field.PLAYER1,
    Field.PLAYER1,
  ];
  expect(won(board)).toBe(Field.PLAYER1);
});

test("third row player 1, player 1 win", () => {
  const board: Field[] = [
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.PLAYER1,
    Field.PLAYER1,
    Field.PLAYER1,
  ];
  expect(won(board)).toBe(Field.PLAYER1);
});

test("first column player 1, player 1 win", () => {
  const board: Field[] = [
    Field.PLAYER1,
    Field.EMPTY,
    Field.EMPTY,
    Field.PLAYER1,
    Field.EMPTY,
    Field.EMPTY,
    Field.PLAYER1,
    Field.EMPTY,
    Field.EMPTY,
  ];
  expect(won(board)).toBe(Field.PLAYER1);
});

test("second column player 1, player 1 win", () => {
  const board: Field[] = [
    Field.EMPTY,
    Field.PLAYER1,
    Field.EMPTY,
    Field.EMPTY,
    Field.PLAYER1,
    Field.EMPTY,
    Field.EMPTY,
    Field.PLAYER1,
    Field.EMPTY,
  ];
  expect(won(board)).toBe(Field.PLAYER1);
});

test("third column player 1, player 1 win", () => {
  const board: Field[] = [
    Field.EMPTY,
    Field.EMPTY,
    Field.PLAYER1,
    Field.EMPTY,
    Field.EMPTY,
    Field.PLAYER1,
    Field.EMPTY,
    Field.EMPTY,
    Field.PLAYER1,
  ];
  expect(won(board)).toBe(Field.PLAYER1);
});

test("diagonal right player 1, player 1 win", () => {
  const board: Field[] = [
    Field.EMPTY,
    Field.EMPTY,
    Field.PLAYER1,
    Field.EMPTY,
    Field.PLAYER1,
    Field.EMPTY,
    Field.PLAYER1,
    Field.EMPTY,
    Field.EMPTY,
  ];
  expect(won(board)).toBe(Field.PLAYER1);
});

test("diagonal left player 1, player 1 win", () => {
  const board: Field[] = [
    Field.PLAYER1,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.PLAYER1,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.PLAYER1,
  ];
  expect(won(board)).toBe(Field.PLAYER1);
});

export {};
