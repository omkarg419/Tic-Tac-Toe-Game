import type { Player } from "../types/game";

interface GameStatusProps {
	currentPlayer: Player;
	winner: Player | null;
	isDraw: boolean;
}

export function GameStatus({ currentPlayer, winner, isDraw }: GameStatusProps) {
	const message = winner
		? `Winner: ${winner}`
		: isDraw
			? "Match Draw!"
			: `Player ${currentPlayer} Turn`;

	const accentClass = winner
		? winner === "X"
			? "text-cyan-300"
			: "text-fuchsia-300"
		: isDraw
			? "text-emerald-300"
			: currentPlayer === "X"
				? "text-cyan-200"
				: "text-fuchsia-200";

	return (
		<div className="glass-panel neon-grid relative overflow-hidden rounded-3xl px-5 py-4 sm:px-6">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(55,246,255,0.12),transparent_42%)]" />
			<div className="relative flex flex-col items-center gap-2 text-center">
				<p
					className={`text-2xl font-semibold tracking-[0.18em] sm:text-3xl ${accentClass} text-shimmer`}
				>
					{message}
				</p>
				<p className="max-w-xl text-sm text-slate-300 sm:text-base">
					{winner
						? "Neon pulse confirmed across the winning line."
						: isDraw
							? "The board is full. Reset to challenge again."
							: "Select a glowing square to keep the match moving."}
				</p>
			</div>
		</div>
	);
}
