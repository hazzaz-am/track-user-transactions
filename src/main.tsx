import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { Router } from "./routes/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/sonner";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<QueryClientProvider client={queryClient}>
			<Router />
			<Toaster />
		</QueryClientProvider>
	</BrowserRouter>
);
