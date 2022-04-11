import styled from "styled-components"

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
          <div>React</div>
          <div>TypeScript</div>
          <div>Next.js</div>
          <div>Node.js</div>
          <div>MongoDB</div>
          <div>WordPress</div>
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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  text-align: center;
`
