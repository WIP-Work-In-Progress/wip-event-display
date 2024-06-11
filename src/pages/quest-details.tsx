import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { getGame } from "@/lib/firebase.utils";
import { Route } from "@/routes/quest/$id";
import { Game } from "@/types/types";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import { redirect, useRouter } from "@tanstack/react-router";
import { FormEvent, useEffect, useState } from "react";

const QuestDetailsPage = () => {
  const { id } = Route.useParams();
  const [quest, setQuest] = useState<Game | null>(null);
  useEffect(() => {
    getGame(id).then((data) => setQuest(data));
  }, []);
  if (!quest) return <div>Loading ...</div>;
  return (
    <div className="grid place-items-center">
      <Card className="max-w-screen-lg border-4">
        <CardHeader className="grid place-items-center">
          <CardTitle className="text-3xl md:text-6xl tracking-wider">
            {quest.name.toUpperCase()}
          </CardTitle>
          <CardDescription>{quest.shortDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-xl text-justify p-5 bg-primary rounded-xl text-secondary m-5">
            {quest.description}
          </p>
          <div className="grid place-items-center mx-10">
            <Carousel className=" w-full">
              <CarouselContent>
                {quest.photos.map((photo, id) => (
                  <CarouselItem
                    key={id}
                    className="pl-1 md:basis-1/1 lg:basis-1/1 grid place-items-center"
                  >
                    <img className="" src={photo.url} alt={photo.name} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
          </div>
          {quest.name === "CTF Javascript Edition" && <JsQuest />}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

function JsQuest() {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const redirectToSubpage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.navigate({
      to: "/q/" + url,
    });
  };

  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Solution for quest #1</AccordionTrigger>
          <AccordionContent>
            {"flag{c4n_y0u_f1nd_4ll_s3cr3ts}"}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Solution for quest #2</AccordionTrigger>
          <AccordionContent>{"flag{10011010001011111}"}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Solution for quest #3</AccordionTrigger>
          <AccordionContent>
            {"flag{13,Jura_jnf_gur_fgnghgr_bs_gur_pyho_fhozvggrq}"}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Solution for quest #4</AccordionTrigger>
          <AccordionContent>{"flag{10100110110111000}"}</AccordionContent>
        </AccordionItem>
      </Accordion>
      <form
        onSubmit={(e) => redirectToSubpage(e)}
        className="p-5 grid place-items-center"
      >
        <div className="flex flex-col gap-3 w-3/6">
          <Input
            type="text"
            name="url"
            value={url}
            placeholder="00000"
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className="grid place-items-center">
            <Input
              className="md:w-3/6 cursor-pointer"
              type="submit"
              value="Submit decoded secret"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default QuestDetailsPage;
