import React from "react";
import { Container, Title, Item, List, Picture, Name } from "./styles/profiles";

function Profiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.Item = function ProfilesItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
    />
  );
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

export default Profiles;
