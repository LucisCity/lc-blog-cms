import { styled } from "frontity"
import Link from "@frontity/components/link"
import Image from "@frontity/components/image"
import { Container } from "../../styles/common"
import logoFooter from "../../images/logo-footer.svg"
import bgFooter from "../../images/footer-image.svg"
import tiktok from "../../images/tiktok.svg"
import facebook from "../../images/facebook.svg"
import youtube from "../../images/youtube.svg"
import telegram from "../../images/telegram.svg"
import twitter from "../../images/twitter.svg"
import discord from "../../images/discord.svg"

const Footer = () => {
  return (
    <MainFooter>
      <Container>
        <FooterLogo link="/">
          <Image src={logoFooter} />
        </FooterLogo>
        <FooterSubcribe>
          <FooterSocials>
            <Link link="https://www.tiktok.com/@lucistvv" target="_blank">
              <Image src={tiktok} />
            </Link>
            <Link link="https://www.facebook.com/lucistv.news" target="_blank">
              <Image src={facebook} />
            </Link>
            <Link link="https://www.youtube.com/c/LucisTVGaming" target="_blank">
              <Image src={youtube} />
            </Link>
            <Link link="https://t.me/sankeonft" target="_blank">
              <Image src={telegram} />
            </Link>
            <Link link="https://twitter.com/Lucis_TV" target="_blank">
              <Image src={twitter} />
            </Link>
            <Link link="https://discord.com/channels/911921072830574603/926398655093702666" target="_blank">
              <Image src={discord} />
            </Link>
          </FooterSocials>
          <FooterForm>
            <h3>SUBSCRIBE TO NEWSLETTER</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email"/>
              <button>Submit</button>
            </form>
            <p>Thank you for subscribing!</p>
          </FooterForm>
        </FooterSubcribe>
      </Container>
    </MainFooter>
  )
}

const MainFooter = styled.footer`
  background: url(${bgFooter}) no-repeat bottom;
  background-size: contain;
  padding-bottom: 50%;
  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
`

const FooterLogo = styled(Link)`
  display: block;
  width: 150px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1200px) {
    width: 250px;
  }
`

const FooterSubcribe = styled.div`
  width: 400px;
  max-width: 100%;
  @media screen and (min-width: 992px) {
    width: 600px;
  }
  @media screen and (min-width: 1440px) {
    width: auto;
  }
`

const FooterSocials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
  a {
    display: block;
    width: 30px;
    height: 30px;
    box-shadow: 0 2px 40px rgb(255 255 255 / 30%);
    border-radius: 50%;
    @media screen and (min-width: 768px) {
      width: 50px;
      height: 50px;
    }
    @media screen and (min-width: 1200px) {
      width: 80px;
      height: 80px;
    }
    @media screen and (min-width: 1440px) {
      width: 80px;
      height: 80px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`

const FooterForm = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 26px;
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 20px;
      text-align: left;
    }
    @media screen and (min-width: 1200px) {
      font-size: 26px;
    }
  }
  form {
    display: flex;
    align-items: center;
    height: 40px;
    @media screen and (min-width: 768px) {
      height: 60px;
    }
    @media screen and (min-width: 1200px) {
      height: 90px;
    }
    input {
      display: block;
      width: 100%;
      height: 100%;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
      background: linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
      backdrop-filter: blur(42px);
      border: none;
      outline: none;
      padding: 10px;
      font-size: 16px;
      color: #ffffff;
      @media screen and (min-width: 992px) {
        padding: 20px;
      }
      @media screen and (min-width: 1200px) {
        font-size: 26px;
      }
      @media screen and (min-width: 1440px) {
        font-size: 36px;
      }
    }
    button {
      display: block;
      min-width: 100px;
      height: 100%;
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
      border: none;
      cursor: pointer;
      background: linear-gradient(60deg, #CD28E8 3.41%, #0BEBD6 106.98%);
      backdrop-filter: blur(42px);
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
      padding: 5px;
      @media screen and (min-width: 768px) {
        min-width: 150px;
        font-size: 26px;
      }
      @media screen and (min-width: 1200px) {
        min-width: 242px;
        font-size: 36px;
      }
    }
  }
  p {
    font-size: 16px;
    font-weight: 500;
    margin: 20px 0 0;
    text-align: center;
    @media screen and (min-width: 768px) {
      text-align: left;
      font-size: 26px;
    }
    @media screen and (min-width: 1200px) {
      margin: 46px 0 0;
      font-size: 36px;
    }
  }
`

export default Footer
