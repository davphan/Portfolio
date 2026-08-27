import { ABOUT } from "@/data/text";
import { Button } from "./ui/button";
import { Container } from "./layout";
import headshot from "@/assets/headshot.jpg";
import resumePdf from "@/data/resume/resume.pdf?url";
import { HeroTitle, Text } from "./typography";
import TypewriterComponent from "typewriter-effect";

export default function Hero() {
  return (
    <Container id="about" className="flex flex-col items-center gap-6 py-16 text-center md:py-24">
      <img
        className="size-40 rounded-full object-cover md:size-48"
        src={headshot}
        alt="Headshot of David Phan"
      />
      <HeroTitle>{ABOUT.fname} {ABOUT.lname}</HeroTitle>
      <div className="text-2xl font-medium text-primary md:text-3xl">
        <TypewriterComponent
          options={{
            strings: ABOUT.roles,
            autoStart: true,
            loop: true,
            delay: 70,
            deleteSpeed: 30,
          }}
        />
      </div>
      <Text>{ABOUT.description}</Text>
      <Button size="lg" className="rounded-full" asChild>
        <a href={resumePdf} target="_blank" rel="noreferrer">Open Resume</a>
      </Button>
    </Container>
  );
}