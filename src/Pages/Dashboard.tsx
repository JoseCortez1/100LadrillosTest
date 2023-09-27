import React, { useContext } from "react";
import Header from "../Components/Header/Header";
import { Props } from "../types";
import backgroundImage from "../Assets/backgroundIMG.png";
import hamburguer from "../Assets/HamburgerMenu.png";
import IconLogo from "../Assets/icon100ladrillos.png";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
const Dashboard = ({ children }: Props): React.ReactNode => {
	const { data, setData } = useContext(AppContext);
	return (
		<div className="dashboard">
			<Header />
			<div className="headerMobile">
				<img className="menu" src={hamburguer} alt="Logo 100Ladrillos" />
				<Link to="/" className="logo">
					<img src={IconLogo} alt="Logo 100Ladrillos" />
				</Link>
			</div>
			<section className="imgSide">
				<img className="imageBackground" src={backgroundImage} alt="" />
			</section>
			<main className="main">
				{children}

				{data.showSteps && (
					<div className="containerStep">
						<Link
							to="/"
							className={`${data.step === 1 ? "active" : ""} step`}></Link>
						<Link
							to="/cellphone"
							className={`${data.step === 2 ? "active" : ""} step`}></Link>
						<Link
							to="/"
							className={`${data.step === 3 ? "active" : ""} step`}></Link>
						<Link
							to="/"
							className={`${data.step === 4 ? "active" : ""} step`}></Link>
					</div>
				)}
			</main>
		</div>
	);
};

export default Dashboard;
