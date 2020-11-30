import React from "react";
import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer(props) {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
        <OptForm.Header>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Header>
        <OptForm.Inner>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Get Startred</OptForm.Button>
        </OptForm.Inner>
      </OptForm>
    </Accordion>
  );
}
