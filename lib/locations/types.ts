export type LocationCounty = "Utah County" | "Salt Lake County";

export type LocationFaq = {
  q: string;
  a: string;
};

export type LocationPost = {
  slug: string;
  name: string;
  county: LocationCounty;
  state: "UT";
  title: string;
  metaDescription: string;
  intro: string;
  localContext: string;
  industries: string[];
  faqs: LocationFaq[];
};
