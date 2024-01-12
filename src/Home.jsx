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

const Home = () => {
  const initialPosition = { top: "75.5%", left: "55%" };

  const getRandomPosition = () => {
    const top = `${Math.random() * 70}%`;
    const left = `${Math.random() * 70}%`;
    return { top, left };
  };

  const [position, setPosition] = useState(initialPosition);

  return (
    <Container>
      <Title>Would you like to go on date with me..??</Title>
      <Image src="https://media1.tenor.com/m/XZGm-kKjguMAAAAC/kawaii-bunny.gif"></Image>
      <ButtonContainer>
        <YesButton>Yes</YesButton>
        <NoButton
          position={position}
          onMouseEnter={() => setPosition(getRandomPosition())}
          onTouchStart={() => setPosition(getRandomPosition())}
        >
          No
        </NoButton>
      </ButtonContainer>
      <Footer></Footer>
    </Container>
  );
};

export default Home;
