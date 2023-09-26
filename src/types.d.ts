export interface ButtonProps {
	onClick: () => void;
	children: string;
	type?:
		| "normal"
		| "contained"
		| "outlined"
		| "disabled"
		| "contained-rounded"
		| "outlined-rounded";
}

export interface InputProps {
	value?: string | number;
	onChange: (value: string) => void;
	placeholder?: string;
	name: string;
	type?: "text" | "number" | "password";
	icon?: boolean;
}

export interface IconProps {
	type?: "socialMedia";
	src?: string;
	alt?: string;
	onClick?: (boolean) => void;
}
