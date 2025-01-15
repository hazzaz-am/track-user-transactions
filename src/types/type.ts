export type Transaction = {
	_id?: string;
	amount: string;
	title: string;
	email: string;
	createdAt?: string;
	status?: "PENDING" | "APPROVED" | "REJECTED";
};

export type User = {
	name?: string;
	email: string;
	password: string;
};

export type UpdateTransactionType = {
	id: string;
	transaction: Transaction
};