import { defineCollection, z } from "astro:content";

const collection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  he: collection,
  en: collection,
};
