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
			<div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl items-center justify-center">
				<section className="glass-panel relative w-full overflow-hidden rounded-[2rem] border border-cyan-300/15 px-4 py-6 shadow-[0_0_80px_rgba(0,0,0,0.55)] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
					<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(55,246,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,79,216,0.16),transparent_28%)]" />
					<div className="relative flex flex-col gap-8 lg:gap-10">
						<header className="flex flex-col gap-3 text-center">
							<p className="text-xs font-semibold uppercase tracking-[0.6em] text-cyan-200/80 sm:text-sm">
								Neon Cyber Grid
							</p>
							<h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
								Tic Tac Toe
								<span className="block bg-linear-to-r from-cyan-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
									Future Clash
								</span>
							</h1>
							<p className="mx-auto max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
								A futuristic two-player arena with neon feedback, clean state
								flow, and a glassy cyberpunk finish.
							</p>
						</header>

						<GameStatus
							currentPlayer={currentPlayer}
							winner={winner}
							isDraw={isDraw}
						/>

						<div className="flex flex-col items-center justify-center gap-6">
							<div className="glass-panel neon-grid rounded-4xl p-5 sm:p-6 lg:p-7">
								<Board
									board={board}
									winningCells={winningCells}
									onSquareClick={handleMove}
									disabled={gameEnded}
								/>
							</div>

							<ControlButton onClick={resetGame}>Reset Game</ControlButton>
						</div>

						<footer className="border-t border-white/8 pt-5 text-center text-xs tracking-[0.3em] text-slate-500 sm:text-sm">
							BUILT FOR REACT + TYPESCRIPT + NEON UI PRACTICE
						</footer>
					</div>
				</section>
			</div>
		</main>
	);
}

export default App;
