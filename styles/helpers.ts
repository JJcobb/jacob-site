import breakpoints from "styles/breakpoints.module.scss"

const breakpointSizes = Object.keys(breakpoints)

/**
 * Generate CSS media query
 * @breakpoint A breakpoint string value or a pixel number. Pixels will be converted to ems.
 * Example: "tablet" or 1600
 * @returns {String} media query as a string
 */
export const respondTo = (
  breakpoint: typeof breakpointSizes[number] | number,
  direction: "min" | "max" = "min",
  dimension: "width" | "height" = "width"
) => {
  const size =
    typeof breakpoint === "number"
      ? // if its a number, divide by the default base font size (16px) to convert the pixels to ems
        `${breakpoint / 16}em`
      : breakpoints[breakpoint]

  return `@media (${direction}-${dimension}: ${size})`
}
