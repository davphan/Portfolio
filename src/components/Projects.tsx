import { PROJECTS_SECTION } from "@/data/text";
import { SectionTitle } from "./typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ProjectGroup } from "@/types/data";
import type { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { printDateRange } from "@/util/dateUtil";
import { Badge } from "./ui/badge";

export default function Projects() {
  return (
    <div>
      <SectionTitle>Projects</SectionTitle>
      <p>{PROJECTS_SECTION.description}</p>
      {populateProjects()}
    </div>
  );
}

function populateProjects(): ReactNode {
  return (
    <Tabs>
      <TabsList>
        <TabsTrigger value="All">All</TabsTrigger>
        {Object.values(ProjectGroup).map((group) => (
          <TabsTrigger value={group}>{group}</TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="All">
        {PROJECTS_SECTION.cards.map((data) => (
          <Card>
            <CardHeader>
              <CardTitle>{data.title}</CardTitle>
              <CardDescription>{printDateRange(data.date)}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{data.description}</p>
              {data.links?.map((link) => (
                <a href={link.url}>{link.text}</a>
              ))}
              {data.skills.map((skill) => (
                <Badge variant="secondary">{skill.name}</Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </TabsContent>
      {Object.values(ProjectGroup).map((group) => (
        <TabsContent value={group}>
          {PROJECTS_SECTION.cards.map((data) => (
            <Card>
              <CardHeader>
                <CardTitle>{data.title}</CardTitle>
                <CardDescription>{printDateRange(data.date)}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
}