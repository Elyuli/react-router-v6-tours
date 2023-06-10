const { validationResult } = require("express-validator");
const toursDB = require("../database/toursDB");

const getAllTours = async (req, res, next) => {
	try {
		const allTours = (await toursDB.getAllTours()) || [];

		res.json({
			status: "OK",
			data: allTours,
		});
	} catch (error) {
		next(error);
	}
};

const getOneTour = async (req, res, next) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty())
			throw {
				status: 404,
				name: "BadRequestError",
				message: errors.array()[0].msg,
			};

		const {
			params: { id },
		} = req;

		const tour = await toursDB.getOneTour(id);

		res.json({
			status: "OK",
			data: tour,
		});
	} catch (error) {
		next(error);
	}
};

const createOneTour = async (req, res, next) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty())
			throw {
				status: 404,
				name: "BadRequestError",
				message: errors.array()[0].msg,
			};
		const { body } = req;

		const newTour = await toursDB.createOneTour(body);

		res.status(201).json({
			status: "OK",
			data: newTour,
		});
	} catch (error) {
		next(error);
	}
};

const updateOneTour = async (req, res, next) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty())
			throw {
				status: 404,
				name: "BadRequestError",
				message: errors.array()[0].msg,
			};

		const {
			params: { id },
		} = req;

		const { body } = req;
		body.id = id;

		const updatedTour = await toursDB.updateOneTour(body);

		res.json({
			status: "OK",
			data: updatedTour,
		});
	} catch (error) {
		next(error);
	}
};

const deleteOneTour = async (req, res, next) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty())
			throw {
				status: 404,
				name: "BadRequestError",
				message: errors.array()[0].msg,
			};

		const {
			params: { id },
		} = req;

		await toursDB.deleteOneTour(id);

		res.status(204).json({
			status: "OK",
		});
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllTours,
	getOneTour,
	createOneTour,
	updateOneTour,
	deleteOneTour,
};
