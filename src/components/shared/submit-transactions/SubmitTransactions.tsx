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
import { useAuth } from "@/hooks/useAuth";
import { Transaction } from "@/types/type";
import { useMutation } from "@tanstack/react-query";
import { SyntheticEvent } from "react";
import { toast } from "sonner";

export const SubmitTransactions = () => {
	const auth = useAuth();
	const email = auth?.user?.email;

	const handleSubmitTransaction = (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const amount = formData.get("amount") as string;
		const title = formData.get("title") as string;
		const userTransaction: Transaction = {
			amount,
			title,
			email: email!,
		};
		mutate(userTransaction);
	};

	const { mutate } = useMutation({
		mutationFn: submitUserTransaction,
		onSuccess: () => {
			toast("Transaction Added to your Vault");
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
							defaultValue="00"
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
