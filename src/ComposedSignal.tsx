import { type Component, createMemo, createSignal } from "solid-js";

const ComposedSignal: Component = () => {
	const [count, setCount] = createSignal(0);
	const doubledCount = createMemo(() => count() * 2);

	const increment = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<div>
			<span>{count()}</span>
			<span>{doubledCount()}</span>
			<button type="button" onClick={increment}>
				Increment
			</button>
		</div>
	);
};

export default ComposedSignal;
