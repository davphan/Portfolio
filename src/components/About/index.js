import React from "react";
import styled from "styled-components";
import { about } from "../../data/text";
import Typewriter from "typewriter-effect";

const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.primary_dark};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }

  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }

  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const AboutBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 960px) {
    padding: 0;
    justify-content: center;
  }
`;

const AboutInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const AboutLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const AboutRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  gap: 12px;

  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 960px) {
    order: 1;
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.secondary_light};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-size: 32px;
  font-weight: 600px;
  color: ${({ theme }) => theme.accent_light};
  line-height: 68px;
  gap: 12px;
  display: flex;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.accent_light};
  cursor: pointer;
`;

const Subtitle = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.secondary_light};
  line-height: 32px;
  margin-bottom: 42px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  position: relative;
  appearance: button;
  -webkit-appearance: button;
  -moz-appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.secondary_light};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: hsla(271, 100% 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: 20px 20px 60px ${({ theme }) => theme.black}, 20px 20px 60px ${({ theme }) => theme.black};
  z-index: 1;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px ${({ theme }) => theme.black};
    filter: brightness(1);
  }

  @media screen and (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  max-width: 400px;
  max-height: 400px;
  object-fit: cover;
  object-position: center;
  border: 2px solid ${({ theme }) => theme.accent_light};

  @media screen and (max-width: 768px) {
    max-height: 400px;
    max-width: 400px;
  }

  @media screen and (max-width: 640px) {
    max-height: 280px;
    max-width: 280px;
  }
`;

export default function About() {
  return (
    <div id="about">
      <AboutContainer>
        <AboutBackground/>
        <AboutInnerContainer>
          <AboutLeftContainer>
            <Title><b>{about.fname} {about.lname}</b></Title>
            <TextLoop>
              <Span>
                <Typewriter
                  options={{
                    strings: about.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <Subtitle>{about.description}</Subtitle>
            <ResumeButton href={about.resume} target="_blank">Open Resume</ResumeButton>
          </AboutLeftContainer>
          <AboutRightContainer>
            <Image src={require("../../imgs/headshot.jpg")} alt="Headshot"/>
          </AboutRightContainer>
        </AboutInnerContainer>
      </AboutContainer>
    </div>
  )
}
