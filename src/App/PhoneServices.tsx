const fetchData = async (url: string, body: object) => {
	const response = await fetch(
		"http://frontend-recruiting.100ladrillos.com/" + url,
		body
	);
	const data = await response.json();
	return data;
};

export const validatePhone = async (phone: string) => {
	console.log("phone", phone);
	const response = await fetchData("api/phoneNumber", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			Accept: "application/json",
		},
		body: JSON.stringify({ number: phone }),
	});
	console.log("response", response);
};

export const validateEmail = async (email: string, password: string) => {
	const response = await fetchData("api/signUp", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			Accept: "application/json",
		},
		body: JSON.stringify({ email, password }),
	});
	console.log("response", response);
	return response;
};
