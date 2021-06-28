export type Link = {
  name: string;
  url: string;
  dataDefaultAsin?: string;
  type: LinkType;
};

export enum LinkType {
  AMAZON = "AMAZON",
  MEDIAMARKT = "MEDIAMARKT",
  GAMESTOP = "GAMESTOP",
  EURONICS = "EURONICS",
  CYBERPORT = "CYBERPORT",
}

export const links: Link[] = [
  // {
  //   name: "Cyberport",
  //   url:
  //     "https://www.cyberport.de/tools/search-results.html?autosuggest=false&q=playstation+5",
  //   type: LinkType.CYBERPORT,
  // },
  {
    name: "Game Stop US",
    url: "https://www.gamestop.com/video-games/playstation-5/consoles/products/playstation-5/11108140.html?condition=New",
    type: LinkType.GAMESTOP,
  },
  {
    name: "Amazon Disc",
    url: "https://www.amazon.com/PlayStation-5-Console/dp/B08FC5L3RG",
    dataDefaultAsin: "B08FC5L3RG",
    type: LinkType.AMAZON,
  },
  {
    name: "Amazon Digital",
    url:
      "https://www.amazon.com/PlayStation-5-Digital/dp/B08FC6MR62",
    dataDefaultAsin: "B08FC6MR62",
    type: LinkType.AMAZON,
  },
  {
    name: "Amazon Test Controller",
    url:
      "https://www.amazon.com/DualSense-Wireless-Controller-PlayStation-5/dp/B08FC6C75Y",
    dataDefaultAsin: "B08FC6C75Y",
    type: LinkType.AMAZON,
  },
];
