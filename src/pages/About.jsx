import React from "react";
import { PageHero } from "../components";
import styled from "styled-components";
import aboutImg from "../assets/about-img.png";
const About = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="section-center">
        <img src={aboutImg} alt="" />
        <article>
          <div className="title">
            <h2>our story</h2>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            inventore sequi, ratione nihil autem deleniti ad laborum cupiditate,
            quasi at similique quis! Obcaecati iste enim, dignissimos suscipit
            doloremque numquam veniam.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  padding: 2rem;
  /* background-color: var(--clr-light-violet); */
  display: flex;
  align-items: center;
  justify-items: space-between;
  img {
    flex: 0 1 30%;
  }
  article {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-items: center;
    h2 {
      font-weight: bold;
      font-size: 3rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    p {
      max-width: 500px;
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
export default About;
