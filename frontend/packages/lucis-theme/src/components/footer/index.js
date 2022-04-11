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
import i18n from "../../translations/i18n"
import footerBtnBg from "../../images/footer-btn.svg"

const Footer = () => {
  const { t } = i18n
  return (
    <MainFooter>
      <Container>
        <FooterLogo link="/">
          <Image src={logoFooter} />
        </FooterLogo>
        <FooterSubcribe>
          <FooterCTA>
            <h3>{t('Be our partner')}</h3>
            <button>{t('Apply Now')}</button>
            <button>{t('Contact Us')}</button>
          </FooterCTA>
          <FooterSocials>
            <h3>{t('Follow our official channel bellow')}</h3>
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
        </FooterSubcribe>
      </Container>
    </MainFooter>
  )
}

const MainFooter = styled.footer`
  ${Container} {
    padding-bottom: 50%;
    background: url(${bgFooter}) no-repeat bottom;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    @media screen and (min-width: 576px) {
      padding-bottom: 250px;
    }
    @media screen and (min-width: 768px) {
      padding-bottom: 350px;
      flex-direction: row;
    }
    @media screen and (min-width: 992px) {
      padding-bottom: 450px;
    }
    @media screen and (min-width: 1200px) {
      padding-bottom: 550px;
    }
  }
`

const FooterLogo = styled(Link)`
  display: block;
  width: 150px;
  margin-bottom: 20px;
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
    width: 560px;
  }
  @media screen and (min-width: 1440px) {
    width: 720px;
  }
`

const FooterSocials = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  h3 {
    width: 100%;
    font-size: 12px;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 500;
    @media screen and (min-width: 576px) {
      font-size: 16px;
    }
    @media screen and (min-width: 768px) {
      text-align: left;
    }
    @media screen and (min-width: 992px) {
      font-size: 18px;
    }
    @media screen and (min-width: 1200px) {
      margin-bottom: 26px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 30px;
    }
  }
  a {
    display: block;
    width: 30px;
    height: 30px;
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

const FooterCTA = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    justify-content: start;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 45px;
  }
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 15px;
    text-align: center;
    width: 100%;
    @media screen and (min-width: 768px) {
      font-size: 20px;
      text-align: left;
    }
    @media screen and (min-width: 1200px) {
      font-size: 26px;
      margin-bottom: 26px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 36px;
    }
  }
  button {
    background: url(${footerBtnBg}) no-repeat top center;
    background-size: contain;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    display: inline-block;
    width: 130px;
    height: 50px;
    border: none;
    outline: none;
    cursor: pointer;
    &:last-of-type {
      margin-left: 15px;
    }
    @media screen and (min-width: 576px) {
      width: 160px;
      height: 60px;
      font-size: 20px;
      &:last-of-type {
        margin-left: 30px;
      }
    }
    @media screen and (min-width: 1200px) {
      width: 240px;
      height: 90px;
      font-size: 26px;
      &:last-of-type {
        margin-left: 77px;
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
