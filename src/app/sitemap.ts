import { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

/** All public routes — add new pages here as the site grows. */
const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/",                              priority: 1.0,  changeFrequency: "monthly"  },
  { path: "/about",                         priority: 0.9,  changeFrequency: "monthly"  },
  { path: "/about/biography",              priority: 0.8,  changeFrequency: "yearly"   },
  { path: "/about/academic-qualifications",priority: 0.8,  changeFrequency: "yearly"   },
  { path: "/about/areas-of-expertise",     priority: 0.8,  changeFrequency: "yearly"   },
  { path: "/about/mission-vision",         priority: 0.7,  changeFrequency: "yearly"   },
  { path: "/about/professional-profile",   priority: 0.8,  changeFrequency: "monthly"  },
  { path: "/academic-journey",             priority: 0.8,  changeFrequency: "monthly"  },
  { path: "/research",                     priority: 0.9,  changeFrequency: "monthly"  },
  { path: "/intellectual-contributions",   priority: 0.9,  changeFrequency: "monthly"  },
  { path: "/recognition",                  priority: 0.8,  changeFrequency: "monthly"  },
  { path: "/contact",                      priority: 0.7,  changeFrequency: "yearly"   },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
