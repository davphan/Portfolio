import React, { useState } from "react";
import styled from "styled-components";
import { SectionContainer, Wrapper, Title, Description } from "../Helper";
import { projects } from "../../data/text";
import { ToggleBar } from "../Helper/ToggleBar";

const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary_light};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 12px;

  ${({ toggle, name, theme }) => toggle === name && `background-color: ${theme.primary_light};`}
  ${({ position }) => position === "first" && `border-radius: 12px 0 0 12px;`}
  ${({ position }) => position === "last" && `border-radius: 0 12px 12px 0;`}

  &:hover {
    background-color: ${({ theme }) => theme.primary_dark + 20};
  }

  @media screen and (max-width: 768px) {
    padding: 6px 8px;
  }
`;

const ToggleSelected = styled.div`

`;

const Divider = styled.div`
  display: none;
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary_light};
`;

const CardContainer = styled.div`
  width: 100%;
`;

const ProjectCard = styled.div`
  width: 100%;
`;

export default function Projects() {
  // const [toggle, setToggle] = useState("all");
  // const toggleAll = () => {
  //   setToggle("all");
  // };
  // const toggleSoftware = () => {
  //   setToggle("software");
  // };
  // const toggleHardware = () => {
  //   setToggle("hardware");
  // };
  // const toggleOther = () => {
  //   setToggle("other");
  // };
  const categories = ["ALL", "SOFTWARE", "HARDWARE", "OTHER"];
  const [currentButton, setCurrentButton] = useState(categories[0]);

  return (
    <SectionContainer id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Description>Lorem Ipsum</Description>
        {/* <ToggleGroup>
          <ToggleButton toggle={toggle} name="all" position={"first"} onClick={toggleAll}>ALL</ToggleButton>
          <Divider/>
          <ToggleButton toggle={toggle} name="software" onClick={toggleSoftware}>SOFTWARE</ToggleButton>
          <Divider/>
          <ToggleButton toggle={toggle} name="hardware" onClick={toggleHardware}>HARDWARE</ToggleButton>
          <Divider/>
          <ToggleButton toggle={toggle} name="other" position={"last"} onClick={toggleOther}>OTHER</ToggleButton>
        </ToggleGroup> */}
        <ToggleBar buttons={categories} currentButton={currentButton} setCurrentButton={setCurrentButton}/>
        <CardContainer>
          {/* {toggle === "all" &&
            projects.map((project) => <ProjectCard project={project}/>)
          }
          {
            projects
              .filter((item) => item.group === toggle)
              .map((project) => (
                <ProjectCard project={project}/>
              ))
          } */}
        </CardContainer>
      </Wrapper>
    </SectionContainer>
  );
}
