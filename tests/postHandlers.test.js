// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "cardId":2,
    "name":"projectSeven"
}

test('status code should be 201', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=2&name=projectSeven`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualStatusCode).toBe(201);
});


test('response body should contain the kit name "projectSeven', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=2&name=projectSeven`, {
			method: 'POST', 
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody.name).toBe("projectSeven");
});