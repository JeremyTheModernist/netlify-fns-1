function logSuccess() {
	console.log("successfully called your Netlify Function");
}

exports.handler = async (event, context, callback) => {
	const subject = event.queryStringParameters.name || "world";
	logSuccess();
	return {
		statusCode: 200,
		body: `Hello ${subject}`
	};
};
