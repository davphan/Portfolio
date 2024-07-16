import React, { useState } from "react";
import styled from "styled-components";
import { SectionContainer, Wrapper, Title, Description } from "../Helper";
import { projects } from "../../data/text";
import ToggleBar from "../Helper/ToggleBar";
import ProjectCard from "./ProjectCard";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

export default function Projects() {
  const categories = ["ALL", "SOFTWARE", "HARDWARE", "OTHER"];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <SectionContainer id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Description>Lorem Ipsum</Description>
        <ToggleBar buttons={categories} currentButton={currentCategory} setCurrentButton={setCurrentCategory}/>
        <CardContainer>
          {currentCategory === "ALL" &&
            projects.map((project) => <ProjectCard project={project}/>)
          }
          {
            projects
              .filter((item) => item.group === currentCategory.toLowerCase())
              .map((project) => (
                <ProjectCard project={project}/>
              ))
          }
        </CardContainer>
      </Wrapper>
    </SectionContainer>
  );
}
