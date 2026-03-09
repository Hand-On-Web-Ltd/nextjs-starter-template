import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <SEOHead
        title="Your Business Name — What You Do"
        description="A short description of your business for search engines. Keep it under 160 characters."
        url="https://yourdomain.com"
      />

      <main className="main">
        <section className="hero">
          <h1>Welcome to Your Business</h1>
          <p>A short tagline that tells visitors what you do and why they should care.</p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </section>

        <section className="features">
          <div className="feature">
            <h3>🎯 Service One</h3>
            <p>Describe what this service does and how it helps your customers.</p>
          </div>
          <div className="feature">
            <h3>⚡ Service Two</h3>
            <p>Keep descriptions short and focused on the benefit to the customer.</p>
          </div>
          <div className="feature">
            <h3>📊 Service Three</h3>
            <p>Three services is a good starting point. Add or remove as needed.</p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2>Get in Touch</h2>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
