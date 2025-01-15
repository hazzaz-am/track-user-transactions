import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { User } from "@/types/type";
import { SyntheticEvent } from "react";
import { Link } from "react-router";

export const RegistrationPage = () => {
	const auth = useAuth();
	if (!auth) {
		return <div>Error: Auth context is not available</div>;
	}
	const { registrationMutate } = auth;

	const handleRegistrationForm = (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		const userRegisterInformation: User = {
			name,
			email,
			password,
		};
		
		registrationMutate(userRegisterInformation);
	};
	return (
		<Card className="w-1/2 mx-auto">
			<CardHeader>
				<CardTitle className="text-center text-2xl">
					Account Registration
				</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleRegistrationForm} className="space-y-4">
					<div className="space-y-2">
						<Label>Your Name</Label>
						<Input type="text" name="name" placeholder="Hazzaz Abdul Mannan" />
					</div>
					<div className="space-y-2">
						<Label>Your Email</Label>
						<Input type="email" name="email" placeholder="example@gmail.com" />
					</div>
					<div className="space-y-2">
						<Label>Password</Label>
						<Input type="password" name="password" placeholder="******" />
					</div>
					<Button type="submit" className="w-full">
						Sign Up
					</Button>
					<p className="text-center">
						Already Have an Account ?{" "}
						<Link to="/login" className="underline font-bold">
							Sign In
						</Link>
					</p>
				</form>
			</CardContent>
		</Card>
	);
};
