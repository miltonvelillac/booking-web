"use client";

import React from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

type HeaderProps = { title?: string };

export function Header({ title }: HeaderProps) {
  return (
    <>
      <MobileHeader title={title} />
      <DesktopHeader title={title} />
    </>
  );
}

export default Header;
