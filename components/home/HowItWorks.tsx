import { Search, Package, Wrench, Shield } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: Search,
    title: 'Select Your Truck',
    description: 'Use our fitment checker to find guards made for your exact truck make, model, and year. No universal fits — every guard is engineered for a specific vehicle.',
  },
  {
    number: '02',
    icon: Package,
    title: 'Choose Your Guard',
    description: 'Pick from heavy-duty steel, lightweight aluminum, or CAS-compatible designs. Compare specs, reviews, and pricing to find the right guard for your needs.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Easy Installation',
    description: 'Most guards install in 2–4 hours with basic tools. Detailed video guides and phone support from our expert team ensure a perfect, rattle-free fit.',
  },
  {
    number: '04',
    icon: Shield,
    title: 'Drive Protected',
    description: 'Hit the road with confidence. Our guards absorb wildlife impact before it reaches your radiator, lighting, and frame — backed by a 3-year warranty.',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="section-padding"
      style={{ background: 'var(--bg-base)', position: 'relative', overflow: 'hidden' }}
      aria-label="How It Works"
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '800px', height: '800px',
        background: 'radial-gradient(circle, rgba(74,158,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-full" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Simple Process</div>
          <h2 className="text-display">
            How It <span className="gradient-text-blue">Works</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px', position: 'relative' }}>
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.number} style={{ position: 'relative' }}>
                {/* Connector line (desktop) */}
                {i < STEPS.length - 1 && (
                  <div style={{
                    position: 'absolute', top: '40px', right: '-1px', width: '2px',
                    height: 'calc(100% - 80px)', background: 'linear-gradient(to bottom, var(--blue-accent), transparent)',
                    zIndex: 0, display: 'none',
                  }} className="connector-line" />
                )}

                <div style={{ padding: '32px 28px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  {/* Number */}
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '64px', fontWeight: '900', color: 'var(--border-default)', lineHeight: '1', marginBottom: '-10px', userSelect: 'none' }}>
                    {step.number}
                  </div>

                  {/* Icon Circle */}
                  <div style={{
                    width: '60px', height: '60px', borderRadius: '50%',
                    background: 'rgba(74,158,255,0.1)',
                    border: '2px solid rgba(74,158,255,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px',
                    transition: 'all var(--transition-normal)',
                    boxShadow: 'var(--shadow-glow-blue)',
                  }}>
                    <Icon size={24} color="var(--blue-accent)" />
                  </div>

                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '22px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '12px', letterSpacing: '0.02em' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75', maxWidth: '220px', margin: '0 auto' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
