import React from "react";
import styled from "styled-components";

const WrapLink = ({ className, href, children }) => (
  <a className={className} href={href}>
    {children}
  </a>
);

export const LinkButton = styled(WrapLink)`
  border-radius: 3px;
  color: palevioletred;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  user-select: none;
  width: 100%;
`;

const HoverLinkButton = styled(LinkButton)`
  &:hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 120ms ease-in 0s;
  }
`;

export default HoverLinkButton;
