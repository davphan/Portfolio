import React, { isValidElement } from "react";
import styled from "styled-components";
import { skills } from "../../data/text";
import { SectionContainer, Wrapper, Title, Description} from "../Helper";

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
`;

const SkillCard = styled.div`
  width: 400px;
  background-color: ${({ theme }) => theme.primary_light};
  border: 0.1px solid ${({ theme }) => theme.accent_light};
  border-radius: 16px;
  padding: 18px 36px;

  @media screen and (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media screen and (max-width: 500px) {
    max-width: 330px;
  }
`;

const SkillCardTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary_light};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.secondary_light};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.secondary_light};
  padding: 12px 16px;
  font-weight: 400;

  transition: all 0.1s ease-in-out;
  &:hover {
    font-size: 110%;
    color: ${({ theme }) => theme.accent_light};
    border-color: ${({ theme }) => theme.accent_light};
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

export default function Skills() {
  return (
    <SectionContainer id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Description>{skills.description}</Description>
        <SkillsContainer>
          {skills.cards.map((card) => (
            <SkillCard>
              <SkillCardTitle>{card.title}</SkillCardTitle>
              <SkillList>
                {card.skills.map((skill) => (
                  <SkillItem>
                    {skill.image}
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsContainer>
      </Wrapper>
    </SectionContainer>
  )
}