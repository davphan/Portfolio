import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ToggleBarContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const ToggleGroup = styled.div`
  display: flex;
  color: ${({ theme }) => theme.secondary_dark};
  border: 1.5px solid ${({ theme }) => theme.primary_light};
  font-size: 16px;
  border-radius: 20px;
  font-weight: 500;
  margin: 22px 0;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    border-radius: 16px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.primary_dark + 20};
  }

  @media screen and (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 16px;
  }
`;

const ToggleSelected = styled.div`
  position: absolute;
  top: 22.8px;
  height: 30.4px;
  z-index: -1;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.primary_light};
  transition: all 0.2s ease-in-out;
  ${({ left, width, height }) => `left: ${left}px; width: ${width}px; height: ${height}px;`};

  @media screen and (max-width: 768px) {
    border-radius: 16px;
  }
`;

export default function ToggleBar({ buttons, currentButton, setCurrentButton }) {
  // https://stackoverflow.com/questions/76744228/react-hook-useref-cannot-be-called-inside-a-callback-error
  // Object storing {buttonName: buttonRef}
  const buttonRefs = useRef({});
  const buttonGroupRef = useRef(null);
  const [selectLeft, setSelectLeft] = useState(0);
  const [selectWidth, setSelectWidth] = useState(0);
  const [selectHeight, setSelectHeight] = useState(0);

  function changeButtonSelect() {
    try {
      setSelectLeft(buttonRefs.current[currentButton].getBoundingClientRect().x - buttonGroupRef.current.getBoundingClientRect().x);
      setSelectWidth(buttonRefs.current[currentButton].getBoundingClientRect().width);
      setSelectHeight(buttonRefs.current[currentButton].getBoundingClientRect().height);
    } catch {
    }
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      changeButtonSelect();
    })
  });

  useEffect(changeButtonSelect, [currentButton]);

  return (
    <ToggleBarContainer>
      <ToggleGroup ref={buttonGroupRef}>
        {buttons.map((buttonName) => (
          <ToggleButton ref={el => buttonRefs.current[buttonName] = el} onClick={() => setCurrentButton(buttonName)}>{buttonName}</ToggleButton>
        ))}
      </ToggleGroup>
      <ToggleSelected left={selectLeft} width={selectWidth} height={selectHeight}/>
    </ToggleBarContainer>
  );
}