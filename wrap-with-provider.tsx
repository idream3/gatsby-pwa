import React from "react";

// import Layout from "./src/components/shared/layout";
import Providers from './src/shared/providers';
// import OfflineBanner from './src/features/offline/components/OfflineBanner';
import Nav from './src/shared/components/Nav/Nav';
import { Stack, Box } from './src/shared/components/ui/layout';
import AuthProtect from './src/features/auth/components/AuthProtect';

export default ({ element, props }: any) => {
  if (typeof window === "undefined") {
    return <Providers>{element}</Providers>;
  }
  return (
    <Providers>
      {/* <OfflineBanner /> */}
          <Nav />
          <Stack gap="3" direction="vertical" p={3}>
            {/* <AuthProtect whitelist={["/login"]}> */}
              {/* <UserInfo /> */}
              <Box>{element}</Box>
            {/* </AuthProtect> */}
          </Stack>
        {/* <Layout {...props}>}</Layout> */}
        {/* {element} */}
    </Providers>
  );
};
