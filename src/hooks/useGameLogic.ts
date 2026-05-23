import { useState } from "react";
import type { Board, Player } from "../types/game";
import { checkWinner } from "../utils/checkWinner";

const createInitialBoard = (): Board => Array(9).fill(null);

export function useGameLogic() {
	const [board, setBoard] = useState<Board>(createInitialBoard);
	const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
	const [winner, setWinner] = useState<Player | null>(null);
	const [isDraw, setIsDraw] = useState(false);
	const [winningCells, setWinningCells] = useState<number[]>([]);

	const resetGame = () => {
		setBoard(createInitialBoard());
		setCurrentPlayer("X");
		setWinner(null);
		setIsDraw(false);
		setWinningCells([]);
	};

	const handleMove = (index: number) => {
		if (board[index] || winner || isDraw) {
			return;
		}

		const nextBoard = [...board];
		nextBoard[index] = currentPlayer;

		const result = checkWinner(nextBoard);

		setBoard(nextBoard);
		setWinner(result.winner);
		setIsDraw(result.isDraw);
		setWinningCells(result.winningCells);

		if (!result.winner && !result.isDraw) {
			setCurrentPlayer((previousPlayer) =>
				previousPlayer === "X" ? "O" : "X",
			);
		}
	};

	return {
		board,
		currentPlayer,
		winner,
		isDraw,
		winningCells,
		handleMove,
		resetGame,
	};
}
