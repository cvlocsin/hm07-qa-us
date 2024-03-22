// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "name": "project7_modifiedKit",
    "productsList": [
        {
            "id": 1,
            "quantity": 4
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 1
        }
    ]
}

test('status code should be 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualStatusCode).toBe(200);
});


test('response body should contain confirmation that change has been made', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody.ok).toBe(true);
});

