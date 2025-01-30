import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import DarkBackground from "../shared/components/DarkBackground"
import { Box, Stack } from "../shared/components/ui/layout"
import { QRCodeScanner } from "flicket-ui";

const ScanPage: React.FC<PageProps> = () => {
  return (
    <>
    <DarkBackground />
    <Stack gap={3} direction="column">
      <Box width="100%">
        <QRCodeScanner paused={false} onScan={() => {}} />
      </Box>
      {/* TODO reenabled when QR scanner can be placed correctly above button */}
      {/* {safeModeEnabled && (
      <SecondaryButton onClick={() => router.push("/attendee/new")}>
        Enter details manually
      </SecondaryButton>
    )} */}
    </Stack>
  </>
  )
}

export default ScanPage

export const Head: HeadFC = () => <title>Docs Page</title>
