import { useEffect, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { FormElements } from "../types";
import Input from "../Components/Input/Input";
import facebookIcon from "../Assets/facebook.png";
import googleIcon from "../Assets/google.png";
import microsoftIcon from "../Assets/microsoft.png";
import Icon from "../Components/Icon/Icon";
import "./Main.css";
import ValidatorPassword from "../Components/Validator/ValidatorPassword";
import Button from "../Components/Button/Button";
import { Link } from "react-router-dom";
import { validateEmail } from "../App/EmailServices";
const Main = () => {
	const { data, setData } = useContext(AppContext);
	useEffect(() => {
		setData((prev: FormElements) => ({ ...prev, step: 1 }));
	}, []);
	const validateButton = (): boolean => {
		const flag =
			data.password === data.confirmPassword &&
			!data.errors?.email &&
			data.email !== "" &&
			data.password !== "";

		return flag;
	};

	return (
		<div className="containerMain">
			<div
				className={`main__container_text ${
					data.showSteps ? "margin_top" : ""
				}`}>
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
					icon
					value={data.email}
					onBlur={({ target }): void => {
						const regex = new RegExp(
							/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
						);
						console.log(target.value, regex.test(target.value));
						if (!regex.test(target.value)) {
							setData((prev: FormElements) => ({
								...prev,
								errors: { ...prev.errors, email: true },
							}));
						} else {
							setData((prev: FormElements) => ({
								...prev,
								errors: { ...prev.errors, email: false },
							}));
						}
					}}
					onChange={(value) =>
						setData((prev: FormElements) => ({
							...prev,
							email: value,
							showSteps: false,
							touched: true,
						}))
					}
				/>

				{data.errors?.email && (
					<span className="error">Ingresa un correo electrónico válido</span>
				)}
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

			{!data.showSteps || data.touched ? (
				//Validaor password

				<>
					<ValidatorPassword password={data.password} />
					<div>
						<Input
							type="password"
							icon
							label="Confirmas tu contraseña"
							name="passwordConfirm"
							value={data.confirmPassword}
							onChange={(value) =>
								setData((prev: FormElements) => ({
									...prev,
									confirmPassword: value,
									showSteps: false,
									touched: true,
								}))
							}
						/>
					</div>
					<Link to="/cellphone">
						<Button
							type={validateButton() ? "contained" : "disabled"}
							onClick={() => {
								console.log(validateEmail(data.email, data.password));
								setData((prev: FormElements) => ({
									...prev,
									step: 2,
									showSteps: true,
								}));
							}}>
							Siguiente
						</Button>
					</Link>
				</>
			) : (
				//social media
				<div className="socialAndRegister">
					<h2 className="register">
						<span className="register__line"></span>
						<p className="register__text">o registrate con:</p>
						<span className="register__line"></span>
					</h2>
					<div className="iconsMedia">
						<Icon src={googleIcon} alt="google icon" type="socialMedia" />
						<Icon src={microsoftIcon} alt="microsoft icon" type="socialMedia" />
						<Icon src={facebookIcon} alt="Facebook icons" type="socialMedia" />
					</div>
				</div>
			)}
		</div>
	);
};

export default Main;
