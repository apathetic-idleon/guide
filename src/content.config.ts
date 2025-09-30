/* 
This file is part of the Apathetic Guide to IdleOn project.

Apathetic Tools © 2025 (https://github.com/apathetic-tools)

This source code is dual-licensed:
 - Under the GNU Affero General Public License v3.0 (AGPLv3).
 - Under alternative licensing terms by the copyright holder.

See CODE-LICENSE for details.

SPDX-License-Identifier: AGPL-3.0-or-later
*/
import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { topicSchema } from 'starlight-sidebar-topics/schema';
import { autoSidebarLoader } from 'starlight-auto-sidebar/loader';
import { autoSidebarSchema } from 'starlight-auto-sidebar/schema';
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

	autoSidebar: defineCollection({
    loader: autoSidebarLoader(),
    schema: autoSidebarSchema(),
  }),
};
