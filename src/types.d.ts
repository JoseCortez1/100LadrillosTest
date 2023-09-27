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
	type?: "text" | "number" | "password" | "email";
	icon?: boolean;
	label?: string;
}

export interface IconProps {
	type?: "socialMedia";
	src?: string;
	alt?: string;
	onClick?: (boolean) => void;
}

export interface Props {
	children?: ReactElement | ReactElement[] | ReactNode;
}
export interface FormElements {
	email: string;
	password: string;
	confirmPassword: string;
	touched: boolean;
	allCompleted: boolean;
	step: number;
	showSteps: boolean;
}
export interface FormProps {
	data: FormElements;
	setData: (ReactElement) => void;
}
