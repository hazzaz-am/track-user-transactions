import { fetchTransactions, updateTransaction } from "@/API/api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const AdminDashboard = () => {
	const queryClient = useQueryClient();

	const { data, isLoading, isError } = useQuery({
		queryKey: ["transactions"],
		queryFn: fetchTransactions,
	});

	const updateMutation = useMutation({
		mutationFn: (data) => updateTransaction(data.id, data.transaction),
		onSuccess: (apiData, id) => {
			queryClient.invalidateQueries(["transactions"]);
		},
	});

	if (isLoading) {
		return <p className="text-center text-2xl">Loading...........</p>;
	}

	if (isError) {
		return (
			<p className="text-center text-2xl text-red-500">
				Error While Fetching Data
			</p>
		);
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Users Transactions</CardTitle>
				<CardDescription>All Transactions History</CardDescription>
			</CardHeader>
			<CardContent>
				{data?.length === 0 ? (
					<p>No Transaction Occurred</p>
				) : (
					<div className="relative overflow-x-auto border rounded-lg">
						<table className="w-full text-sm text-left">
							<thead className="text-xs text-gray-700 uppercase bg-gray-50">
								<tr>
									<th className="px-6 py-3">User</th>
									<th className="px-6 py-3">Amount</th>
									<th className="px-6 py-3">Description</th>
									<th className="px-6 py-3">Date</th>
									<th className="px-6 py-3">Status</th>
									<th className="px-6 py-3">Actions</th>
								</tr>
							</thead>
							{data?.map((transaction) => (
								<tbody key={transaction._id}>
									<tr className="bg-white border-b hover:bg-gray-50">
										<td className="px-6 py-4 font-medium">
											{transaction.email}
										</td>
										<td className="px-6 py-4">$ {transaction.amount}</td>
										<td className="px-6 py-4">{transaction.title}</td>
										<td className="px-6 py-4">{transaction.createdAt}</td>
										<td className="px-6 py-4">
											<Badge
												className={`${
													transaction.status === "PENDING" && "bg-yellow-500"
												} ${
													transaction.status === "REJECTED" && "bg-red-500"
												} ${
													transaction.status === "APPROVED" && "bg-green-500"
												}`}
											>
												{transaction.status}
											</Badge>
										</td>
										<td className="px-6 py-4">
											{/* {transaction.status === 'pending' && ( */}
											<div className="flex gap-2">
												<Button
													size="sm"
													variant="outline"
													className="text-green-600 hover:text-green-700"
													onClick={() =>
														updateMutation.mutate({
															id: transaction._id,
															transaction: {
																...transaction,
																status: "APPROVED",
															},
														})
													}
												>
													Approve
												</Button>
												<Button
													size="sm"
													variant="outline"
													className="text-red-600 hover:text-red-700"
													onClick={() =>
														updateMutation.mutate({
															id: transaction._id,
															transaction: {
																...transaction,
																status: "REJECTED",
															},
														})
													}
												>
													Reject
												</Button>
											</div>
											{/* )} */}
										</td>
									</tr>
								</tbody>
							))}
						</table>
					</div>
				)}
			</CardContent>
		</Card>
	);
};
