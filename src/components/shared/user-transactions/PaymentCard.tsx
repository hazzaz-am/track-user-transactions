import { MdDateRange } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { Transaction } from "@/types/type";

export const PaymentCard = ({ transaction }: { transaction: Transaction }) => {
	return (
		<div className="border p-4 rounded-lg space-y-2">
			<h4 className="font-medium">$ {transaction.amount}</h4>
			<p className="text-sm text-gray-500 capitalize">{transaction.title}</p>
			<div className="flex items-center gap-6">
				<div className="flex items-center gap-2 text-gray-500 text-sm">
					<MdDateRange />
					<p>{transaction.createdAt?.slice(0, 10)}</p>
				</div>
				<Badge
					className={`${
						transaction.status === "PENDING" &&
						"bg-yellow-500 hover:bg-yellow-500"
					} ${
						transaction.status === "REJECTED" && "bg-red-500 hover:bg-red-500"
					} ${
						transaction.status === "APPROVED" &&
						"bg-green-500 hover:bg-green-500"
					}`}
				>
					{transaction.status}
				</Badge>
			</div>
		</div>
	);
};
