import { ButtonProps } from "../types";

import styled from "styled-components";

const BaseButton = styled.button`
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
	border: none;
	outline: none;
	transition: background-color 0.2s, color 0.2s, border 0.2s;
`;

const NormalButton = styled(BaseButton)`
	background-color: #ff5a60;
	color: #ffffff;

	&:hover {
		background-color: #ff474b;
	}
`;

const ContainedButton = styled(BaseButton)`
	background-color: #eaeaea;
	color: #000;

	&:hover {
		background-color: #dcdcdc;
	}
`;

const OutlinedButton = styled(BaseButton)`
	background-color: #fff9f9;
	color: #ff5a60;
	border: 1px solid #ff5a60;

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

	&:hover {
		background-color: #eaeaea;
		color: #8c8c8c;
	}
`;
const Button = ({ onClick, children, type = "normal" }: ButtonProps) => {
	const getButtonStyle = () => {
		switch (type) {
			case "contained":
				return ContainedButton;
			case "outlined":
				return OutlinedButton;
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
