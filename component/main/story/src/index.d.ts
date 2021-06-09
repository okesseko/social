export interface user {
  username: string;
  profile: string;
}

export interface StoryType {
  id?: number;
  url?: string;
  type?: string | 'image' | 'video' | 'text';
  duration?: number;
  isReadMore?: boolean;
  isSeen?: boolean;
  isPaused?: boolean;
  url_readmore?: string;
  created?: string;
  storyid?: number;
  title?: string;
}

export interface StoriesType {
  username?: string;
  profile?: string;
  title?: string;
  storyid?: number;
  stories?: Array<StoryType>;
}
