import React from "react";
import styled from "styled-components";
import Typography from "./Typography";

export interface Props {
  title: string;
  href: string;
}

const Link = styled.a`
  background-color: #f0f0f0;
  display: block;
  border: 1px solid black;
  padding: 5px;
`;

const Button: React.FC<Props> = (props) => {
  return (
    <Link href={props.href}>
      <Typography>{props.title}</Typography>
    </Link>
  );
};

export default React.memo(Button);
