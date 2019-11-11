import styled from 'react-emotion'
import monokaiColors from '../../../monokaiColors'

export const FancyH1 = styled('h1')`
  margin: 0;
  margin-bottom: 30px;
  padding: 0;
  padding-left: 10px;
  position: relative;

  @media print {
    display: none !important;
  }
`

export const FancyH2 = styled(`h2`)`
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;

  @media print {
    margin-bottom: 10px;
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
  margin: 0;
  margin-bottom: 30px;
  padding: 0;
  padding-left: 10px;
  position: relative;

  @media print {
    display: block;
  }
`

export const FancyPrintH2 = styled(`h2`)`
  position: relative;
  display: none;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;

  @media print {
    display: inline-block;
    margin-bottom: 10px;
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
