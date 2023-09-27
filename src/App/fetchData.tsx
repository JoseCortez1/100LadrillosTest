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

	if (data?.code) {
		switch (data.code) {
			case "EMAIL_ADDRESS_ALREADY_REGISTERED":
				alert("El email ya está registrado");
				break;
			case "INVALID_PASSWORD_FORMAT":
				alert("El formato de la contraseña es inválido");
				break;
			case "BAD_REQUEST":
				alert("La solicitud es inválida");
				break;
			case "UNEXPECTED_ERROR":
				alert("Error inesperado");
				break;
			case "UNAUTHORIZED":
			case "INVALID_TOKEN":
				alert("No autorizado");
				break;
			case "TRADER_HAS_NOT_PHONE_NUMBER_YET":
				alert("No tiene un número de teléfono");
				break;
			case "PROFILE_IS_NOT_COMPLETED_YET":
				alert("El perfil no está completo");
				break;
			default:
				alert("Error desconocido");
				break;
		}
		return { id: null };
	}

	if (localStorage.getItem("token") === null) {
		localStorage.setItem("token", data.token);
	}
	return data;
};
