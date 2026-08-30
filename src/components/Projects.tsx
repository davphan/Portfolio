import { PROJECTS_SECTION } from "@/data/text";
import { Container } from "./layout";
import { SectionHeader } from "./typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ProjectGroup, type ProjectsCardData } from "@/types/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { printDateRange } from "@/util/dateUtil";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { ExternalLink } from "lucide-react";
import { SiGithub, SiYoutube } from "react-icons/si";

function linkIcon(text: string) {
  const lower = text.toLowerCase();
  if (lower.includes("github")) return <SiGithub />;
  if (lower.includes("youtube")) return <SiYoutube />;
  return <ExternalLink />;
}

function ProjectCard({ data }: { data: ProjectsCardData }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={inView ? "animate-in fade-in slide-in-from-bottom-4 duration-700" : "opacity-0"}
    >
      <Card className={cn("transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg")}>
        <CardHeader>
          <CardTitle className="text-xl">{data.title}</CardTitle>
          <CardDescription className="text-lg">{printDateRange(data.date)}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-lg text-muted-foreground">{data.description}</p>
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
          {data.links && data.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {data.links.map((link) => (
                <Button key={link.url} variant="secondary" asChild className="gap-1.5 text-base [&_svg]:size-5!">
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {linkIcon(link.text)}
                    {link.text}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default function Projects() {
  return (
    <Container id="projects" className="flex flex-col items-center gap-10 py-16 md:py-24">
      <Tabs defaultValue="All" className="w-full max-w-3xl items-center">
        <SectionHeader title="Projects" description={PROJECTS_SECTION.description}>
          <TabsList className="group-data-horizontal/tabs:h-11">
            <TabsTrigger value="All" className="px-4 text-base">All</TabsTrigger>
            {Object.values(ProjectGroup).map((group) => (
              <TabsTrigger key={group} value={group} className="px-4 text-base">{group}</TabsTrigger>
            ))}
          </TabsList>
        </SectionHeader>
        <TabsContent value="All" className="w-full flex flex-col gap-6">
          {PROJECTS_SECTION.cards.map((data) => (
            <ProjectCard key={data.title} data={data} />
          ))}
        </TabsContent>
        {Object.values(ProjectGroup).map((group) => (
          <TabsContent key={group} value={group} className="w-full flex flex-col gap-6">
            {PROJECTS_SECTION.cards
              .filter((data) => data.group === group)
              .map((data) => (
                <ProjectCard key={data.title} data={data} />
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </Container>
  );
}