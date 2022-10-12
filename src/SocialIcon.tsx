import React from "react";

export interface Props {
  href: string;
  icon:
    | "twitter"
    | "youtube"
    | "instagram"
    | "linkedin"
    | "tiktok"
    | "facebook";
}

const SocialIcon: React.FC<Props> = (props) => {
  return <a href={props.href}>{props.icon}</a>;
};

export default React.memo(SocialIcon);
