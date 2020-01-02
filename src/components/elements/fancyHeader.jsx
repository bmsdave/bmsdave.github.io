import styled from 'react-emotion'
import monokaiColors from '../../../monokaiColors'

export const FancyH1 = styled('h1')`
  position: relative;
  padding: 10px;

  @media print {
    display: none !important;
  }
`

export const FancyH2 = styled(`h2`)`
  position: relative;
  display: inline-block;
  margin: 0 0 10px 0;

  @media print {
    margin: 0 0 10px 0;
  }

  :before {
    content: '';
    width: 90%;
    height: 15px;
    position: absolute;
    left: -10px;
    bottom: -5px;
    background-color: ${monokaiColors.colors['list.focusBackground']};
    opacity: 0.6;
    z-index: -2;
  }
`

export const FancyPrintH1 = styled('h1')`
  display: none;
  position: relative;

  @media print {
    display: block;
  }
`
