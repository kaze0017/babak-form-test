import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GenderSwitch from "../components/GenderSwitch";
import store from "../store/configureStore";
import { loadPeople } from "../store/slices/api";
import { useEffect } from "react";
import Gallery from "../components/Gallery";
import CountrySelector from "../components/CountrySelector";

function Dashboard() {
  const user = store.getState().user;
  const email = user?.email;
  const userName = email ? email.split("@")[0] : "Guest";

  useEffect(() => {
    store.dispatch(loadPeople());
  }, []);

  return (
    <Wrapper>
      <h1>Welcome {userName}</h1>
      <div className="title">
        <h1>I am looking for</h1>
        <GenderSwitch />
      </div>
      <div>
        <h2>
          From <span> <CountrySelector/> </span> and <span>....</span> years old
        </h2>
      </div>
      <Gallery />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
    margin-top: 2rem;
  }
  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    margin: 0;
    text-transform: uppercase;
    color: #eee;
  }
  h2 {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    text-transform: uppercase;
    color: #eee;
  }
`;

export default Dashboard;
