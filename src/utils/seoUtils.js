/**
 * SEO Utility Functions for Portfolio
 * Helps manage metadata, structured data, and SEO best practices
 */

// Update document meta tags dynamically
export const updateMetaTags = (config) => {
  const {
    title,
    description,
    keywords,
    image,
    url,
    author,
    canonical
  } = config;

  if (title) {
    document.title = title;
    updateOrCreateMetaTag('og:title', title);
    updateOrCreateMetaTag('twitter:title', title);
  }

  if (description) {
    updateOrCreateMetaTag('description', description);
    updateOrCreateMetaTag('og:description', description);
    updateOrCreateMetaTag('twitter:description', description);
  }

  if (keywords) {
    updateOrCreateMetaTag('keywords', keywords);
  }

  if (image) {
    updateOrCreateMetaTag('og:image', image);
    updateOrCreateMetaTag('twitter:image', image);
  }

  if (url) {
    updateOrCreateMetaTag('og:url', url);
  }

  if (author) {
    updateOrCreateMetaTag('author', author);
  }

  if (canonical) {
    updateOrCreateLink('canonical', canonical);
  }
};

// Helper to update or create meta tags
const updateOrCreateMetaTag = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
  
  if (!tag) {
    tag = document.createElement('meta');
    const isProperty = name.includes(':');
    if (isProperty) {
      tag.setAttribute('property', name);
    } else {
      tag.setAttribute('name', name);
    }
    document.head.appendChild(tag);
  }
  
  tag.setAttribute('content', content);
};

// Helper to update or create link tags
const updateOrCreateLink = (rel, href) => {
  let link = document.querySelector(`link[rel="${rel}"]`);
  
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  
  link.setAttribute('href', href);
};

// Generate structured data for projects
export const generateProjectSchema = (project) => {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": project.image,
    "url": project.link,
    "creator": {
      "@type": "Person",
      "name": "Tadiwanashe Joshua Mabharani"
    },
    "keywords": project.tags.join(", ")
  };
};

// Add breadcrumb schema for navigation
export const generateBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

// Optimize image loading for SEO (lazy loading with proper attributes)
export const optimizeImage = (imagePath, altText) => {
  return {
    src: imagePath,
    alt: altText,
    loading: "lazy",
    decoding: "async"
  };
};

// Generate Open Graph meta tags
export const generateOGTags = (config) => {
  return {
    'og:title': config.title,
    'og:description': config.description,
    'og:image': config.image,
    'og:url': config.url,
    'og:type': config.type || 'website',
    'og:locale': config.locale || 'en_US'
  };
};

// Inject structured data into page head
export const injectStructuredData = (schema) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

// Performance monitoring for Core Web Vitals
export const monitorWebVitals = (callback) => {
  if ('PerformanceObserver' in window) {
    try {
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        callback({
          metric: 'LCP',
          value: lastEntry.renderTime || lastEntry.loadTime,
          element: lastEntry.element?.tagName || 'unknown'
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            callback({
              metric: 'CLS',
              value: entry.value
            });
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // First Input Delay (via Web Vitals library or manual timing)
      document.addEventListener('pointerdown', (e) => {
        const start = performance.now();
        requestAnimationFrame(() => {
          const delay = performance.now() - start;
          if (delay > 100) {
            callback({
              metric: 'FID',
              value: delay
            });
          }
        });
      }, { once: true });
    } catch (error) {
      console.warn('Web Vitals monitoring not fully supported:', error);
    }
  }
};

// Generate XML sitemap (for static generation)
export const generateSitemapEntry = (url, lastmod, changefreq, priority) => {
  return {
    url,
    lastmod,
    changefreq,
    priority
  };
};

// Validate SEO essentials
export const validateSEO = () => {
  const issues = [];

  // Check for title
  if (!document.title || document.title.length < 30) {
    issues.push('Title should be at least 30 characters');
  }

  // Check for meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc || metaDesc.content.length < 120) {
    issues.push('Meta description should be at least 120 characters');
  }

  // Check for h1
  if (document.querySelectorAll('h1').length === 0) {
    issues.push('Page should have at least one H1 heading');
  }

  // Check for images without alt text
  const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
  if (imagesWithoutAlt.length > 0) {
    issues.push(`${imagesWithoutAlt.length} images missing alt text`);
  }

  // Check for canonical tag
  if (!document.querySelector('link[rel="canonical"]')) {
    issues.push('Missing canonical tag');
  }

  return {
    isValid: issues.length === 0,
    issues
  };
};

export default {
  updateMetaTags,
  generateProjectSchema,
  generateBreadcrumbSchema,
  optimizeImage,
  generateOGTags,
  injectStructuredData,
  monitorWebVitals,
  generateSitemapEntry,
  validateSEO
};
