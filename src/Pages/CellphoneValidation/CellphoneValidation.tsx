import React, { useRef, useContext, useEffect, useState } from "react";

import Cross from "../../Assets/Cross.png";
import Cell from "../../Assets/CodePhone.png";
import "./CellphoneValidation.css";
import Input from "../../Components/Input/Input";
import { AppContext } from "../../Context/AppContext";
import { ButtonProps, FormElements } from "../../types";
import { useNavigate } from "react-router-dom";

import Button from "../../Components/Button/Button";
import { validatePhone } from "../../App/PhoneServices";
const CellphoneValidation = () => {
	const { data, setData } = useContext(AppContext);
	const [codeValidation, setCodeValidation] = useState({
		first: "",
		second: "",
		third: "",
		fourth: "",
	});
	useEffect(() => {
		setData((prev: FormElements) => ({ ...prev, step: 2 }));
	}, []);

	const navigate = useNavigate();
	const modalRef = useRef();
	const openModal = () => {
		console.log(modalRef.current);
		if (modalRef.current.classList.contains("hidden")) {
			modalRef.current.classList.remove("hidden");
		} else {
			modalRef.current.classList.add("hidden");
		}
	};
	const validateButton = (
		buttonType: ButtonProps["type"]
	): ButtonProps["type"] => {
		const flag = data.number !== null && data.number.toString().length === 10;
		return flag ? buttonType : "disabled";
	};
	const validatePINButtons = (
		buttonType: ButtonProps["type"]
	): ButtonProps["type"] => {
		const flag =
			codeValidation.first !== "" &&
			codeValidation.second !== "" &&
			codeValidation.third !== "" &&
			codeValidation.fourth !== "";
		return flag ? buttonType : "disabled";
	};

	const handleChanges = ({ target }) => {
		const { name, value } = target;
		console.log(name, value);
		setCodeValidation((prev) => ({ ...prev, [name]: value }));
	};
	return (
		<section className="containerCellphoneValidation">
			<div ref={modalRef} className="modal hidden">
				<div className="modal-content">
					<span className="closeModal" onClick={openModal}>
						<img src={Cross} alt="cerrar modal" />{" "}
					</span>
					<div className="contentModal">
						<h1 className="notBold">Verifica tu teléfono celular</h1>
						<img src={Cell} alt="teléfono" />

						<p className="paragraph firstMessage">
							Hemos enviado un código único de 4 digítos a tú teléfono celular
						</p>
						<p className=" paragraph phoneNumber">{data?.number}</p>

						<p className=" paragraph expireCode">
							Tu código expira en 2 minutos.
						</p>
						<div className="boxesNumber">
							<input
								type="text"
								className="boxNumber"
								name="first"
								value={codeValidation.first}
								onChange={handleChanges}
							/>
							<input
								type="text"
								className="boxNumber"
								name="second"
								value={codeValidation.second}
								onChange={handleChanges}
							/>
							<input
								type="text"
								className="boxNumber"
								name="third"
								value={codeValidation.third}
								onChange={handleChanges}
							/>
							<input
								type="text"
								className="boxNumber"
								name="fourth"
								value={codeValidation.fourth}
								onChange={handleChanges}
							/>
						</div>

						<p className="paragraph notArrive">
							¿Aún no te llega tu código? ó ¿Tu código expiró? Intenta enviarlo
							nuevamente
						</p>
						<h2 className="subtitle">Renvíar SMS</h2>

						<div className="buttonsCellphone">
							<Button type="outlined" onClick={openModal}>
								Cancelar
							</Button>

							<Button
								type={validatePINButtons("contained")}
								onClick={() => {
									navigate("/formUser");
									openModal();
								}}>
								Validar código
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h1 className="title">Cual es su teléfono celular?</h1>
				<Input
					icon
					placeholder="1234-5678"
					type="number"
					name="number"
					value={data.number}
					onChange={(value) =>
						setData((prev: FormElements) => ({ ...prev, number: value }))
					}
				/>
			</div>
			<div className="buttonsCellphone">
				<Button type={validateButton("outlined")} onClick={() => navigate("/")}>
					Anterior
				</Button>

				<Button
					type={validateButton("contained")}
					onClick={() => {
						validatePhone(data.number);
						openModal();
					}}>
					Siguiente
				</Button>
			</div>
		</section>
	);
};

export default CellphoneValidation;
