#  Tic Tac Toe

A modern Tic Tac Toe game built with React, TypeScript, Vite, and Tailwind CSS. The UI uses a neon cyberpunk style with glassmorphism panels, glowing board cells, and smooth interactions.

## Features

- 3x3 Tic Tac Toe board
- Two-player turn switching
- Winner detection with highlighted winning cells
- Draw detection
- Reset game action
- Responsive neon UI
- Reusable component structure
- Custom game hook for clean state management

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4

## Project Structure

```txt
src/
├── components/
│   ├── Board.tsx
│   ├── ControlButton.tsx
│   ├── GameStatus.tsx
│   └── Square.tsx
├── hooks/
│   └── useGameLogic.ts
├── types/
│   └── game.ts
├── utils/
│   ├── checkWinner.ts
│   └── winningPatterns.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

Run lint checks:

```bash
pnpm lint
```

## Notes

- The main game logic lives in `src/hooks/useGameLogic.ts`.
- Winner detection is isolated in `src/utils/checkWinner.ts`.
- The neon layout and animations are defined in `src/index.css`.
