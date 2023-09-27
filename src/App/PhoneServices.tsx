import { fetchData } from "./fetchData";

export const validatePhone = async (phone: string) => {
	const response = await fetchData("phoneNumber", {
		method: "POST",
		body: JSON.stringify({ number: phone }),
	});

	return response;
};

export const validatePIN = async (pin: string) => {
	const response = await fetchData("phoneNumber/verify", {
		method: "POST",
		body: JSON.stringify({ token: pin }),
	});
	return response;
};
