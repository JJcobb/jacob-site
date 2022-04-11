import styled from "styled-components"

const Title = styled.h1`
  position: relative;

  /* squigly underline */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    border-bottom: 3px solid var(--color-text);
    border-radius: 51% 49% 53% 47% / 100% 93% 7% 0%;

    pointer-events: none;
  }
`

export default Title
