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
			{children}
		</button>
	);
}
