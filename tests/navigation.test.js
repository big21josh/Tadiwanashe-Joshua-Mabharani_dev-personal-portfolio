import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { navigationItems, resolveSection, sectionMetadata } from '../src/data/navigation.js';

test('requested navigation labels have matching section IDs and metadata titles', () => {
  assert.deepEqual(navigationItems.map(item => item.id), ['home', 'works', 'skills', 'experience', 'certificates']);
  for (const item of navigationItems) {
    assert.equal(item.label.toLowerCase(), item.id);
    assert.equal(resolveSection(item.id), item.id);
    assert.ok(item.title.startsWith(`${item.label} | `));
    assert.ok(item.description.length > 50);
  }
});
test('legacy and supporting section links retain their navigation owner', () => {
  for (const [legacy, current] of Object.entries({
    'project-spiral': 'works', work: 'works', services: 'skills',
    toolkit: 'skills', journey: 'experience', about: 'experience', approach: 'experience',
  })) assert.equal(resolveSection(legacy), current);
});
test('initial HTML metadata agrees with Home metadata', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.ok(html.includes(`<title>${sectionMetadata.home.title}</title>`));
  for (const attribute of ['property="og:title"', 'name="twitter:title"']) {
    assert.ok(html.includes(`${attribute} content="${sectionMetadata.home.title}"`));
  }
  assert.equal(html.split(sectionMetadata.home.description).length - 1, 3);
});
