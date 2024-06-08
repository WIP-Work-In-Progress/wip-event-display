export interface Game {
  id: string;
  name: string;
  description: string;
}

export interface RoadmapEvent {
  id: string;
  start_date: Date;
  end_date: Date;
  name: string;
  url?: string;
}

export interface Member {
  id: string;
  name: string;
  last_name: string;
  title: string;
  github_url: string;
  linkedin_url: string;
}
