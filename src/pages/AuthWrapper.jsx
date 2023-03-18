import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  console.log(isLoading);
  if (isLoading) {
    return (
      <Wrapper>
        <h1>Loading...</h1>
      </Wrapper>
    );
  }
  if (error) {
    return (
      <>
        <h1>{error.message}</h1>
      </>
    );
  }
  return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.section`
  min-height: 100vh;
`;
export default AuthWrapper;
