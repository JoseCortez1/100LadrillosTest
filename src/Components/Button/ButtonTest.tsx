import React, { useState } from "react";
import Button from "./Button";

const ButtonTest = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<>
				<Button onClick={() => setCount(count + 1)}>Normal</Button>
				<Button type="outlined" onClick={() => setCount(count + 1)}>
					Click me! outlined
				</Button>
				<Button type="outlined-rounded" onClick={() => setCount(count + 1)}>
					Click me! outlined-rounded
				</Button>
				<Button type="contained" onClick={() => setCount(count + 1)}>
					Click me! contained
				</Button>
				<Button type="contained-rounded" onClick={() => setCount(count + 1)}>
					Click me! contained-rounded
				</Button>
				<Button type="disabled" onClick={() => setCount(count + 1)}>
					Click me! disabled
				</Button>
			</>
		</div>
	);
};

export default ButtonTest;
