import { PROJECTS_SECTION } from "@/data/text";
import { Container } from "./layout";
import { SectionTitle, Text } from "./typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ProjectGroup, type ProjectsCardData } from "@/types/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { printDateRange } from "@/util/dateUtil";
import { Badge } from "./ui/badge";

function ProjectCard({ data }: { data: ProjectsCardData }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{data.title}</CardTitle>
        <CardDescription className="text-base">{printDateRange(data.date)}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-muted-foreground">{data.description}</p>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill) => (
            <Badge key={skill.name} variant="secondary" className="gap-1.5">
              {skill.icon}
              {skill.name}
            </Badge>
          ))}
        </div>
        {data.links && data.links.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {data.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function Projects() {
  return (
    <Container id="projects" className="flex flex-col items-center gap-10 py-16 md:py-24">
      <div className="flex flex-col items-center gap-4 max-w-2xl text-center">
        <SectionTitle>Projects</SectionTitle>
        <Text>{PROJECTS_SECTION.description}</Text>
      </div>
      <Tabs defaultValue="All" className="w-full max-w-3xl items-center">
        <TabsList>
          <TabsTrigger value="All">All</TabsTrigger>
          {Object.values(ProjectGroup).map((group) => (
            <TabsTrigger key={group} value={group}>{group}</TabsTrigger>
          ))}
        </TabsList>
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