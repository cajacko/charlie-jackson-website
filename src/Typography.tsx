import React from "react";

export interface Props {
  variant?: "body1" | "h1" | "h2";
  children: React.ReactNode;
}

const Typography: React.FC<Props> = (props) => {
  return <span>{props.children}</span>;
};

export default React.memo(Typography);
