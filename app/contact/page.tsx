import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact SemiDeerGuards for fitment questions, bulk orders, or support. Call 1-800-555-1234 or send us a message.',
}

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '60px', paddingBottom: '80px' }}>
      <div className="container-full">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Get in Touch</div>
          <h1 className="text-display">Contact <span className="gradient-text-chrome">Us</span></h1>
          <p className="text-subheading" style={{ maxWidth: '500px', margin: '16px auto 0' }}>
            Have questions about fitment, bulk orders, or installation? Our team of truck guard experts is here to help.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Contact Info */}
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              {[
                { icon: Phone, label: 'Phone', value: '1-800-555-1234', href: 'tel:+18005551234', note: 'Mon–Fri 8am–6pm CST' },
                { icon: Mail, label: 'Email', value: 'sales@semideerguards.com', href: 'mailto:sales@semideerguards.com', note: 'Response within 24 hours' },
                { icon: MapPin, label: 'Address', value: '1234 Industrial Blvd\nOmaha, NE 68102', note: 'Not open to public walk-ins' },
                { icon: Clock, label: 'Hours', value: 'Mon–Fri: 8am–6pm CST', note: 'Closed weekends & holidays' },
              ].map(({ icon: Icon, label, value, href, note }) => (
                <div key={label} style={{ display: 'flex', gap: '16px', minWidth: 0 }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(74,158,255,0.1)', border: '1px solid rgba(74,158,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} color="var(--blue-accent)" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>{label}</p>
                    {href ? (
                      <a href={href} style={{ fontSize: '16px', fontWeight: '600', color: 'var(--chrome)', textDecoration: 'none', overflowWrap: 'break-word', wordBreak: 'break-word' }}>{value}</a>
                    ) : (
                      <p style={{ fontSize: '15px', fontWeight: '600', color: 'var(--chrome)', whiteSpace: 'pre-line', overflowWrap: 'break-word', wordBreak: 'break-word' }}>{value}</p>
                    )}
                    {note && <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>{note}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Why Contact */}
            <div className="glass-card" style={{ padding: '24px', minWidth: 0 }}>
              <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '16px' }}>
                We Can Help With
              </h3>
              {['Fitment verification for your truck', 'Bulk fleet order pricing', 'Custom mounting requirements', 'Installation questions', 'Warranty & return requests'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={14} color="var(--success)" style={{ flexShrink: 0 }} /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card" style={{ padding: 'clamp(20px, 4vw, 36px)', minWidth: 0 }}>
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '24px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '28px' }}>
              Send a Message
            </h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="form-name-row">
                <div>
                  <label htmlFor="first-name" style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '8px' }}>First Name</label>
                  <input id="first-name" type="text" className="input" placeholder="Mike" autoComplete="given-name" />
                </div>
                <div>
                  <label htmlFor="last-name" style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '8px' }}>Last Name</label>
                  <input id="last-name" type="text" className="input" placeholder="Smith" autoComplete="family-name" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-email" style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '8px' }}>Email</label>
                <input id="contact-email" type="email" className="input" placeholder="mike@truckingco.com" autoComplete="email" />
              </div>
              <div>
                <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '8px' }}>Phone (optional)</label>
                <input id="contact-phone" type="tel" className="input" placeholder="(555) 000-0000" autoComplete="tel" />
              </div>
              <div>
                <label htmlFor="truck-model" style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '8px' }}>Your Truck Model</label>
                <input id="truck-model" type="text" className="input" placeholder="e.g. 2022 Volvo VNL 760" />
              </div>
              <div>
                <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '8px' }}>Subject</label>
                <select id="contact-subject" className="input select">
                  <option>Fitment question</option>
                  <option>Fleet / bulk order</option>
                  <option>Installation help</option>
                  <option>Warranty inquiry</option>
                  <option>Return request</option>
                  <option>General question</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '8px' }}>Message</label>
                <textarea id="contact-message" className="input" rows={5} placeholder="Tell us about your truck and what you need..." style={{ resize: 'vertical', minHeight: '120px' }} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', fontSize: '16px', padding: '16px' }} id="contact-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
