/**
 * A rehype plugin to add style attributes to headings
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
      }
      
      // Continue traversing the tree
      if (node.children) {
        node.children.forEach(visitor);
      }
    };
    
    visitor(tree);
  };
}