import { css } from "frontity"

export const TextLineClamp = (numberOfLine) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${numberOfLine};
  -webkit-box-orient: vertical;  
  overflow: hidden;
`
export const GradientBorderRadius = (
  firstColor,
  secondColor,
  radius,
  borderWidth = '1px',
  direction = 'to right',
) => css`
  background: linear-gradient(${direction}, ${firstColor}, ${secondColor}) border-box;
  border: ${borderWidth} solid transparent;
  border-radius: ${radius};
`