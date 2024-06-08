export interface Photo {
  name: string;
  url: string;
}
export interface Game {
  id: string;
  name: string;
  short_description: string;
  description: string;
  preview_photo: Photo;
  photos: Photo[];
  urls?: string[];
}

export interface RoadmapEvent {
  id: string;
  start_date: Date;
  end_date: Date;
  name: string;
  short_description: string;
  description: string;
  urls?: string[];
  photos?: Photo[];
  contributing_members: string[];
}

export interface Member {
  id: string;
  name: string;
  last_name: string;
  title: string;
  github_url: string;
  linkedin_url: string;
  is_presenting: boolean;
}
