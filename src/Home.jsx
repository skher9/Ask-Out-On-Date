import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  color: #eaeccc;
  font-family: Lemon;
`;
const Title = styled.h1`
  margin-top: 70px;
`;

const ButtonContainer = styled.div`
  margin-top: 100px;
`;

const Image = styled.img`
  margin-top: 20px;
  height: 200px;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const YesButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 75.5%;
  left: 37%;
  border-color: #eaeccc;
  background-color: transparent;
  border-radius: 5px;
  height: 50px;
  width: 70px;
  font-size: larger;
  color: #eaeccc;
  font-family: Lemon;
  transition: top 0.3s ease-in-out, left 0.3s ease-in-out;
`;

const NoButton = styled.button`
  margin-left: 50px;
  border-color: #eaeccc;
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;
  height: 50px;
  width: 70px;
  font-size: larger;
  color: #eaeccc;
  font-family: Lemon;
  position: absolute;
  top: ${({ position }) => position.top};
  left: ${({ position }) => position.left};
  transition: top 0.3s ease-in-out, left 0.3s ease-in-out;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const Close = styled.button`
  background-color: #b06161;
  color: #eaeccc;
  cursor: pointer;
  height: 30px;
  border-radius: 5px;
`;

const PopupText = styled.p`
  color: #b06161;
`;

const PopupImage = styled.img``;

const Home = () => {
  const initialPosition = { top: "75.5%", left: "55%" };

  const getRandomPosition = () => {
    const top = `${Math.random() * 70}%`;
    const left = `${Math.random() * 70}%`;
    return { top, left };
  };

  const [position, setPosition] = useState(initialPosition);
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <Container>
      <Title>Would you like to go on date with me..??</Title>
      <Image src="https://media1.tenor.com/m/XZGm-kKjguMAAAAC/kawaii-bunny.gif"></Image>
      <ButtonContainer>
        <YesButton onClick={() => handleButtonClick()}>Yes</YesButton>
        <NoButton
          position={position}
          onMouseEnter={() => setPosition(getRandomPosition())}
          onTouchStart={() => setPosition(getRandomPosition())}
        >
          No
        </NoButton>
      </ButtonContainer>
      {showPopup && (
        <PopupOverlay>
          <PopupContent>
            <PopupText>
              Fantastic! I promise not to embarrass you too much... just a
              little bit. 😄
            </PopupText>
            <PopupImage src="https://media.tenor.com/XSAxhvwMd9kAAAAj/tkthao219-bunny.gif" />
            <br />
            <br />
            <Close onClick={handlePopupClose}>Close</Close>
          </PopupContent>
        </PopupOverlay>
      )}
      <Footer>Created by Shravani Kher...</Footer>
    </Container>
  );
};

export default Home;
