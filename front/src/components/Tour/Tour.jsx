import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { Form, redirect } from "react-router-dom";

const Tour = ({ tour, removeTour }) => {
	const [readMore, setReadMore] = useState(false);

	return (
		<article className='single-tour'>
			<img src={tour.image} alt={tour.name} />
			<footer>
				<div className='tour-info'>
					<h4>{tour.name}</h4>
					<h4 className='tour-price'>
						<FaDollarSign />
						{tour.price}
					</h4>
				</div>
				<p>
					{readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
					<button onClick={() => setReadMore(!readMore)}>
						{readMore ? "Show Less" : "Read More"}
					</button>
				</p>
				<button className='delete-btn' onClick={() => removeTour(tour.id)}>
					Not Interesed
				</button>
			</footer>
		</article>
	);
};

export default Tour;
