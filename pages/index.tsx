import styled, { keyframes } from "styled-components"

import type { NextPage } from "next"

import Intro from "components/sections/intro"
import Tech from "components/sections/tech"

const Home: NextPage = () => {
  return (
    <>
      <Section>
        <Intro />
      </Section>

      <Section>
        <Tech />
      </Section>
    </>
  )
}

const Section = styled.section`
  margin: 15vh 0;

  &:not(:first-of-type) {
    margin-top: 0;
  }
`

export default Home
