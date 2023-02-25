import React from "react";
import styled from "styled-components";
import { services } from "../utilis/constants";
const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            Luxury Headphones <br />
            create only for you
          </h3>
          <p>
            These headphones are designed for those who demand the highest
            quality sound and materials. They are often made from premium
            materials such as leather and feature advanced sound technology for
            the ultimate listening experience
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: var(--clr-light-violet);
  padding: 2rem 0;

  .header {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    h3 {
      color: var(--clr-dark-violet);
      text-transform: capitalize;
      letter-spacing: 2px;
    }
    p {
      max-width: 500px;
    }
    @media screen and (min-width: 800px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .services-center {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .service {
      background-color: var(--clr-dark-violet);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      .icon {
        font-size: 3rem;
        background-color: var(--clr-light-violet);
        border-radius: 50%;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p {
        letter-spacing: 2px;
        text-align: center;
        font-size: 0.9rem;
      }
    }
    @media screen and (min-width: 800px) {
      flex-direction: row;
    }
  }
`;
export default Services;
