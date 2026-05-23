import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ControlButtonProps = PropsWithChildren<
	ButtonHTMLAttributes<HTMLButtonElement>
>;

export function ControlButton({
	children,
	className = "",
	...props
}: ControlButtonProps) {
	return (
		<button
			type="button"
			{...props}
			className={`inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-gradient-to-r from-cyan-400/20 via-fuchsia-400/20 to-cyan-400/20 px-5 py-3 text-sm font-semibold tracking-[0.16em] text-white shadow-[0_0_28px_rgba(55,246,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/60 hover:shadow-[0_0_36px_rgba(185,124,255,0.24)] disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
		>
			<svg
				aria-hidden="true"
				viewBox="0 0 24 24"
				className="mr-2 h-4 w-4 shrink-0 text-white"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			>
				<path d="M3 12a9 9 0 1 0 3-6.708" />
				<path d="M3 3v6h6" />
			</svg>
			{children}
		</button>
	);
}
