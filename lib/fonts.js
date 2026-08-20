import { Montserrat, Poppins } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const font_variables = `${montserrat.variable} ${poppins.variable}`;
