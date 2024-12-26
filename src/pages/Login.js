import styled from "styled-components";
import BasicTitle from "../components/BasicTitle";
import LoginForm from "../components/LoginForm";

function Login() {
  console.log("Login", "hi 1");
  return (
    <MainWrapper>
      <Wrapper>
        <BasicTitle>welcome to match maker V1.0</BasicTitle>
        <LoginForm />
      </Wrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
  min-height: 100%;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-grow: 1;
  flex-direction: column;
  background-color: #f0f0f0;
  padding: 2rem;
  width: 95vw;
  max-width: 300px;
  margin: auto;
`;
export default Login;
