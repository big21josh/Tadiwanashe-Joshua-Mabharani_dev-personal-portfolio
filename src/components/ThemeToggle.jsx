import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
// Adapted from the GitHub ThemeToggle, with safe storage fallback.
export function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'light' ? '#ffffff' : '#000000');
    setTheme(next);
    try {
      localStorage.setItem('portfolio-theme', next);
    } catch {
      /* In-memory fallback. */
    }
  }
  return (
    <button
      className="icon-button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
