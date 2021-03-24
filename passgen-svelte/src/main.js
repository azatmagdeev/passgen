import App from './App.svelte';

const app = new App({
	target: document.body.querySelector('#here'),
	props: {
		// name: 'world'
	}
});

export default app;