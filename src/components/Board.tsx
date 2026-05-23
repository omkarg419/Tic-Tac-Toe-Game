import type { Board as BoardType } from "../types/game";
import { Square } from "./Square";

interface BoardProps {
	board: BoardType;
	winningCells: number[];
	onSquareClick: (index: number) => void;
	disabled?: boolean;
}

export function Board({
	board,
	winningCells,
	onSquareClick,
	disabled = false,
}: BoardProps) {
	return (
		<div className="grid w-full max-w-[24rem] grid-cols-3 gap-3 sm:max-w-[26rem] lg:max-w-[30rem]">
			{board.map((value, index) => (
				<Square
					key={index}
					value={value}
					onClick={() => onSquareClick(index)}
					disabled={disabled || Boolean(value)}
					isWinningCell={winningCells.includes(index)}
				/>
			))}
		</div>
	);
}
