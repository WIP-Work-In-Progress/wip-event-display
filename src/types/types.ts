export interface Photo {
  name: string;
  url: string;
}
export interface Game {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  previewPhoto: Photo;
  photos: Photo[];
  urls?: string[];
}

export interface RoadmapEvent {
  id: string;
  startDate: Date;
  endDate: Date;
  name: string;
  shortDescription: string;
  description: string;
  urls?: string[];
  photos?: Photo[];
  contributingMembers: string[];
}

export interface Member {
  id: string;
  name: string;
  lastName: string;
  title: string;
  githubUrl: string;
  linkedinUrl: string;
  isPresenting: boolean;
  photo: Photo;
}
