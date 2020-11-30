import React from "react";
import { OptForm, Feature } from "../components";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";

function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Group>
            <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
            <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
            <OptForm>
              <OptForm.Header>
                Ready to watch? Enter your email to create or restart your
                membership.
              </OptForm.Header>
              <OptForm.Inner>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Get Startred</OptForm.Button>
              </OptForm.Inner>
            </OptForm>
          </Feature.Group>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
