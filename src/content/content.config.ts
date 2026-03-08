import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const now = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/now' }),
  schema: z.object({
    draft: z.boolean().default(false),
    type: z.literal('now'),
    topics: z.array(z.string()).optional(),
  }),
});

export const collections = { now };
