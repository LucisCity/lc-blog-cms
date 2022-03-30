import React from "react"
import { connect, css, styled } from "frontity"
import Link from "@frontity/components/link"

const Header = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <HeaderStyled className="text-center">
      <H1>Hello Lucis theme</H1>
      <nav>
        <ul>
          <Li>
            <Link link="/">Home</Link>
          </Li>
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
      </nav>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  margin-bottom: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0deg,hsl(0deg 0% 24%),rgb(30 30 30));
  z-index: 1;
  padding: 20px 15px;
`

const Li = styled.li`
  display: inline-block;
  margin: 0 5px;
`
const H1 = styled.h1`
  margin-bottom: 20px;
`

export default connect(Header)
