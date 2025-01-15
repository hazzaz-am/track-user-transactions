import { submitUserTransaction } from "@/API/api";
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
import { useMutation } from "@tanstack/react-query";

export const SubmitTransactions = () => {
	const handleSubmitTransaction = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const amount = formData.get("amount");
		const title = formData.get("title");

		mutate({
			amount,
			title,
			email: "hazzaz@gmail.com",
		});

		// console.log(userRegisterInformation);
	};

	const { mutate } = useMutation({
		mutationFn: submitUserTransaction,
		onSuccess: (apiData) => {
			console.log(apiData);
		},
	});

	return (
		<Card>
			<CardHeader>
				<CardTitle>Submit New Transaction</CardTitle>
				<CardDescription>Enter the transaction details below</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmitTransaction} className="space-y-4">
					<div className="space-y-2">
						<Label className="text-sm font-medium">Amount ($)</Label>
						<Input
							type="number"
							placeholder="Enter Amount"
							required
							name="amount"
						/>
					</div>
					<div className="space-y-2">
						<Label className="text-sm font-medium">Title</Label>
						<Input
							type="text"
							placeholder="Transaction Title"
							required
							name="title"
						/>
					</div>
					<Button
						type="submit"
						className="w-full transition-colors duration-500"
					>
						Submit Transaction
					</Button>
				</form>
			</CardContent>
		</Card>
	);
};
