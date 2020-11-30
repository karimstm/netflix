import React from "react";
import { Container, Title, SubTitle, Group } from "./styles/feature";

function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Group = function FeatureGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default Feature;
