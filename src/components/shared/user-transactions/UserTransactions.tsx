import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { PaymentCard } from "./PaymentCard";
import { useQuery } from "@tanstack/react-query";
import { getUserTransactions } from "@/API/api";

export const UserTransactions = () => {
	const { data } = useQuery({
		queryKey: ["user-transactions"],
		queryFn: getUserTransactions,
	});

	const totalCredit = data?.reduce((acc, transaction) => {
		return transaction.status === "APPROVED"
			? acc + parseFloat(transaction.amount)
			: acc;
	}, 0);

	return (
		<Card>
			<CardHeader>
				<CardTitle>My Credit: $ {totalCredit}</CardTitle>
				<CardDescription>Transaction History</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				{data?.map((transaction) => (
					<PaymentCard key={transaction._id} transaction={transaction} />
				))}
			</CardContent>
		</Card>
	);
};
