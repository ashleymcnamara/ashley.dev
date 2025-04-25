/**
 * A rehype plugin to generate a Table of Contents from headings
 */
export function rehypeTableOfContents() {
  return (tree) => {
    // First, collect all heading elements
    const headings = [];
    
    const collectHeadings = (node) => {
      // We'll only include h2 and h3 for the TOC to keep it clean
      if (
        node.type === 'element' && 
        ['h2', 'h3'].includes(node.tagName) &&
        node.properties && 
        node.properties.id
      ) {
        // Extract the text content of the heading
        let textContent = '';
        const getTextContent = (n) => {
          if (n.type === 'text') {
            textContent += n.value;
          }
          // Skip the anchor link we added in the other plugin
          if (n.type === 'element' && n.properties && n.properties.class === 'anchor-link') {
            return;
          }
          if (n.children) {
            n.children.forEach(getTextContent);
          }
        };
        
        node.children.forEach(getTextContent);
        
        headings.push({
          id: node.properties.id,
          text: textContent,
          depth: parseInt(node.tagName.charAt(1))
        });
      }
      
      // Continue traversing the tree
      if (node.children) {
        node.children.forEach(collectHeadings);
      }
    };
    
    collectHeadings(tree);
    
    // If we have headings, create a TOC
    if (headings.length > 0) {
      // Create the TOC container
      const tocContainer = {
        type: 'element',
        tagName: 'div',
        properties: {
          class: 'toc-container',
          'aria-label': 'Table of Contents'
        },
        children: [
          {
            type: 'element',
            tagName: 'h2',
            properties: {
              class: 'toc-title'
            },
            children: [
              {
                type: 'text',
                value: 'Table of Contents'
              }
            ]
          },
          {
            type: 'element',
            tagName: 'nav',
            properties: {
              class: 'toc-nav'
            },
            children: [
              {
                type: 'element',
                tagName: 'ul',
                properties: {
                  class: 'toc-list'
                },
                children: headings.map(heading => ({
                  type: 'element',
                  tagName: 'li',
                  properties: {
                    class: `toc-item toc-item-h${heading.depth}`
                  },
                  children: [
                    {
                      type: 'element',
                      tagName: 'a',
                      properties: {
                        href: `#${heading.id}`,
                        class: 'toc-link'
                      },
                      children: [
                        {
                          type: 'text',
                          value: heading.text
                        }
                      ]
                    }
                  ]
                }))
              }
            ]
          }
        ]
      };
      
      // Find the first paragraph or heading to insert the TOC before it
      let inserted = false;
      
      const insertTOC = (node) => {
        if (inserted) return;
        
        // Look for the first paragraph or heading that's not the title
        if (
          node.type === 'element' && 
          (node.tagName === 'p' || 
          (node.tagName === 'h2' && (!node.properties || !node.properties.class || !node.properties.class.includes('toc-title'))))
        ) {
          // We found our insertion point
          if (node.parent && node.parent.children) {
            const index = node.parent.children.indexOf(node);
            if (index !== -1) {
              node.parent.children.splice(index, 0, tocContainer);
              inserted = true;
            }
          }
        }
        
        // Continue traversing if not inserted yet
        if (!inserted && node.children) {
          node.children.forEach(insertTOC);
        }
      };
      
      // Start insertion process
      insertTOC(tree);
    }
  };
}