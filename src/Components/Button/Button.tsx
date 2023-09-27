import styled from "styled-components";
import { ButtonProps } from "../../types";

const BaseButton = styled.button`
	font-size: 16px;
	font-weight: bold;
	padding: 0.875rem 2rem;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
	border: none;
	outline: none;
	background-color: white;
	transition: background-color 0.2s, color 0.2s, border 0.2s;
	&:focus {
		outline: 1px solid #ff5a60;
	}
`;

const NormalButton = styled(BaseButton)`
	color: #ff5a60;
	&:hover {
		background-color: #d0d0d0;
	}
`;

const ContainedButton = styled(BaseButton)`
	background-color: #ff6c6c;
	color: #ffffff;
	border-radius: 4px;
	font-size: 16px;
	font-weight: normal;

	&:hover {
		background-color: #fc5151;
	}
`;
const OutlinedButton = styled(BaseButton)`
	background-color: white;
	color: #ff5a60;
	border-radius: 4px;
	border: 1px solid #ff5a60;
	font-size: 16px;
	font-weight: normal;

	&:hover {
		background-color: #ffe2e3;
		border: 1px solid #ff474b;
	}
`;
const ContainedButtonRounded = styled(BaseButton)`
	background-color: #ff6c6c;
	color: white;
	border-radius: 30px;
	font-size: 16px;
	font-weight: normal;

	&:hover {
		background-color: #fc5151;
	}
`;
const OutlinedButtonRounded = styled(BaseButton)`
	background-color: #fff9f9;
	border-radius: 30px;
	color: #ff5a60;
	border: 1px solid #ff5a60;
	font-size: 16px;
	font-weight: normal;

	&:hover {
		background-color: #fff6f6;
		border: 1px solid #ff474b;
		color: #ff474b;
	}
`;

const DisabledButton = styled(BaseButton)`
	background-color: #eaeaea;
	color: #8c8c8c;
	cursor: not-allowed;
	outline: none;
	&:focus {
		outline: none;
	}
`;
const Button = ({ onClick, children, type = "normal" }: ButtonProps) => {
	const getButtonStyle = () => {
		switch (type) {
			case "contained":
				return ContainedButton;
			case "contained-rounded":
				return ContainedButtonRounded;
			case "outlined":
				return OutlinedButton;
			case "outlined-rounded":
				return OutlinedButtonRounded;
			case "disabled":
				return DisabledButton;
			default:
				return NormalButton;
		}
	};

	const ButtonStyle = getButtonStyle();

	return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};

export default Button;
