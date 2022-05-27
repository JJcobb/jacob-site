import styled from "styled-components"

const Title = styled.h1`
  position: relative;
  margin-bottom: 0.75em;

  /* squigly underline */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -2.5%;
    right: -2.5%;
    bottom: 0;
    transform: translateY(0.2em);

    border-bottom: 3px solid var(--color-text);
    border-radius: 51% 60% 53% 47% / 100% 93% 7% 0%;

    pointer-events: none;
  }
`

export default Title
