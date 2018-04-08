import styled from "react-emotion";

export const FancyH1 = styled("h1")`
  margin: 0;
  margin-bottom: 30px;
  padding: 0;
  padding-left: 10px;
  position: relative;
`;

export const FancyH2 = styled(`h2`)`
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;

  :before {
    content: "";
    width: 90%;
    height: 15px;
    position: absolute;
    left: -10px;
    bottom: -5px;
    background-color: #89bcfe;
    opacity: 0.6;
    z-index: -2;
  }
`;
