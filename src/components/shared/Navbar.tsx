import { MdOutlinePayment } from "react-icons/md";
import { Link } from "react-router";
// import { Link } from "react-router";

export const Navbar = () => {
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
				<Link
					to="/login"
					className="inline-block text-sm font-medium cursor-pointer text-[#111827]"
				>
					Login
				</Link>
				<Link
					to="/registration"
					className="inline-block text-sm font-medium cursor-pointer text-[#111827]"
				>
					Registration
				</Link>
			</menu>
		</nav>
	);
};
