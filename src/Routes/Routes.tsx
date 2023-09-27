import Main from "../Pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import CellphoneValidation from "../Pages/CellphoneValidation/CellphoneValidation";
import FormUser from "../Pages/FormUser/FormUser";
import CreateAccount from "../Pages/CreateAccount/CreateAccount";
import CURP from "../Pages/CURP/CURP";

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Dashboard>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/cellphone" element={<CellphoneValidation />} />
					<Route path="/confirmUser" element={<CreateAccount />} />
					<Route path="/formUser" element={<FormUser />} />
					<Route path="/curp" element={<CURP />} />
				</Routes>
			</Dashboard>
		</BrowserRouter>
	);
};

export default RoutesApp;
