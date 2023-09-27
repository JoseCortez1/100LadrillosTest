import Main from "../Pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import CreateAccount from "../Pages/CreateAccount";

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Dashboard>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/create_account" element={<CreateAccount />} />
				</Routes>
			</Dashboard>
		</BrowserRouter>
	);
};

export default RoutesApp;