import './index.css';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">Aether.</div>
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Features</a>
          <a href="#" className="nav-link">Pricing</a>
          <a href="#" className="nav-link">About</a>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-badge">
          ✨ Welcome to the future of design
        </div>
        
        <h1 className="hero-title">
          Build incredible experiences with <span className="highlight">React</span>
        </h1>
        
        <p className="hero-subtitle">
          Create stunning, performant, and scalable applications with our premium, modern design system powered by React and TypeScript.
        </p>

        <div className="cta-group">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">View Documentation</button>
        </div>

        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">⚡️</div>
            <h3 className="feature-title">Lightning Fast</h3>
            <p className="feature-desc">Optimized for incredible performance and seamless user experiences across all devices.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3 className="feature-title">Beautiful UI</h3>
            <p className="feature-desc">Carefully crafted design tokens, glassmorphism effects, and smooth animations.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3 className="feature-title">Type Safe</h3>
            <p className="feature-desc">Built with strict TypeScript to ensure your codebase remains robust and error-free.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
