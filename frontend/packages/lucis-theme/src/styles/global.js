import { Global, css, Head } from "frontity"
import SVNTransformer from "../fonts/SVN-Transformer.ttf"
import favicon from "../images/favicon.png"

const GlobalStyles = () => {
  return (
    <>
      <Head>
      <link rel="icon" href={favicon} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700" rel="stylesheet" />
      </Head>
      <Global styles={
      css`
        @font-face {
          font-family: 'SVN Transformer';
          src: url(${SVNTransformer}) format('truetype');
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          font-family: 'Saira', sans-serif;
          line-height: 1.5;
          color: #ffffff;
        }
        body {
          background: #100f0e;
          word-break: break-word;
          &::-webkit-scrollbar, *::-webkit-scrollbar {
            width: 3px;
          }
          &::-webkit-scrollbar-track, *::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          }
          &::-webkit-scrollbar-thumb, *::-webkit-scrollbar-thumb {
            background-color: rgba(169, 169, 169, 0.34);
            border-radius: 5px;
          }
        }
        ul {
          list-style: none;
        }
        p {
          margin-bottom: 10px;
        }
        img {
          max-width: 100%;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        section {
          margin-bottom: 50px;
        }
        .text-center {
          text-align: center;
        }
        .posts-grid {
          display: flex;
          flex-wrap: wrap;
        }
        .post-item {
          width: calc(33.3333% - 20px);
          margin: 10px;
        }
        .post-item > a {
          font-weight: 500;
          display: block;
        }
        .wp-block-image img {
          height: auto;
        }
        .post-featured-image {
          margin-bottom: 20px;
        }
        .img-hover-scale {
          .img-scale {
            transition: transform .3s;
          }
          &:hover {
            .img-scale {
              transform: scale(1.1)
            }
          }
        }
      `}
      />
    </>
  )
}

export default GlobalStyles