import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import styled from "styled-components";

function Gallery() {
  // Accessing people state from Redux store
  const people = useSelector((state) => state.api.people);

  return (
    <Wrapper>
      {people.map((person) => (
        <Card key={person.id?.value || person.email} person={person} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem auto;

  /* Default to 1 column */
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 950px) {
    /* 2 columns for tablets */
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1300px) {
    /* 3 columns for desktops */
    grid-template-columns: repeat(3, 1fr);
  }
`;



export default Gallery;
