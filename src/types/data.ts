import type { ReactNode } from "react";

export interface SkillCardData {
  title: string,
  skills: SkillData[],
}

export interface SkillData {
  name: string,
  icon?: ReactNode,
}

export type date = [month: number, year: number];
export type dateRange = [startDate: date, endDate: date]

export interface ExperienceCardData {
  role: string,
  organization: string,
  description: string,
  date: dateRange,
  skills: SkillData[],
  img?: string,
}

export const ProjectGroup = {
  software: "Software",
  hardware: "Hardware",
  other: "Other"
} as const;

export interface ProjectsCardData {
  title: string,
  description: string,
  date: dateRange,
  skills: SkillData[],
  group: string,
  links?: {
    text: string,
    url: string,
  }[]
}

export const CourseType = {
  cs: "Computer Science",
  ece: "Electrical and Computer Engineering",
  other: "Other"
} as const;

export interface CourseData {
  code: string,
  year: string,
  quarter: string,
  details?: string,
}

export interface CourseSeriesData {
  series: string,
  courses: CourseData[],
}

