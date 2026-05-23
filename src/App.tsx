import { Board } from "./components/Board";
import { ControlButton } from "./components/ControlButton";
import { GameStatus } from "./components/GameStatus";
import { useGameLogic } from "./hooks/useGameLogic";

function App() {
	const {
		board,
		currentPlayer,
		winner,
		isDraw,
		winningCells,
		handleMove,
		resetGame,
	} = useGameLogic();

	const gameEnded = Boolean(winner || isDraw);

	return (
		<main className="min-h-screen overflow-hidden px-4 py-6 text-white sm:px-6 lg:px-8">
			<div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-3xl items-center justify-center">
				<section className="glass-panel relative w-full overflow-hidden rounded-[2rem] border border-cyan-300/15 px-4 py-6 shadow-[0_0_80px_rgba(0,0,0,0.55)] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
					<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(55,246,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,79,216,0.16),transparent_28%)]" />
					<div className="relative flex flex-col gap-6">
						<GameStatus
							currentPlayer={currentPlayer}
							winner={winner}
							isDraw={isDraw}
						/>

						<div className="flex flex-col items-center justify-center gap-5">
							<div className="glass-panel neon-grid rounded-4xl p-5 sm:p-6 lg:p-7">
								<Board
									board={board}
									winningCells={winningCells}
									onSquareClick={handleMove}
									disabled={gameEnded}
								/>
							</div>

							<ControlButton onClick={resetGame}>Reset Game</ControlButton>

							<div className="glass-panel w-full max-w-[20rem] rounded-3xl border border-cyan-300/15 px-5 py-4 text-center">
								<p className="text-[0.7rem] uppercase tracking-[0.6em] text-slate-400">
									Status
								</p>
								<p className="mt-2 text-lg font-semibold tracking-[0.18em] text-cyan-200 text-shimmer">
									{winner
										? `Winner: ${winner}`
										: isDraw
											? "Match Draw"
											: "Match In Progress"}
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

export default App;
