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
				autogenerate: { directory: 'introduction' }
			},
			{
				label: 'Components',
				autogenerate: { directory: 'components' }
			},
			{
				label: 'Conquest Table',
				autogenerate: { directory: 'table' }
			},
			{
				label: 'Conquest Chart',
				autogenerate: { directory: 'chart' }
			},
		]
	}), vue()]
});