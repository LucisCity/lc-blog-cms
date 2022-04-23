import { Global, css, Head, connect } from "frontity"
import SVNTransformer from "../fonts/SVN-Transformer.ttf"
import favicon from "../images/favicon.png"
import styles from "../styles/ispinner/ispinner.prefixed.css"

const GlobalStyles = ({ state }) => {
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
          ${(state.theme.isMobileMenuOpen || state.theme.isSearchModalOpen) && `
            height: 100vh;
            overflow: hidden;
          `}
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
              transform: scale(1.1);
            }
          }
        }
        /* ispinner */
        .ispinner {
          position: relative;
          width: 20px;
          height: 20px;
        }
        .ispinner .ispinner-blade {
          position: absolute;
          top: 6.5px;
          left: 8.5px;
          width: 2.5px;
          height: 6.5px;
          background-color: #8e8e93;
          border-radius: 1.25px;
          -webkit-animation: iSpinnerBlade 1s linear infinite;
                  animation: iSpinnerBlade 1s linear infinite;
          will-change: opacity;
        }
        .ispinner .ispinner-blade:nth-of-type(1) {
          -webkit-transform: rotate(45deg) translateY(-6.5px);
                  transform: rotate(45deg) translateY(-6.5px);
          -webkit-animation-delay: -1.625s;
                  animation-delay: -1.625s; }
        .ispinner .ispinner-blade:nth-of-type(2) {
          -webkit-transform: rotate(90deg) translateY(-6.5px);
                  transform: rotate(90deg) translateY(-6.5px);
          -webkit-animation-delay: -1.5s;
                  animation-delay: -1.5s; }
        .ispinner .ispinner-blade:nth-of-type(3) {
          -webkit-transform: rotate(135deg) translateY(-6.5px);
                  transform: rotate(135deg) translateY(-6.5px);
          -webkit-animation-delay: -1.375s;
                  animation-delay: -1.375s; }
        .ispinner .ispinner-blade:nth-of-type(4) {
          -webkit-transform: rotate(180deg) translateY(-6.5px);
                  transform: rotate(180deg) translateY(-6.5px);
          -webkit-animation-delay: -1.25s;
                  animation-delay: -1.25s; }
        .ispinner .ispinner-blade:nth-of-type(5) {
          -webkit-transform: rotate(225deg) translateY(-6.5px);
                  transform: rotate(225deg) translateY(-6.5px);
          -webkit-animation-delay: -1.125s;
                  animation-delay: -1.125s; }
        .ispinner .ispinner-blade:nth-of-type(6) {
          -webkit-transform: rotate(270deg) translateY(-6.5px);
                  transform: rotate(270deg) translateY(-6.5px);
          -webkit-animation-delay: -1s;
                  animation-delay: -1s; }
        .ispinner .ispinner-blade:nth-of-type(7) {
          -webkit-transform: rotate(315deg) translateY(-6.5px);
                  transform: rotate(315deg) translateY(-6.5px);
          -webkit-animation-delay: -0.875s;
                  animation-delay: -0.875s; }
        .ispinner .ispinner-blade:nth-of-type(8) {
          -webkit-transform: rotate(360deg) translateY(-6.5px);
                  transform: rotate(360deg) translateY(-6.5px);
          -webkit-animation-delay: -0.75s;
                  animation-delay: -0.75s; }
        .ispinner.ispinner-large {
          width: 35px;
          height: 35px; }
        .ispinner.ispinner-large .ispinner-blade {
          top: 11.5px;
          left: 15px;
          width: 5px;
          height: 12px;
          border-radius: 2.5px; }
        .ispinner.ispinner-large .ispinner-blade:nth-of-type(1) {
          -webkit-transform: rotate(45deg) translateY(-11.5px);
                  transform: rotate(45deg) translateY(-11.5px); }
        .ispinner.ispinner-large .ispinner-blade:nth-of-type(2) {
          -webkit-transform: rotate(90deg) translateY(-11.5px);
                  transform: rotate(90deg) translateY(-11.5px); }
        .ispinner.ispinner-large .ispinner-blade:nth-of-type(3) {
          -webkit-transform: rotate(135deg) translateY(-11.5px);
                  transform: rotate(135deg) translateY(-11.5px); }
        .ispinner.ispinner-large .ispinner-blade:nth-of-type(4) {
          -webkit-transform: rotate(180deg) translateY(-11.5px);
                  transform: rotate(180deg) translateY(-11.5px); }
        .ispinner.ispinner-large .ispinner-blade:nth-of-type(5) {
          -webkit-transform: rotate(225deg) translateY(-11.5px);
                  transform: rotate(225deg) translateY(-11.5px); }
        .ispinner.ispinner-large .ispinner-blade:nth-of-type(6) {
          -webkit-transform: rotate(270deg) translateY(-11.5px);
                  transform: rotate(270deg) translateY(-11.5px); }
        .ispinner.ispinner-large .ispinner-blade:nth-of-type(7) {
          -webkit-transform: rotate(315deg) translateY(-11.5px);
                  transform: rotate(315deg) translateY(-11.5px); }
        .ispinner.ispinner-large .ispinner-blade:nth-of-type(8) {
          -webkit-transform: rotate(360deg) translateY(-11.5px);
                  transform: rotate(360deg) translateY(-11.5px); }
        @-webkit-keyframes iSpinnerBlade {
          0% {
            opacity: 0.85; }
          50% {
            opacity: 0.25; }
          100% {
            opacity: 0.25; } }

        @keyframes iSpinnerBlade {
          0% {
            opacity: 0.85; }
          50% {
            opacity: 0.25; }
          100% {
            opacity: 0.25; } }
        /* end ispinner */
      `}
      />
    </>
  )
}

export default connect(GlobalStyles)