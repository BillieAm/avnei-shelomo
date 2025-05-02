import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const homeInfo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/home" }),
  schema: z.object({
    title: z.string(),
  }),
});
const aboutInfo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/about" }),
});

export const collections = {homeInfo, aboutInfo};
