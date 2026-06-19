# QA — trafficcontrolinsurance.com

## Build
- `npm run build`: GREEN, 0 errors. 19 routes generated.
- Static: home, about, contact, quote, quote/thank-you, 5 service pages, blog index, robots, sitemap.
- SSG: 3 blog posts via generateStaticParams.

## Quality gates
- Homepage: 10 sections (hero, trust bar, why-different, services grid, what-we-cover, process, stats, testimonials, FAQ, final CTA+form) + CTA band.
- Service pages: 5, each ~900–1100 words of real niche content.
- Blog: 3 MDX posts with frontmatter, rendered via @next/mdx + lightweight prose CSS.
- Forms: quote + contact, Netlify (data-netlify, honeypot), webhook via netlify.toml notifications + __forms.html for detection.
- Images: 8 real 1024x1024 JPEGs in public/images (FLUX.1-schnell), verified with `file`.
- SEO: per-page metadata + canonicals, OG/Twitter, JSON-LD (InsuranceAgency/LocalBusiness/Organization in layout, FAQPage on home, Article on posts), robots.ts, sitemap.ts, llms.txt.
- Design: light/white corporate, navy #1A3A5C + orange #E67E22, Oswald/Open Sans, chevron stripe motif. Distinct from dark sites.
- Motion: motion/react Reveal; Lenis smooth scroll via dynamic-imported provider.

## Notes / fixes applied
- Added src/mdx.d.ts for *.mdx TS module typing.
- Added lightweight .prose CSS instead of @tailwindcss/typography to avoid extra dep.
- LenisProvider dynamic-imported in layout (server component) — no SSR issues.
