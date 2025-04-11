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
        btn.classList.add('bg-black');
      });
      
      const clickedButton = document.querySelector(`${tagButtonsSelector}[data-tag="${selectedTag}"]`);
      if (clickedButton) {
        clickedButton.classList.add('active');
        clickedButton.classList.remove('bg-black');
        clickedButton.classList.add('bg-primary');
      }
      
      let visibleCount = 0;
      
      // Filter the items based on selected tag
      items.forEach(item => {
        const itemTags = item.getAttribute(dataAttribute)?.split(',') || [];
        
        if (selectedTag === allTagValue || itemTags.includes(selectedTag)) {
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
            const tagButton = document.querySelector(`${tagButtonsSelector}[data-tag="${tagText}"]`);
            if (tagButton) {
              (tagButton as HTMLElement).click();
              
              // Optional: Scroll to the filters if a specific element ID is provided
              const filtersContainer = document.getElementById('tag-filters');
              if (filtersContainer) {
                filtersContainer.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }
        });
      });
    }
    
    // Initial setup of tag span listeners
    setupTagSpanListeners();
    
    // For dynamic content, we can use a MutationObserver to watch for new tag spans
    // This is optional but helpful if content is loaded dynamically
    const observer = new MutationObserver((mutations) => {
      let shouldSetupListeners = false;
      
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
          shouldSetupListeners = true;
        }
      });
      
      if (shouldSetupListeners) {
        setupTagSpanListeners();
      }
    });
    
    // Start observing the document body for changes
    observer.observe(document.body, { 
      childList: true,
      subtree: true
    });
    
    // Initialize the "All" button as active by default
    const allButton = document.querySelector(`${tagButtonsSelector}[data-tag="${allTagValue}"]`);
    if (allButton) {
      allButton.classList.remove('bg-black');
      allButton.classList.add('bg-primary');
      allButton.classList.add('active');
    }
    
    // Return the observer to allow for cleanup if needed
    return observer;
  };
}