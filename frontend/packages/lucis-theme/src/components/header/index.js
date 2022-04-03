import React, { useEffect } from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import Image from "@frontity/components/image"
import logo from "../../images/logo.svg"
import useDimension from "../../hooks/useDimension"
import { Container } from "../../styles/common"
import iconSearch from "../../images/search.svg"
import iconNotificaion from "../../images/notification.svg"

const Header = ({ state, actions }) => {
  const dimension = useDimension()

  useEffect(() => {
    const handleScroll = () => {
      const mainHeader = document.querySelector('.main-header')
      if (window.scrollY > 0) {
        !mainHeader.classList.contains('is-scrolling') && mainHeader.classList.add('is-scrolling')
      } else {
        mainHeader.classList.contains('is-scrolling') && mainHeader.classList.remove('is-scrolling')
      }
    }

    document.addEventListener('scroll', handleScroll)
  
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])
  
  const handleCloseMobileMenu = () => {
    actions.theme.closeMobileMenu()
  }

  const handleOpenMobileMenu = () => {
    actions.theme.openMobileMenu()
  }

  return (
    <HeaderStyled className="main-header text-center">
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
              <Link link="#">Ecosystem</Link>
            </Li>
            <Li>
              <Link link="#">Media</Link>
            </Li>
            <Li>
              <Link link="#">Lucis Insight</Link>
            </Li>
            <Li>
              <Link link="#">About Us</Link>
            </Li>
          </ul>
        </Nav>
        <HeaderToolbar>
          <Notification amount="6" />
          <HeaderForm>
            <Search>
              <Image src={iconSearch} />
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="SEARCH" />
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
  @media screen and (min-width: 1440px) {
    padding: 35px 0;
  }
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
    padding: 30px 20px;
    font-weight: 700;
    text-transform: none;
    transition: .3s;
    ul {
      display: flex;
      flex-direction: column;
      height: 100%;
      text-align: left;
      li {
        margin-bottom: 30px;
      }
    }
  }
`

const Li = styled.li`
  display: inline-block;
  margin-right: 30px;
  &:last-of-type {
    margin-right: 0;
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
export default connect(Header)
