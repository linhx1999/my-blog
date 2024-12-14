import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts'

import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

// https://astro.build/config
export default defineConfig({
	// site: 'https://blog-template-gray.vercel.app/', // Write here your website url
	site: 'https://linhx1999.github.io', // Write here your website url
	markdown: {
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		}
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				experimentalThemes: {
					light: 'vitesse-light',
					dark: 'material-theme-palenight',
				  },
				wrap: true
			},
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatex],
			drafts: true
		}),
		sitemap(),
		tailwind()
	]
})
