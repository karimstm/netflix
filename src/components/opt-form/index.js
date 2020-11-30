import React from "react";
import {
  Container,
  Inner,
  Header,
  Input,
  Button,
  Break,
} from "./styles/opt-form";

function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Header = function OptFormHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try now" />
    </Button>
  );
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

OptForm.Inner = function OptFormInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

export default OptForm;
