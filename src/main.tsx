import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.tsx";
import AppProvider from "./Context/AppContext.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>
);
