import type { CollectionEntry } from "astro:content";

export type CardLink = {
  title: string;
  href: string;
  oneLiner: string;
  image?: string;
  eyebrow: string;
};

export function collectionHref(collection: "patterns" | "techniques" | "situations", slug: string) {
  return `/${collection}/${slug}/`;
}

export function toCardLink(
  entry: CollectionEntry<"patterns" | "techniques" | "situations">,
  eyebrow: string
): CardLink {
  return {
    title: entry.data.title,
    href: collectionHref(entry.collection, entry.data.slug),
    oneLiner: entry.data.oneLiner,
    image: entry.data.heroImage,
    eyebrow
  };
}

export function pickExisting<T extends { data: { slug: string } }>(slugs: string[], entries: T[]) {
  const bySlug = new Map(entries.map((entry) => [entry.data.slug, entry]));
  return slugs.map((slug) => bySlug.get(slug)).filter((entry): entry is T => Boolean(entry));
}
