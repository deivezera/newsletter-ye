import { MantineThemeOverride } from "@mantine/styles";

export const theme: MantineThemeOverride = {
  colors: {
    brand: [
      "#04092F",
      "#09125D",
      "#0D1B8C",
      "#1224BA",
      "#162DE9",
      "#4456ED",
      "#6A78F1",
      "#949EF5",
      "#BEC4F9",
      "#E8EAFD",
    ],
  },
  primaryShade: 5,
  /** Put your mantine theme override here */
  primaryColor: "brand",
  colorScheme: "light",
};
