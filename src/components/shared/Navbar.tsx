import { useAuth } from "@/hooks/useAuth";
import { MdOutlinePayment } from "react-icons/md";
import { Link } from "react-router";
import { Button } from "../ui/button";

export const Navbar = () => {
	const auth = useAuth();
	const user = auth?.user;
	const handleLogoutUser = auth?.handleLogoutUser;

	return (
		<nav className="flex items-center justify-between">
			{/* logo */}
			<div className="cursor-pointer p-2 hover:bg-slate-200 rounded-md transition-colors duration-500">
				<MdOutlinePayment className="text-2xl" />
			</div>

			{/* authentication */}
			<menu className="space-x-4">
				<Link
					to="/admin"
					className="inline-block text-sm font-medium cursor-pointer text-[#111827]"
				>
					Admin
				</Link>
				<Link
					to="/user-transactions"
					className="inline-block text-sm font-medium cursor-pointer text-[#111827]"
				>
					My Transactions
				</Link>
				{user !== null ? (
					<Button onClick={handleLogoutUser}>Logout</Button>
				) : (
					<Link
						to="/registration"
						className="inline-block text-sm font-medium cursor-pointer text-[#111827]"
					>
						Registration
					</Link>
				)}
			</menu>
		</nav>
	);
};
