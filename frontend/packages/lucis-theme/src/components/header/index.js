import React, { useEffect } from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import Image from "@frontity/components/image"
import logo from "../../images/logo.svg"
import useDimension from "../../hooks/useDimension"
import { Container } from "../../styles/common"
import iconSearch from "../../images/search.svg"
import iconNotificaion from "../../images/notification.svg"
import iconSubmenu from "../../images/submenu.svg"
import iconSubmenuCorner from "../../images/submenu-corner.svg"

const submenuItems = [
  {id: 1, href:'https://lucis.network/social-fi', title: 'Social-Fi network platform', disabled: false},
  {id: 2, href:'https://lucis.network/tournaments', title: 'Tournaments', disabled: false},
  {id: 3, href:'https://lucis.network/ranking', title: 'Lucis Insight & Game Ranking system', disabled: false},
  {id: 4, href:'https://lucis.network/media', title: 'Lucis Media', disabled: false},
  {id: 5, href:'https://lucis.network/launchpad', title: 'Launchpad & Marketplace', disabled: false},
  {id: 6, href:'https://lucis.network/lucis-gaming-guild', title: 'Gaming Guild', disabled: false},
  {id: 7, href:'https://lucis.network/ranking', title: 'Automation tool zone', disabled: true},
  {id: 8, href:'https://lucis.network/ranking', title: 'Streaming platform', disabled: true},
]

const Header = ({ state, actions }) => {
  const data = state.source.get(state.router.link)
  const dimension = useDimension()
  
  const handleCloseMobileMenu = () => {
    actions.theme.closeMobileMenu()
  }

  const handleOpenMobileMenu = () => {
    actions.theme.openMobileMenu()
  }

  const handleAnchorClick = (e) => {
    if (data.isHome) {
      e.preventDefault()
      const regex = /^.*?#/g
      let id = e.target.href.replace(regex, '')
      handleCloseMobileMenu()
      document.querySelector(`#${id}`)?.scrollIntoView({
        behavior: "smooth"
      })
    }
  }

  useEffect(() => {
    const location = window.location
    if (location.hash) {
      let element = document.getElementById(location.hash.slice(1))
      if (element) {
        element.scrollIntoView({behavior: "smooth"})
      }
    }
  }, [state.router.link])

  useEffect(() => {
    if (dimension.width >= 992) {
      handleCloseMobileMenu()
    }
  }, [dimension]);

  return (
    <HeaderStyled>
      <Container>
        <LogoContainer>
          {dimension.width <= 992 && <OpenMobileMenu onClick={handleOpenMobileMenu} />}
          <Logo link="/">
            <Image src={logo} />
          </Logo>
        </LogoContainer>
        <Nav isMobileMenuOpen={state.theme.isMobileMenuOpen}>
          {dimension.width <= 992 && <CloseMobileMenu onClick={handleCloseMobileMenu} />}
          <ul>
            <Li>
              <Link link="https://lucis.network/#EcoSystem" target="_blank">Ecosystem</Link>
            </Li>
            <Li>
              {data.isHome ? (
                <a
                  href="#media"
                  onClick={handleAnchorClick}
                >
                  Media
                </a>
              ): (
                <Link
                  link="/#media"
                  onClick={handleAnchorClick}
                >
                  Media
                </Link>
              )}
            </Li>
            <Li>
            <Link link="/lucis-insight" target="_blank">Lucis Insight</Link>
            </Li>
            <Li>
              <Link link="#">About Us</Link>
            </Li>
            <Li className="has-submenu">
              <Image src={iconSubmenu} />
              <Submenu className="submenu">
                {submenuItems.map(item => (
                  <Li key={item.id} disabled={item.disabled && 'disabled'}>
                    <a href={item.href}>{item.title}</a>
                  </Li>
                ))}
              </Submenu>
            </Li>
          </ul>
        </Nav>
        <HeaderToolbar>
          <Notification amount="6" />
          <HeaderForm>
            <Search>
              <Image src={iconSearch} />
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Search" />
              </form>
            </Search>
            <MultiLanguage>
              <button>EN</button>
            </MultiLanguage>
          </HeaderForm>
        </HeaderToolbar>
      </Container>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  padding: 15px 0;
  font-size: 16px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: rgba(40, 38, 54, 0.4);
    backdrop-filter: blur(8px);
  }
  ${Container} {
    display: flex;
    align-items: center;
  }
`

const Nav = styled.nav`
  font-size: 16px;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: ${props => props.isMobileMenuOpen ? '0' : '-100%'};
    z-index: 9;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(19, 19, 19, 0.6));
    backdrop-filter: blur(20px);
    padding: 50px 40px;
    font-weight: 700;
    text-transform: none;
    transition: .3s;
    display: flex;
    flex-direction: column;
    ul {
      display: flex;
      flex-direction: column;
      text-align: left;
      &:not(.submenu) {
        max-height: calc(100% - 50px);
        overflow-y: auto;
      }
      li {
        margin-bottom: 30px;
      }
    }
  }
  @media screen and (max-width: 576px) {
    padding: 35px 15px;
  }
