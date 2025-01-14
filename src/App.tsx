import { Navbar } from "./components/shared/Navbar";
import { Transactions } from "./components/shared/Transactions";

export const App = () => {
	return (
		<div className="space-y-5">
			<Navbar />
      <Transactions/>
		</div>
	);
};
