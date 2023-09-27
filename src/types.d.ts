export interface ButtonProps {
	onClick: () => void | null;
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
	onChange: (value: event | null) => void;
	onBlur?: (value: event | null) => void;
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
	number: number | null;
	errors: { [key?: string]: string };
	secondName: string;
	lastName: string;
	secondLastName: string;
}
export interface FormProps {
	data: FormElements;
	setData: (ReactElement) => void;
}

export interface ValidationPassword {
	minChar: boolean;
	minNum: boolean;
	minSpecialChar: boolean;
	no100Ladrillos: boolean;
	no3Char: boolean;
	no3Num: boolean;
}
