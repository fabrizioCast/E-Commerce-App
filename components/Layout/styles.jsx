import styled from "styled-components";
import css from "styled-jsx/css";

export const globalStyles = css.global`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap");

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #2b2c33;
    color: #fff;
  }

  textarea {
    resize: none;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #202125;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .tippy-content {
    padding: 0 !important;
  }
`;

export const Main = styled.main`
  width: 85%;
  margin: 20px auto;

  @media (min-width: 768px) {
    width: 95%;
  }
`;
