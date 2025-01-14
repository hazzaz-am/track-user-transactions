import { MdDateRange } from "react-icons/md";
import { Button } from "../../ui/button";

export const PaymentCard = () => {
	return (
		<div className="border p-4 rounded-lg">
			<h4 className="font-medium">$ 1000</h4>
			<p className="text-sm text-gray-500 capitalize">Project Payment</p>
			<div className="flex items-center gap-6">
				<div className="flex items-center gap-2 text-gray-500 text-sm">
					<MdDateRange />
					<p>2025-01-14</p>
				</div>
				<Button size={"sm"}>Pending</Button>
			</div>
		</div>
	);
};
