import { FontSize, FontWeight } from './values';

export const getFontSize = (
  tiny: boolean,
  small: boolean,
  medium: boolean,
  large: boolean,
  link: boolean,
  body: boolean,
): FontSize => {
  switch (true) {
    case tiny:
      return FontSize.Tiny;
    case small:
      return FontSize.Small;
    case medium:
    default:
      return FontSize.Medium;
    case large:
      return FontSize.Large;
    case link:
      return FontSize.Link;
    case body:
      return FontSize.Body;
  }
};

export const getFontWeight = (light: boolean, bold: boolean): FontWeight => {
  switch (true) {
    case light:
      return FontWeight.Light;
    case bold:
      return FontWeight.Bold;
    default:
      return FontWeight.Normal;
  }
};
