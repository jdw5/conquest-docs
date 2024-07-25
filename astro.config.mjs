import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vue from "@astrojs/vue";

export default defineConfig({
	integrations: [starlight({
		title: 'Conquest',
		// logo: {
			// light:
			// dark:
		// 	src: '/logo.png',
		// },
		social: {
			github: 'https://github.com/jdw5/conquest'
		},
		sidebar: [
			{
				label: 'Introduction',
				items: [
					{
						label: 'Conventions',
						slug: 'introduction/conventions'
					}
				]
			},
			{
				label: 'Components',
				items: [
					{
						label: 'Accordion',
						slug: 'components/accordion'
					}
				]
			},
		]
	}), vue()]
});