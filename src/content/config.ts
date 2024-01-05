import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    inProgress: z.boolean(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    title: z.string(),
    description: z.object({
      short: z.string(),
      long: z.string(),
    }),
    tags: z.array(z.string()),
    link: z.string(),
    img_alt: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
