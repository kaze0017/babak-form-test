import React, { useState } from "react";
import styled from "styled-components";
import store from "../store/configureStore";
import { loadPeople, setQuery } from "../store/slices/api";

function CountrySelector() {
  const [country, setCountry] = useState("US");
  const countryList = ["US", "CA", "AU", "GB"];
  return (
    <Wrapper
      value={country}
      onChange={(e) => {
        setCountry(e.target.value);
        store.dispatch(setQuery({ country: e.target.value }));
        store.dispatch(loadPeople());
      }}
    >
      {countryList.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.select`
  background-color: #ccc;
  border: none;
  padding: 0.5rem 0.05rem;
  margin: 0 0.5rem;
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
  width: 60px;
`;
export default CountrySelector;
