import styled, { keyframes } from "styled-components";

const move = keyframes`
  0% {
    transform: rotate(-10deg);
  }

  25% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(10deg);   
  }

  75% {
    transform: rotate(0deg);   
  }

  100% {
    transform: rotate(-10deg);   
  }
`;

export const Loading = styled.div`
  position: absolute;
  top: 5%;
  left: 25%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  z-index: 9;
  background-image: url("/static/images/yoda1.png");
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  animation: ${move} 1s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
