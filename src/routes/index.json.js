import fs from 'fs';

export function get() {
	let emojis = fs
		.readFileSync(`src/crawler/emoji`, `utf-8`)
		.split(`\n`)
		.filter((x) => x.length == 5);
	let body = JSON.stringify(emojis);
	return {
		body
	};
}
