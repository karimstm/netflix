import React, { useContext, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { Form } from "../components";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";

function Signin() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { firebase } = useContext(FirebaseContext);

  // check form input elements are valid
  // email && password
  const isInValid = password === "" || email === "";

  const handleSignin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // Redirect the user to browse page
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              type="email"
              placeholder="Email or phone number"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInValid} type="submit">
              Sign In
            </Form.Submit>
            <Form.Label htmlFor="check">
              <Form.Input id="check" type="checkbox" />
              <Form.TextSmall>
                Remember me
                <Form.Link to="#">Need help?</Form.Link>
              </Form.TextSmall>
            </Form.Label>
          </Form.Base>

          <Form.Text>
            New to Netflix?{" "}
            <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default Signin;
