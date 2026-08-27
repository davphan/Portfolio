import { useEffect, useState } from "react";
import { ABOUT } from "@/data/text";
import { Button } from "./ui/button";
import { Container } from "./layout";
import { cn } from "@/lib/utils";
import headshot from "@/assets/headshot.jpg";
import resumePdf from "@/data/resume/resume.pdf?url";
import { HeroTitle, Text } from "./typography";
import TypewriterComponent from "typewriter-effect";
import { ArrowRight, ChevronDown, ExternalLink } from "lucide-react";

function ScrollCue() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    function onScroll() {
      setAtTop(window.scrollY < 50);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#skills"
      aria-label="Scroll to Skills section"
      className={cn(
        "fixed bottom-6 left-1/2 z-20 -translate-x-1/2 animate-bounce text-muted-foreground transition-opacity duration-300 hover:text-foreground",
        atTop ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <ChevronDown className="size-6" />
    </a>
  );
}

export default function Hero() {
  return (
    <Container id="about" className="flex flex-col items-center gap-6 py-16 text-center md:py-24">
      <div className="flex animate-in flex-col items-center gap-6 fade-in slide-in-from-bottom-6 duration-700">
        <img
          className="size-48 rounded-full object-cover shadow-xl ring-4 ring-primary/15 md:size-56 dark:shadow-primary/20"
          src={headshot}
          alt="Headshot of David Phan"
        />
        <HeroTitle>{ABOUT.fname} {ABOUT.lname}</HeroTitle>
        <div className="flex min-h-16 items-center justify-center text-2xl font-medium text-primary md:min-h-12 md:text-3xl">
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
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg" asChild>
            <a href={resumePdf} target="_blank" rel="noreferrer">
              Open Resume
              <ExternalLink />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" asChild>
            <a href="#projects">
              View My Work
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
      <ScrollCue />
    </Container>
  );
}
