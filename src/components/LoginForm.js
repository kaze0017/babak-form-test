import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../store/slices/user";
import store from "../store/configureStore";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleLogin = (values) => {
    console.log(values.email);
    store.dispatch(saveUser(values));
    console.log(store.getState());
    navigate("/dashboard");
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleLogin}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .required("Required")
          .min(8, "Password must be at least 8 characters")
          .matches(
            /[A-Z]/,
            "Password must contain at least one uppercase letter"
          )
          .matches(/[0-9]/, "Password must contain at least one number")
          .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            "Password must contain at least one special character"
          ),
      })}
    >
      <StyledForm>
        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="p" />
        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="p" />
        <button type="submit">Login</button>
      </StyledForm>
    </Formik>
  );
};

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 0.5rem;

    &:hover {
      border-color: #007bff;
    }
  }

  button {
    padding: 0.5rem;
    margin-top: 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    user-select: none;

    &:hover {
      background-color: #0056b3;
    }
  }

  p {
    color: red;
    margin: 0;
  }
`;

export default LoginForm;
