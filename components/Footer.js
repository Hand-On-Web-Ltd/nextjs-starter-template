export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Your Business Name</h4>
          <p>A one-line summary of what your business does.</p>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Built With</h4>
          <p>
            Template by{' '}
            <a href="https://www.handonweb.com" target="_blank" rel="noopener noreferrer">
              Hand On Web
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Business Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
