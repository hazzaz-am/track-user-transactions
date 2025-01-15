import { MdDateRange } from "react-icons/md";
import { Button } from "../../ui/button";
import { Badge } from "@/components/ui/badge";

export const PaymentCard = ({ transaction }) => {
	return (
		<div className="border p-4 rounded-lg">
			<h4 className="font-medium">$ {transaction.amount}</h4>
			<p className="text-sm text-gray-500 capitalize">{transaction.title}</p>
			<div className="flex items-center gap-6">
				<div className="flex items-center gap-2 text-gray-500 text-sm">
					<MdDateRange />
					<p>{transaction.createdAt}</p>
				</div>
				<Badge
					className={`${transaction.status === "PENDING" && "bg-yellow-500"} ${
						transaction.status === "REJECTED" && "bg-red-500"
					} ${transaction.status === "APPROVED" && "bg-green-500"}`}
				>
					{transaction.status}
				</Badge>
			</div>
		</div>
	);
};
