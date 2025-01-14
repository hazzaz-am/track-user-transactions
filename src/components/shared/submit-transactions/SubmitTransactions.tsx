import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const SubmitTransactions = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Submit New Transaction</CardTitle>
				<CardDescription>Enter the transaction details below</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="space-y-4">
					<div className="space-y-2">
						<Label className="text-sm font-medium">Amount ($)</Label>
						<Input type="number" placeholder="Enter Amount" required />
					</div>
					<div className="space-y-2">
						<Label className="text-sm font-medium">Title</Label>
						<Input type="text" placeholder="Transaction Title" required />
					</div>
					<Button type="submit" className="w-full bg-[#111827] hover:bg-black transition-colors duration-500">
						Submit Transaction
					</Button>
				</form>
			</CardContent>
		</Card>
	);
};
