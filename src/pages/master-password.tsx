import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { db } from "@/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useState } from "react";

const MasterPassword = () => {
  const [password, setPassword] = useState<string>("");
  const [correct, setCorrect] = useState<boolean>(false);
  const { toast } = useToast();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const c = collection(db, "q");
    const docRef = doc(c, password);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      toast({
        title: "Incorrect password",
        variant: "destructive",
        description:
          "This is an incorrect password. If you're having trouble finding the right answer ask memebers of the club for hints",
      });
      return;
    }
    toast({ title: "Logged in" });
    setCorrect(true);
    return;
  };
  if (correct) {
    return (
      <div className="grid place-items-center">
        <Card>
          <CardHeader>
            <CardTitle>Great job solving the mystery!</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Join us and others that solved the mystery on{" "}
              <a className="underline" href="https://discord.gg/wyqARtxq">
                Discord
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }
  return (
    <div className="grid place-items-center">
      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle>Log in using master password</CardTitle>
        </CardHeader>
        <CardContent className="grid place-items-center">
          <form onSubmit={(e) => onSubmit(e)} className="max-w-lg">
            <Input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input type="submit" value="Log in" />
          </form>
        </CardContent>
      </Card>
      <Toaster />
    </div>
  );
};

export default MasterPassword;
