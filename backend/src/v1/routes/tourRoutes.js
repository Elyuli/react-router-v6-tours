const router = require("express").Router();
const { body, param } = require("express-validator");
const {
	getAllTours,
	createOneTour,
	getOneTour,
	updateOneTour,
	deleteOneTour,
} = require("../controllers/toursControllers");

router
	.route("/")
	.get(
		/*Controller */
		getAllTours
	)
	.post(
		/*Validations*/
		body("name")
			.notEmpty()
			.withMessage("O campo name não pode estar vazio")
			.isString()
			.withMessage("O campo name tem que ser de tipo String")
			.isLength({ min: 3, max: 50 })
			.withMessage("O campo name tem que estar entre 3 e 50 caracteres"),
		body("info")
			.notEmpty()
			.withMessage("O campo info não pode estar vazio")
			.isString()
			.withMessage("O campo info tem que ser de tipo String")
			.isLength({ min: 3 })
			.withMessage("O campo info tem que ter como mínimo 3 caracteres"),
		body("image")
			.notEmpty()
			.withMessage("O campo image não pode estar vazio")
			.isString()
			.withMessage("O campo image tem que ser de tipo String")
			.isLength({ min: 13 })
			.withMessage("O campo image tem que ter como mínimo 13 caracteres"),
		body("price")
			.notEmpty()
			.withMessage("O campo price não pode estar vazio")
			.isFloat()
			.withMessage("O campo price tem que ser de tipo Float"),
		/*Controller */
		createOneTour
	);

router
	.route("/:id")
	.get(
		param("id")
			.notEmpty()
			.withMessage("O campo id não pode estar vazio")
			.isInt()
			.withMessage("O campo id tem que ser de tipo Int"),
		/*Controller*/
		getOneTour
	)
	.put(
		/*Validations */
		param("id")
			.notEmpty()
			.withMessage("O campo id não pode estar vazio")
			.isInt()
			.withMessage("O campo id tem que ser de tipo Int"),
		body("name")
			.notEmpty()
			.withMessage("O campo name não pode estar vazio")
			.isString()
			.withMessage("O campo name tem que ser de tipo String")
			.isLength({ min: 3, max: 50 })
			.withMessage("O campo name tem que estar entre 3 e 50 caracteres"),
		body("info")
			.notEmpty()
			.withMessage("O campo info não pode estar vazio")
			.isString()
			.withMessage("O campo info tem que ser de tipo String")
			.isLength({ min: 3 })
			.withMessage("O campo info tem que ter como mínimo 3 caracteres"),
		body("image")
			.notEmpty()
			.withMessage("O campo image não pode estar vazio")
			.isString()
			.withMessage("O campo image tem que ser de tipo String")
			.isLength({ min: 13 })
			.withMessage("O campo image tem que ter como mínimo 13 caracteres"),
		body("price")
			.notEmpty()
			.withMessage("O campo price não pode estar vazio")
			.isFloat()
			.withMessage("O campo price tem que ser de tipo Float"),
		/*Controller*/
		updateOneTour
	)
	.delete(
		/*Validations */
		param("id")
			.notEmpty()
			.withMessage("O campo id não pode estar vazio")
			.isInt()
			.withMessage("O campo id tem que ser de tipo Int"),
		/*Controller*/
		deleteOneTour
	);

module.exports = router;
