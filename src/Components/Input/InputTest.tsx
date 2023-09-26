import React, { useState, useEffect } from "react";
import Input from "./Input";

const InputTest = () => {
	const [data, setData] = useState("");
	useEffect(() => {
		console.log("first", data);
	}, [data]);

	return (
		<div>
			<Input
				value={data}
				onChange={setData}
				placeholder="Nombre"
				name="nombre"
				type="text"
			/>
			<Input
				value={data}
				onChange={setData}
				placeholder="Nombre"
				name="nombre"
				type="text"
				icon
			/>
			<Input
				value={data}
				onChange={setData}
				placeholder="Number"
				name="numero"
				type="number"
			/>
			<Input
				value={data}
				onChange={setData}
				placeholder="password"
				name="pass"
				type="password"
			/>
		</div>
	);
};

export default InputTest;
