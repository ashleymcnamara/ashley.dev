import type { TagFilterOptions } from '../types/content';

/**
 * Sets up tag filtering functionality for content items
 * This is shared between blog posts and speaking engagements components
 */
export function setupTagFiltering(options: TagFilterOptions): () => void {
  // Default values
  const {
    tagButtonsSelector,
    itemsSelector,
    noResultsSelector,
    dataAttribute = 'data-tags',
    allTagValue = 'all'
  } = options;

  // This function will be executed when the DOM is loaded
  return function initializeFiltering() {
    const tagButtons = document.querySelectorAll(tagButtonsSelector);
    const items = document.querySelectorAll(itemsSelector);
    const noResultsMessage = document.getElementById(noResultsSelector);
    
    // No need to continue if elements aren't found
    if (!tagButtons.length || !items.length || !noResultsMessage) return;
    
    // Filter function
    const filterByTag = (selectedTag: string) => {
      // Update active state for buttons
      tagButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('bg-primary');
        btn.classList.remove('text-black');
        btn.classList.remove('border-primary');
        btn.classList.add('bg-canvas');
        btn.classList.add('text-text-primary');
        btn.classList.add('border-line-strong');
        btn.setAttribute('aria-pressed', 'false');
      });
      
      const clickedButton = document.querySelector(
        `${tagButtonsSelector}[data-tag="${CSS.escape(selectedTag)}"]`
      );
      if (clickedButton) {
        clickedButton.classList.add('active');
        clickedButton.classList.remove('bg-canvas');
        clickedButton.classList.remove('text-text-primary');
        clickedButton.classList.remove('border-line-strong');
        clickedButton.classList.add('bg-primary');
        clickedButton.classList.add('text-black');
        clickedButton.classList.add('border-primary');
        clickedButton.setAttribute('aria-pressed', 'true');
      }
      
      let visibleCount = 0;
      
      // Filter the items based on selected tag
      items.forEach(item => {
        const itemTags = item.getAttribute(dataAttribute)?.split(',') || [];
        
        // Case-insensitive matching
        if (selectedTag === allTagValue || 
            itemTags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())) {
          (item as HTMLElement).style.display = '';
          visibleCount++;
        } else {
          (item as HTMLElement).style.display = 'none';
        }
      });
      
      // Show/hide no results message
      noResultsMessage.classList.toggle('hidden', visibleCount > 0);
      
      // Hide any section-specific "no results" messages if they exist
      ['no-upcoming-results', 'no-past-results'].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.classList.add('hidden');
      });
    };
    
    // Set up event listeners for filter buttons
    tagButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tag = button.getAttribute('data-tag');
        if (tag) filterByTag(tag);
      });
    });
    
    // Set up clicking on tag spans within content items
    // Using a more direct and reliable selector for tag spans
    function setupTagSpanListeners() {
      document.querySelectorAll('.tag-span').forEach(span => {
        span.addEventListener('click', () => {
          // Get the text content and remove the # if it exists
          let tagText = span.textContent?.trim() || '';
          if (tagText.startsWith('#')) {
            tagText = tagText.substring(1);
          }
          
          if (tagText) {
            // Find and click the corresponding filter button
            const tagButton = document.querySelector(
              `${tagButtonsSelector}[data-tag="${CSS.escape(tagText)}"]`
            );
            if (tagButton) {
              (tagButton as HTMLElement).click();
              
              const filtersContainer = document.getElementById('tag-filters');
              if (filtersContainer) {
                const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
                  ? 'auto'
                  : 'smooth';
                filtersContainer.scrollIntoView({ behavior });
              }
            }
          }
        });
      });
    }
    
    // Initial setup of tag span listeners
    setupTagSpanListeners();

    filterByTag(allTagValue);
  };
}