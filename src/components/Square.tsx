import type { CellValue } from "../types/game";

interface SquareProps {
	value: CellValue;
	onClick: () => void;
	isWinningCell?: boolean;
	disabled?: boolean;
}

export function Square({
	value,
	onClick,
	isWinningCell = false,
	disabled = false,
}: SquareProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			disabled={disabled}
			className={`group relative aspect-square rounded-2xl border border-cyan-400/20 bg-white/5 text-3xl font-semibold uppercase tracking-[0.24em] text-white/90 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(55,246,255,0.18)] disabled:cursor-not-allowed disabled:hover:translate-y-0 ${
				isWinningCell
					? "border-cyan-300/80 bg-cyan-300/15 shadow-[0_0_34px_rgba(55,246,255,0.3)] neon-glow"
					: ""
			}`}
			aria-label={value ? `Square ${value}` : "Empty square"}
		>
			<span
				className={`relative z-10 transition duration-300 ${
					value === "X"
						? "text-cyan-300 drop-shadow-[0_0_14px_rgba(55,246,255,0.9)]"
						: value === "O"
							? "text-fuchsia-300 drop-shadow-[0_0_14px_rgba(255,79,216,0.85)]"
							: "text-white/10"
				}`}
			>
				{value ?? "·"}
			</span>

			<span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100">
				<span className="absolute inset-px rounded-2xl bg-gradient-to-br from-cyan-400/10 via-transparent to-fuchsia-400/10" />
			</span>
		</button>
	);
}
