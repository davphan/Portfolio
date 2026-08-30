import { useMemo, useState } from "react";
import { EDUCATION_SECTION } from "@/data/text";
import { Container } from "./layout";
import { SectionHeader } from "./typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { CourseType, type CourseData, type CourseSeriesData } from "@/types/data";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

type FlatCourse = CourseData & { series: string, category: string };
type SortKey = "code" | "series" | "date";

const YEAR_ORDER = ["freshman", "sophomore", "junior", "senior"];
const QUARTER_ORDER = ["autumn", "winter", "spring", "summer"];
const YEAR_VIEW_QUARTERS = ["autumn", "winter", "spring"];
const COURSE_BADGE_CLASS = "h-8 w-fit rounded-full px-3 text-sm";

function categorizedCourses(): [string, CourseSeriesData[]][] {
  return [
    [CourseType.cs, EDUCATION_SECTION.coursework.cs],
    [CourseType.ece, EDUCATION_SECTION.coursework.ece],
    [CourseType.other, EDUCATION_SECTION.coursework.other],
  ];
}

function flattenCourses(): FlatCourse[] {
  return categorizedCourses().flatMap(([category, series]) =>
    series.flatMap((s) => s.courses.map((course) => ({ ...course, series: s.series, category })))
  );
}

function parseGradYear(gradDate: string): number {
  const match = gradDate.match(/\d{4}/);
  return match ? parseInt(match[0], 10) : new Date().getFullYear();
}

