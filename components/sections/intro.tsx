import styled, { keyframes } from "styled-components"

import Cell from "components/cell"
import Heading from "components/heading"
import Subtext from "components/subtext"

export default function Intro() {
  return (
    <Cell>
      <Container>
        <Heading>Hey, I&apos;m Jacob</Heading>

        <Subtext>
          Based in beautiful central Florida; I&apos;m an avid sports fanatic,
          classic rock enthusiast, and an out of this world:
          {/* and I&apos;m an out of this world */}
        </Subtext>

        <Callout>Full-stack Developer</Callout>
      </Container>
    </Cell>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const gradientMove = keyframes`
  0% {
		background-position: 0% 50%;
	}
	100% {
		background-position: 100% 50%;
	}
`

const Callout = styled.p`
  font-size: 7vw;
  font-size: clamp(var(--font-size-h2), 7vw, 150px);
  text-align: center;
  line-height: 1.2;

  padding: 2rem 3rem;
  margin-top: 2rem;
  margin-bottom: 0;
  border-radius: 1rem;

  /* // * Gradient background */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    90deg,
    var(--color-primary) 0%,
    var(--color-secondary) 33%,
    var(--color-primary) 66%,
    var(--color-secondary) 100%
  );
  background-size: 300% 100%;

  /* // * Neon effect */
  /* text glow */

  /* // TODO: remove in next commit */
  /* text-shadow: -0.2rem -0.2rem 0.5rem var(--color-text),
    0.2rem 0.2rem 0.5rem var(--color-text), 0 0 1rem var(--color-secondary),
    0 0 2rem var(--color-primary), 0 0 3rem var(--color-primary),
    0 0 4rem var(--color-primary); */
  /* , 0 0 5rem var(--color-primary) */

  text-shadow: -0.1vw -0.1vw 0.25vw var(--color-text),
    0.1vw 0.1vw 0.25vw var(--color-text), 0 0 0.5vw var(--color-secondary),
    0 0 1vw var(--color-primary), 0 0 1.5vw var(--color-primary),
    0 0 2vw var(--color-primary);

  /* border glow */
  /* // TODO: remove in next commit */
  /* box-shadow: 0 0 0.5rem var(--color-text), inset 0 0 0.5rem var(--color-text),
    0 0 2rem var(--color-primary), inset 0 0 2rem var(--color-primary),
    0 0 3rem var(--color-primary), inset 0 0 3rem var(--color-primary); */

  box-shadow: 0 0 0.333vw var(--color-text), inset 0 0 0.333vw var(--color-text),
    0 0 1.5vw var(--color-primary), inset 0 0 1.5vw var(--color-primary),
    0 0 2vw var(--color-primary), inset 0 0 2vw var(--color-primary);

  /* // * Light theme */
  [data-color-theme="light"] & {
    font-weight: 700;
    animation: ${gradientMove} 10s linear infinite;
    backface-visibility: hidden;

    /* undo the neon effect */
    text-shadow: none;

    // natural box shadow
    box-shadow: 1.3px 1.2px 3px rgba(0, 0, 0, 0.014),
      3.1px 2.9px 7.1px rgba(0, 0, 0, 0.02),
      5.9px 5.5px 13.4px rgba(0, 0, 0, 0.025),
      10.5px 9.8px 23.9px rgba(0, 0, 0, 0.03),
      19.6px 18.4px 44.7px rgba(0, 0, 0, 0.036),
      47px 44px 107px rgba(0, 0, 0, 0.05);
  }
`
