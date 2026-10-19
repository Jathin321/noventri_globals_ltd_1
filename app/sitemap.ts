import type { MetadataRoute } from "next";

const siteUrl = "https://noventrixgloballtd.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
    },
  ];
}
