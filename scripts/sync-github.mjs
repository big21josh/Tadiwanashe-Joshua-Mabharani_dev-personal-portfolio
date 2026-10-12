import { writeFile } from 'node:fs/promises';
const response = await fetch(
  'https://api.github.com/users/big21josh/repos?per_page=100&sort=updated',
  { headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'joshua-portfolio' } },
);
if (!response.ok)
  throw new Error(`GitHub returned ${response.status}; the existing snapshot is preserved.`);
const repos = await response.json();
if (!Array.isArray(repos) || !repos.length)
  throw new Error('Invalid GitHub response; snapshot preserved.');
const snapshot = {
  checkedAt: new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Harare',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date()),
  repos: repos
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      name: repo.name,
      url: repo.html_url,
      language: repo.language,
      description: repo.description,
      updatedAt: repo.updated_at,
      homepage: repo.homepage,
    })),
};
await writeFile(
  new URL('../src/data/github.json', import.meta.url),
  `${JSON.stringify(snapshot, null, 2)}\n`,
);
console.log(
  `Updated ${snapshot.repos.length} public repositories. Curated case studies are unchanged.`,
);
