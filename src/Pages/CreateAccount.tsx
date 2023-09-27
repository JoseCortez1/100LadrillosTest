import React, { useEffect, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { FormElements } from "../types";

const CreateAccount = () => {
	const { data, setData } = useContext(AppContext);
	useEffect(() => {
		setData((prev: FormElements) => ({ ...prev, step: 4 }));
	}, []);

	return <div>CreateAccount</div>;
};

export default CreateAccount;
