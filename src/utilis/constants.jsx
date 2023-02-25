import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];
export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "Gaming Headphones",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam corporis facere doloribus quo eos! Recusandae vitae qui expedita perspiciatis nesciunt.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "Wireless Headphones",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam corporis facere doloribus quo eos! Recusandae vitae qui expedita perspiciatis nesciunt.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "Noise Cancelling Headphones",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam corporis facere doloribus quo eos! Recusandae vitae qui expedita perspiciatis nesciunt.",
  },
];
