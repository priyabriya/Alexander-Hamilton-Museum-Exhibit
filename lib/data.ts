export interface Artifact {
  id: string;
  number: string;
  type: string;
  year: string;
  title: string;
  description: string;
  significance: string;
  url: string;
  linkLabel: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  event: string;
  detail: string;
}

export interface AudienceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  entryRoute: string;
  entryLabel: string;
}

export const artifacts: Artifact[] = [
  {
    id: "hurricane-letter",
    number: "01",
    type: "Primary Source",
    year: "1772",
    title: "The Hurricane Letter",
    description:
      "Written at seventeen after a catastrophic storm struck St. Croix, this vivid and emotionally powerful letter so impressed local community leaders that they collectively raised funds to send Hamilton to New York for a formal education.",
    significance:
      "This is Hamilton's origin story — the moment his pen first changed the trajectory of his life, and by extension, the nation.",
    url: "https://founders.archives.gov/",
    linkLabel: "View at National Archives",
  },
  {
    id: "report-public-credit",
    number: "02",
    type: "Original Document",
    year: "1790",
    title: "Report on Public Credit",
    description:
      "Hamilton's foundational blueprint for how the new United States would manage its debts, establish creditworthiness, and create a national bank. Written as Secretary of the Treasury, it transformed a bankrupt coalition of states into a unified economic power.",
    significance:
      "This document represents the design and business side of Hamilton's genius — architecture for an entirely new financial civilization.",
    url: "https://www.loc.gov/resource/bdsdcc.22001/",
    linkLabel: "View at Library of Congress",
  },
  {
    id: "the-grange",
    number: "03",
    type: "Historical Site",
    year: "1802",
    title: "The Grange — Hamilton's Home",
    description:
      "The only home Hamilton ever owned, located in upper Manhattan. Now a National Park Service memorial, the Grange offers architectural context and a window into his personal life — the transition from ambitious orphan to gentleman farmer and family patriarch.",
    significance:
      "The physical space reveals what the documents cannot: a man at rest, surrounded by family, in the one place that was entirely his own.",
    url: "https://www.nps.gov/hagr/index.htm",
    linkLabel: "Visit Hamilton Grange NPS",
  },
  {
    id: "federalist-papers",
    number: "04",
    type: "Summary Source",
    year: "1787–1788",
    title: "The Federalist Papers",
    description:
      'A collection of 85 essays written by Hamilton, James Madison, and John Jay under the pseudonym "Publius" — invoking the Roman statesman who helped found the Republic — to advocate for ratification of the U.S. Constitution. Hamilton authored 51 of them.',
    significance:
      "The Papers demonstrate Hamilton's mastery of media and influence: using journalism to shape public opinion and secure the constitutional framework the new republic required.",
    url: "https://en.wikipedia.org/wiki/The_Federalist_Papers",
    linkLabel: "Read Overview on Wikipedia",
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "birth",
    year: "c. 1755",
    event: "Born in Charlestown, Nevis",
    detail:
      "Born to Rachel Faucette and James Hamilton on the island of Nevis in the British West Indies. His birth year is disputed — Hamilton himself sometimes claimed 1757 — but most historians place it around 1755. His early life was marked by poverty, abandonment, and the death of his mother.",
  },
  {
    id: "hurricane",
    year: "1772",
    event: "The Hurricane Letter changes everything",
    detail:
      "A letter Hamilton writes describing the devastating hurricane in St. Croix moves local readers so deeply that community leaders raise funds to send him to New York for an education. It is the first proof of what will become his defining weapon.",
  },
  {
    id: "revolution",
    year: "1776–1781",
    event: "Revolutionary War aide-de-camp",
    detail:
      "Hamilton serves as General George Washington's chief aide, writing letters, orders, and intelligence dispatches. He earns battlefield glory at Yorktown in 1781, leading a bayonet charge on a British redoubt.",
  },
  {
    id: "federalist",
    year: "1787–1788",
    event: "51 Federalist Papers in one year",
    detail:
      'Hamilton authors 51 of the 85 Federalist Papers under the pseudonym "Publius," making the intellectual and political case for ratifying the Constitution and forging a strong federal government.',
  },
  {
    id: "treasury",
    year: "1789–1795",
    event: "First Secretary of the Treasury",
    detail:
      "Appointed by President Washington, Hamilton constructs the nation's financial architecture from scratch: a national bank, a federal mint, a system for managing war debt, and the foundations of American capitalism.",
  },
  {
    id: "credit-report",
    year: "1790",
    event: "Report on Public Credit",
    detail:
      "Hamilton's landmark document proposes that the federal government assume all state debts from the Revolution. Transformative and deeply controversial, it establishes American creditworthiness on the world stage.",
  },
  {
    id: "grange",
    year: "1802",
    event: "Builds The Grange",
    detail:
      "Hamilton constructs his only home — a Federal-style house in upper Manhattan — named after his grandfather's estate in Scotland. A rare domestic retreat from the political storms that will soon consume him.",
  },
  {
    id: "duel",
    year: "1804",
    event: "The duel with Aaron Burr",
    detail:
      "After years of political rivalry, Vice President Aaron Burr challenges Hamilton to a duel in Weehawken, New Jersey. Hamilton is fatally wounded on July 11, 1804, and dies the following day at forty-nine.",
  },
];

export const audienceCards: AudienceCard[] = [
  {
    id: "historians",
    icon: "📜",
    title: "Students of American History",
    description:
      "Explore the primary sources, financial systems, and political arguments that shaped the early republic through the lens of its most prolific founder.",
    entryRoute: "/artifacts",
    entryLabel: "Start with the Documents",
  },
  {
    id: "fans",
    icon: "🎭",
    title: "Fans of the Musical",
    description:
      "Discover the real history behind Lin-Manuel Miranda's portrait. Start with the Hurricane Letter — it's the origin scene the musical dramatizes.",
    entryRoute: "/artifacts",
    entryLabel: "Read the Hurricane Letter",
  },
  {
    id: "designers",
    icon: "🏦",
    title: "Designers of Financial Systems",
    description:
      "Understand how one man architected a national bank, a public credit system, and a currency regime under conditions of radical uncertainty and political opposition.",
    entryRoute: "/artifacts",
    entryLabel: "Read the Report on Public Credit",
  },
];

export const siteConfig = {
  name: "Alexander Hamilton",
  subtitle: "Power of the Pen",
  description:
    "From a teenage clerk in the West Indies to architect of the American financial system — the story of a man who built a nation with words.",
  years: "1755–1804",
  quote:
    "The inquiry constantly is what will please, not what will benefit the people.",
  stats: [
    { value: "51", label: "Federalist Papers authored" },
    { value: "1790", label: "Report on Public Credit" },
    { value: "$10", label: "His face on the bill" },
  ],
} as const;
