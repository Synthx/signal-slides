import { type Component, createSignal } from "solid-js";

const BasicSignal: Component = () => {
	const [count, setCount] = createSignal(0);
	console.log("count", count());

	setCount(1);

	console.log("count", count());

	return <span>{count()}</span>;
};

export default BasicSignal;
