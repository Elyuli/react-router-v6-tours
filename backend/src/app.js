const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: path.join(__dirname, "config", ".env") });
const { sequelize } = require("./config/dbConnection");
const { errorHandler } = require("./middlewares/errorHandler");

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/tours", require("./v1/routes/tourRoutes"));

//error handler middleware
app.use(errorHandler);

const server = async () => {
	try {
		await sequelize.sync({ force: false });
		app.listen(PORT, () =>
			console.log(`Servidor correndo en http://localhost:${PORT}`)
		);
	} catch (error) {
		console.log("Error", error.message);
	}
};

server();
