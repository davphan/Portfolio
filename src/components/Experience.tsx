import { EXPERIENCE_SECTION } from "@/data/text";
import { SectionTitle } from "./typography/SectionTitle";
import type { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { printDateRange } from "@/util/dateUtil";
import Skills from "./Skills";
import { Badge } from "./ui/badge";

export default function Experience() {
  return (
    <div>
      <SectionTitle>Experience</SectionTitle>
      <p>{EXPERIENCE_SECTION.description}</p>
      {populateExperiences()}
    </div>
  );
}

function populateExperiences(): ReactNode {
  return (
    <div>
      {EXPERIENCE_SECTION.cards.map((data) => (
      <Card>
        <CardHeader>
          <CardTitle>{data.role}</CardTitle>
          <CardDescription>
            {data.organization}
            {printDateRange(data.date)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{data.description}</p>
          <div>
            <p>Skills</p>
            {data.skills.map((skill) => (
              <Badge variant="secondary">{skill.name}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      ))}
    </div>
  );
}