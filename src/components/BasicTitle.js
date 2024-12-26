import React from "react";
import styled from "styled-components";

function BasicTitle({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.h1`
  color: #333;
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  text-align: center;
  text-transform: capitalize;
`;

export default BasicTitle;
