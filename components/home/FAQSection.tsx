'use client'

import { useState } from 'react'
import { ChevronDown, Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    question: 'Will a deer guard fit my truck\'s collision avoidance system (CAS)?',
    answer: 'Yes — all our guards are engineered to be CAS-compatible. We specifically design openings and mounting positions to preserve radar and camera sight lines for systems like Bendix Fusion, Mobileye Shield+, and Volvo Active Driver Assist. Each product page lists specific CAS compatibility.',
    category: 'Compatibility',
  },
  {
    question: 'How long does installation take?',
    answer: 'Most guards can be installed in 2–4 hours with basic hand tools. We provide detailed installation guides with every purchase, and our technical team is available by phone if you run into questions.',
    category: 'Installation',
  },
  {
    question: 'What is your shipping policy for deer guards?',
    answer: 'We offer free freight shipping on orders over $500. Guards are palletized and shipped via LTL freight to protect them during transit. Most in-stock orders ship within 2 business days. You will receive tracking information via email.',
    category: 'Shipping',
  },
  {
    question: 'What does the 3-year warranty cover?',
    answer: 'Our warranty covers defects in materials and workmanship for 3 years from the date of purchase. This includes structural failures, coating peeling, and mounting bracket failures. Normal wear, cosmetic scratches from use, and wildlife impact damage are not covered (that\'s what the guard is for!).',
    category: 'Warranty',
  },
  {
    question: 'What is the difference between steel and aluminum guards?',
    answer: 'Steel guards offer maximum impact protection and are ideal for highway and extreme-duty use. Aluminum guards are lighter (reducing fuel costs slightly) and corrosion-resistant, making them great for fleet operators in wetter climates. Both materials meet our heavy-duty standards.',
    category: 'General',
  },
  {
    question: 'Can I return a guard if it doesn\'t fit?',
    answer: 'Yes. We accept returns within 30 days of delivery on uninstalled guards in original condition. Please use our fitment checker tool before ordering to ensure compatibility. Shipping costs for returns are the buyer\'s responsibility unless the error was ours.',
    category: 'General',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section-padding" aria-label="Frequently Asked Questions">
      <div className="container-full">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '64px', alignItems: 'start' }}>
          {/* Left */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div className="section-label">Got Questions?</div>
            <h2 className="text-display" style={{ marginBottom: '20px' }}>
              FAQ
            </h2>
            <p className="text-subheading" style={{ marginBottom: '32px' }}>
              Everything you need to know about our deer guards, shipping, and installation.
            </p>
            <a href="/contact" className="btn btn-outline" style={{ display: 'inline-flex' }}>
              Ask Our Experts
            </a>
          </div>

          {/* Accordion */}
          <div>
            {FAQS.map((faq, i) => (
              <div key={faq.question} className="accordion-item">
                <button
                  id={`faq-${i}`}
                  className="accordion-trigger"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span style={{ paddingRight: '16px', fontWeight: '600', fontSize: '15px' }}>
                    {faq.question}
                  </span>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                    background: open === i ? 'rgba(74,158,255,0.15)' : 'var(--bg-elevated)',
                    border: `1px solid ${open === i ? 'rgba(74,158,255,0.4)' : 'var(--border-default)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all var(--transition-fast)',
                  }}>
                    {open === i
                      ? <Minus size={14} color="var(--blue-accent)" />
                      : <Plus size={14} color="var(--text-muted)" />
                    }
                  </div>
                </button>
                <div
                  className="accordion-content"
                  style={{
                    maxHeight: open === i ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}
                >
                  <div style={{ paddingBottom: '20px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.75' }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section[aria-label="Frequently Asked Questions"] > div > div {
            grid-template-columns: 1fr !important;
          }
          section[aria-label="Frequently Asked Questions"] > div > div > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  )
}
