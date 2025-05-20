import { Metadata } from "next";
import logoImg from "../../../public/logo.png";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

enum MODE {
  DARK = "dark",
  LIGHT = "light",
}

export const siteSeo = {
  title: "Mpesa Safaficom",
  description: `Mpesa Safaficom`,
  logo: logoImg,
  icon: "/favicon.ico",
  mode: MODE.LIGHT,
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteSeo.description
): Metadata => {
  return {
    title: title ? `${title} - Mpesa Safaricom` : siteSeo.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Mpesa Safaricom` : title,
      description,
      siteName: "Mpesa Safaricom",
      locale: "en_US",
      type: "website",
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
};
