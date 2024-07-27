import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import Icons from 'unplugin-icons/vite';

// https://astro.build/config
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
    sidebar: [{
      label: 'Introduction',
      autogenerate: {
        directory: 'introduction'
      }
    }, {
      label: 'Components',
      autogenerate: {
        directory: 'ui'
      }
    }, {
      label: 'Conquest Table',
      autogenerate: {
        directory: 'table'
      }
    }, {
      label: 'Conquest Chart',
      autogenerate: {
        directory: 'chart'
      }
    }]
  }), vue(), tailwind()],
  // {
  vite: {
    plugins: [
      // Your compiler here
      Icons({ compiler: 'vue3' }),
    ]
  }
});