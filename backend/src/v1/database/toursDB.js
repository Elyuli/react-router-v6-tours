const { Tours } = require("../../models/Tours");

const getAllTours = async () => {
	const allTours = await Tours.findAll();

	return allTours;
};

const getOneTour = async (id) => {
	const foundTour = await Tours.findByPk(id);

	if (!foundTour)
		throw {
			status: 400,
			name: "NotFoundError",
			message: "Tour não existe",
		};

	return foundTour;
};

const createOneTour = async (body) => {
	const foundTour = await Tours.findOne({ where: { name: body.name } });

	if (foundTour)
		throw {
			status: 400,
			name: "BadRequestError",
			message: "Tour já existe",
		};

	const newTour = await Tours.create(body);

	return newTour;
};

const updateOneTour = async (changes) => {
	const foundTour = await Tours.findByPk(changes.id);

	if (!foundTour)
		throw {
			status: 400,
			name: "NotFoundError",
			message: "Tour não existe",
		};

	const updatedTour = await foundTour.set(changes).save();

	return updatedTour;
};

const deleteOneTour = async (id) => {
	const foundTour = await Tours.findByPk(id);

	if (!foundTour)
		throw {
			status: 400,
			name: "NotFoundError",
			message: "Tour não existe",
		};

	await foundTour.destroy();

	return;
};

module.exports = {
	getAllTours,
	getOneTour,
	createOneTour,
	updateOneTour,
	deleteOneTour,
};
