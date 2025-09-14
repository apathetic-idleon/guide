import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { topicSchema } from 'starlight-sidebar-topics/schema';
import { blogSchema } from 'starlight-blog/schema'

/**
 * Extends Starlight's docs schema to support extra fields.
 *
 * - Starts with the blog schema (adds `title`, `description`, `date`, etc.)
 * - Merges in the topic schema (adds `topic` for sidebar-topics integration)
 *
 * Using `merge` keeps both plugin schemas intact without manually copying fields.
 */
function extendDocsSchema(context: Parameters<typeof blogSchema>[0]) {
  const blog = blogSchema(context).passthrough();
  return blog.merge(
		z.object({
			topic: topicSchema.shape.topic,
		})
	);
}

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: extendDocsSchema }),
  }),
};
