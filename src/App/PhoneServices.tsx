import { fetchData } from "./fetchData";

export const validatePhone = async (phone: string) => {
	console.log("phone", phone);
	const response = await fetchData("phoneNumber", {
		method: "POST",
		body: JSON.stringify({ number: phone }),
	});
	console.log("response", response);
	return response;
};

export const validatePIN = async (pin: string) => {
	const response = await fetchData("phoneNumber/verify", {
		method: "POST",
		body: JSON.stringify({ token: pin }),
	});
	console.log("response", response);
	return response;
};
