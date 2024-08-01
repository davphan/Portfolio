import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { BsCpu } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { navbar } from "../../data/text";

const navbarAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Nav = styled.div`
  background-color: ${({ theme }) => theme.primary_dark};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  animation: ${navbarAnimation} 2s ease-in-out;
`;

const NavLogo = styled(LinkR)`
  color: ${({ theme }) => theme.secondary_light};
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.accent_light}
  }
  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.secondary_light};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.accent_light};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavButton = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.primary_light};
  border: 1.8px solid ${({ theme }) => theme.primary_light};
  border-radius: 24px;
  padding: 8px 15px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  max-width: fit-content;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.accent_light};
    border: 1.8px solid ${({ theme }) => theme.accent_light};
    color: ${({ theme }) => theme.primary_dark};
  }

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const Span = styled.span`
  padding: 0 15px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const mobileMenuIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
    z-index: -1;
  }
  to {
    transform: translateX(0);
    opacity: 1;
    z-index: 1;
  }
`;

const mobileMenuOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
    z-index: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
    z-index: -1;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    box-sizing: border-box;
    background: ${({ theme }) => theme.primary_dark};
    animation: ${({ open }) => open ? mobileMenuIn : mobileMenuOut} 0.3s ease-in-out;
    animation-fill-mode: forwards;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
`;

const MobileMenuLink = styled.a`
  color: ${({ theme }) => theme.secondary_light};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accent_light}
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <BsCpu size={30}/> <Span>David Phan: Portfolio</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setOpen(!open);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <NavButton href={navbar.github} target="_blank">GitHub</NavButton>
        </ButtonContainer>
      </NavContainer>
      <MobileMenu open={open}>
        <MobileMenuLink
          href="#about"
          onClick={() => setOpen(!open)}
        >
          About
        </MobileMenuLink>
        <MobileMenuLink
          href="#skills"
          onClick={() => setOpen(!open)}
        >
          Skills
        </MobileMenuLink>
        <MobileMenuLink
          href="#experience"
          onClick={() => setOpen(!open)}
        >
          Experience
        </MobileMenuLink>
        <MobileMenuLink
          href="#projects"
          onClick={() => setOpen(!open)}
        >
          Projects
        </MobileMenuLink>
        <MobileMenuLink
          href="#education"
          onClick={() => setOpen(!open)}
        >
          Education
        </MobileMenuLink>
        <NavButton href={navbar.github} target="_blank">GitHub</NavButton>
      </MobileMenu>
    </Nav>
  )
}