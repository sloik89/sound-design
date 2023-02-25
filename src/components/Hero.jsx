import React from "react";
import styled from "styled-components";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          design your <br />
          music zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          dolor veritatis illum exercitationem a inventore, enim similique
          aliquid ex quasi?
        </p>
        <Link to="/products" className="btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={home1} alt="" className="main-img" />
        <img src={home2} alt="" className="second-img" />
        <div className="border"></div>
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 5rem;
  min-height: 60vh;
  display: grid;
  place-items: center;
  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    h1 {
      font-size: 3rem;
      letter-spacing: 2px;
      text-transform: capitalize;
    }
  }
  .img-container {
    position: relative;
    display: none;
    height: 500px;
    min-width: 500px;

    .main-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }
    .second-img {
      position: absolute;
      bottom: 0px;
      left: -20px;
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 1rem;
    }
    .border {
      position: absolute;
      width: 110%;
      height: 110%;
      top: -50px;
      left: -20px;
      border: 5px solid black;
      border-radius: 1rem;
      animation: move 3s infinite alternate linear;
    }
  }
  @keyframes move {
    from {
      top: -50px;
    }
    to {
      top: -20px;
      transform: scale(1.09);
    }
  }
  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    .img-container {
      display: block;
    }
  }
`;
export default Hero;
