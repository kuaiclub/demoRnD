module.exports = {
	title: 'KUAIC Learn',
	tagline: 'Resources for AI in Python',
	url: 'https://aiclub.ku.edu.np',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	favicon: 'icon/favicon.ico',
	organizationName: 'KUAIC',
	projectName: 'rnd',
	themeConfig: {
		docs: {
			sidebar: {
				hideable: true,
			},
		},
		navbar: {
			title: 'KUAIC Learn',
			logo: {
				alt: 'KUAIC Logo',
				src: 'img/logo.svg',
				// srcDark: 'img/logo white.svg'
			},
			hideOnScroll: true,
			items: [
				{
					type: 'docsVersion',
					position: 'left',
					label: 'Docs',
				 },
				// {
				// 	type: 'docsVersionDropdown',
				// 	position: 'right',
				// },
				{
					type: 'localeDropdown',
					position: 'right',
				},
				{
					type: 'doc',
					docId: 'training/awe-101',
					position: 'left',
					label: 'Training',
					activeSidebarClassName: 'navbar__link--active',
				},
				{
					to: 'blog',
					label: 'Blog',
					position: 'left'
				},
				// {
				// 	href: 'https://forum.aweframework.com/',
				// 	label: 'Forum', position: 'left'
				// },
				{
					alt: 'Github repository',
					href: 'https://github.com/KUAICLUB',
          className: 'header-gitlab-link',
					position: 'right'
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Introduction',
							to: 'docs/',
						},
						{
							label: 'Migration from v3 to v4',
							to: 'docs/guides/v4-migration',
						},
					],
				},
				{
					title: 'Community',
					items: [
						
						{
							label: 'Discord',
							href: 'https://discord.gg/UNnXrsKM',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'Github repository',
							href: 'https://github.com/kuaiclub',
						},
						{
							label: 'Forked repository',
							href: 'https://gitlab.com/aweframework/',
						},
						{
							html: `
								<a href="https://gitlab.com/aweframework/" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
								  <img src="https://docs.aweframework.com/img/logo.svg" alt="Forked From AWE" width="114" height="51" />
								</a>
							  `,
						  },
			
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Kathmandu University Artificial Intelligence Club, DoCSE, Kathmandu University`,
			
		},
		algolia: {
			appId: '96SFT7IGN3',
			apiKey: '87dfe5f6a5c7cf165a000b9b90539407',
			indexName: 'your_index_name',
			contextualSearch: true,
		},
		colorMode: {
			defaultMode: 'dark',
			disableSwitch: false,
			respectPrefersColorScheme: true,
		},
		prism: {
			additionalLanguages: ['python'],
		},
	},
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'np'],
		localeConfigs: {
			en: {
				label: 'English',
				direction: 'ltr',
			},
			np: {
				label: 'Nepali',
				direction: 'ltr',
			},
		}
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://gitlab.com/aweframework/awe/edit/master/website/',
					includeCurrentVersion: true,
					showLastUpdateTime: true,
					showLastUpdateAuthor: true,
				},
				blog: {
					showReadingTime: true,
					editUrl: 'https://gitlab.com/aweframework/awe/edit/master/website/',
					postsPerPage: 3,
					feedOptions: {
						type: 'all',
						language: 'es',
						copyright: `Copyright © ${new Date().getFullYear()} Almis, Inc.`,
					},
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
