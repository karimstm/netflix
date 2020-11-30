import React from "react";
import { Header } from "../components";
import { HOME, SIGN_IN } from "../constants/routes";
import logo from "../logo.svg";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo alt="NETFLIX" src={logo} to={HOME} />
        <Header.ButtonLink to={SIGN_IN}>Sign in</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
