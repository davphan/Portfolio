import { SKILLS_SECTION } from "@/data/text";
import { Container } from "./layout";
import { SectionTitle, Text } from "./typography";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Container id="skills" className="flex flex-col items-center py-16 md:py-24">
      <div
        ref={ref}
        className={cn(
          "flex w-full flex-col items-center gap-10",
          inView ? "animate-in fade-in slide-in-from-bottom-6 duration-700" : "opacity-0"
        )}
      >
        <div className="flex flex-col items-center gap-4 max-w-2xl text-center">
          <SectionTitle>Skills</SectionTitle>
          <Text>{SKILLS_SECTION.description}</Text>
        </div>
        <div className="flex w-full max-w-4xl flex-col gap-10">
          {SKILLS_SECTION.cards.map((data) => (
            <div key={data.title}>
              <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-wide text-muted-foreground">
                {data.title}
              </h3>
              <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
                {data.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 rounded-lg p-3 text-center transition-all duration-200 hover:scale-105 hover:bg-muted/60"
                  >
                    <div className="flex size-9 items-center justify-center [&>svg]:size-9!">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}