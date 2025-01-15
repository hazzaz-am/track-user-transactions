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
import { Transaction } from "@/types/type";
import { useAuth } from "@/hooks/useAuth";

export const UserTransactions = () => {
	const auth = useAuth();
	const user = auth?.user;

	const { data } = useQuery({
		queryKey: ["user-transactions", user?.email],
		queryFn: () => getUserTransactions(user?.email as string),
		enabled: !!user?.email,
	});

	const totalCredit = data?.reduce(
		(acc: number, transaction: Transaction): number => {
			return transaction.status === "APPROVED"
				? acc + parseFloat(transaction.amount)
				: acc;
		},
		0
	);

	return (
		<Card>
			<CardHeader>
				<CardTitle>My Credit: $ {totalCredit}</CardTitle>
				<CardDescription>Transaction History</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				{data?.map((transaction: Transaction) => (
					<PaymentCard key={transaction._id} transaction={transaction} />
				))}
			</CardContent>
		</Card>
	);
};
