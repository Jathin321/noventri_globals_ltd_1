import type { MetadataRoute } from "next";

const siteUrl = "https://noventrixgloballtd.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
    },
  ];
}
