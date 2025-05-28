/**
 * Shared interface for content links
 */
export interface ContentLink {
    url?: string;
    target?: string;
    title?: string;
    buttonLabel?: string;
}

/**
 * Interface for project content
 */
export interface Project {
    name: string;
    description: string;
    link: ContentLink;
}

/**
 * Interface for speaking engagements
 */
export interface SpeakingEngagement {
    title: string;
    event?: string;
    date: string;
    description: string;
    status: 'upcoming' | 'past';
    tags?: string[];
    link?: ContentLink;
    time?: string;
}

/**
 * Interface for tag filtering
 */
export interface TagFilterOptions {
    tagButtonsSelector: string;
    itemsSelector: string;
    noResultsSelector: string;
    dataAttribute?: string;
    allTagValue?: string;
}