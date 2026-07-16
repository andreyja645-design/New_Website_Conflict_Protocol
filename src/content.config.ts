import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const slugArray = z.array(z.string().min(1)).default([]);

const patterns = defineCollection({
  loader: glob({ base: "./src/content/patterns", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    oneLiner: z.string(),
    counters: slugArray,
    situations: slugArray,
    heroImage: z.string().optional(),
    gameHook: z.string()
  })
});

const techniques = defineCollection({
  loader: glob({ base: "./src/content/techniques", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    oneLiner: z.string(),
    job: z.string(),
    risk: z.string(),
    countersPatterns: slugArray,
    heroImage: z.string().optional(),
    gameHook: z.string()
  })
});

const situations = defineCollection({
  loader: glob({ base: "./src/content/situations", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    oneLiner: z.string(),
    patterns: slugArray,
    techniques: slugArray,
    heroImage: z.string(),
    gameHook: z.string(),
    gameLevel: z.string().optional()
  })
});

export const collections = { patterns, techniques, situations };
