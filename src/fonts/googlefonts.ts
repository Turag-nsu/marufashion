import { Anton, Noto_Sans_Bengali } from "next/font/google";

export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
