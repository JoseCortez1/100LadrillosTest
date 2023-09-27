import { fetchData } from "./fetchData";

export const validateEmail = async (email: string, password: string) => {
	const response = await fetchData("signUp", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			Accept: "application/json",
		},
		body: JSON.stringify({ email, password }),
	});
	return response;
};
