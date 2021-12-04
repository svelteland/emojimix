import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: static_adapter(),

		// Comment the paths if wants to run in dev mode.
		paths: {
			base: '/emojimix',
			assets: '/emojimix'
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