`

const Li = styled.li`
  display: inline-block;
  margin-right: 30px;
  position: relative;
  &:last-of-type {
    margin-right: 0;
  }
  &.has-submenu {
    cursor: pointer;
    &:hover {
      .submenu {
        transform: translateY(0px) translateX(0px) scale(1);
        opacity: 1;
      }
    }
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`

const Logo = styled(Link)`
  width: 100px;
  @media screen and (min-width: 992px) {
    width: 120px;
  }
  @media screen and (min-width: 1440px) {
    width: 138px;
  }
`

const OpenMobileMenu = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 15px;
  position: relative;
  border-bottom: 2px solid #fff;
  &::before, &::after {
    content: '';
    display: block;
    background: #fff;
    height: 2px;
    position: absolute;
    left: 0;
  }
  &::before {
    width: 60%;
    top: 0;
  }
  &::after {
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
`

const CloseMobileMenu = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-bottom: 25px;
  position: relative;
  &::before, &::after {
    content: '';
    display: block;
    background: #fff;
    height: 2px;
    position: absolute;
    left: 0;
    width: 100%;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`

const HeaderToolbar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

const Notification = styled.div`
  background: url(${iconNotificaion}) no-repeat center;
  background-size: contain;
  margin-right: 20px;
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;
  &::after {
    content: ${props => props.amount ? `'${props.amount}'` : undefined};
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 16px;
    height: 16px;
    background: #FC0A0A;
    font-size: 10px;
    font-weight: 700;
    border-radius: 50%;
    position: absolute;
    top: -4px;
    right: -3px;
  }
`

const HeaderForm = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  height: 38px;
  width: 74px;
  background: rgba(101, 80, 167, 0.6);
  @media screen and (min-width: 390px) {
    width: 100px;
  }
  @media screen and (min-width: 768px) {
    width: 280px;
    height: 49px;
    background-color: rgba(28, 31, 37, 0.6);
  }
`

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  padding: 5px;
  height: 100%;
  width: 50%;
  @media screen and (min-width: 768px) {
    padding: 12px 16px;
    width: 213px;
  }
  img {
    width: 20px;
    @media screen and (min-width: 768px) {
      width: 25px;
    }
  }
  form {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
  input {
    background: none;
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: 700;
    padding-left: 10px;
    color: #A0A0A0;
    display: block;
    width: 100%;
    @media screen and (min-width: 992px) {
      font-size: 16px;
      padding-left: 20px;
    }
  }
`

const MultiLanguage = styled.div`
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: rgba(28, 31, 37, 0.6);
  position: relative;
  height: 100%;
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 66px;
  }
  &::after {
    @media screen and (min-width: 768px) {
      content: '';
      position: absolute;
      top: 50%;
      right: 14px;
      transform: translateY(-50%);
      display: block;
      width: 0;
      border: 5px solid transparent;
      border-top: 8px solid #C4C4C4;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      border-bottom: 0px solid transparent;
    }
  }
  button {
    font-size: 14px;
    font-weight: 700;
    background: none;
    border: none;
    outline: none;
    padding: 5px;
    cursor: pointer;
    width: 100%;
    height: 100%;
    color: #A0A0A0;
    @media screen and (min-width: 768px) {
      padding: 12px 16px 12px 0;
    }
  }
`

const Submenu = styled.ul`
  padding-left: 20px;
  @media screen and (min-width: 992px) {
    cursor: default;
    position: absolute;
    top: 35px;
    right: 0;
    min-width: 310px;
    transition: 0.3s;
    padding: 12px 0;
    transform: translateY(-220px) translateX(140px) scale(0); 
    opacity: 0;
    background: linear-gradient(121.07deg, rgba(255, 255, 255, 0.3) -26.88%, rgba(255, 255, 255, 0.1) 73.85%), url('${iconSubmenuCorner}') no-repeat top right;
    box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(40px);
    &::after {
      content: '';
      position: absolute;
      top: -35px;
      left: 0;
      right: 0;
      height: 48px;
    }
  }
  ${Li} {
    transition: 0.5s;
    margin: 0;
    width: 100%;
    padding: 0 12px;
    @media screen and (min-width: 992px) {
      &:hover {
        background: linear-gradient(121.07deg, rgba(255, 255, 255, 0.3) -26.88%, rgba(255, 255, 255, 0) 73.85%);
        box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.2);
      }
    }
    &:last-of-type {
      a {
        border-bottom: none;
      }
    }
    &[disabled] {
      pointer-events: none;
      a {
        opacity: 0.4;
      }
    }
    a {
      font-size: 16px;
      font-weight: 400;
      padding: 12px 0;
      display: block;
      @media screen and (min-width: 992px) {
        border-bottom: 1px solid #D9D9D9;
      }
    }
  }
`

export default connect(Header)
