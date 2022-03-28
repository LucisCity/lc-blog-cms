import { Global, css } from "frontity"

const GlobalStyles = () => {
  return (
    <Global styles={
      css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          font-family: system-ui, Verdana, Arial, sans-serif;
        }
        body {
          background: #282828;
          color: #bbbbbb;
        }
        body::-webkit-scrollbar {
          width: 3px;
        }
        body::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        }
        body::-webkit-scrollbar-thumb {
          background-color: darkgrey;
          border-radius: 5px;
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
        a:hover {
          color: gray;
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
      `}
    />
  )
}

export default GlobalStyles