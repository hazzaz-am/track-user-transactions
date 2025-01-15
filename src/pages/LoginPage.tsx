import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

// type UserInformation = {
//   email: string,
//   password: string
// }

export const LoginPage = () => {
	const handleLoginForm = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const email = formData.get("email");
		const password = formData.get("password");

		const userLoginInformation = {
			email,
			password,
		};
		// console.log(userLoginInformation);
		fetch("http://localhost:5000/login", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(userLoginInformation),
		})
			.then((res) => res.json())
			.then((data) => {
				toast(data.message);
			})
			.catch((e) => {
				toast(e.message);
			});

		// console.log(userRegisterInformation);
		form.reset();
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
						<Input
							type="email"
							name="email"
							placeholder="example@gmail.com"
							required
						/>
					</div>
					<div className="space-y-2">
						<Label>Password</Label>
						<Input
							type="password"
							name="password"
							placeholder="******"
							required
						/>
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
