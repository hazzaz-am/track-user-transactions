import { MdOutlinePayment } from "react-icons/md";
// import { Link } from "react-router";

export const Navbar = () => {
	return (
		<nav className="flex items-center justify-between p-8 mx-auto">
			{/* logo */}
			<div className="cursor-pointer p-2 hover:bg-slate-200 rounded-md transition-colors duration-500">
				<MdOutlinePayment className="text-2xl" />
			</div>

			{/* authentication */}
			<menu>
				<li className="inline-block text-xl font-medium cursor-pointer text-[#111827]">
					Login
				</li>
			</menu>
		</nav>
	);
};
