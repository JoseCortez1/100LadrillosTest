import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { InputProps } from "../../types";
import trashIcon from "../../Assets/Trash.png";
import enabledEye from "../../Assets/Visibility.png";
import disabledEye from "../../Assets/VisibilityOff.png";
import Icon from "../Icon/Icon";

const TYPES_INPUT = {
	TEXT: "text",
	TEXT_ICON: "text",
	NUMBER_ICON: "number",
	NUMBER: "number",
	PASSWORD: "password",
	EMAIL: "email",
};

const InputBase = styled.input`
	width: 320px;
	height: 40px;
	background-color: #ffffff;
	border: 1px solid #e5e5e5;
	box-sizing: border-box;
	border-radius: 4px;
	padding: 10px 8px;
	color: #3e3e3e;
	&:placeholder {
		color: #bdbcbc;
	}
`;
const InputBaseIcon = styled(InputBase)`
	width: 320px;
	height: 40px;
	background-color: #ffffff;
	border: none;
	box-sizing: border-box;
	border-radius: 4px;
	color: #3e3e3e;
	&:placeholder {
		color: #bdbcbc;
	}
`;

const ContainerNotIcon = styled.div`
	width: 320px;
	height: 40px;
	margin-top: 8px;
`;
const ContainerIcon = styled(ContainerNotIcon)`
	width: 310px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 8px 0 0;

	position: relative;
	border: 1px solid #e5e5e5;
	boxizing: border-box;
`;

const ContainerLabel = styled.label`
	padding-bottom: 8px;
	font-size: 16px;
	color: #3e3e3e;
`;

const Input = ({
	value,
	onChange,
	placeholder,
	icon = false,
	type = "text",
	name,
	label = "",
}: InputProps) => {
	const [showPassword, setShowPassword] = useState(false);
	const [cleaningInput, setCleaningInput] = useState(false);
	const validateIcon = () => icon || type === TYPES_INPUT.PASSWORD;
	const getInputStyle = () => {
		switch (type) {
			case TYPES_INPUT.TEXT:
			case TYPES_INPUT.PASSWORD:
				return validateIcon() ? InputBaseIcon : InputBase;
			default:
				return InputBase;
		}
	};

	const getContainerStyle = () => {
		return validateIcon() ? ContainerIcon : ContainerNotIcon;
	};
	useEffect(() => {
		if (cleaningInput) {
			onChange("");
			setCleaningInput(false);
		}
	}, [cleaningInput]);
	const ContainerStyle = getContainerStyle();
	const InputStyle = getInputStyle();

	return (
		<>
			{label && <ContainerLabel>{label}</ContainerLabel>}
			<ContainerStyle>
				<InputStyle
					type={showPassword ? TYPES_INPUT.TEXT : type}
					value={value}
					name={name}
					onChange={({ target }) => onChange(target.value)}
					placeholder={placeholder}
				/>
				<div className="containerIcon">
					{type === TYPES_INPUT.PASSWORD && (
						<Icon
							onClick={() => setShowPassword((prev: boolean) => !prev)}
							src={showPassword ? enabledEye : disabledEye}
							alt={showPassword ? "Ocultar" : "Mostrar"}
						/>
					)}
					{type === TYPES_INPUT.TEXT && (
						<Icon
							onClick={() => setCleaningInput((prev: boolean) => !prev)}
							src={trashIcon}
							alt="Eliminar"
						/>
					)}
				</div>
			</ContainerStyle>
		</>
	);
};

export default Input;
