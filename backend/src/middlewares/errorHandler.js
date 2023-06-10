const ERROR_LIST = {
	BadRequestError: (error, res) =>
		res.status(error?.status || 404).json({
			status: "FAILED",
			error: error?.message || error,
		}),
	NotFoundError: (error, res) =>
		res.status(error?.status || 404).json({
			status: "FAILED",
			error: error?.message || error,
		}),
	ReferenceError: (error, res) =>
		res.status(error?.status || 500).json({
			status: "FAILED",
			error: error?.message || error,
		}),
	DefaultError: (error, res) =>
		res.status(error?.status || 500).json({
			status: "FAILED",
			error: error?.message || error,
		}),
};

const errorHandler = (error, req, res, next) => {
	console.log("ERROR_HANDLER", error.message);
	const handler = ERROR_LIST[error.name] || ERROR_LIST.DefaultError;

	handler(error, res);
};

module.exports = { errorHandler };
