const validate = (schema) => (req, res, next) => {
	try {
		schema.parse({
			body: req.body,
			query: req.query,
			params: req.params,
		});

		next();
	} catch (err) {
		console.log(err);
		return res.status(400).send(err.errors);
	}
};
//TODO: Write a function called Authenticate and Validate so that, if there's a request that needs to be authenticated before it is validated for execution, it may be passed from this middleware
module.exports = { validate };
