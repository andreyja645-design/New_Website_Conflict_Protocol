import { site } from "../site";
import type { Article } from "../data/articles";
import { authorSchema, getAuthorProfile } from "../data/authors";
import { getFieldManualAnswerLead, getFieldManualCategoryLabel, type FieldManualEntry } from "../data/fieldManual";
import type { ScenarioGuide } from "../data/situations";
import { normalizeArticleTitle } from "./articlePresentation";
import { textFreeArticleHeroForArticle } from "./heroImages";

type Faq = {
  question: string;
  answer: string;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: new URL("/assets/cp-logo.webp", site.url).toString()
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: {
      "@id": `${site.url}/#organization`
    },
    about: {
      "@id": `${site.url}/#softwareapplication`
    }
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${site.url}/#softwareapplication`,
    name: "Conflict Protocol",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: site.url,
    image: new URL(site.ogImage, site.url).toString(),
    publisher: {
      "@id": `${site.url}/#organization`
    },
    description:
      "Conflict Protocol is a practical communication resource and AI practice simulator for difficult conversations, boundary scripts, manipulation recognition, and steadier responses.",
    keywords: [
      "difficult conversation scripts",
      "communication techniques",
      "AI practice simulator",
      "difficult conversation simulator",
      "emotional self-defense",
      "conflict pattern recognition",
      "toxic boss training",
      "gaslighting response practice",
      "Grey Rock technique",
      "No JADE technique",
      "Broken Record technique",
      "Boundary Setting",
      "Reframing",
      "Tactical Naming"
    ]
  };
}

export function webPageSchema({
  title,
  description,
  path,
  image,
  imageAlt
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}) {
  const url = new URL(path, site.url).toString();
  const imageUrl = image ? new URL(image, site.url).toString() : "";

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name: title,
    description,
    ...(image
      ? {
          image: {
            "@type": "ImageObject",
            url: imageUrl,
            ...(imageAlt ? { caption: imageAlt } : {})
          },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: imageUrl,
            ...(imageAlt ? { caption: imageAlt } : {})
          }
        }
      : {}),
    isPartOf: {
      "@id": `${site.url}/#website`
    },
    about: {
      "@id": `${site.url}/#softwareapplication`
    }
  };
}

export function articlePageSchema({
  title,
  description,
  path,
  section
}: {
  title: string;
  description: string;
  path: string;
  section: string;
}) {
  const url = new URL(path, site.url).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    articleSection: section,
    educationalUse: "Communication skills training",
    mainEntityOfPage: url,
    author: {
      "@type": "Organization",
      name: "Conflict Protocol Editorial",
      url: site.url
    },
    publisher: {
      "@id": `${site.url}/#organization`
    },
    about: {
      "@id": `${site.url}/#softwareapplication`
    }
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Home", path: "/" },
      ...items
    ].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.url).toString()
    }))
  };
}

export function fieldManualEntrySchema(entry: FieldManualEntry, path: string) {
  const url = new URL(path, site.url).toString();
  const lead = getFieldManualAnswerLead(entry);

  return {
    "@context": "https://schema.org",
    "@type": ["Article", "DefinedTerm"],
    "@id": `${url}#entry`,
    url,
    headline: `${entry.name}: Meaning, Examples, and Response Scripts`,
    name: entry.name,
    description: lead.definition,
    articleSection: entry.category === "technique" ? "Communication Technique" : "Conflict Pattern",
    educationalUse: "Communication skills training",
    keywords: [
      entry.name,
      entry.category === "technique" ? "communication techniques" : "conflict patterns",
      "difficult conversations",
      "boundary scripts",
      "emotional self-defense"
    ].join(", "),
    image: entry.image ? new URL(entry.image, site.url).toString() : undefined,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Conflict Protocol Patterns & Techniques",
      url: new URL("/patterns-and-techniques/", site.url).toString()
    },
    mainEntityOfPage: url,
    publisher: {
      "@id": `${site.url}/#organization`
    },
    author: {
      "@id": `${site.url}/#organization`
    }
  };
}

export function definedTermSetSchema({
  name,
  description,
  path,
  entries
}: {
  name: string;
  description: string;
  path: string;
  entries: FieldManualEntry[];
}) {
  const url = new URL(path, site.url).toString();

  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${url}#defined-term-set`,
    name,
    description,
    url,
    hasDefinedTerm: entries.map((entry) => {
      const entryUrl = new URL(`/patterns-and-techniques/${entry.slug}/`, site.url).toString();
      const lead = getFieldManualAnswerLead(entry);

      return {
        "@type": "DefinedTerm",
        "@id": `${entryUrl}#entry`,
        name: entry.name,
        description: lead.definition,
        termCode: getFieldManualCategoryLabel(entry),
        url: entryUrl
      };
    })
  };
}

export function howToSchema({
  name,
  description,
  path,
  steps
}: {
  name: string;
  description: string;
  path: string;
  steps: string[];
}) {
  const url = new URL(path, site.url).toString();

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#how-to`,
    name,
    description,
    mainEntityOfPage: url,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step
    }))
  };
}

export function faqPageSchema(faqs: readonly Faq[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${new URL(path, site.url).toString()}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function articleSchema(article: Article) {
  const url = new URL(`/articles/${article.slug}/`, site.url).toString();
  const author = getAuthorProfile(article.authorSlug);
  const dateFields = article.source === "hand-authored" && article.updated
    ? {
        datePublished: article.updated,
        dateModified: article.updated
      }
    : {};

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: normalizeArticleTitle(article.title),
    description: article.description,
    ...dateFields,
    mainEntityOfPage: url,
    image: new URL(textFreeArticleHeroForArticle(article), site.url).toString(),
    keywords: article.tags.join(", "),
    author: article.author ? { "@type": "Organization", name: article.author, url: site.url } : authorSchema(author),
    ...(article.editor ? { editor: article.editor } : {}),
    ...(article.sources?.length ? { citation: article.sources.map((source) => source.url) } : {}),
    publisher: {
      "@id": `${site.url}/#organization`
    },
    about: {
      "@id": `${site.url}/#softwareapplication`
    }
  };
}

export function scenarioGuideArticleSchema(guide: ScenarioGuide, image?: string, imageAlt?: string) {
  const url = new URL(`/situations/${guide.slug}/`, site.url).toString();
  const imageUrl = image ? new URL(image, site.url).toString() : "";

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: guide.metaTitle,
    description: guide.description,
    articleSection: "Situation Script",
    educationalUse: "Communication skills training",
    keywords: guide.keywords.join(", "),
    mainEntityOfPage: url,
    ...(image
      ? {
          image: {
            "@type": "ImageObject",
            url: imageUrl,
            ...(imageAlt ? { caption: imageAlt } : {})
          }
        }
      : {}),
    author: {
      "@type": "Organization",
      name: "Conflict Protocol Editorial",
      url: site.url
    },
    publisher: {
      "@id": `${site.url}/#organization`
    },
    about: [
      {
        "@id": `${site.url}/#softwareapplication`
      },
      ...guide.patterns.map((pattern) => ({
        "@type": "Thing",
        name: pattern.label,
        url: new URL(pattern.href, site.url).toString()
      })),
      ...guide.techniques.map((technique) => ({
        "@type": "Thing",
        name: technique.label,
        url: new URL(technique.href, site.url).toString()
      }))
    ]
  };
}
