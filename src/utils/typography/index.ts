import {
  SizeDisplayType,
  SizeHeadingType,
  SizeTextType,
} from "@styles/typography";

import {
  FONT_SIZE_DISPLAY,
  FONT_SIZE_HEADING,
  FONT_SIZE_TEXT,
} from "@themes/default";

// DISPLAY
function getSizeDisplay(size?: SizeDisplayType) {
  switch (size) {
    case "1":
      return FONT_SIZE_DISPLAY[1];
    default:
      return FONT_SIZE_DISPLAY[1];
  }
}

// HEADING

function getSizeHeading(size?: SizeHeadingType) {
  switch (size) {
    case "1":
      return FONT_SIZE_HEADING[1];
    case "2":
      return FONT_SIZE_HEADING[2];
    case "3":
      return FONT_SIZE_HEADING[3];
    default:
      return FONT_SIZE_HEADING[1];
  }
}

// TEXT
function getSizeText(size?: SizeTextType) {
  switch (size) {
    case "1":
      return FONT_SIZE_TEXT[1];
    case "2":
      return FONT_SIZE_TEXT[2];
    case "3":
      return FONT_SIZE_TEXT[3];
    case "4":
      return FONT_SIZE_TEXT[4];
    case "5":
      return FONT_SIZE_TEXT[5];
    case "6":
      return FONT_SIZE_TEXT[6];
    case "7":
      return FONT_SIZE_TEXT[7];
    case "8":
      return FONT_SIZE_TEXT[8];
    case "9":
      return FONT_SIZE_TEXT[9];
    case "10":
      return FONT_SIZE_TEXT[10];

    default:
      return FONT_SIZE_TEXT[1];
  }
}

function getLineHeight(size?: SizeTextType) {
  if (!size) return "";

  return `calc(1.6 * ${FONT_SIZE_TEXT[size]})`;
}

export { getSizeDisplay, getSizeHeading, getSizeText, getLineHeight };
