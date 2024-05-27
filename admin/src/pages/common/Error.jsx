import React from "react";
import styled from "styled-components";
import { mobile } from "../../utilities/responsive";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 50vw;
  height: 90vh;
  ${mobile({ width: "100%", height: "50vh" })}
`;

const Button = styled.button`
  background-color: black;
  color: #fff;
  padding: 12px 24px;
  margin-bottom: 40px;
  cursor: pointer;
  font-weight: 600;
`;
const Error = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="./images/error.png"></Image>
      </ImageContainer>
      <Button>Back To HomePage</Button>
    </Container>
  );
};

export default Error;
