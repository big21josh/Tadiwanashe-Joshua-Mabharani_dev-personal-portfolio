import { Github, Linkedin } from '../components/SocialIcons';
import { useState } from 'react';
import { Copy, Check, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { profile, createEmailHref } from '../data/portfolio';
export function Contact() {
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setMessage('Email address copied.');
    } catch {
      setMessage(`Copy the address manually: ${profile.email}`);
    }
  }
  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.namedItem('name');
    const body = form.elements.namedItem('message');
    name.setCustomValidity(name.value.trim() ? '' : 'Please enter your name.');
    body.setCustomValidity(
      body.value.trim().length >= 10 ? '' : 'Please describe your idea in at least 10 characters.',
    );
    if (!form.reportValidity()) return;
    const data = new FormData(event.currentTarget);
    window.location.href = createEmailHref(Object.fromEntries(data));
    setMessage(
      'Your email app has been requested. Send the message there, or use the email address shown here.',
    );
  }
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="eyebrow">THE NEXT GOOD THING STARTS HERE</div>
      <div className="contact-grid">
        <div className="contact-copy">
          <h2 id="contact-title">
            Have something
            <br />
            in mind?
            <br />
            <span>Let’s build it.</span>
          </h2>
          <p>
            A project, an opportunity, or just a good conversation.
            <br />
            I’d love to hear what you’re thinking.
          </p>
          <div className="email-row">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button className="icon-button" aria-label="Copy email address" onClick={copyEmail}>
              {copied ? <Check size={17} /> : <Copy size={17} />}
            </button>
          </div>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} /> LinkedIn
            </a>
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={submit}
          onInput={(event) => event.target.setCustomValidity?.('')}
        >
          <div className="form-intro">
            <Mail size={18} />
            <span>LET’S TALK ABOUT YOUR IDEA</span>
          </div>
          <label htmlFor="contact-name">
            Your name
            <input
              id="contact-name"
              name="name"
              required
              maxLength={100}
              autoComplete="name"
              placeholder="What should I call you?"
            />
          </label>
          <label htmlFor="contact-email">
            Email address
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              placeholder="you@example.com"
            />
          </label>
          <label htmlFor="contact-message">
            What are you thinking?
            <textarea
              id="contact-message"
              name="message"
              required
              minLength={10}
              maxLength={4000}
              rows={4}
              placeholder="A little about your project or opportunity…"
            />
          </label>
          <Button type="submit">
            Open email draft <ArrowRight size={17} />
          </Button>
          <p className="form-note">
            Opens your email app with a prepared draft. Your message is sent when you send it there.
          </p>
          <p className="form-status" role="status">
            {message}
          </p>
        </form>
      </div>
    </section>
  );
}
