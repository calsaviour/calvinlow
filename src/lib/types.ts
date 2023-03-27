export type Repo = {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language?: string;
};

export type PinnedRepos = Repo[];

export type Blog = {
  slug: string;
  url: string;
  title: string;
  public_reactions_count: number;
};

export type RecentBlogs = Blog[];
