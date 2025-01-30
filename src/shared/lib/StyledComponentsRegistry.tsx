

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Rendering registry");

  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles} </>;
  });

  const shouldForwardProp = (
    propName: string,
    elementToBeRendered: unknown,
  ) => {
    return typeof elementToBeRendered === "string"
      ? isPropValid(propName)
      : true;
  };

  if (typeof window !== "undefined") {
    return (
      <StyleSheetManager
        enableVendorPrefixes
        // https://github.com/styled-components/styled-components/issues/4071
        shouldForwardProp={shouldForwardProp}
      >
        {children}
      </StyleSheetManager>
    );
  }

  return (
    <StyleSheetManager
      sheet={styledComponentsStyleSheet.instance}
      // https://github.com/styled-components/styled-components/issues/4071
      shouldForwardProp={shouldForwardProp}
    >
      {children}
    </StyleSheetManager>
  );
}
