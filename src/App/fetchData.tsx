export const fetchData = async (url: string, body: object) => {
	const getToken = localStorage.getItem("token") || "";
	const response = await fetch(
		"http://frontend-recruiting.100ladrillos.com/api/" + url,
		{
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				Accept: "application/json",
				Authorization: `bearer ${getToken}`,
			},
			...body,
		}
	);
	const data = await response.json();
	if (localStorage.getItem("token") === null) {
		localStorage.setItem("token", data.token);
	}
	return data;
};
