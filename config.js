const monokaiColors = require('./monokaiColors.js')

module.exports = {
  siteTitle: 'Vadim Gorbachev | bmsdave', // Site title.
  shortSiteTitle: 'bmsdave',
  siteTitleAlt: 'Vadim Gorbachev | bmsdave', // Alternative site title for SEO.
  siteLogo: '/logos/logo-192x192.jpg', // Logo used for SEO and manifest.
  siteUrl: 'https://bmsdave.github.io', // Domain of your website without pathPrefix.
  pathPrefix: '/',
  siteDescription:
    "Vadim Gorbachev's personal website and blog about programming", // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-84952508-1', // GA tracking ID.
  userName: 'Vadim Gorbachev', // Username to display in the author segment.
  userTwitter: '_bmsdave', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Saint Petersburg, Russia', // User location to display in the author segment.
  userAvatar: '/images/bmsdave-100.jpg', // User avatar to display in the author segment.
  userDescription: "<script>alert('test')</script>", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'bmsdave.github.io',
      href: 'https://bmsdave.github.io/',
      type: 'site',
    },
    {
      label: '@bmsdave',
      href: 'https://github.com/bmsdave',
      type: 'github',
    },
    {
      label: '@bmsdave',
      href: 'https://www.linkedin.com/in/bmsdave/',
      type: 'linkedin',
    },
    {
      label: '@bmsdave',
      href: 'https://www.last.fm/user/bmsdave',
      type: 'lastfm',
    },
  ],
  themeColor: monokaiColors.colors['list.highlightForeground'], // Used for setting manifest and progress theme colors.
  backgroundColor: monokaiColors.colors['editor.background'], // Used for setting manifest background color.
}
