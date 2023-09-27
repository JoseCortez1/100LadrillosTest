import React, { useContext } from "react";
import Header from "../Components/Header/Header";
import { Props } from "../types";
import backgroundImage from "../Assets/backgroundIMG.png";
import { AppContext } from "../Context/AppContext";
const Dashboard = ({ children }: Props): React.ReactNode => {
	const { data, setData } = useContext(AppContext);
	return (
		<div className="dashboard">
			<Header />
			<section className="imgSide">
				<img className="imageBackground" src={backgroundImage} alt="" />
			</section>
			<main className="main">
				{children}

				{data.showSteps && (
					<div className="containerStep">
						<div className={`${data.step === 1 ? "active" : ""} step`}></div>
						<div className={`${data.step === 2 ? "active" : ""} step`}></div>
						<div className={`${data.step === 3 ? "active" : ""} step`}></div>
						<div className={`${data.step === 4 ? "active" : ""} step`}></div>
					</div>
				)}
			</main>
		</div>
	);
};

export default Dashboard;
