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

const HeaderStyled = styled.div`
  margin-bottom: 20px;
`

const Li = styled.li`
  display: inline-block;
  margin: 0 5px;
`
const H1 = styled.h1`
  margin-bottom: 20px;
`

export default connect(Header)
