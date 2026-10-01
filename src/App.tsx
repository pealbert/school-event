import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} index />
				<Route element={<NotFound />} path="*" />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
