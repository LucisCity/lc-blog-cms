import { styled, css } from "frontity"

export const Container = styled.div`
  width: 800px;
  max-width: 100%;
  margin: auto;
`

export const StickyAside = styled.aside`
  min-width: 325px;
  padding: 20px;
  position: sticky;
  top: 0;
  max-height: 100vw;
`

export const BoxRoundedBlur = styled.div`
  border-radius: 10px;
  padding: 10px 15px;
  background: linear-gradient(154deg,hsl(0deg 0% 42% / 14%),rgb(30 30 30));
  margin-bottom: 15px;
`