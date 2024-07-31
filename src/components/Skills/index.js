import React from "react";
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
  width: 450px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.primary_light + 30};

  @media screen and (max-width: 768px) {
    max-width: 400px;
  }

  @media screen and (max-width: 500px) {
    max-width: 330px;
  }
`;

const SkillCardGradient = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 289, 0) 50%,
      rgba(0, 70, 289, 0.15) 100%
    );
  border-radius: 16px;
  padding: 18px 24px;

  @media screen and (max-width: 768px) {
    padding: 10px 36px;
  }
`;

const SkillCardTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary_dark};
  margin: 10px 0 20px 0;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const SkillList = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.secondary_dark};
  background-color: ${({ theme }) => theme.primary_light + 60};
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 400;

  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.1, 1.1);
    color: ${({ theme }) => theme.accent_light};
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media screen and (max-width: 480px) {
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
          {skills.cards.map((card, cardId) => (
            <SkillCard key={cardId}>
              <SkillCardGradient>
                <SkillCardTitle>{card.title}</SkillCardTitle>
                <SkillList>
                  {card.skills.map((skill, skillId) => (
                    <SkillItem key={skillId}>
                      {skill.image}
                      {skill.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </SkillCardGradient>
            </SkillCard>
          ))}
        </SkillsContainer>
      </Wrapper>
    </SectionContainer>
  )
}