import { SKILLS_SECTION } from "@/data/text";
import { Container } from "./layout";
import { SectionTitle, Text } from "./typography";
import { Badge } from "./ui/badge";

export default function Skills() {
  return (
    <Container id="skills" className="flex flex-col items-center gap-10 py-16 md:py-24">
      <div className="flex flex-col items-center gap-4 max-w-2xl text-center">
        <SectionTitle>Skills</SectionTitle>
        <Text>{SKILLS_SECTION.description}</Text>
      </div>
      <div className="w-full max-w-3xl flex flex-col gap-8">
        {SKILLS_SECTION.cards.map((data) => (
          <div key={data.title} className="border-l-4 border-primary pl-6">
            <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-wide text-muted-foreground">
              {data.title}
            </h3>
            <div className="flex flex-wrap gap-3 mt-5">
              {data.skills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="h-11 gap-2 rounded-full px-4 text-base [&>svg]:size-6!"
                >
                  {skill.icon}
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}