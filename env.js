module.exports = {
  apiUrl: process.env.apiUrl,
  ads: {
    client: process.env.adsClient,
    slot:   process.env.adsSlot,
    format: process.env.adsFormat,
  },
  sidebarAd: {
    client:    process.env.sidebarAdClient,
    slot:      process.env.sidebarAdSlot,
    layoutKey: process.env.sidebarAdLayoutKey,
    layout:    process.env.sidebarAdLayout,
    format:    process.env.sidebarAdFormat,
  },
  pageAds: {
    client: process.env.pageAds,
  },
  analytics: {
    google: process.env.analytics,
  },
  email: process.env.email
};
