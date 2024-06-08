import { db } from "@/firebase";
import { Game, Member, Photo, RoadmapEvent } from "@/types/types";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

const gamesRef = collection(db, "games");
const roadmapRef = collection(db, "roadmap");
const usersRef = collection(db, "members");

export const getGames = async () => {
  const result: Game[] = [];
  const q = query(gamesRef);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const game: Game = {
      id: doc.id,
      name: data.name,
      short_description: data.short_description,
      description: data.description,
      preview_photo: {
        name: data.preview_photo.name,
        url: data.preview_photo.url,
      },
      photos: data.photos.map((photo: Photo) => {
        return {
          name: photo.name,
          url: photo.url,
        };
      }),
      urls: data.urls.map((url: string) => {
        return url;
      }),
    };
    result.push(game);
  });
  return result;
};

export const getGame = async (id: string) => {
  const docRef = doc(gamesRef, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const game: Game = {
      id: docSnap.id,
      name: data.name,
      short_description: data.short_description,
      description: data.description,
      preview_photo: {
        name: data.preview_photo.name,
        url: data.preview_photo.url,
      },
      photos: data.photos.map((photo: Photo) => {
        return {
          name: photo.name,
          url: photo.url,
        };
      }),
      urls: data.url.map((url: string) => {
        return url;
      }),
    };
    return game;
  } else {
    console.log("No such document!");
  }
  return null;
};

export const getRoadmap = async () => {
  const result: RoadmapEvent[] = [];
  const q = query(roadmapRef, orderBy("start_date"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const event: RoadmapEvent = {
      id: doc.id,
      start_date: data.start_date.toDate(),
      end_date: data.end_date.toDate(),
      name: data.name,
      short_description: data.short_description,
      description: data.description,
      urls: data.urls.map((url: string) => {
        return url;
      }),
      photos: data.photos.map((photo: Photo) => {
        return {
          name: photo.name,
          url: photo.url,
        };
      }),
      contributing_members: data.contributing_members.map((member: string) => {
        return member;
      }),
    };
    result.push(event);
  });
  return result;
};

export const getRoadmapEvent = async (id: string) => {
  const docRef = doc(roadmapRef, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const roadMapEvent: RoadmapEvent = {
      id: docSnap.id,
      start_date: data.start_date.toDate(),
      end_date: data.end_date.toDate(),
      name: data.name,
      short_description: data.short_description,
      description: data.description,
      urls: data.urls.map((url: string) => {
        return url;
      }),
      photos: data.photos.map((photo: Photo) => {
        return {
          name: photo.name,
          url: photo.url,
        };
      }),
      contributing_members: data.contributing_members.map((member: string) => {
        return member;
      }),
    };
    return roadMapEvent;
  } else {
    console.log("No such document!");
  }
  return null;
};

export const getMembers = async () => {
  const result: Member[] = [];
  const q = query(usersRef);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const member: Member = {
      id: doc.id,
      name: data.name,
      last_name: data.last_name,
      title: data.title,
      github_url: data.github_url,
      linkedin_url: data.linkedin_url,
      is_presenting: data.is_presenting,
    };
    result.push(member);
  });
  return result;
};

export const getMember = async (id: string) => {
  const docRef = doc(usersRef, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const member: Member = {
      id: docSnap.id,
      name: data.name,
      last_name: data.last_name,
      title: data.title,
      github_url: data.github_url,
      linkedin_url: data.linkedin_url,
      is_presenting: data.is_presenting,
    };
    return member;
  } else {
    console.log("No such document!");
  }
  return null;
};
