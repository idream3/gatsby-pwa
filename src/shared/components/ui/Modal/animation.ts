enum variants {
  Hidden = "hidden",
  Show = "show",
}

export const contentVariantOptions = {
  [variants.Hidden]: {
    opacity: 0,
    transition: {
      y: { delay: 0.2, duration: 0.16, ease: "easeIn" },
    },
  },
  [variants.Show]: {
    opacity: 1,
    transition: {
      y: { delay: 0.16, duration: 0.25, ease: "easeOut" },
    },
  },
};

export const modalContentMotion = {
  variants: contentVariantOptions,
  initial: variants.Hidden,
  animate: variants.Show,
  exit: variants.Hidden,
};

export const backdropVariantOptions = {
  [variants.Hidden]: {
    opacity: 0,
  },
  [variants.Show]: {
    opacity: 1,
  },
};

export const modalBackdropMotion = {
  variants: backdropVariantOptions,
  initial: variants.Hidden,
  animate: variants.Show,
  exit: variants.Hidden,
};
