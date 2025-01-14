import { Outlet } from "react-router";
import { Navbar } from "./components/shared/Navbar";

export const App = () => {
	return (
		<div className="p-8 mx-auto space-y-8">
			<Navbar />
			<Outlet />
		</div>
	);
};
