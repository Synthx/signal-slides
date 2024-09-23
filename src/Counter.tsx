import { type Component, createSignal } from "solid-js";

const Counter: Component = () => {
	const [count, setCount] = createSignal(0);

	const increment = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<div>
			<span>{count()}</span>
			<button type="button" onClick={increment}>
				Increment
			</button>
		</div>
	);
};

export default Counter;
