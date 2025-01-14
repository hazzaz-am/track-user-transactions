import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserTransactions } from "./user-transactions/UserTransactions";
import { SubmitTransactions } from "./submit-transactions/SubmitTransactions";

export const Transactions = () => {
	return (
		<div className="max-w-4xl p-4 mx-auto border">
			<Tabs defaultValue="transactions" className="w-full">
				<TabsList className="w-full grid grid-cols-2">
					<TabsTrigger value="transactions">My Transactions</TabsTrigger>
					<TabsTrigger value="submit">Submit Transaction</TabsTrigger>
				</TabsList>
				<TabsContent value="transactions">
					<UserTransactions />
				</TabsContent>
				<TabsContent value="submit">
					<SubmitTransactions />
				</TabsContent>
			</Tabs>
		</div>
	);
};
