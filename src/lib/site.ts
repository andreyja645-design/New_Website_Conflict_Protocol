export const site = {
  name: "Conflict Protocol",
  description:
    "A field guide for spotting conversational pressure and having words ready before your brain goes blank.",
  url: import.meta.env.PUBLIC_SITE_URL || "https://example.com",
  gameUrl: import.meta.env.PUBLIC_GAME_URL || "#practice-live",
  ogImage: "/assets/og-default.jpg"
};

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}
