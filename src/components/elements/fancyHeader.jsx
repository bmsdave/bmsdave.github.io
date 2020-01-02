import styled from 'react-emotion'
import monokaiColors from '../../../monokaiColors'

export const FancyH1 = styled('h1')`
  position: relative;
  font-size: 3rem;
  padding: 0 0 30px 10px;
  margin: 0;

  @media print {
    display: none !important;
  }
`

export const FancyH2 = styled(`h2`)`
  position: relative;
  display: inline-block;
  font-size: 1.5rem;
  margin: 20px 0 20px 0;

  @media print {
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
  font-size: 2.5rem;
  padding: 0 0 30px 0;
  margin: 0;

  @media print {
    display: block;
  }
`
