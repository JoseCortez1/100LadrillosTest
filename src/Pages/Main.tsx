import { useEffect, useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { FormElements } from "../types";
import Input from "../Components/Input/Input";
import facebookIcon from "../Assets/facebook.png";
import googleIcon from "../Assets/google.png";
import microsoftIcon from "../Assets/microsoft.png";
import Icon from "../Components/Icon/Icon";
import "./Main.css";
const Main = () => {
	const { data, setData } = useContext(AppContext);

	return (
		<>
			<div
				className={`main__container_text ${data.showStep ? "" : "margin_top"}`}>
				<h1>Crea tu cuenta </h1>
				<p>
					Al aceptar creas una cuenta en 100 Ladrillos aceptas nuestro{" "}
					<a>Aviso de privacidad, derechos Arco</a>y nuestros{" "}
					<a href="">Terminos y condiciones</a>
				</p>
			</div>
			<div className="main__container__form">
				<Input
					type="email"
					label="¿Cuál es tu correo electrónico?"
					name="email"
					value={data.email}
					onChange={(value) =>
						setData((prev: FormElements) => ({
							...prev,
							email: value,
							showSteps: false,
							touched: true,
						}))
					}
				/>
				<Input
					type="password"
					icon
					label="Ingresa una contraseña"
					name="password"
					value={data.password}
					onChange={(value) =>
						setData((prev: FormElements) => ({
							...prev,
							password: value,
							showSteps: false,
							touched: true,
						}))
					}
				/>
			</div>

			{!data.showSteps ? (
				//Validaor password
				<div className="validatorPassword">Validator password</div>
			) : (
				//social media
				<div className="socialAndRegister">
					<h2 className="register">
						<span className="register__line"></span>
						<p className="register__text">Registrate con</p>
						<span className="register__line"></span>
					</h2>
					<div className="iconsMedia">
						<Icon src={googleIcon} alt="google icon" type="socialMedia" />
						<Icon src={microsoftIcon} alt="microsoft icon" type="socialMedia" />
						<Icon src={facebookIcon} alt="Facebook icons" type="socialMedia" />
					</div>
				</div>
			)}
		</>
	);
};

export default Main;
