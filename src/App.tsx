import React from "react";

export const App: React.FC = () => {
	const fruits = ["Apple", "Banana", "Grapes", "Mango"];

	return (
		<div style={{ padding: "2rem" }}>
			<h1>Fruit List</h1>
			<ul>
				{fruits.map((fruit) => (
					<li>{fruit}</li>
				))}
			</ul>
			<img src="./src/assets/logo.jpg" width={400} height={400} />
		</div>
	);
};
export default App;
