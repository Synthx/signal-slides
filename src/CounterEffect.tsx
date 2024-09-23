import { type Component, createEffect, createSignal } from "solid-js";

const CounterEffect: Component = () => {
	const [count, setCount] = createSignal(0);

	createEffect(() => {
		console.log("count", count());
	});

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

export default CounterEffect;
