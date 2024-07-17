import React, { useState } from "react";
import styled from "styled-components";
import { SectionContainer, Wrapper, Title, Description } from "../Helper";
import { education } from "../../data/text";
import ToggleBar from "../Helper/ToggleBar";
import YearView from "./YearView";

const EducationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Divider = styled.div`
  height: 100%;
  width: 3px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.secondary_dark};

  @media screen and (max-width: 768px) {
    height: 3px;
    width: 60%;
  }
`;

const Overview = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 30px;
  /* position: sticky; */

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SchoolTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.secondary_dark};

  @media screen and (max-width: 768px) {
    width: 20rem;
  }
`;

const SchoolImage = styled.img`
  height: 100px;
`;

const OverviewText = styled.ul`
  font-size: 16px;
  color: ${({ theme }) => theme.secondary_dark};
  width: 100%;
`;

const OverviewElement = styled.li`
  padding: 5px 0;
`;

const CourseworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CourseworkTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
`;

const ViewContainer = styled.div`
  width: 100%;
`;

export default function Education() {
  const views = ["Year", "Subject", "List"];
  const [currentView, setCurrentView] = useState(views[0]);

  return (
    <SectionContainer id="education">
      <Wrapper>
        <Title>Education</Title>
        <Description>{education.description}</Description>
        <EducationContainer>
          <Overview>
            <SchoolTitle>{education.school}</SchoolTitle>
            <SchoolImage src={education.img}/>
            <OverviewText>
              <OverviewElement><b>Major:</b> {education.major}</OverviewElement>
              <OverviewElement><b>GPA:</b> {education.gpa}</OverviewElement>
              <OverviewElement><b>Graduation Date:</b> {education.grad_date}</OverviewElement>
              <OverviewElement><b>Honors:</b> {education.honors}</OverviewElement>
            </OverviewText>
          </Overview>
          {/* <Divider/> */}
          <CourseworkContainer>
            <CourseworkTitle>Coursework</CourseworkTitle>
            <ToggleBar buttons={views} currentButton={currentView} setCurrentButton={setCurrentView}/>
            <ViewContainer>
              {currentView === "Year" &&
                <YearView/>
              }
            </ViewContainer>
          </CourseworkContainer>
        </EducationContainer>
      </Wrapper>
    </SectionContainer>
  )
}