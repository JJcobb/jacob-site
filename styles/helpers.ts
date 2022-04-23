import breakpoints from "styles/breakpoints.module.scss"

const breakpointSizes = Object.keys(breakpoints)

/**
 * Generate CSS media query
 * @returns {String} media query as a string
 */
export const respondTo = (
  breakpoint: typeof breakpointSizes[number] | number,
  direction: "min" | "max" = "min",
  dimension: "width" | "height" = "width"
) => {
  let size =
    typeof breakpoint === "number" ? breakpoint : breakpoints[breakpoint]

  // TODO: handle adding a unit to the end if a number is provided

  return `@media (${direction}-${dimension}: ${size})`
}
