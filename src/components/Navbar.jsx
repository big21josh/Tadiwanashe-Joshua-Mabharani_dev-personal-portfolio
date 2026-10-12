import { useEffect, useState } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { profile } from '../data/portfolio';
const items = [
  ['home', 'Home'],
  ['about', 'About'],
  ['work', 'Projects'],
  ['journey', 'Experience'],
  ['toolkit', 'Skills'],
  ['certificates', 'Certificates'],
  ['contact', 'Contact'],
];
let audio;
function blip() {
  try {
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) return;
    audio ||= new Context();
    void audio.resume().catch(() => {});
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.frequency.value = 620;
    gain.gain.setValueAtTime(0.025, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.05);
    oscillator.connect(gain).connect(audio.destination);
    oscillator.start();
    oscillator.stop(audio.currentTime + 0.05);
  } catch {
    /* Audio is optional. */
  }
}
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [date, setDate] = useState(() => new Date());
  const [sound, setSound] = useState(() => {
    try {
      return localStorage.getItem('sfx_enabled') === '1';
    } catch {
      return false;
    }
  });
  useEffect(() => {
    const scroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = items.map(([id]) => document.getElementById(id)).filter(Boolean);
      const current = sections
        .sort((a, b) => b.offsetTop - a.offsetTop)
        .find((section) => section.offsetTop <= window.scrollY + 200);
      if (current) setActive(current.id);
    };
    const key = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const media = window.matchMedia('(min-width: 1001px)');
    const resize = (event) => {
      if (event.matches) setOpen(false);
    };
    scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    document.addEventListener('keydown', key);
    media.addEventListener('change', resize);
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => {
      window.removeEventListener('scroll', scroll);
      document.removeEventListener('keydown', key);
      media.removeEventListener('change', resize);
      clearInterval(timer);
    };
  }, []);
  const links = items.map(([id, label]) => (
    <a
      key={id}
      href={`#${id}`}
      className={active === id ? 'active' : ''}
      aria-current={active === id ? 'location' : undefined}
      onMouseEnter={() => {
        if (sound) blip();
      }}
      onClick={() => {
        setOpen(false);
        if (sound) blip();
      }}
    >
      {label}
    </a>
  ));
  return (
    <header className={`original-navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="restored-status">
        <span>
          <i /> ONLINE <span className="status-divider">|</span> HARARE, ZW
        </span>
        <time>
          {date.toLocaleTimeString('en-GB', { timeZone: 'Africa/Harare', hour12: false })} CAT
        </time>
      </div>
      <div className="restored-menu">
        <div className="restored-inner">
          <a className="restored-brand" href="#home" aria-label={`${profile.name} home`}>
            <i /> TJM
          </a>
          <nav className="restored-desktop" aria-label="Main navigation">
            {links}
          </nav>
          <div className="restored-tools">
            <button
              className={`restored-sound${sound ? ' enabled' : ''}`}
              aria-label={sound ? 'Mute navigation sounds' : 'Enable navigation sounds'}
              aria-pressed={sound}
              onClick={() => {
                const next = !sound;
                setSound(next);
                try {
                  localStorage.setItem('sfx_enabled', next ? '1' : '0');
                } catch {
                  /* Optional preference. */
                }
                if (next) blip();
              }}
            >
              {sound ? <Volume2 size={14} /> : <VolumeX size={14} />}
              <span>{sound ? 'SFX' : 'MUTE'}</span>
            </button>
            <ThemeToggle />
            <button
              className="icon-button restored-mobile-toggle"
              aria-expanded={open}
              aria-controls="restored-mobile-nav"
              aria-label={open ? 'Close navigation' : 'Open navigation'}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      <nav
        id="restored-mobile-nav"
        className="restored-mobile"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links}
      </nav>
    </header>
  );
}
