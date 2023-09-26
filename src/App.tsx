import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";

function App() {
	const [count, setCount] = useState(0);

	/* 
  nothing
	- [ ] contained
	- [ ] outlined
	- [ ] disabled
  */
	return (
		<>
			<Button onClick={() => setCount(count + 1)}>Click me! outlined</Button>
			<Button type="outlined" onClick={() => setCount(count + 1)}>
				Click me! filled
			</Button>
			<Button type="contained" onClick={() => setCount(count + 1)}>
				Click me! filled
			</Button>
			<Button type="disabled" onClick={() => setCount(count + 1)}>
				Click me! filled
			</Button>
		</>
	);
}

export default App;
