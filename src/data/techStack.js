import {
  siReact, siNextdotjs, siTypescript, siJavascript, siPython, siDjango,
  siHtml5, siCss, siTailwindcss, siNodedotjs, siSqlite, siPostgresql,
  siSupabase, siGit, siGithub, siGithubactions, siVite, siThreedotjs,
  siGsap, siLucide, siZod, siGunicorn, siEslint, siPrettier, siVercel, siRender,
  siFirebase, siCloudinary,
} from 'simple-icons';

// Verified public-project evidence is recorded in TECH_STACK_SOURCES.md.
// Simple Icons provides the actual brand paths, rendered locally in both themes.
export const techStack = [
  ['React', siReact], ['Next.js', siNextdotjs], ['TypeScript', siTypescript],
  ['JavaScript', siJavascript], ['Python', siPython], ['Django', siDjango],
  ['HTML', siHtml5], ['CSS', siCss], ['Tailwind CSS', siTailwindcss],
  ['Node.js', siNodedotjs], ['SQLite', siSqlite], ['PostgreSQL', siPostgresql],
  ['Supabase', siSupabase], ['Git', siGit], ['GitHub', siGithub],
  ['Firebase', siFirebase], ['Cloudinary', siCloudinary],
  ['GitHub Actions', siGithubactions], ['Vite', siVite], ['Three.js', siThreedotjs],
  ['GSAP', siGsap], ['Lucide', siLucide], ['Zod', siZod], ['Gunicorn', siGunicorn],
  ['ESLint', siEslint], ['Prettier', siPrettier], ['Vercel', siVercel], ['Render', siRender],
].map(([name, icon]) => ({ name, icon }));