function CourseSeries({ series }: { series: CourseSeriesData }) {
  return (
    <div className="flex w-56 flex-col items-center gap-3 rounded-2xl border border-border p-4 text-center">
      <h4 className="text-base font-medium">{series.series}</h4>
      <div className="flex flex-wrap justify-center gap-2">
        {series.courses.map((course) => (
          <Badge key={course.code} variant="outline" title={course.details} className={COURSE_BADGE_CLASS}>
            {course.code}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function SubjectView() {
  return (
    <div className="flex flex-col gap-10">
      {categorizedCourses().map(([category, series]) => (
        <div key={category}>
          <h3 className="mb-4 text-center text-xl font-semibold text-primary md:text-left">{category}</h3>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            {series.map((s) => (
              <CourseSeries key={s.series} series={s} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SortableHead({ id, label, orderBy, order, onSort }: {
  id: SortKey,
  label: string,
  orderBy: SortKey,
  order: "asc" | "desc",
  onSort: (id: SortKey) => void,
}) {
  const active = orderBy === id;
  return (
    <TableHead>
      <button
        type="button"
        onClick={() => onSort(id)}
        className="flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
      >
        {label}
        {active && (order === "asc" ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />)}
      </button>
    </TableHead>
  );
}

function ListView() {
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<SortKey>("date");
  const courses = useMemo(() => flattenCourses(), []);

  const sorted = useMemo(() => {
    const ranked = courses.map((course) => ({
      ...course,
      rank: YEAR_ORDER.indexOf(course.year) * 10 + QUARTER_ORDER.indexOf(course.quarter),
    }));
    ranked.sort((a, b) => {
      let cmp: number;
      if (orderBy === "code") cmp = a.code.localeCompare(b.code);
      else if (orderBy === "series") cmp = a.series.localeCompare(b.series);
      else cmp = a.rank - b.rank;
      return order === "asc" ? cmp : -cmp;
    });
    return ranked;
  }, [courses, order, orderBy]);

  function handleSort(key: SortKey) {
    if (orderBy === key) setOrder(order === "asc" ? "desc" : "asc");
    else {
      setOrderBy(key);
      setOrder("asc");
    }
  }

  return (
    <div className="max-h-[28rem] overflow-y-auto rounded-lg border border-border">
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-background">
          <TableRow>
            <SortableHead id="code" label="Course Code" orderBy={orderBy} order={order} onSort={handleSort} />
            <SortableHead id="series" label="Course Series" orderBy={orderBy} order={order} onSort={handleSort} />
            <SortableHead id="date" label="Date" orderBy={orderBy} order={order} onSort={handleSort} />
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((course) => (
            <TableRow key={`${course.category}-${course.series}-${course.code}`}>
              <TableCell className="font-medium">{course.code}</TableCell>
              <TableCell>{course.series}</TableCell>
              <TableCell className="capitalize">{course.quarter}, {course.year} year</TableCell>
              <TableCell className="text-muted-foreground">{course.details ?? "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function YearView() {
  const courses = useMemo(() => flattenCourses(), []);
  const gradYear = parseGradYear(EDUCATION_SECTION.grad_date);
  const years = YEAR_ORDER.filter((year) => courses.some((course) => course.year === year));

  return (
    <div className="relative w-full">
      <div className="absolute top-2 bottom-2 left-3 w-px bg-border" aria-hidden="true" />
      <div className="flex flex-col gap-10">
        {years.map((year) => {
          const index = YEAR_ORDER.indexOf(year);
          const startYear = gradYear - (YEAR_ORDER.length - index);
          return (
            <div key={year} className="relative flex gap-6 md:gap-8">
              <div className="flex w-6 shrink-0 justify-center pt-2">
                <span
                  className="relative z-10 size-3 rounded-full bg-primary ring-4 ring-offset-2 ring-offset-background ring-border"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-1">
                <div className="mb-3 flex flex-wrap items-baseline gap-2">
                  <h3 className="text-lg font-semibold capitalize text-primary">{year} Year</h3>
                  <span className="text-sm text-muted-foreground">{startYear}-{startYear + 1}</span>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {YEAR_VIEW_QUARTERS.map((quarter) => (
                    <div key={quarter}>
                      <h4 className="mb-2 text-sm font-medium capitalize text-muted-foreground">{quarter}</h4>
                      <div className="flex flex-col gap-1.5">
                        {courses
                          .filter((course) => course.year === year && course.quarter === quarter)
                          .map((course) => (
                            <Badge
                              key={`${course.category}-${course.series}-${course.code}`}
                              variant="outline"
                              title={course.series}
                              className={cn(COURSE_BADGE_CLASS)}
                            >
                              {course.code}
                            </Badge>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SchoolOverview() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("mb-6 w-full max-w-3xl", inView ? "animate-in fade-in slide-in-from-bottom-4 duration-700" : "opacity-0")}
    >
      <Card className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
        <CardContent className="flex flex-col items-center gap-6 py-2 md:flex-row md:items-center">
          <div className="flex flex-col items-center gap-3 text-center">
            <img src={EDUCATION_SECTION.img} alt={`${EDUCATION_SECTION.school} logo`} className="size-24 object-contain" />
            <span className="text-xl font-semibold">{EDUCATION_SECTION.school}</span>
          </div>
          <Separator orientation="vertical" className="hidden h-24 md:block" />
          <Separator orientation="horizontal" className="md:hidden" />
          <ul className="flex flex-col gap-2 text-lg">
            <li><span className="font-semibold">Major:</span> {EDUCATION_SECTION.major}</li>
            <li><span className="font-semibold">GPA:</span> {EDUCATION_SECTION.gpa}</li>
            <li><span className="font-semibold">Graduation Date:</span> {EDUCATION_SECTION.grad_date}</li>
            <li><span className="font-semibold">Honors:</span> {EDUCATION_SECTION.honors}</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Education() {
  return (
    <Container id="education" className="flex flex-col items-center gap-10 py-16 md:py-24">
      <Tabs defaultValue="year" className="w-full max-w-3xl items-center">
        <SectionHeader title="Education" description={EDUCATION_SECTION.description}>
          <TabsList className="group-data-horizontal/tabs:h-11">
            <TabsTrigger value="year" className="px-4 text-base">Year</TabsTrigger>
            <TabsTrigger value="subject" className="px-4 text-base">Subject</TabsTrigger>
            <TabsTrigger value="list" className="px-4 text-base">List</TabsTrigger>
          </TabsList>
        </SectionHeader>
        <SchoolOverview />
        <TabsContent value="year" className="w-full">
          <YearView />
        </TabsContent>
        <TabsContent value="subject" className="w-full">
          <SubjectView />
        </TabsContent>
        <TabsContent value="list" className="w-full">
          <ListView />
        </TabsContent>
      </Tabs>
    </Container>
  );
}
