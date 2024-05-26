import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "http://localhost:3000/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
};

export default sitemap;
