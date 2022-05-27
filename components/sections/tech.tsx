import styled from "styled-components"

import { respondTo } from "styles/helpers"

import Cell from "components/cell"
import Heading from "components/heading"
import Subtext from "components/subtext"

export default function Tech() {
  return (
    <Cell>
      <Container>
        <Heading as="h2">Tech</Heading>

        <Subtext>
          {/* Here are some technologies I&apos;ve been working with lately. */}
          Here&apos;s what I&apos;ve been working with lately.
        </Subtext>

        <Grid>
          <Box>
            <img src="/react-logo.svg" alt="" />
            React
          </Box>
          <Box>
            <img src="/typescript-logo.svg" alt="" />
            TypeScript
          </Box>
          <Box>
            <img src="/next-logo.svg" alt="" />
            Next.js
          </Box>
          <Box>
            <img src="/node-logo.svg" alt="" />
            Node.js
          </Box>
          <Box>
            <img src="/mongodb-logo.svg" alt="" />
            MongoDB
          </Box>
          <Box>
            <img src="/wordpress-logo.svg" alt="" />
            WordPress
          </Box>
        </Grid>
      </Container>
    </Cell>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  text-align: center;

  margin-top: 2rem;

  ${respondTo("tablet")} {
    grid-template-columns: 1fr 1fr;
  }
  ${respondTo("desktop")} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 80px;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 60px;

  padding: 100px;
  font-size: var(--font-size-l);

  border-radius: 1rem;

  /* border glow */
  box-shadow: 0 0 0.333vw var(--color-text), inset 0 0 0.333vw var(--color-text),
    0 0 1.5vw var(--color-primary), inset 0 0 1.5vw var(--color-primary),
    0 0 2vw var(--color-primary), inset 0 0 2vw var(--color-primary);
`
