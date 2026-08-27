import { EDUCATION_SECTION } from "@/data/text";
import { Container } from "./layout";
import { SectionHeader } from "./typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { CourseType, type CourseData, type CourseSeriesData } from "@/types/data";

type FlatCourse = CourseData & { series: string, category: string };

const YEAR_ORDER = ["freshman", "sophomore", "junior", "senior"];
const QUARTER_ORDER = ["autumn", "winter", "spring", "summer"];

function flattenCourses(): FlatCourse[] {
  const categories: [string, CourseSeriesData[]][] = [
    [CourseType.cs, EDUCATION_SECTION.coursework.cs],
    [CourseType.ece, EDUCATION_SECTION.coursework.ece],
    [CourseType.other, EDUCATION_SECTION.coursework.other],
  ];
  return categories.flatMap(([category, series]) =>
    series.flatMap((s) => s.courses.map((course) => ({ ...course, series: s.series, category })))
  );
}

function sortCourses(courses: FlatCourse[]): FlatCourse[] {
  return [...courses].sort((a, b) => {
    const yearDiff = YEAR_ORDER.indexOf(a.year) - YEAR_ORDER.indexOf(b.year);
    if (yearDiff !== 0) return yearDiff;
    return QUARTER_ORDER.indexOf(a.quarter) - QUARTER_ORDER.indexOf(b.quarter);
  });
}

function CourseSeries({ series }: { series: CourseSeriesData }) {
  return (
    <div>
      <h4 className="font-medium">{series.series}</h4>
      <div className="flex flex-wrap gap-2 mt-2">
        {series.courses.map((course) => (
          <Badge key={course.code} variant="outline" title={course.details}>
            {course.code}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function SubjectView() {
  const categories: [string, CourseSeriesData[]][] = [
    [CourseType.cs, EDUCATION_SECTION.coursework.cs],
    [CourseType.ece, EDUCATION_SECTION.coursework.ece],
    [CourseType.other, EDUCATION_SECTION.coursework.other],
  ];

  return (
    <div className="flex flex-col gap-8">
      {categories.map(([category, series]) => (
        <div key={category}>
          <h3 className="text-lg font-semibold text-primary">{category}</h3>
          <div className="flex flex-col gap-4 mt-3">
            {series.map((s) => (
              <CourseSeries key={s.series} series={s} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ListView() {
  const courses = sortCourses(flattenCourses());

  return (
    <div className="flex flex-col divide-y divide-border">
      {courses.map((course) => (
        <div key={`${course.category}-${course.series}-${course.code}`} className="flex flex-wrap items-center justify-between gap-2 py-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{course.code}</Badge>
            <span>{course.series}</span>
          </div>
          <span className="text-sm text-muted-foreground capitalize">
            {course.year}, {course.quarter}
          </span>
        </div>
      ))}
    </div>
  );
}

function YearView() {
  const courses = sortCourses(flattenCourses());
  const years = YEAR_ORDER.filter((year) => courses.some((course) => course.year === year));

  return (
    <div className="flex flex-col gap-8">
      {years.map((year) => (
        <div key={year}>
          <h3 className="text-lg font-semibold capitalize text-primary">{year}</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {courses
              .filter((course) => course.year === year)
              .map((course) => (
                <Badge key={`${course.category}-${course.series}-${course.code}`} variant="outline" title={course.series}>
                  {course.code}
                </Badge>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Education() {
  return (
    <Container id="education" className="flex flex-col items-center gap-10 py-16 md:py-24">
      <SectionHeader title="Education" description={EDUCATION_SECTION.description} />
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <div className="flex items-center gap-4">
            <img src={EDUCATION_SECTION.img} alt={`${EDUCATION_SECTION.school} logo`} className="size-12 shrink-0 object-contain" />
            <div>
              <CardTitle className="text-lg">{EDUCATION_SECTION.school}</CardTitle>
              <CardDescription className="text-base">{EDUCATION_SECTION.major}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge variant="secondary">GPA: {EDUCATION_SECTION.gpa}</Badge>
          <Badge variant="secondary">{EDUCATION_SECTION.honors}</Badge>
          <Badge variant="secondary">Graduated {EDUCATION_SECTION.grad_date}</Badge>
        </CardContent>
      </Card>
      <Tabs defaultValue="subject" className="w-full max-w-3xl items-center">
        <TabsList>
          <TabsTrigger value="subject">Subject</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
          <TabsTrigger value="year">Year</TabsTrigger>
        </TabsList>
        <TabsContent value="subject" className="w-full">
          <SubjectView />
        </TabsContent>
        <TabsContent value="list" className="w-full">
          <ListView />
        </TabsContent>
        <TabsContent value="year" className="w-full">
          <YearView />
        </TabsContent>
      </Tabs>
    </Container>
  );
}
