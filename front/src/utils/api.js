export const getAllTours = async (url, method) => {
	const response = await fetch(url, {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
	});

	const json = await response.json();

	return {data: json?.data};
};
