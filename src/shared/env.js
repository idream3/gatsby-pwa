import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

const regexNoLeadingOrTrailingSlash = /^[^/].*[^/]$/;
console.log(process.env)

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `GATSBY_`.
   */
  client: {
    GATSBY_API_URL: z.string().url(),
    GATSBY_GRAPH_URL: z.string().url(),
    GATSBY_UPLOADS_FOLDER: z
      .string()
      .regex(
        regexNoLeadingOrTrailingSlash,
        "No leading or trailing slash on folder name",
      ),
    GATSBY_VERCEL_USER_TOKEN: z.string().optional().default("placeholder"),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    GATSBY_API_URL: process.env.GATSBY_API_URL,
    GATSBY_GRAPH_URL: process.env.GATSBY_GRAPH_URL,
    GATSBY_UPLOADS_FOLDER: process.env.GATSBY_UPLOADS_FOLDER,
    GATSBY_VERCEL_USER_TOKEN: process.env.GATSBY_VERCEL_USER_TOKEN,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
