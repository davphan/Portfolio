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

  @media screen and (max-width: 768px) {
    gap: 20px;
  }
`;

/*
 * TODO:
 * - Create blog posts page and link projects to them
 * - Expand project card on click
 * - Add search filter for tags
 */
export default function Projects() {
  const categories = ["ALL", "SOFTWARE", "HARDWARE", "OTHER"];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <SectionContainer id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Description>{projects.description}</Description>
        <ToggleBar buttons={categories} currentButton={currentCategory} setCurrentButton={setCurrentCategory}/>
        <CardContainer>
          {currentCategory === "ALL" &&
            projects.cards.map((project, id) => <ProjectCard key={id} project={project}/>)
          }
          {
            projects.cards
              .filter((item) => item.group === currentCategory.toLowerCase())
              .map((project, id) => (
                <ProjectCard key={id} project={project}/>
              ))
          }
        </CardContainer>
      </Wrapper>
    </SectionContainer>
  );
}
