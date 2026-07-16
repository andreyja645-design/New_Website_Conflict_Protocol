import { absoluteUrl, site } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/assets/cp-logo.webp")
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": `${site.url}/#organization` }
  };
}

export function articleSchema({
  title,
  description,
  path,
  image,
  section
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  section: string;
}) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    articleSection: section,
    educationalUse: "Communication skills training",
    mainEntityOfPage: url,
    ...(image ? { image: absoluteUrl(image) } : {}),
    author: {
      "@type": "Organization",
      name: "Conflict Protocol Editorial",
      url: site.url
    },
    publisher: { "@id": `${site.url}/#organization` }
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
