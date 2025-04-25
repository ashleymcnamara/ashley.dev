/**
 * A rehype plugin to add style attributes to headings and anchor links
 */
export function rehypeHeadingColors() {
  return (tree) => {
    const visitor = (node) => {
      // Check if the node is a heading (h1, h2, h3, h4, h5, h6)
      if (
        node.type === 'element' && 
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)
      ) {
        // Add style attribute to make headings pink
        node.properties = node.properties || {};
        node.properties.style = 'color: #F43F5E;';
        node.properties.class = (node.properties.class || '') + ' heading-custom';
        
        // Create an id for the heading if there's text content
        if (node.children && node.children.length > 0) {
          // Get the text content
          let textContent = '';
          const getTextContent = (n) => {
            if (n.type === 'text') {
              textContent += n.value;
            }
            if (n.children) {
              n.children.forEach(getTextContent);
            }
          };
          
          node.children.forEach(getTextContent);
          
          // Generate slug for the id
          if (textContent) {
            const slug = textContent
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-|-$/g, '');
              
            node.properties.id = slug;
            
            // Create the anchor link element
            const anchorLink = {
              type: 'element',
              tagName: 'a',
              properties: {
                href: `#${slug}`,
                class: 'anchor-link',
                'aria-hidden': 'true'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'span',
                  properties: {
                    class: 'anchor-icon'
                  },
                  children: [
                    {
                      type: 'text',
                      value: '#'
                    }
                  ]
                }
              ]
            };
            
            // Add the anchor link as a child of the heading
            node.children.push(anchorLink);
          }
        }
      }
      
      // Continue traversing the tree
      if (node.children) {
        node.children.forEach(visitor);
      }
    };
    
    visitor(tree);
  };
}