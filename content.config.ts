import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const allPosts = defineCollection({
  loader: glob({ pattern: "/**/*.md", base: "./src/pages/theory" }),
  schema: z.object({post: z.object({
    layout: z.string(),
    id: z.string(),
    title: z.string(),
    year: z.string(),
    categorySlug: z.string(),
    category: z.string(),
    subcategory: z.string().optional(),
    author: z.string(),
    image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
    tags: z.array(z.string()),
    citation: z.array(z.string()),
    })
  })
});
const interventionPosts = defineCollection({
  loader: glob({ pattern: "/*.md", base: "./src/pages/theory/intervention-selection" }),
  schema: z.object({
    layout: z.string(),
    id: z.string(),
    title: z.string(),
    year: z.string(),
    categorySlug: z.string(),
    category: z.string(),
    subcategory: z.string().optional(),
    author: z.string(),
    image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
    tags: z.array(z.string()),
    citation: z.array(z.string()),
  })
});

export const collections = { allPosts, interventionPosts };