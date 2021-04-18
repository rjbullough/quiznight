<script>
	import { Router } from 'svelte-router-spa'
  // import { routes } from './routes'
	import { form, bindClass } from 'svelte-forms';
	import 'bootstrap';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { library } from '@fortawesome/fontawesome-svg-core';
	import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from 'fontawesome-svelte';
	import {
		faHome,
		faUser,
		faUserPlus,
		faSignInAlt,
		faSignOutAlt,
		faSurprise
		} from '@fortawesome/free-solid-svg-icons';

	library.add(faHome, faSurprise, faUserPlus, faSignInAlt, faSignOutAlt);
</script>

<main>
	<h1>Hello</h1>
</main>

<style>

</style>