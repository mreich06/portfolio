import { FontSize } from './values';

export const getFontSize = (small: boolean, medium: boolean, large: boolean, link: boolean, body: boolean) => {
  switch (true) {
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
