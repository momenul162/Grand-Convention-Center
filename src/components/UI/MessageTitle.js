import styled from "styled-components";

export const TitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 10rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.5em;
  }
  div {
    color: ${(props) => props.theme.titleColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;
