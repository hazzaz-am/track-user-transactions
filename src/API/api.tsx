import { Transaction, User } from "@/types/type";
import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:5000",
});

// fetch all transactions
export const fetchTransactions = async () => {
	try {
		const res = await api.get("/transactions");
		return res.status === 200 ? res.data : [];
	} catch (error) {
		console.log(error);
	}
};

// update transaction
export const updateTransaction = async (id: string, transaction: Transaction) => {
	try {
		const response = await api.put(`/update-transaction/${id}`, transaction);
		const data = await response.data;
		return data;
	} catch (error) {
		console.log(error);
	}
};

// user transactions
export const getUserTransactions = async (email: string) => {
	console.log(email);
	try {
		const response = await api.get(`/transactions/?email=${email}`);
		return response.status === 200 ? response?.data : [];
	} catch (error) {
		console.log(error);
	}
};

// submit transaction
export const submitUserTransaction = async (transaction: Transaction) => {
	try {
		const res = await api.post("/transactions", transaction);
		const data = await res.data;
		return data;
	} catch (error) {
		console.log(error);
	}
};

// user login
export const handleLoginUser = async (userInformation: User) => {
	try {
		const response = await api.post("/login", userInformation, {
			withCredentials: true,
		});
		const data = await response.data;
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};

// user register
export const handleRegistration = async (userInformation: User) => {
	try {
		const response = await api.post("/register", userInformation);
		const data = await response.data;
		return data;
	} catch (error) {
		console.log(error);
	}
};
