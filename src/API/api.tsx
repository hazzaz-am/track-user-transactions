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
export const updateTransaction = async (id, transaction) => {
	try {
		const response = await api.put(`/update-transaction/${id}`, transaction);
		const data = await response.data;
		return data;
	} catch (error) {
		console.log(error);
	}
};
