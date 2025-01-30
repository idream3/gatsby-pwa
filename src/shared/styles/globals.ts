

import { createGlobalStyle, css, type DefaultTheme } from "styled-components";
import { toastStyles } from "./toast.css";

const themeStyles = ({ theme }: { theme: DefaultTheme }) => css`
  --figtree-font: "Figtree", sans-serif;
  
  /** override reach-ui styles see note above  */
  :root {
    --reach-dialog: 1;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--figtree-font), sans-serif;
  }

  /* typography */
  body {
    overflow: visible;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 400;
      font-family: ${theme.fonts.heading};
    }

    &.no-scroll {
      overflow: hidden;
    }
  }
  html {
    /* font-size: ${theme.fontSizes.root}; */

    /* font-weight: ${theme.fontWeights.regular}; */
    /* outline only when the user is using tab */
    &:not(.user-is-tabbing) {
      a[href],
      area[href],
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      button:not([disabled]),
      iframe,
      [tabindex],
      [contentEditable="true"] {
        outline: none;
      }
    }
  }

  /* taming the layouts */
  html,
  body {
    margin: 0;
    min-height: 100%;
    height: 100%;

    width: 100%;
    max-width: 100%;
  }

  #__next {
    display: flex;

    min-width: 100%;
    min-height: 100%;
  }

  .hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    position: absolute;
  }

  .Toastify__toast-container {
    width: auto !important;
  }

  .Toastify__toast.Toastify__toast--default {
    padding: 0 !important;
    min-height: 42px;
    width: fit-content;
    font-family: var(--figtree-font);
    border-radius: 6px;

    color: ${(p) => p.theme.colors.N800};
  }

  .hidden-xs {
    display: none;

    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      display: block;
    }
  }

  @media (max-width: 1023px) {
    .hidden-mobile {
      display: none !important;
    }
  }

  @media (min-width: 1024px) {
    .hidden-desktop {
      display: none !important;
    }
  }

  /** cookiebot styles */
  #CybotCookiebotDialog {
    font-family: ${(p) => p.theme.fonts.body} !important;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${(p) => p.theme.fontSizes.heading} !important;
      font-family: ${(p) => p.theme.fonts.heading} !important;
    }

    box-shadow: ${(p) => p.theme.shadows.reversed} !important;

    #CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll {
      background: ${(p) => p.theme.colors.P300} !important;

      font-family: ${(p) => p.theme.fonts.body} !important;
      font-size: ${(p) => p.theme.fontSizes[2]} !important;
      font-weight: ${(p) => p.theme.fontWeights.extraBold} !important;
      line-height: ${(p) => p.theme.fontSizes[4]} !important;
      letter-spacing: -0.165px !important;

      @media (max-width: ${(p) => p.theme.breakpoints.sm}) {
        font-size: ${(p) => p.theme.fontSizes[4]} !important;
        line-height: ${(p) => p.theme.lineHeights.normal} !important;
      }
    }

    #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection,
    #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll {
      background: ${(p) => p.theme.colors.transparent} !important;

      font-family: ${(p) => p.theme.fonts.body} !important;
      font-size: ${(p) => p.theme.fontSizes[2]} !important;
      font-weight: ${(p) => p.theme.fontWeights.extraBold} !important;
      line-height: ${(p) => p.theme.fontSizes[4]} !important;
      letter-spacing: -0.165px !important;

      color: ${(p) => p.theme.colors.P300} !important;
      border: 1px solid ${(p) => p.theme.colors.P300} !important;
    }

    &:hover:enabled,
    &:focus:enabled {
      background: ${(p) => p.theme.colors.P100} !important;
    }

    @media (max-width: ${(p) => p.theme.breakpoints.sm}) {
      font-size: ${(p) => p.theme.fontSizes[4]} !important;
      line-height: ${(p) => p.theme.lineHeights.normal} !important;
    }
  }

  /* https://developers.google.com/recaptcha/docs/faq#id-like-to-hide-the-recaptcha-badge.-what-is-allowed */
  .grecaptcha-badge {
    visibility: hidden;
  }
`;

const GlobalCSS = createGlobalStyle(
  ({ theme }) => css`
    html {
      line-height: 1.15;
      -webkit-text-size-adjust: 100%;
    }
    body {
      margin: 0;
      color: ${theme.colors.N600};
      overscroll-behavior: none;
    }
    main {
      display: block;
    }
    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }
    pre {
      font-family: monospace, monospace;
      font-size: 1em;
    }
    a {
      background-color: transparent;
    }
    a:hover {
      cursor: pointer;
    }
    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
    }
    b,
    strong {
      font-weight: bolder;
    }
    code,
    kbd,
    samp {
      font-family: monospace, monospace;
      font-size: 1em;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    img {
      border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      margin: 0;
    }
    button {
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;
      text-align: inherit;
      background: transparent;

      color: inherit;
      font: inherit;

      line-height: normal;

      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;

      -webkit-appearance: none;
    }
    button,
    input {
      overflow: visible;
    }
    input:disabled {
      background-color: ${(p) => p.theme.colors.N100};
    }
    button,
    select {
      text-transform: none;
    }
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }
    legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal;
    }
    progress {
      vertical-align: baseline;
    }
    textarea {
      overflow: auto;
    }
    [type="checkbox"],
    [type="radio"] {
      box-sizing: border-box;
      padding: 0;
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none !important;
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
    [type="search"] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }
    [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none !important;
    }
    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }
    details {
      display: block;
    }
    summary {
      display: list-item;
    }
    template {
      display: none;
    }
    [hidden] {
      display: none !important;
    }
    html {
      box-sizing: border-box;
      font-family: sans-serif;
    }
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
      margin: 0;
    }
    button {
      background: transparent;
      padding: 0;
    }
    fieldset {
      margin: 0;
      padding: 0;
    }
    ol,
    ul {
      margin: 0;
      padding: 0;
    }
    html {
      font-family: ${theme.fonts.body};
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      text-rendering: optimizelegibility;
    }
    hr {
      border-top-width: 1px;
    }
    textarea {
      resize: vertical;
    }
    button,
    [role="button"] {
      cursor: pointer;
    }
    button::-moz-focus-inner {
      border: 0 !important;
    }
    table {
      border-collapse: collapse;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
      color: ${theme.colors.N800};
    }
    a {
      color: inherit;
      text-decoration: inherit;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      padding: 0;
      line-height: inherit;
      color: inherit;
    }
    pre,
    code,
    kbd,
    samp {
      font-family: ${theme.fonts.mono};
    }
    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
      display: block;
      vertical-align: middle;
    }
    img,
    video {
      max-width: 100%;
      height: auto;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }

    ${themeStyles}

    ${toastStyles}
  `,
);

export default GlobalCSS;
