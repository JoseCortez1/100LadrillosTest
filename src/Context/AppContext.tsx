import React, { useState } from "react";
import { FormElements } from "../types";

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
	const [data, setData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		touched: false,
		allCompleted: false,
		number: null,
		step: 1,
		showSteps: true,
		errors: {},
	});

	return (
		<AppContext.Provider value={{ data, setData }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
