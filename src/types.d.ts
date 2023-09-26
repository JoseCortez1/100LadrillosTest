export interface ButtonProps {
	onClick: () => void;
	children: string;
	type?: "normal" | "contained" | "outlined" | "disabled";
}
