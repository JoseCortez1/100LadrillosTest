import React, { useState } from "react";
import "./CURP.css";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import Input from "../../Components/Input/Input";
import { ButtonProps } from "../../types";
const CURP = () => {
	const navigate = useNavigate();
	const [curp, setCurp] = useState("");
	const validateButtons = (type: ButtonProps["type"]): ButtonProps["type"] =>
		/^[A-Z]{4}[0-9]{6}[HM]{1}[A-Z]{2}[BCDFGHJKLMNPQRSTVWXYZ]{3}([A-Z]{2})?([0-9]{2})?$/.test(
			curp
		)
			? type
			: "disabled";

	return (
		<div className="containerCURP">
			<h1 className="title">¿Cuál es tu CURP?</h1>
			<div>
				<Input
					name="curp"
					value={curp}
					type="text"
					placeholder="CURP"
					onChange={(value) => {
						setCurp(value);
					}}
				/>
			</div>
			<p className="paragraph">
				Consulta tu CURP{" "}
				<a className="link" href="https://www.gob.mx/curp/" target="_blank">
					{" "}
					CURP
				</a>
			</p>
			<p>
				Si soy extranjero
				<a
					className="link"
					target="_blank"
					href="https://www.gob.mx/tramites/ficha/asignacion-de-curp/RENAPO8836">
					¿Cómo solicito mi CURP?{" "}
				</a>
			</p>
			<div className="buttons">
				<Button type={validateButtons("outlined")} onClick={() => navigate(-1)}>
					Anterior
				</Button>
				<Button
					type={validateButtons("contained")}
					onClick={() => navigate("/")}>
					Crear cuenta
				</Button>
			</div>
		</div>
	);
};

export default CURP;
