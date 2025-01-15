import { handleRegistration } from "@/API/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "@/types/type";
import { useMutation } from "@tanstack/react-query";
import { SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export const RegistrationPage = () => {
	const navigate = useNavigate();

	const { mutate } = useMutation({
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

		mutate(userRegisterInformation);
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
