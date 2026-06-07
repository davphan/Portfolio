import { SKILLS_SECTION } from "@/data/text";
import { SectionTitle } from "./typography/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type { ReactNode } from "react";
import { Badge } from "./ui/badge";

export default function Skills() {

  return(
    <div>
      <SectionTitle>Skills</SectionTitle>
      <p>{SKILLS_SECTION.description}</p>
      {populateSkillsCards()}
    </div>
  );
}

function populateSkillsCards(): ReactNode {
  let cards = [];

  SKILLS_SECTION.cards.forEach((data) => {
    let skills = data.skills.map((skill) => (
      <Badge variant="secondary">{skill.name}</Badge>
    ));
    const card = <Card>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        {skills}
      </CardHeader>
      <CardContent>

      </CardContent>
    </Card>;

    cards.push(card);
  });

  return(
    <div>
      {cards}
    </div>
  );
}