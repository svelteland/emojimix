<script>
	import { onMount } from 'svelte';
	import '@splidejs/splide/dist/css/splide.min.css';
	import Splide from '@splidejs/splide';

	export let imgURLs;
	export let className;

	export let value = Math.floor(Math.random() * imgURLs.length);

	onMount(function () {
		let splide = new Splide(`.${className}`, {
			type: 'loop',
			direction: 'ttb',
			height: '10em',
			perPage: 3,
			lazyLoad: 'nearby',
			pagination: false,
			arrows: false,
			focus: 'center',
			wheel: true,
			start: value
		});
		splide.on('moved', function (index, prev, dest) {
			if (index != prev) {
				value = dest;
			}
		});
		splide.mount();
	});
</script>

<!-- Need to have class splide for outer div -->
<!-- https://github.com/Splidejs/splide/issues/224#issuecomment-787000514 -->
<div class="splide {className}">
	<div class="splide__track">
		<ul class="splide__list">
			{#each imgURLs as imgURL}
				<li class="splide__slide">
					<img class="slide-single-emoji" alt="emoji" src={imgURL} />
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.slide-single-emoji {
		height: 80%;
	}
</style>
