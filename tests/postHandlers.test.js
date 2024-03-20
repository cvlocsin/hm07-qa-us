// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "productsList": [
        {
            "id": 1,
            "quantity": 2
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        }
    ]
}

test('status code should be 201', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
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


test('response body should contain the warehouse "Fresh Food"', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
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

	expect(actualResponseBody.wareHouse).toBe("Fresh Food");
});