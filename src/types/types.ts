import { DynamicIconType } from "@/features/dynamic-icon/icon.enum";

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
  icons: DynamicIconType[];
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
  order: number;
  name: string;
  lastName: string;
  title: string;
  githubUrl: string;
  linkedinUrl: string;
  isPresenting: boolean;
  photo: Photo;
}
