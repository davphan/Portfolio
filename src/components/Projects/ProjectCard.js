import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.primary_light + 20};
  transition: all 0.3s ease-in-out;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

const CardGradient = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 30px;
  border-radius: 12px;
  background: linear-gradient(38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 289, 0) 50%,
      rgba(0, 70, 289, 0.15) 100%
    );

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.div`
  font-size: 28px;
  font-weight: 400;
  color: ${({ theme }) => theme.secondary_dark};

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const CardDate = styled.div`
  font-size: 20px;
  font-weight: 200;
  color: ${({ theme }) => theme.secondary_dark};

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: absolute;
  bottom: 15px;
  width: 240px;

  @media screen and (max-width: 768px) {
    width: 220px;
  }
`;

const CardDescription = styled.div`
  display: inline-block;
  font-size: 14px;
  overflow-y: hidden;
  height: 70px;
  color: ${({ theme }) => theme.secondary_dark};
  mask: linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const TagList = styled.div`
  display: flex;
  overflow: auto;
  gap: 5px;
  font-size: 12px;
  padding-bottom: 5px;

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }

  /*
  https://stackoverflow.com/questions/19230289/use-transition-on-webkit-scrollbar
  Scroll bar animations
  */
  @property --var1 {
    syntax: "<color>";
    inherits: true;
    initial-value: transparent;
  }
  transition: --var1 0.2s;

  &:hover {
    --var1: ${({ theme }) => theme.primary_dark + 30};
  }

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: var(--var1);
  }
`;

const Tag = styled.div`
  border: 1.5px solid ${({ theme }) => theme.primary_dark};
  border-radius: 20px;
  padding: 8px;
  color: ${({ theme }) => theme.primary_dark};
  text-wrap: nowrap;

  @media screen and (max-width: 768px) {
    padding: 6px;
  }
`;

const LinkList = styled.div`
  display: flex;
  gap: 6px;
`;

const ProjectLink = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary_dark};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accent_light};
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export default function ProjectCard({ project }) {
  return (
    <CardContainer>
      <CardGradient>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDate>{project.date}</CardDate>
        </CardHeader>
        <CardDescription>{project.description}</CardDescription>
        <CardBody>
          <LinkList>
            {project.links.map((link, id) => (
              <ProjectLink key={id} href={link.url} target="_blank">{link.name}</ProjectLink>
            ))}
          </LinkList>
          <TagList>
            {project.tags.map((tag, tagId) => (
              <Tag key={tagId}>{tag}</Tag>
            ))}
          </TagList>
        </CardBody>
      </CardGradient>
    </CardContainer>
  );
}