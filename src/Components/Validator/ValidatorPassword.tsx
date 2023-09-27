import React, { useState, useEffect } from "react";
import { ValidationPassword } from "../../types";
import "./ValidatorPassword.css";
const initialState = {
	minChar: false,
	minNum: false,
	minSpecialChar: false,
	no100Ladrillos: false,
	no3Char: false,
	no3Num: false,
};
const ValidatorPassword = ({ password = "" }) => {
	const [active, setActive] = useState<ValidationPassword>(initialState);
	useEffect(() => {
		if (password === "") {
			setActive(initialState);
			return;
		}
		if (password.length >= 6)
			setActive((prev: ValidationPassword) => ({ ...prev, minChar: true }));
		else setActive((prev: ValidationPassword) => ({ ...prev, minChar: false }));

		if (password.match(/\d+/g))
			setActive((prev: ValidationPassword) => ({ ...prev, minNum: true }));
		else setActive((prev: ValidationPassword) => ({ ...prev, minNum: false }));

		if (password.match(/[!@#$%^&*(),.?":{}|<>]/g))
			setActive((prev: ValidationPassword) => ({
				...prev,
				minSpecialChar: true,
			}));
		else
			setActive((prev: ValidationPassword) => ({
				...prev,
				minSpecialChar: false,
			}));

		if (!password.includes("100Ladrillos"))
			setActive((prev: ValidationPassword) => ({
				...prev,
				no100Ladrillos: true,
			}));
		else
			setActive((prev: ValidationPassword) => ({
				...prev,
				no100Ladrillos: false,
			}));

		if (/^(?![\s\S]*?(\w)\1{4})/.test(password))
			setActive((prev: ValidationPassword) => ({ ...prev, no3Char: true }));
		else setActive((prev: ValidationPassword) => ({ ...prev, no3Char: false }));

		if (
			!/(012|123|234|345|456|567|678|789|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i.test(
				password
			)
		)
			setActive((prev: ValidationPassword) => ({ ...prev, no3Num: true }));
		else setActive((prev: ValidationPassword) => ({ ...prev, no3Num: false }));
	}, [password]);

	return (
		<section className="containerValidator">
			<p className="paragraph">
				Por razones de seguridad tu contraseña debe tener las siguientes
				carateristicas:{" "}
			</p>
			<div className="listOfChecks">
				<div className="itemCheck">
					<span className={`check ${active.minChar ? "active" : ""}`}></span>
					<p className="paragraph">
						Mínimo 6 caracteres (letras, números y caracteres especiales)
					</p>
				</div>
				<div className="itemCheck">
					<span className={`check ${active.minNum ? "active" : ""}`}></span>
					<p className="paragraph">Mínimo 1 número.</p>
				</div>
				<div className="itemCheck">
					<span
						className={`check ${active.minSpecialChar ? "active" : ""}`}></span>
					<p className="paragraph">
						Mínimo 1 de estos caracteres especiales !”#$%&/()=?¿^*@‚[]{};:_{">"}
						{"<"},.-|`+.
					</p>
				</div>
				<div className="itemCheck">
					<span
						className={`check ${active.no100Ladrillos ? "active" : ""}`}></span>
					<p className="paragraph">No tener la frase “100Ladrillos”.</p>
				</div>
				<div className="itemCheck">
					<span className={`check ${active.no3Char ? "active" : ""}`}></span>
					<p className="paragraph">
						No tener mas de 3 caracteres idénticos en forma consecutiva (ej:
						aaa).
					</p>
				</div>
				<div className="itemCheck">
					<span className={`check ${active.no3Num ? "active" : ""}`}></span>
					<p className="paragraph">
						No tener mas de 3 caracteres numéricos y/o letras en forma
						secuencial (ej: 123).
					</p>
				</div>
			</div>
		</section>
	);
};

export default ValidatorPassword;
