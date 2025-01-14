import { App } from "@/App";
import { AdminDashboard } from "@/pages/AdminDashboard";
import { LoginPage } from "@/pages/LoginPage";
import { RegistrationPage } from "@/pages/RegistrationPage";
import { TransactionsPage } from "@/pages/TransactionsPage";
import { Route, Routes } from "react-router";

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="/registration" element={<RegistrationPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/user-transactions" element={<TransactionsPage />} />
				<Route path="/admin" element={<AdminDashboard />} />
			</Route>
		</Routes>
	);
};
