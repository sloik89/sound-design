import React from "react";
import { PageHero } from "../components";
import styled from "styled-components";
import aboutImg from "../assets/about-img.png";
import { motion } from "framer-motion";
const About = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="section-center">
        <motion.div
          animate={{
            y: [0, 50, 0],
          }}
          transition={{
            repeat: Infinity,

            duration: 2,
            delay: 1,
          }}
        >
          <img src={aboutImg} alt="" />
        </motion.div>
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
  min-height: 100vh;
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
