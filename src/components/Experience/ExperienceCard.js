import React from "react";
import styled from "styled-components";

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  &:hover ${Document} {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    gap: 8px;
    width: 450px;
  }

  @media screen and (max-width: 480px) {
    width: 280px;
  }

  border: 1px solid ${({ theme }) => theme.accent_light};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const Top = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const Logo = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 8px;

  @media screen and (max-width: 768px) {
    height: 50px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary_dark};

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Company = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary_dark + 99};

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Duration = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.secondary_dark + 80};

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.secondary_dark};
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
`;

const SkillTitle = styled.div`
  color: ${({ theme }) => theme.secondary_dark};
  font-size: 1rem;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  font-size: 0.8rem;
  border: 1.5px solid ${({ theme }) => theme.primary_dark};
  border-radius: 20px;
  padding: 8px;
  color: ${({ theme }) => theme.primary_dark};

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    padding: 6px
  }
`;

export default function ExperienceCard({ experience }) {
  return (
    <Card>
      <Top>
        <Logo src={experience.img}/>
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Duration>{experience.date}</Duration>
        </Body>
      </Top>
      <Description>{experience.desc}</Description>
      {experience?.skills && <>
        <Skills>
          <SkillTitle>Skills:</SkillTitle>
          <ItemWrapper>
            {experience.skills.map((skill, id) => (
              <Skill key={id}>{skill}</Skill>
            ))}
          </ItemWrapper>
        </Skills>
      </>}
      {experience.doc &&
      <a href={experience.doc} target="new">
        <Document src={experience.doc}/>
      </a>
      }
    </Card>
  );
}
