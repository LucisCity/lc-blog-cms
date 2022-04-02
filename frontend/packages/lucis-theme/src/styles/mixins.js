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

export const BoxShadowGlowing = (color = 'rgba(67, 224, 247, 0.37)') => css`
  box-shadow: 0px 0px 9px 8px ${color};
`