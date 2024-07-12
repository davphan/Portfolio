import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { SectionContainer, Wrapper, Title, Description} from "../Helper";
import { experience } from "../../data/text";
import ExperienceCard from "./ExperienceCard";

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export default function Experience() {
  return (
    <SectionContainer id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Description>
          Lorem Ipsum
        </Description>
        <TimelineSection>
          <Timeline>
            {experience.sort((a, b) => b.id - a.id).map((exp, index) => (
              <TimelineItem>
                <TimelineOppositeContent style={{flex: 0.12}}/>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary"/>
                  {index !== experience.length - 1 && (<TimelineConnector/>)}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard experience={exp}/>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </SectionContainer>
  )
}