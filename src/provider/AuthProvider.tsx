import { handleLoginUser, handleRegistration } from "@/API/api";
import { useMutation } from "@tanstack/react-query";
import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const AuthContext = createContext({});

type UserType = {
	name: string;
	email: string;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<UserType | null>(null);
	const navigate = useNavigate();

	// login user
	const { mutate: loginMutate } = useMutation({
		mutationFn: handleLoginUser,
		onSuccess: (apidata) => {
			if (apidata.message) {
				toast(apidata.message);
			}

			if (apidata.user) {
				setUser({ email: apidata.user.email, name: apidata.user.name });
				navigate("/user-transactions");
				console.log("from login", user);
			}
		},
	});

	// registration user
	const { mutate: registrationMutate } = useMutation({
		mutationFn: handleRegistration,
		onSuccess: (apiData) => {
			if (apiData.message) {
				toast(apiData.message);
			}
			if (apiData.user) {
				navigate("/login");
			}
		},
	});

	const handleLogoutUser = () => {
		setUser(null);
	};

	const authInfo = {
		user,
		loginMutate,
		registrationMutate,
		handleLogoutUser,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};
