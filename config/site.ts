export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Camploomis',
  description: 'Camploomis Brewery',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Beers',
      href: '/beers',
    },
    {
      label: 'About Us',
      href: '/aboutus',
    },
  ],
};
