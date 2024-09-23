/* @refresh reload */
import { render } from "solid-js/web";

import { Route, Router } from "@solidjs/router";
import BasicSignal from "./BasicSignal";
import ComposedSignal from "./ComposedSignal";
import Counter from "./Counter";
import CounterEffect from "./CounterEffect";

import './index.css';

const root = document.getElementById("root");
if (!root) {
	throw new Error(
		"Root element not found. Did you forget to add it to your index.html?",
	);
}

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		"Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
	);
}

render(
	() => (
		<Router>
			<Route path="/" component={BasicSignal} />
			<Route path="/counter" component={Counter} />
			<Route path="/effect" component={CounterEffect} />
			<Route path="/composed" component={ComposedSignal} />
		</Router>
	),
	root,
);
