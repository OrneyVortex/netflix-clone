import React from 'react';
import background from "../assets/login.jpg";
import styled from "styled-components";

export default function BackgroundImage() {
  return (
    <Container>
        <img src={background} alt="background" srcset="" />
    </Container>
  )
}

const Container = styled.div`
  height:100vh;
  width:100vw;
  image{
    height:100vh;
    width:100vw;
  }
`;