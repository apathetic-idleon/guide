/* 
This file is part of the Apathetic Guide to IdleOn project.

Apathetic Tools © 2025 (https://github.com/apathetic-tools)

This source code is dual-licensed:
 - Under the GNU Affero General Public License v3.0 (AGPLv3).
 - Under alternative licensing terms by the copyright holder.

See CODE-LICENSE for details.

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import type { Root, Parent } from 'mdast';
import type { VFile } from 'vfile';
import type { Plugin } from 'unified';

const remarkValidateGuideBlocks: Plugin<[], Root> = () => {
	return (tree: Root, file: VFile) => {
		function visit(node: any, parent: Parent | null) {
			if (node.type === 'mdxJsxFlowElement' && ['Hint', 'Choice', 'Instruct'].includes(node.name)) {
				const isInsideGuideBlock =
					parent &&
					parent.type === 'mdxJsxFlowElement' &&
					'name' in parent && // type guard
					parent.name === 'GuideBlock';

				if (!isInsideGuideBlock) {
					file.message(
						`<${node.name}> must be inside a <GuideBlock>.`,
						node.position,
						'remark-validate-guide-blocks'
					);
				}
			}

			if ('children' in node && Array.isArray(node.children)) {
				node.children.forEach((child: any) => visit(child, node as Parent));
			}
		}

		visit(tree, null);
	};
};

export default remarkValidateGuideBlocks;
