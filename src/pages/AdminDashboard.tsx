import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const AdminDashboard = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Users Transactions</CardTitle>
				<CardDescription>All Transactions History</CardDescription>
			</CardHeader>
			<CardContent>
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
						<tbody>
							<tr className="bg-white border-b hover:bg-gray-50">
								<td className="px-6 py-4 font-medium">Hazzaz</td>
								<td className="px-6 py-4">$1000</td>
								<td className="px-6 py-4">Project Payment</td>
								<td className="px-6 py-4">2025-1-07</td>
								<td className="px-6 py-4">
									<Badge>pending</Badge>
								</td>
								<td className="px-6 py-4">
									{/* {transaction.status === 'pending' && ( */}
									<div className="flex gap-2">
										<Button
											size="sm"
											variant="outline"
											className="text-green-600 hover:text-green-700"
										>
											Approve
										</Button>
										<Button
											size="sm"
											variant="outline"
											className="text-red-600 hover:text-red-700"
										>
											Reject
										</Button>
									</div>
									{/* )} */}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</CardContent>
		</Card>
	);
};
