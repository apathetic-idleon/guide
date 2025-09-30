import type { Root, Parent } from 'mdast';
import type { VFile } from 'vfile';
import type { Plugin } from 'unified';

// import type { MDXJsxFlowElement } from '@mdx-js/mdx';

const remarkValidateGuideBlocks: Plugin<[], Root> = () => {
  return (tree: Root, file: VFile) => {
    function visit(node: any, parent: Parent | null) {
      if (
        node.type === 'mdxJsxFlowElement' &&
        ['Hint', 'Choice', 'Instruct'].includes(node.name)
      ) {
        const isInsideGuideBlock =
          parent &&
          parent.type === 'mdxJsxFlowElement' &&
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
