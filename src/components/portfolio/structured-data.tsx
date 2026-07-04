import { personal, siteUrl, projects, certifications } from "@/lib/portfolio-data";

// JSON-LD structured data — helps Google understand this is a Person with
// specific skills, work history, and credentials. Can unlock rich results
// in Google Search (knowledge panel, person card, etc.).
export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.role,
    description: personal.longPitch,
    url: siteUrl,
    image: `${siteUrl}/android-chrome-512x512.png`,
    email: `mailto:${personal.email}`,
    telephone: personal.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Gujarat",
      addressLocality: "Surat",
    },
    sameAs: [
      personal.linkedin,
      personal.portfolio,
      "https://github.com/Moinnoorani",
    ],
    knowsAbout: [
      "Business Analysis",
      "Enterprise Resource Planning (ERP)",
      "Supply Chain Management",
      "Procurement",
      "Inventory Management",
      "SQL",
      "Power BI",
      "Python",
      "AI Workflows",
      "LLM Integration",
      "Agile / Scrum",
      "Requirements Engineering",
      "UAT",
      "Process Mapping",
      "Gap Analysis",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Veer Narmad South Gujarat University",
      sameAs: "https://vnsgu.ac.in",
    },
    worksFor: {
      "@type": "Organization",
      name: "Codes Technology Pvt. Ltd.",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Business Analyst & AI Solutions Lead",
      occupationalCategory: "13-1111.00", // Management Analysts (BLS)
      skills: "BRD, SRS, User Stories, UAT, SQL, Power BI, Python, AI Workflows, ERP",
    },
    hasCredential: certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.title,
      recognizedBy: {
        "@type": "Organization",
        name: c.issuer,
      },
      dateCreated: c.date,
    })),
    subjectOf: projects.slice(0, 5).map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      description: p.shortDesc,
      url: `${siteUrl}/?view=project&id=${p.slug}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
