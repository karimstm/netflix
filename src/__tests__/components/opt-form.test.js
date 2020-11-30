import React from "react";
import { render } from "@testing-library/react";
import { OptForm } from "../../components";

describe("<OptForm />", () => {
  it("renders the <OptForm /> with populated data", () => {
    const { container, getByText, getByPlaceholderText } = render(
      <OptForm>
        <OptForm.Header>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Header>
        <OptForm.Inner>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Get Startred</OptForm.Button>
        </OptForm.Inner>
        <OptForm.Break />
      </OptForm>
    );

    expect(getByText("Try it now")).toBeTruthy();
    expect(
      getByText(
        "Ready to watch? Enter your email to create or restart your membership."
      )
    ).toBeTruthy();
    expect(getByPlaceholderText("Email address")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
