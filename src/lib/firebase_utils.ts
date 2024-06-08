import { db } from "@/firebase";
import { Game, Member, RoadmapEvent } from "@/types/types";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";

const gamesRef = collection(db, "games");
const roadmapRef = collection(db, "roadmap");
const usersRef = collection(db, "users");

export const getGames = async () => {
  const result: Game[] = [];
  const q = query(gamesRef);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const game = {
      id: doc.id,
      name: data.name,
      description: data.description,
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
    return {
      id: docSnap.id,
      name: data.name,
      description: data.description,
    };
  } else {
    console.log("No such document!");
  }
};

export const getRoadmap = async () => {
  const result: RoadmapEvent[] = [];
  const q = query(roadmapRef);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const event = {
      id: doc.id,
      start_date: data.start_date.toDate(),
      end_date: data.end_date.toDate(),
      name: data.name,
      url: data.url,
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
    return {
      id: docSnap.id,
      start_date: data.start_date.toDate(),
      end_date: data.end_date.toDate(),
      name: data.name,
      url: data.url,
    };
  } else {
    console.log("No such document!");
  }
};

export const getUsers = async () => {
  const result: Member[] = [];
  const q = query(usersRef);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const member = {
      id: doc.id,
      name: data.name,
      last_name: data.last_name,
      title: data.title,
      github_url: data.github_url,
      linkedin_url: data.linkedin_url,
    };
    result.push(member);
  });
  return result;
};

export const getUser = async (id: string) => {
  const docRef = doc(usersRef, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return {
      id: docSnap.id,
      name: data.name,
      last_name: data.last_name,
      title: data.title,
      github_url: data.github_url,
      linkedin_url: data.linkedin_url,
    };
  } else {
    console.log("No such document!");
  }
};
