import { Component } from 'react';
import { profile } from '../data/portfolio';
export class ErrorBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <main className="section recovery-screen">
        <span className="eyebrow">JOSHUA MABHARANI</span>
        <h1>Let’s reconnect.</h1>
        <p>
          The interactive portfolio couldn’t load. My work and contact details are still a click
          away.
        </p>
        <div className="button-row">
          <a className="button button--primary" href={profile.github}>
            Explore GitHub
          </a>
          <a className="button button--outline" href={profile.cv}>
            Download CV
          </a>
          <a className="button button--outline" href={`mailto:${profile.email}`}>
            Email Joshua
          </a>
          <button className="button button--outline" onClick={() => window.location.reload()}>
            Try again
          </button>
        </div>
      </main>
    );
  }
}
