import { defineCollection, z } from "astro:content";

const collection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = {
  he: collection,
  en: collection,
};
