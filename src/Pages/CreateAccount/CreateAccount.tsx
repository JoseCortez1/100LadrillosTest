import React, { useEffect, useContext } from "react";

import Done from "../../Assets/Done.png";
import "./CreateAccount.css";
import { FormElements } from "../../types";
import { AppContext } from "../../Context/AppContext";
import Button from "../../Components/Button/Button";
const CreateAccount = () => {
	const { data, setData } = useContext(AppContext);
	useEffect(() => {
		setData((prev: FormElements) => ({ ...prev, step: 4 }));
	}, []);
	const getName = () => {
		let name = data.firstName;
		if (data.secondName) {
			name = name + " " + data.secondName + " ";
		}
		name = name + data.lastName;
		if (data.secondLastName) {
			name = name + " " + data.secondLastName;
		}
		return name;
	};
	return (
		<div className="containerCreateAccount">
			<img className="containerCreateAccount__done" src={Done} alt="Hecho" />
			<h1 className="title">Haz creado una cuenta</h1>
			<p className="paragraph">Tu numero de cliente es {data.id}</p>
			<p className="paragraph name">
				{getName()}
				<span className="email">{data.email}</span>
				<span className="number">{data.number}</span>
			</p>

			<Button type="outline">Iniciar sesión</Button>
		</div>
	);
};

export default CreateAccount;
