import React from "react";

import { HoverLinkButton } from "atoms";

const Header = () => (
  <>
    <HoverLinkButton href="/">모이다</HoverLinkButton>
    <HoverLinkButton href="/login">Login</HoverLinkButton>
  </>
);

export default Header;
