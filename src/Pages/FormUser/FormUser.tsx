import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import { ButtonProps, FormElements } from "../../types";
import Input from "../../Components/Input/Input";
import "./FormUser.css";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
const FormUser = () => {
	const { data, setData } = useContext(AppContext);
	const navigate = useNavigate();

	useEffect(() => {
		setData((prev: FormElements) => ({ ...prev, step: 3 }));
	}, []);
	const validateButtons = (
		buttonType: ButtonProps["type"]
	): ButtonProps["type"] => {
		const flag = data.firstName !== "" && data.lastName !== "";
		return flag ? buttonType : "disabled";
	};

	const handleChanges = (value: string, name: string) => {
		setData((prev: FormElements) => ({ ...prev, [name]: value }));
	};
	return (
		<div className="containerFormUser">
			<h1 className="title">¿Cómo te llamas?</h1>
			<div className="inputForm">
				<Input
					type="text"
					label="Primer nombre"
					name="firstName"
					value={data.firstName}
					onChange={(value) => handleChanges(value, "firstName")}
				/>
			</div>
			<div className="inputForm">
				<Input
					type="text"
					label="Segundo nombre (Opcional)"
					name="secondName"
					value={data.secondName}
					onChange={(value) => handleChanges(value, "secondName")}
				/>
			</div>
			<div className="inputForm">
				<Input
					type="text"
					label="Primer apellido"
					name="lastName"
					value={data.lastName}
					onChange={(value) => handleChanges(value, "lastName")}
				/>
			</div>
			<div className="inputForm">
				<Input
					type="text"
					label="Segundo apellido (Opcional)"
					name="secondLastName"
					value={data.secondLastName}
					onChange={(value) => handleChanges(value, "secondLastName")}
				/>
			</div>
			<div className="buttons">
				<Button
					type={validateButtons("outlined")}
					onClick={() => navigate("/cellphone")}>
					Anterior
				</Button>
				<Button
					type={validateButtons("contained")}
					onClick={() => navigate("/confirmUser")}>
					Siguiente
				</Button>
			</div>
		</div>
	);
};

export default FormUser;
