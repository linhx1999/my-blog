interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'linhx1999', // Site author
	title: 'Linhx1999 Blog', // Site title.
	description: 'Personal blog for learning.', // Description to display in the meta tags
	lang: 'zh-CN',
	ogLocale: 'zh-CN',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
