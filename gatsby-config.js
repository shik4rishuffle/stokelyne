module.exports = {
	siteMetadata: {
		siteUrl: "https://www.stokelyne.com",
		title: "stoke lyne"
	},
	flags: {
		DEV_SSR: false
	},
	plugins: [
		"gatsby-transformer-remark",
		"gatsby-plugin-image",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		"gatsby-plugin-anchor-links",
		{
			resolve: "gatsby-plugin-anchor-links",
			options: {
				offset: -100,
				duration: 300
			},
			resolve: "gatsby-source-filesystem",
			options: {
				name: "projects",
				path: `${__dirname}/src/content/`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/images/`,
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "minutes",
				path: `${__dirname}/src/assets/parish/minutes`,
			}
		},
		{
			resolve: "gatsby-source-strapi",
			options: {
				apiURL: process.env.APIURL,
				collectionTypes: [
					"blog-posts",
					"blog-categories",
					"events",
					"downloads",
					"basic-pages",
					"minutes",
					"parish-members"
				],
				singleTypes: [
					"home-page"
				],
				queryLimit: 1000,
			},
		},
		{
			resolve: "gatsby-plugin-google-fonts",
			options: {
				fonts: [
					"poppins:300,400,500,600,700"
				], display: "swap"
			}
		}
	]
};
