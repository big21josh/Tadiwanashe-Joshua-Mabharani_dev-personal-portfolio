import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import {
  projects,
  profile,
  filterProjects,
  createEmailHref,
  certificates,
} from '../src/data/portfolio.js';

test('project search combines categories with case-insensitive technology and title matches', () => {
  assert.equal(filterProjects('All projects').length, 8);
  assert.deepEqual(
    filterProjects('Full stack', '  PYTHON  ').map((project) => project.id),
    ['muwoni', 'todos'],
  );
  assert.deepEqual(
    filterProjects('Frontend', 'skate').map((project) => project.id),
    ['skate'],
  );
  assert.equal(filterProjects('Frontend', 'Django').length, 0);
  assert.equal(filterProjects('All projects', 'no-such-project').length, 0);
});
test('email draft safely encodes multiline and reserved characters', () => {
  const draft = createEmailHref({
    name: '  Alex & Sam  ',
    email: 'alex@example.com',
    message: 'Build a site?\nBudget: #100 & details + ideas',
  });
  const url = new URL(draft);
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, profile.email);
  assert.equal(url.searchParams.get('subject'), 'Portfolio enquiry from Alex & Sam');
  assert.equal(
    url.searchParams.get('body'),
    'Build a site?\nBudget: #100 & details + ideas\n\nFrom: Alex & Sam (alex@example.com)',
  );
});
test('project assets, CV, social card and verification files exist', async () => {
  const assets = [
    ...projects.map((project) => project.image).filter(Boolean),
    profile.cv,
    '/projects/profile.png',
    '/og-image.png',
    '/favicon.svg',
    '/googlecee7df77e2eaa4b2.html',
  ];
  for (const asset of assets) await access(new URL(`../public${asset}`, import.meta.url));
});
test('project destinations are HTTPS and no placeholder links are offered', () => {
  for (const item of [...projects, ...certificates])
    for (const href of [item.live, item.github, item.href].filter(Boolean))
      assert.equal(new URL(href).protocol, 'https:');
  assert.equal(projects.find((project) => project.id === 'skate').github, null);
});
test('SEO has one canonical page, real social image and no fragment sitemap entries', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const sitemap = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
  assert.ok(html.includes('/og-image.png'));
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  assert.equal((sitemap.match(/<loc>/g) || []).length, 1);
  assert.ok(!sitemap.includes('/#'));
});
