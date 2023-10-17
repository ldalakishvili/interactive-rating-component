import { useState } from "react";
import "./reset.css";
import "./App.css";

import Rate from "./Components/Rate/Rate";
import Result from "./Components/Result/Result";
function App() {
	const [number, setNumber] = useState();

	const [submit, setSubmit] = useState(false);
	return (
		<div className="main-container">
			{submit ? (
				<Result number={number} />
			) : (
				<Rate number={number} setNumber={setNumber} setSubmit={setSubmit} />
			)}
		</div>
	);
}

export default App;
