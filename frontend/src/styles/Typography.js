import { createGlobalStyle } from 'styled-components';
import RalewayRegular from '../assets/fonts/Raleway-VariableFont_wght.ttf';
import RalewayItalic from '../assets/fonts/Raleway-Italic-VariableFont_wght.ttf';
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';
import RobotoThin from '../assets/fonts/Roboto-Thin.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Raleway Regular';
    src: url(${RalewayRegular});
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway Italic';
    src: url(${RalewayItalic});
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto Regular';
    src: url(${RobotoRegular});
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto Bold';
    src: url(${RobotoBold});
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto Thin';
    src: url(${RobotoThin});
    font-style: italic;
  }

  html, 
  * {
    font-family: 'Raleway Regular';
    color: #000;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Roboto Bold';
  }
`;

export default Typography;
