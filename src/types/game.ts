export type Player = "X" | "O";

export type CellValue = Player | null;

export type Board = CellValue[];

export interface WinnerResult {
	winner: Player;
	winningCells: number[];
}
