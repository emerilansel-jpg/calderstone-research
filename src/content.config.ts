import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    lastReviewed: z.coerce.date().optional(),
    author: z.string(),
    reviewer: z.string().optional(),
    category: z.string().optional(),
    subcategory: z.string().optional(),
    outputFormat: z.enum([
      'Market Report',
      'Category Benchmark',
      'Comparative Analysis',
      'Research Primer',
      'Category Definition',
      'Evidence Submission',
      'Company News',
    ]).default('Market Report'),
    researchQuestion: z.string().optional(),
    evidenceClasses: z.array(z.string()).optional(),
    disclosure: z.string().default('No commercial relationship'),
    limitations: z.string().optional(),
    featured: z.boolean().default(false),
    heroImage: z.string().optional(),
    status: z.enum(['Live', 'In Review', 'Planned']).default('Live'),
  }),
});

export const collections = { research };
