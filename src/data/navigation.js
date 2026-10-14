const name = 'Tadiwanashe Joshua Mabharani';
export const sectionMetadata = {
  home: { label: 'Home', title: `Home | ${name}`, description: 'Tadiwanashe Joshua Mabharani is a software developer and product designer in Harare, Zimbabwe. Explore thoughtful React, Next.js, Python and Django projects.' },
  works: { label: 'Works', title: `Works | ${name}`, description: 'Explore Joshua’s web development projects, including Shalom Chigama Portfolio, OAK Foundation, Harare Skate Club, and Muwoni applications.' },
  skills: { label: 'Skills', title: `Skills | ${name}`, description: 'Explore Joshua’s development skills, verified technology stack, product design, networking, and practical technology services.' },
  experience: { label: 'Experience', title: `Experience | ${name}`, description: 'Discover Joshua’s software engineering experience, product design background, and work in technical support, CCTV, and business software.' },
  certificates: { label: 'Certificates', title: `Certificates | ${name}`, description: 'View Joshua’s certificates in software engineering, React, Python, product design, typography, leadership, and UX foundations.' },
  contact: { label: 'Contact', title: `Contact | ${name}`, description: 'Contact Tadiwanashe Joshua Mabharani about software development, product design, projects, and professional opportunities.' },
};
export const navigationItems = ['home', 'works', 'skills', 'experience', 'certificates'].map(id => ({ id, ...sectionMetadata[id] }));
const owners = {
  intro: 'home', 'project-spiral': 'works', work: 'works',
  services: 'skills', toolkit: 'skills', approach: 'experience',
  about: 'experience', journey: 'experience', faqs: 'contact', footer: 'contact',
};
export function resolveSection(id) {
  return owners[id] || (sectionMetadata[id] ? id : 'home');
}
