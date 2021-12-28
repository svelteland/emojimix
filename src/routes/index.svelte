<script context="module">
	import { base } from '$app/paths';
	export async function load({ fetch }) {
		const emojis = await fetch(`${base}/index.json`).then((r) => r.json());
		return {
			props: { emojis }
		};
	}
</script>

<script>
	import Slider from '$lib/Slider.svelte';
	import GithubCorner from '$lib/GithubCorner.svelte';

	import anime from 'animejs';

	export let emojis;

	// This is from github.com/googlefont/noto-emoji
	let genSingleEmojiLink = (x) =>
		`https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u${x}.svg`;
	// The link used by origin emojimix.
	let genMixedLink = (x, y) =>
		`https://www.gstatic.com/android/keyboard/emojikitchen/20201001/u${x}/u${x}_u${y}.png`;

	let allEmojiURLs = emojis.map(genSingleEmojiLink);
	const add_sign_link = genSingleEmojiLink('2795');

	let emojiAIndex, emojiBIndex;
	let emojiAInitIndex, emojiBInitIndex;

	$: emojiA = emojis[emojiAIndex];
	$: emojiB = emojis[emojiBIndex];

	$: emojimixLink = genMixedLink(emojiA, emojiB);
	$: alternaiveEmojimixLink = genMixedLink(emojiB, emojiA);

	let notFoundImg = `${base}/not_found.png`;

	function updateSrc(node, src) {
		node.src = src
		return {
			update(src) {
				// the value of `bar` has changed
				anime({
					targets: "#emojimix-result img",
					width: 0,
					duration: 150,
					easing: 'easeOutQuad',
					complete: function(anim) {
						if (anim.complete) {
							node.src = src
						}
					}
				})
			},
		}
	}

	function handleLoading() {
    let targetWidth = '100%'
    if (this.src.endsWith(notFoundImg)) {
			targetWidth = '50%';
		}
		anime({
			targets: "#emojimix-result img",
			width: targetWidth,
			duration: 150,
			easing: 'easeInQuad',
		})
	}

	function handleNotLoading() {
		this.onerror = null;
		switch (this.src) {
			case emojimixLink:
				this.src = alternaiveEmojimixLink;
				break;
			case alternaiveEmojimixLink:
				this.src = notFoundImg;
		}
	}
</script>

<svelte:head>
	<title>EmojiMix</title>
	<link rel="icon" href="{base}/favicon.png" />
</svelte:head>

<GithubCorner />

<div id="emojimix-container">
	<h1 class="emojimix-banner emojimix-text">emojimix</h1>

	<div id="emojimix-selection">
		<Slider
			bind:value={emojiAIndex}
			className={'emoji-a'}
			initValue={emojiAInitIndex}
			imgURLs={allEmojiURLs}
		/>
		<img class="single-emoji sign" alt="add" src={add_sign_link} />
		<Slider
			bind:value={emojiBIndex}
			className={'emoji-b'}
			initValue={emojiBInitIndex}
			imgURLs={allEmojiURLs}
		/>
	</div>

	<!-- empty alt will prevent showing the unfound image -->
	<div id="emojimix-result">
		<img
			alt=""
			loading="lazy"
			on:error={handleNotLoading}
			on:load={handleLoading}
			use:updateSrc={emojimixLink}
		/>
	</div>

	<p class="emojimix-text">
		All graphics by Google. Origin webset by <a href="https://tikolu.net/emojimix/">Tikolu</a>
	</p>
</div>

<style>
	:global(body) {
		background-color: #f8f9fb;
	}

	#emojimix-container {
		margin: auto;
		max-width: 500px;
	}

	#emojimix-selection {
		width: 80%;
		height: 30%;
		margin: auto;
		display: flex;
		justify-content: center;
	}

	.emojimix-banner {
		font-size: 2.25em;
	}

	.emojimix-text {
		font-family: Nunito, sans-serif;
		text-align: center;
	}

	.sign {
		width: 10%;
		margin: 10%;
	}

	a {
		color: inherit;
	}

	#emojimix-result {
		width: 40%;
		aspect-ratio: 1;
		padding-top: 5%;
		padding-bottom: 5%;
		margin: auto;
		display: block;
		display: flex;
		justify-content: center;
	}

	#emojimix-result img {
		width: 100%;
		margin: auto;
	}
</style>
