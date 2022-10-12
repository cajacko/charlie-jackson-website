import React from "react";
import Button from "./Button";
import SocialIcon from "./SocialIcon";
import Typography from "./Typography";

function App() {
  return (
    <>
      <img src="" alt="Charlie Jackson" />
      <Typography variant="h1">Charlie Jackson</Typography>
      <Typography variant="h2">
        Comedian and freelance software developer
      </Typography>
      <Button title="Comedy" href="/" />
      <Button title="Freelance software developer" href="/" />
      <Button title="Journal" href="/" />
      <Button title="Email" href="/" />
      <SocialIcon icon="instagram" href="/" />
      <SocialIcon icon="linkedin" href="/" />
      <SocialIcon icon="twitter" href="/" />
      <SocialIcon icon="tiktok" href="/" />
      <SocialIcon icon="youtube" href="/" />
      <SocialIcon icon="facebook" href="/" />
    </>
  );
}

export default App;
