import { styled } from "frontity"

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
  position: relative;
  z-index: 1;
  border-radius: 10px;
  padding: 15px;
  background: linear-gradient(90deg, hsla(0,0%,42%,0.1), rgba(38,38,38,0.3));
  box-shadow: 0 1px 2.4rem 0 rgba(0,0,0,0.1);
  margin-bottom: 15px;
  @media screen and (min-width: 992px) {
    padding: ${props => props.padding};
  }
`