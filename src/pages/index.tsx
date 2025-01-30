import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"

// import { MainHeader } from "~/features/home/components/MainHeader";
import DarkBackground from "~/shared/components/DarkBackground";
import { PrimaryButton, SecondaryButton } from "~/shared/components/ui/Button";
import { Box, Stack } from "~/shared/components/ui/layout";
import { Text } from "~/shared/components/ui/Text";
import Providers from "../shared/providers";
import { navigate } from 'gatsby'


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Providers>
    <Box>
    <DarkBackground />
    <Stack gap={3} direction="vertical">
      {/* <MainHeader /> */}

      <Stack gap={3} direction="vertical">
        <Card>
          <Text color="white" variant="header.M">
            Scan attendees
          </Text>
          <Text color="white" variant="regular" textAlign="center">
            Scan digital tickets quickly and start registering interest.
          </Text>
          <PrimaryButton onClick={() => navigate("/scan")}>
            Scanner
          </PrimaryButton>
          <Link to="/attendee?attendeeId=new">
            <Text color="white" variant="small">
              Register lead manually
            </Text>
          </Link>
        </Card>

        <Card>
          <Text variant="header.M" color="white">
            Attendee details
          </Text>
          <Text variant="regular" color="white" textAlign="center">
            Customize the information gathered about your attendees.
          </Text>
          <SecondaryButton onClick={() => navigate("/exhibitor-fields")}>
            Customize
          </SecondaryButton>
        </Card>
      </Stack>
    </Stack>
  </Box>
  </Providers>
  )
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      gap={1}
      direction="vertical"
      alignItems="center"
      justifyContent="center"
      p={3}
      border="1px solid"
      borderColor="N200"
      borderRadius="md"
    >
      {children}
    </Stack>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
