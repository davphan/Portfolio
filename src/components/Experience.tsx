import { EXPERIENCE_SECTION } from "@/data/text";
import { Container } from "./layout";
import { SectionTitle, Text } from "./typography";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { printDateRange } from "@/util/dateUtil";
import { Badge } from "./ui/badge";

export default function Experience() {
  return (
    <Container id="experience" className="flex flex-col items-center gap-10 py-16 md:py-24">
      <div className="flex flex-col items-center gap-4 max-w-2xl text-center">
        <SectionTitle>Experience</SectionTitle>
        <Text>{EXPERIENCE_SECTION.description}</Text>
      </div>
      <div className="w-full max-w-3xl flex flex-col gap-6">
        {EXPERIENCE_SECTION.cards.map((data) => (
          <Card key={`${data.organization}-${data.role}`}>
            <CardHeader>
              <div className="flex items-start gap-4">
                {data.img && (
                  <img
                    src={data.img}
                    alt={`${data.organization} logo`}
                    className="size-16 shrink-0 rounded-md object-contain"
                  />
                )}
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-xl">{data.role}</CardTitle>
                  <CardDescription className="flex flex-wrap gap-x-2 text-lg">
                    <span>{data.organization}</span>
                    <span aria-hidden>&middot;</span>
                    <span>{printDateRange(data.date)}</span>
                  </CardDescription>
                </div>
              </div>
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
        ))}
      </div>
    </Container>
  );
}