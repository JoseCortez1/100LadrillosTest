import { ButtonProps } from "../types";

const Button = ({ onClick, children }: ButtonProps) => {
	return <button onClick={onClick}>{children}</button>;
};

export default Button;
