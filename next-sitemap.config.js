/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://altanettsider.no",
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
    await config.transform(config, '/om'),
    await config.transform(config, '/tjenester'),
    await config.transform(config, '/eksempler'),
    await config.transform(config, '/kontakt'),
    await config.transform(config, '/nettsider-for-lokale-bedrifter'),
  ],
};
