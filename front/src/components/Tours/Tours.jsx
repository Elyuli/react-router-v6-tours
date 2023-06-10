import { useEffect, useState } from "react";
import {
	Form,
	Outlet,
	redirect,
	useActionData,
	useLoaderData,
	useNavigation,
} from "react-router-dom";
import { getAllTours } from "../../utils/api";
import Tour from "../Tour/Tour";
import Loading from "../Loading/Loading";

const Tours = () => {
	const { data } = useLoaderData();
	const [tours, setTours] = useState([]);
	const navigation = useNavigation();

	//console.log("tours", tours);

	useEffect(() => {
		if (data) {
			setTours(data);
		}
	}, [data]);

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	if (navigation.state === "loading") {
		return <Loading />;
	}

	if (tours.length === 0) {
		return (
			<main>
				<div className='title'>
					<h2>No Tours Left</h2>
					<Form method='post' action='/'>
						<button className='btn' type='submit'>
							Refresh
						</button>
					</Form>
				</div>
			</main>
		);
	}

	const content =
		tours?.length > 0 ? (
			tours.map((tour) => (
				<Tour key={tour.id} tour={tour} removeTour={removeTour} />
			))
		) : (
			<article>No data</article>
		);

	return (
		<section>
			<div className='title'>
				<h2>Ours Tours</h2>
				<div className='underline'></div>
			</div>
			<div>{content}</div>
			<Outlet />
		</section>
	);
};

export default Tours;

export const toursLoader = async () => {
	const url = "http://localhost:3000/api/v1/tours";
	const method = "GET";
	const tours = await getAllTours(url, method);
	return tours;
};

export const reseToursAction = async () => {
	const url = "http://localhost:3000/api/v1/tours";
	const method = "GET";
	await getAllTours(url, method);
	return redirect("/");
};
