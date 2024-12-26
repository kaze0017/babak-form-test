import React, { useState } from "react";
import styled from "styled-components";
import store from "../store/configureStore";
import { loadPeople, setQuery } from "../store/slices/api";
function GenderSwitch() {
  const [isMale, setIsMale] = useState(true);
  const handleChange = () => {
    const gender = isMale ? "female" : "male";
    store.dispatch(setQuery({ gender }));
    store.dispatch(loadPeople());
    setIsMale(!isMale);
  };

  return (
    <Wrapper className="gender-toggle">
      <Button disabled={isMale} onClick={handleChange}>
        Men
      </Button>
      <Button disabled={!isMale} onClick={handleChange}>
        Female
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Button = styled.button`
  background-color: #ccc;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: rgb(21, 67, 38);
    color: #ccc;
  }
  &:disabled {
    background-color: rgb(71, 222, 126);
    color: rgb(6, 35, 115);
  }
  width: 100px;
`;

export default GenderSwitch;
