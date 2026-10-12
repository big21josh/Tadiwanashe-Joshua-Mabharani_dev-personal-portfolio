import { useState } from 'react';
import { Search, CornerDownLeft } from 'lucide-react';
import { Dialog } from './Dialog';
import { profile } from '../data/portfolio';
const actions = [
  { label: 'Explore selected work', hint: 'Projects', href: '#project-spiral' },
  { label: 'Get to know Joshua', hint: 'About', href: '#about' },
  { label: 'Experience & credentials', hint: 'Journey', href: '#journey' },
  { label: 'All certificates', hint: 'Credentials', href: '#certificates' },
  { label: 'Start a conversation', hint: 'Contact', href: '#contact' },
  { label: 'Download my CV', hint: 'PDF', href: profile.cv, external: true },
  { label: 'Visit my GitHub', hint: 'Source code', href: profile.github, external: true },
];
export function CommandMenu({ onClose }) {
  const [query, setQuery] = useState('');
  const filtered = actions.filter((action) =>
    `${action.label} ${action.hint}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <Dialog
      title="Quick navigation"
      onClose={onClose}
      className="command-dialog"
      initialFocus="input"
    >
      <div className="command-input">
        <Search size={19} />
        <input
          autoFocus
          aria-label="Search pages and links"
          placeholder="Where would you like to go?"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && filtered[0]) {
              event.preventDefault();
              document.getElementById('command-first')?.click();
            }
          }}
        />
      </div>
      <div className="command-results">
        {filtered.map((action, index) => (
          <a
            id={index === 0 ? 'command-first' : undefined}
            key={action.href}
            href={action.href}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noreferrer' : undefined}
            onClick={onClose}
          >
            <span>
              {action.label}
              <small>{action.hint}</small>
            </span>
          </a>
        ))}
        {!filtered.length && <p className="empty-state">No results. Try “work” or “contact”.</p>}
      </div>
      <div className="command-help">
        <span>
          <CornerDownLeft size={12} /> first result
        </span>
        <span>Tab to navigate · Esc to close</span>
      </div>
    </Dialog>
  );
}
