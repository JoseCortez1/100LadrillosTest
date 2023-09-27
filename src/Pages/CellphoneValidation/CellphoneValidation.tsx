import React, { useRef, useContext, useEffect } from "react";

import Cross from "../../Assets/Cross.png";

import "./CellphoneValidation.css";
import Input from "../../Components/Input/Input";
import { AppContext } from "../../Context/AppContext";
import { ButtonProps, FormElements } from "../../types";
import Button from "../../Components/Button/Button";
const CellphoneValidation = () => {
	const { data, setData } = useContext(AppContext);
	useEffect(() => {
		setData((prev: FormElements) => ({ ...prev, step: 2 }));
	}, []);

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
		const flag =
			data.number !== null &&
			data.number.toString().length > 8 &&
			data.number.toString().length < 13;
		return flag ? buttonType : "disabled";
	};

	return (
		<section className="containerCellphoneValidation">
			<div ref={modalRef} className="modal hidden">
				<div className="modal-content">
					<span className="closeModal" onClick={openModal}>
						<img src={Cross} alt="" />{" "}
					</span>
					<p>Some text in the Modal..</p>
					<p>Some text in the Modal..</p>
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
				<Button type={validateButton("outlined")} onClick={openModal}>
					Anterior
				</Button>
				<Button type={validateButton("contained")} onClick={openModal}>
					Siguiente
				</Button>
			</div>
		</section>
	);
};

export default CellphoneValidation;
