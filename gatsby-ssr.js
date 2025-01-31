import wrapWithProvider from "./wrap-with-provider";
import * as React from "react";

export const wrapRootElement = wrapWithProvider;

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/static/Figtree-variable.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
}