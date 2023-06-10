import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root";
import Error from "./pages/Error/Error";
import Tours, { reseToursAction, toursLoader } from "./components/Tours/Tours";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			errorElement: <Error />,
			children: [
				{
					path: "/",
					index: true,
					element: <Tours />,
					loader: toursLoader,
					action: reseToursAction,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
