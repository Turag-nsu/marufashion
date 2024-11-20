import Image, { StaticImageData } from "next/image";
import { Route } from "@/routers/types";
import imageRightPng from "@/images/hero-right.webp";
import imageRightPng2 from "@/images/hero-right-2.webp";
import imageRightPng3 from "@/images/hero-right-3.webp";

interface Hero2DataType {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: Route;
}

export const HERO2_DEMO_DATA: Hero2DataType[] = [
  {
    image: imageRightPng2,
    heading: "মারু ফ্যাশনে স্বাগতম – নতুন ধাঁচের ফ্যাশনের ঠিকানা।",
    subHeading: "Unleash Your Style Revolution ✨",
    btnText: "Discover Now",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "এই সিজনে আপনার স্টাইল খুঁজে নিন, একদম নতুন।",
    subHeading: "Elevate Your Everyday Look 🔥",
    btnText: "Shop Today",
    btnLink: "/",
  },
  {
    image: imageRightPng,
    heading: "মারু ফ্যাশন – যেখানে স্টাইল এবং আভিজাত্যের মেলবন্ধন।",
    subHeading: "Own the Spotlight 👑",
    btnText: "Start Exploring",
    btnLink: "/",
  },
];


