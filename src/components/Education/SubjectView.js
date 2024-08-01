import React from "react";
import styled from "styled-components";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import { education } from "../../data/text";

const SubjectViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubjectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubjectTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const SeriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

const SeriesList = styled.div`
  width: 200px;
  margin: 10px;
  border: 0.15px solid ${({ theme }) => theme.secondary_dark + 20};
  border-radius: 20px;

  @media screen and (max-width: 480px) {
    width: 150px;
  }
`;

const SeriesHeader = styled.h2`
  font-size: 1rem;
  font-weight: 300;
  width: 100%;
  height: 40px;
  color: ${({ theme }) => theme.primary_dark};
  padding: 10px 0 20px 0;
  margin: 0;
  line-height: 1.5;
  vertical-align: middle;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    padding: 10px 0 30px 0;
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
    font-size: 0.9rem;
  }
`;

export default function SubjectView() {
  const subjects = {
    "cs": "Computer Science",
    "ece": "Electrical and Computer Engineering",
    "other": "Others"
  };

  return (
    <SubjectViewContainer>
      {Object.keys(subjects).map((subject, subjectId) => (
        <SubjectContainer key={subjectId}>
          <SubjectTitle>{subjects[subject]}</SubjectTitle>
          <SeriesContainer>
            {education.coursework[subject].map((series, seriesId) => (
              <SeriesList key={seriesId}>
                <List sx={{paddingTop: "0"}}>
                  <ListSubheader sx={{borderRadius: "20px 20px 0 0"}}>
                    <SeriesHeader>{series.series}</SeriesHeader>
                  </ListSubheader>
                  <Divider/>
                  {series.courses.map((course, courseId) => (
                    <ListItem key={courseId}>
                      <ClassCode>{course.code}</ClassCode>
                    </ListItem>
                  ))}
                </List>
              </SeriesList>
            ))}
          </SeriesContainer>
        </SubjectContainer>
      ))}
    </SubjectViewContainer>
  )
}