import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

export const RegistrationPage = () => {
	const handleRegistrationForm = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const name = formData.get("name");
		const email = formData.get("email");
		const password = formData.get("password");

		const userRegisterInformation = {
			name,
			email,
			password,
		};

		fetch("http://localhost:5000/register", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(userRegisterInformation),
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
				<CardTitle className="text-center text-2xl">
					Account Registration
				</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleRegistrationForm} className="space-y-4">
					<div className="space-y-2">
						<Label>Your Name</Label>
						<Input
							type="text"
							name="name"
							placeholder="Hazzaz Abdul Mannan"
							
						/>
					</div>
					<div className="space-y-2">
						<Label>Your Email</Label>
						<Input
							type="email"
							name="email"
							placeholder="example@gmail.com"
							
						/>
					</div>
					<div className="space-y-2">
						<Label>Password</Label>
						<Input
							type="password"
							name="password"
							placeholder="******"
							
						/>
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
