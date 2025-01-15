import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { User } from "@/types/type";
import { SyntheticEvent } from "react";
import { Link } from "react-router";

// type UserInformation = {
//   email: string,
//   password: string
// }

export const LoginPage = () => {
	
	const auth = useAuth();
	if (!auth) {
		return <div>Error: Auth context is not available</div>;
	}
	const { loginMutate } = auth;

	const handleLoginForm = (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		const userLoginInformation: User = {
			email,
			password,
		};

		// form.reset();
		loginMutate(userLoginInformation);
		// console.log(userRegisterInformation);
	};

	return (
		<Card className="w-1/2 mx-auto">
			<CardHeader>
				<CardTitle className="text-center text-2xl">Account Signin</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleLoginForm} className="space-y-4">
					<div className="space-y-2">
						<Label>Your Email</Label>
						<Input type="email" name="email" placeholder="example@gmail.com" />
					</div>
					<div className="space-y-2">
						<Label>Password</Label>
						<Input type="password" name="password" placeholder="******" />
					</div>
					<Button type="submit" className="w-full">
						Sign In
					</Button>
					<p className="text-center">
						New Here ?{" "}
						<Link to="/registration" className="underline font-bold">
							Sign Up
						</Link>
					</p>
				</form>
			</CardContent>
		</Card>
	);
};
