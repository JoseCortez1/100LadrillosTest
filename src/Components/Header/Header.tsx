import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import IconLogo from "../../assets/100ladrillos.png";
import Button from "../Button/Button";
import { FormProps } from "../../types";
import { Link } from "react-router-dom";
const Header = () => {
	const { data } = useContext(AppContext);

	return (
		<header className="headerContainer">
			<Link to="/">
				<img className="logo" src={IconLogo} alt="Logo 100Ladrillos" />
			</Link>
			<div className="buttons">
				<Button onClick={() => {}}>Cómo funciona</Button>
				{data.touched && data.step == 1 ? (
					<>
						<Button type="outlined-rounded" onClick={() => {}}>
							Entrar
						</Button>
						<Button type="contained-rounded" onClick={() => {}}>
							Registrarme
						</Button>
					</>
				) : (
					<Button onClick={() => {}}>Entrar</Button>
				)}
			</div>
		</header>
	);
};

export default Header;
