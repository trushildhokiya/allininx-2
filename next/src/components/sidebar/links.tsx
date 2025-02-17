import type { IconType } from "react-icons";
import { FaUser } from "react-icons/fa";
import {
  FaDiscord,
  FaFileCode,
  FaGear,
  FaGithub,
  FaHouse,
  FaLinkedin,
  FaQuestion,
  FaXTwitter,
} from "react-icons/fa6";

type LinkMetadata = {
  name: string;
  href: string;
  icon: IconType|string;
  className?: string;
  width?: number;
  height?: number
};

export const PAGE_LINKS: LinkMetadata[] = [
  {
    name: "Home",
    href: "/",
    icon: FaHouse,
  },
  {
    name: "Templates",
    href: "/templates",
    icon: FaFileCode,
    className: "transition-transform group-hover:scale-110",
  },

];

export const SOCIAL_LINKS: LinkMetadata[] = [
  {
    name: "Github",
    href: "https://github.com/Allinix-Labs/Allinix",
    icon: FaGithub,
  },
  // {
  //   name: "DexScreener",
  //   href: "#",
  //   icon: "/dex.png",
  //   width:32,
  //   height:32
  // },
  {
    name: "gitbook",
    href: "https://docs.allinix.ai/",
    icon: "/gitbook.png",
    width:28,
    height:28
  },
  {
    name: "Twitter",
    href: "https://x.com/allinix_ai",
    icon: FaXTwitter,
  },
];
