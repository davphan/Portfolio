import { EXPERIENCE_SECTION } from "@/data/text";
import { Container } from "./layout";
import { SectionHeader } from "./typography";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { isPresent, printDateRange } from "@/util/dateUtil";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import type { ExperienceCardData } from "@/types/data";

function TimelineEntry({ data }: { data: ExperienceCardData }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const current = isPresent(data.date);

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex gap-6 md:gap-8",
        inView ? "animate-in fade-in slide-in-from-left-6 duration-700" : "opacity-0"
      )}
    >
      <div
        className={cn(
          "relative z-10 flex size-14 shrink-0 items-center justify-center self-start overflow-hidden rounded-full bg-card shadow-md ring-4 ring-offset-2 ring-offset-background md:size-16",
          current ? "ring-primary" : "ring-border"
        )}
      >
        {data.img ? (
          <img src={data.img} alt={`${data.organization} logo`} className="size-full object-cover" />
        ) : (
          <span className="size-3 rounded-full bg-primary" aria-hidden="true" />
        )}
      </div>
      <Card className="flex-1 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            <CardTitle className="text-xl">{data.role}</CardTitle>
            {current && <Badge className="text-xs">Current</Badge>}
          </div>
          <CardDescription className="flex flex-wrap gap-x-2 text-lg">
            <span>{data.organization}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{printDateRange(data.date)}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <ul className="list-disc space-y-2 pl-5 text-lg text-foreground">
            {data.description.map((sentence) => (
              <li key={sentence}>{sentence}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="h-9 gap-1.5 rounded-full px-3 text-base [&>svg]:size-5!"
              >
                {skill.icon}
                {skill.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Experience() {
  return (
    <Container id="experience" className="flex flex-col items-center gap-10 py-16 md:py-24">
      <SectionHeader title="Experience" description={EXPERIENCE_SECTION.description} />
      <div className="relative w-full max-w-3xl">
        <div className="absolute top-2 bottom-2 left-7 w-px bg-border md:left-8" aria-hidden="true" />
        <div className="flex flex-col gap-10">
          {EXPERIENCE_SECTION.cards.map((data) => (
            <TimelineEntry key={`${data.organization}-${data.role}`} data={data} />
          ))}
        </div>
      </div>
    </Container>
  );
}
