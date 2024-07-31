import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import { education } from "../../data/text";

const YearTimeline = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const SideContainer = styled.div`
  color: ${({ theme }) => theme.secondary_dark};
  display: flex;
  flex-direction: column;
`;

const YearTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 300;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const YearRange = styled.h2`
  font-size: 1rem;
  font-weight: 200;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const YearContainer = styled.div`
  display: flex;
`;

const QuarterHeader = styled.h1`
  font-size: 1.1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.primary_dark};
  padding: 0 50px;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0;
  }
`;

const ClassCode = styled.p`
  font-size: 1rem;
  font-weight: 200;
  text-align: center;
  color: ${({ theme }) => theme.secondary_dark};
  margin: 0 auto;
  padding: 2px 10px;
  border-radius: 20px;
  box-sizing: border-box;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.secondary_dark + 10};
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0;
  }
`;

export default function YearView() {
  const theme = useTheme();
  const years = {
    "freshman": "2020-2021",
    "sophomore": "2021-2022",
    "junior": "2022-2023",
    "senior": "2023-2024"
  };
  const quarters = ["Autumn", "Winter", "Spring"];

  const courseList = Object.values(education.coursework).flat().map((course) => course.courses).flat();
  let courseByYear = {};
  Object.keys(years).forEach((year) => {
    courseByYear[year] = {};
    const thisYear = courseList.filter((course) => course.year === year);
    quarters.forEach((quarter) => {
      quarter = quarter.toLowerCase();
      courseByYear[year][quarter] = thisYear.filter((course) => course.quarter === quarter);
    })
  })

  return (
    <YearTimeline>
      <Timeline>
        {Object.keys(years).reverse().map((year, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent style={{flex:0.3}}>
              <SideContainer>
                <YearTitle>{year.charAt(0).toUpperCase() + year.slice(1)} Year</YearTitle>
                <YearRange>{years[year]}</YearRange>
              </SideContainer>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" sx={{borderColor: theme.primary_light}}/>
              {index !== years.length - 1 && (<TimelineConnector sx={{backgroundColor: theme.primary_light}}/>)}
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <YearContainer>
              {quarters.map((quarter, qId) => (
                <List key={qId}>
                  <ListSubheader>
                    <QuarterHeader>{quarter}</QuarterHeader>
                  </ListSubheader>
                  <Divider/>
                  {courseByYear[year][quarter.toLowerCase()].map((course, cId) => (
                    <ListItem key={cId}>
                      <ClassCode>{course.code}</ClassCode>
                    </ListItem>
                  ))}
                </List>
              ))}
              </YearContainer>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </YearTimeline>
  )
}