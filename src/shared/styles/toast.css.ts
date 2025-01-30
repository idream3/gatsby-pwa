import { textVariantsFn } from "flicket-ui";
import { css, type DefaultTheme } from "styled-components";

export const toastStyles = ({ theme }: { theme: DefaultTheme }) => css`
  [data-sonner-toaster] {
    > li {
      /* Default */
      background-color: ${theme.colors.N100};
      border-color: ${theme.colors.N200};
    }

    [data-title] {
      ${(p) =>
    textVariantsFn({
      theme: p.theme,
      variant: "regular",
    })};
    }

    .toast-success {
      background-color: ${theme.colors.success};
      border-color: ${theme.colors.success};
      [data-icon],
      [data-title] {
        color: ${theme.colors.white};
      }
    }

    .toast-warning {
      background-color: ${theme.colors.warning};
      border-color: ${theme.colors.warning};
    }

    .toast-error {
      background-color: ${theme.colors.error};
      border-color: ${theme.colors.error};
    }
  }
`;
