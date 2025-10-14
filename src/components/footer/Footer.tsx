import React from "react";
import pkg from "../../../package.json";

type FooterProps = {
  version?: string;
};

export default function Footer({ version }: FooterProps) {
  version = version || pkg.version;
  return (
    <footer className=" h-10 border-t border-black/10 dark:border-white/15 bg-background/80">
      <p className="text-center text-xs sm:text-sm opacity-70">v{version}</p>
    </footer>
  );
}

