import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { PaymentCard } from "./PaymentCard";

export const UserTransactions = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>My Credit: $100</CardTitle>
				<CardDescription>Transaction History</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<PaymentCard />
				<PaymentCard />
			</CardContent>
		</Card>
	);
};
