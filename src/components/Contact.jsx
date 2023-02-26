import React from "react";
import styled from "styled-components";
const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            blanditiis amet laborum iure accusamus. Asperiores obcaecati
            sapiente at magnam doloremque!
          </p>
          <form
            className="contact-form"
            action="https://formspree.io/f/mayaplwv"
            method="POST"
          >
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
              name="_replyto"
            />
            <button type="submit" className="submit-btn btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    @media screen and (min-width: 800px) {
      flex-direction: row;
    }
  }
  .contact-form {
    display: flex;
    input {
      letter-spacing: 2px;
      border-radius: 5px;
      &:focus {
        outline: none;
      }
    }
  }
`;
export default Contact;
