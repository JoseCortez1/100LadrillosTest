import Main from "../Pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import CreateAccount from "../Pages/CreateAccount";
import CellphoneValidation from "../Pages/CellphoneValidation/CellphoneValidation";
import FormUser from "../Pages/FormUser/FormUser";

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Dashboard>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/cellphone" element={<CellphoneValidation />} />
					<Route path="/confirmUser" element={<CreateAccount />} />
					<Route path="/formUser" element={<FormUser />} />
				</Routes>
			</Dashboard>
		</BrowserRouter>
	);
};

export default RoutesApp;
