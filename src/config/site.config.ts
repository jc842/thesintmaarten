export interface SiteConfig {
  name: string;
  siteName: string;
  domain: string;
  url: string;
  siteUrl: string;
  description: string;
  siteDescription: string;
  defaultAuthor: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
  categories: Array<{ id: string; label: string }>;
}

export const siteConfig: SiteConfig = {
  name: "The Sint Maarten — Dutch Caribbean Island Living & Guide : Simpson Bay, Philipsburg & Cupecoy",
  siteName: "thesintmaarten.com",
  domain: "thesintmaarten.com",
  url: "https://thesintmaarten.com",
  siteUrl: "https://thesintmaarten.com",
  description: "The definitive insider guide to Sint Maarten: Dutch Caribbean culture, mega-yacht marinas at Simpson Bay, Front Street duty-free shopping, Mullet Bay, Cupecoy cliffs, and Caribbean hospitality.",
  siteDescription: "The definitive insider guide to Sint Maarten: Dutch Caribbean culture, mega-yacht marinas at Simpson Bay, Front Street duty-free shopping, Mullet Bay, Cupecoy cliffs, and Caribbean hospitality.",
  defaultAuthor: "The Sint Maarten Editorial Team",
  repo: "jc842/thesintmaarten",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-spaziobianco",
    fontFamily: "Space Grotesk, sans-serif",
    colorScheme: "blue",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "68",
    containerId: "n8EJLIvZ",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 734, format: "mobileBanner" },
      inContent: { zoneId: 733, format: "mediumRectangle" },
      header: { zoneId: 732, format: "leaderboard" },
      halfPage: { zoneId: 730, format: "halfPage" },
      largeRectangle: { zoneId: 731, format: "largeRectangle" },
      skyscraper: { zoneId: 735, format: "skyscraper" },
    },
  },

  legal: {
    editor: "The Sint Maarten Media Group",
    address: "Welfare Road, Simpson Bay, Sint Maarten",
    contactEmail: "editor@thesintmaarten.com",
    hostName: "Cloudflare Pages",
    hostAddress: "101 Townsend St, San Francisco, CA 94107, USA",
  },

  categories: [
    { id: "simpson-bay", label: "Simpson Bay & Yachting" },
    { id: "philipsburg", label: "Philipsburg & Duty Free" },
    { id: "cupecoy-maho", label: "Cupecoy & Maho Beach" },
    { id: "art-de-vivre", label: "Gastronomie & Événements" },
  ],
};
