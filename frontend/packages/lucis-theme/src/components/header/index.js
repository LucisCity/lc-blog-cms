import React, { useEffect } from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import Image from "@frontity/components/image"
import logo from "../../images/logo.png"
import useDimension from "../../hooks/useDimension"

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
            <Link link="/portal">Portal</Link>
          </Li>
          <Li>
            <Link link="/category/lucis-finance">Lucis finance</Link>
          </Li>
          <Li>
            <Link link="/category/nguoi-moi">Người mới</Link>
          </Li>
          <Li>
            <Link link="/category/he-sinh-thai">Hệ sinh thái</Link>
          </Li>
          <Li>
            <Link link="/category/kien-thuc">Kiến thức</Link>
          </Li>
          <Li>
            <Link link="/category/kiem-tien">Kiếm tiền</Link>
          </Li>
        </ul>
      </Nav>
      <div>search</div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  padding: 10px 30px;
  font-size: 16px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: #252423;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 21.504px 0px;
  }
  &.is-scrolling {
    &::before {
      background: linear-gradient(rgba(37, 36, 35, 0.2), rgba(37, 36, 35, 0.6) 99%);
      backdrop-filter: blur(44px);
    }
  }
`

const Nav = styled.nav`
  text-transform: uppercase;
  color: #ededed;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: ${props => props.isMobileMenuOpen ? '0' : '-100%'};
    z-index: 9;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(19, 19, 19, 0.6));
    backdrop-filter: blur(20px);
    font-size: 20px;
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
  margin: 0 10px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`
const Logo = styled(Link)`
  width: 120px;
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

export default connect(Header)
