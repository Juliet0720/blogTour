function Footer() {
    return (
      <footer className="footer">
        <div className="container-footer">
          <div className="footer-grid">
            <div className="footer-section">
              
              <h3>Educational Tour</h3> 
                  <p>
                  I documented our educational visits to institutions like BSP, HyTech, LRT2, MMDA, and Subic to highlight real-world industry operations, emerging technologies, and innovations shaping the public and private sectors.
                  </p>
             
            </div>
  
            <div className="footer-section">
  <h3>Connect With Me</h3>

  <div className="social-links">
    <a href="https://github.com/Juliet0720" aria-label="GitHub">
      <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .296c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.385.6.113.793-.258.793-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.613-4.042-1.613-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.107-.775.419-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.475 5.921.43.371.823 1.103.823 2.222 0 1.604-.015 2.896-.015 3.293 0 .321.192.694.801.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12" />
      </svg>
    </a>
    <a href="https://www.facebook.com/juliet.condesaicawalo" aria-label="Facebook">
      <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.675 0h-21.35C.596 0 0 .593 0 1.326v21.348C0 23.408.596 24 1.325 24h11.495v-9.294H9.692V11.09h3.128V8.414c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.617h-3.12V24h6.116C23.404 24 24 23.408 24 22.674V1.326C24 .593 23.404 0 22.675 0z" />
      </svg>
    </a>
    <a href="mailto:juliet.icawalo7@gmail.com" aria-label="Email">
  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 12.713l-11.99-8.713h23.98L12 12.713zM0 4.697v14.606l8-5.807L0 4.697zm16 8.799l8 5.807V4.697l-8 8.799zM14.211 13.588l-2.211 1.607-2.211-1.607-8.789 6.412h21.999l-8.788-6.412z" />
  </svg>
</a>

  
  </div>
</div>

          </div>
  
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Industry Visit Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  