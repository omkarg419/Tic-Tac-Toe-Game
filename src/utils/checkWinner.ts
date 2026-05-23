import type { Board, Player, WinnerResult } from "../types/game";
import { winningPatterns } from "./winningPatterns";

export interface GameResolution {
	winner: Player | null;
	winningCells: number[];
	isDraw: boolean;
}

export function checkWinner(board: Board): GameResolution {
	for (const pattern of winningPatterns) {
		const [first, second, third] = pattern;
		const mark = board[first];

		if (mark && mark === board[second] && mark === board[third]) {
			const result: WinnerResult = {
				winner: mark,
				winningCells: [...pattern],
			};

			return {
				...result,
				isDraw: false,
			};
		}
	}

	const isDraw = board.every((cell) => cell !== null);

	return {
		winner: null,
		winningCells: [],
		isDraw,
	};
}
