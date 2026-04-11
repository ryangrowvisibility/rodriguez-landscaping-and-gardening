import ScrollReveal from "@/components/ScrollReveal";

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.92 3.37 2 2 0 0 1 3.9 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
function IconStar() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}
function IconLeaf() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  );
}
function IconScissors() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
      <line x1="20" y1="4" x2="8.12" y2="15.88"/>
      <line x1="14.47" y1="14.48" x2="20" y2="20"/>
      <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
  );
}
function IconSun() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}
function IconMapPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
function IconArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

export default function RodriguezPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          background: "oklch(0.97 0.010 130 / 0.94)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid oklch(0.84 0.020 130 / 0.7)",
        }}
        aria-label="Main navigation"
      >
        <div>
          <span
            className="text-base font-bold"
            style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.025 145)" }}
          >
            Rodriguez
          </span>
          <span
            className="text-sm ml-1.5"
            style={{ fontFamily: "var(--font-display)", color: "oklch(0.58 0.025 145)" }}
          >
            Landscaping &amp; Gardening
          </span>
        </div>

        <a
          href="tel:+15599608804"
          className="btn-primary hidden sm:inline-flex"
          style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}
          aria-label="Call Rodriguez Landscaping and Gardening"
        >
          <IconPhone />
          (559) 960-8804
        </a>

        <a
          href="tel:+15599608804"
          className="sm:hidden w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: "oklch(0.38 0.14 148)", color: "oklch(0.97 0.005 130)" }}
          aria-label="Call Rodriguez Landscaping and Gardening"
        >
          <IconPhone />
        </a>
      </nav>

      <main id="main">
        {/* HERO */}
        <section
          className="relative min-h-[100dvh] flex items-center pt-20"
          style={{ background: "oklch(0.97 0.010 130)" }}
          aria-labelledby="hero-heading"
        >
          {/* Organic shape accent */}
          <div
            className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
            style={{
              background: "linear-gradient(180deg, oklch(0.90 0.028 145 / 0.5) 0%, transparent 100%)",
              clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 80%)",
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
            <div className="max-w-2xl">
              <div
                className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-sm font-semibold animate-fade-up"
                style={{
                  background: "oklch(0.38 0.14 148 / 0.10)",
                  color: "oklch(0.32 0.12 148)",
                  fontFamily: "var(--font-display)",
                  border: "1px solid oklch(0.38 0.14 148 / 0.25)",
                }}
              >
                <IconMapPin />
                East Fresno, CA
              </div>

              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-up delay-100"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.025 145)", lineHeight: 1.1 }}
              >
                Fresno Green Spaces
                <span className="block" style={{ color: "oklch(0.38 0.14 148)" }}>
                  Done Right.
                </span>
              </h1>

              <p
                className="text-lg leading-relaxed mb-8 max-w-lg animate-fade-up delay-200"
                style={{ color: "oklch(0.40 0.035 145)" }}
              >
                Local, reliable landscaping and gardening for east Fresno homeowners.
                From regular lawn maintenance to full landscape transformations — your yard,
                cared for with attention to detail.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
                <a
                  href="tel:+15599608804"
                  className="btn-primary"
                  aria-label="Call Rodriguez Landscaping and Gardening"
                >
                  <IconPhone />
                  (559) 960-8804
                </a>
                <a href="#services" className="btn-ghost">
                  Our Services
                </a>
              </div>

              {/* Review badge */}
              <div className="flex items-center gap-3 mt-8 animate-fade-up delay-400">
                <div className="flex gap-0.5" style={{ color: "oklch(0.65 0.12 80)" }}>
                  {[1,2,3,4,5].map(i => <IconStar key={i} />)}
                </div>
                <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.025 145)" }}>5.0</span>
                <span className="text-sm" style={{ color: "oklch(0.58 0.025 145)" }}>5-Star Rated on Google</span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="py-24 px-6"
          style={{ background: "oklch(0.93 0.014 130)", borderTop: "1px solid oklch(0.84 0.020 130)" }}
          aria-labelledby="services-heading"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="mb-14">
                <p
                  className="text-sm font-bold uppercase tracking-widest mb-3"
                  style={{ color: "oklch(0.38 0.14 148)", fontFamily: "var(--font-display)" }}
                >
                  Services
                </p>
                <h2
                  id="services-heading"
                  className="text-3xl sm:text-4xl font-extrabold"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.025 145)" }}
                >
                  Full Landscaping &amp; Gardening Services
                </h2>
                <p className="text-lg mt-3 max-w-xl" style={{ color: "oklch(0.40 0.035 145)" }}>
                  Everything your yard needs, handled by people who care about the details.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: <IconLeaf />,
                  title: "Landscaping",
                  desc: "Full-service residential landscaping including planting, design, pruning, and garden layout. Transform your outdoor space into something you&apos;re proud of.",
                  delay: 1,
                },
                {
                  icon: <IconScissors />,
                  title: "Gardening Maintenance",
                  desc: "Ongoing garden care including weeding, trimming, plant care, and seasonal upkeep. Consistent, reliable visits that keep your garden looking its best.",
                  delay: 2,
                },
                {
                  icon: <IconSun />,
                  title: "Lawn Maintenance",
                  desc: "Regular mowing, edging, and lawn care to keep your yard healthy, neat, and green. Weekly or bi-weekly schedules available.",
                  delay: 3,
                },
              ].map((svc, i) => (
                <ScrollReveal key={i} delay={svc.delay}>
                  <div
                    className="rounded-xl p-7 h-full"
                    style={{
                      background: "oklch(0.97 0.010 130)",
                      border: "1px solid oklch(0.84 0.020 130)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                      style={{ background: "oklch(0.38 0.14 148 / 0.10)", color: "oklch(0.38 0.14 148)" }}
                    >
                      {svc.icon}
                    </div>
                    <h3
                      className="text-lg font-bold mb-3"
                      style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.025 145)" }}
                    >
                      {svc.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "oklch(0.40 0.035 145)" }}
                      dangerouslySetInnerHTML={{ __html: svc.desc }}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-24 px-6" aria-labelledby="why-heading">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <p
                  className="text-sm font-bold uppercase tracking-widest mb-3"
                  style={{ color: "oklch(0.38 0.14 148)", fontFamily: "var(--font-display)" }}
                >
                  Why Choose Rodriguez
                </p>
                <h2
                  id="why-heading"
                  className="text-3xl sm:text-4xl font-extrabold mb-6"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.025 145)" }}
                >
                  Local to East Fresno. Built on Reliability.
                </h2>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: "oklch(0.40 0.035 145)" }}>
                  <p>
                    Rodriguez Landscaping &amp; Gardening is rooted in east Fresno — a local business
                    serving the neighborhoods it knows best. When we show up, we show up consistently.
                  </p>
                  <p>
                    We bring the same care to every job, whether it&apos;s a routine mow or a complete
                    garden transformation. Your yard gets our full attention — no shortcuts.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    "Residential landscaping & gardening",
                    "Regular maintenance schedules",
                    "Planting, pruning & design",
                    "Lawn mowing & edging",
                    "East Fresno — locally owned",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "oklch(0.38 0.14 148 / 0.10)", color: "oklch(0.38 0.14 148)" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <span className="text-sm" style={{ color: "oklch(0.35 0.030 145)", fontFamily: "var(--font-display)", fontWeight: 500 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={2}>
                {/* Review card */}
                <div
                  className="rounded-2xl p-8"
                  style={{
                    background: "oklch(0.93 0.014 130)",
                    border: "1px solid oklch(0.84 0.020 130)",
                  }}
                >
                  <div className="flex gap-0.5 mb-5" style={{ color: "oklch(0.65 0.12 80)" }} aria-label="5 stars">
                    {[1,2,3,4,5].map(i => <IconStar key={i} />)}
                  </div>
                  <p className="text-xl italic leading-relaxed mb-6" style={{ color: "oklch(0.25 0.025 145)" }}>
                    &ldquo;Amazing.&rdquo;
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "oklch(0.38 0.14 148)", fontFamily: "var(--font-display)" }}
                  >
                    Fresno Customer · 5 Stars
                  </p>

                  <div
                    className="mt-8 pt-6"
                    style={{ borderTop: "1px solid oklch(0.84 0.020 130)" }}
                  >
                    <p
                      className="text-sm font-bold mb-3"
                      style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.025 145)" }}
                    >
                      Find us online
                    </p>
                    <div className="flex gap-3">
                      <a
                        href="https://www.instagram.com/rodriguezlandscapingca/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold"
                        style={{
                          background: "oklch(0.97 0.010 130)",
                          border: "1px solid oklch(0.84 0.020 130)",
                          color: "oklch(0.35 0.030 145)",
                          fontFamily: "var(--font-display)",
                          textDecoration: "none",
                        }}
                        aria-label="Rodriguez Landscaping on Instagram"
                      >
                        <IconInstagram />
                        Instagram
                      </a>
                      <a
                        href="https://www.facebook.com/rodriguezlandscapingandgardeningservices/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold"
                        style={{
                          background: "oklch(0.97 0.010 130)",
                          border: "1px solid oklch(0.84 0.020 130)",
                          color: "oklch(0.35 0.030 145)",
                          fontFamily: "var(--font-display)",
                          textDecoration: "none",
                        }}
                        aria-label="Rodriguez Landscaping on Facebook"
                      >
                        <IconFacebook />
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-24 px-6"
          style={{ background: "oklch(0.93 0.014 130)", borderTop: "1px solid oklch(0.84 0.020 130)" }}
          aria-labelledby="contact-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <ScrollReveal>
                <p
                  className="text-sm font-bold uppercase tracking-widest mb-3"
                  style={{ color: "oklch(0.38 0.14 148)", fontFamily: "var(--font-display)" }}
                >
                  Get in Touch
                </p>
                <h2
                  id="contact-heading"
                  className="text-3xl sm:text-4xl font-extrabold mb-6"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.025 145)" }}
                >
                  Ready to transform your yard?
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.40 0.035 145)" }}>
                  Call us to talk about your project — landscaping, garden maintenance, or regular
                  lawn care. We serve east Fresno and surrounding areas.
                </p>

                <div className="space-y-4">
                  <div
                    className="flex items-center gap-4 rounded-xl p-5"
                    style={{ background: "oklch(0.97 0.010 130)", border: "1px solid oklch(0.84 0.020 130)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.38 0.14 148 / 0.10)", color: "oklch(0.38 0.14 148)" }}
                    >
                      <IconPhone />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "oklch(0.58 0.025 145)", fontFamily: "var(--font-display)" }}>
                        Phone
                      </p>
                      <a
                        href="tel:+15599608804"
                        className="text-lg font-bold hover:underline"
                        style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.025 145)" }}
                      >
                        (559) 960-8804
                      </a>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-4 rounded-xl p-5"
                    style={{ background: "oklch(0.97 0.010 130)", border: "1px solid oklch(0.84 0.020 130)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.38 0.14 148 / 0.10)", color: "oklch(0.38 0.14 148)" }}
                    >
                      <IconMapPin />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "oklch(0.58 0.025 145)", fontFamily: "var(--font-display)" }}>
                        Service Area
                      </p>
                      <p className="text-base font-semibold" style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.025 145)" }}>
                        East Fresno, CA &amp; Surrounding
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={2}>
                <div
                  className="rounded-xl p-8"
                  style={{
                    background: "oklch(0.38 0.14 148)",
                    color: "oklch(0.97 0.005 130)",
                  }}
                >
                  <h3
                    className="text-2xl font-extrabold mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Let&apos;s Talk About Your Yard
                  </h3>
                  <p className="text-base leading-relaxed opacity-85 mb-8">
                    Whether you need a one-time cleanup or a regular maintenance schedule,
                    we&apos;re here to help. Give us a call to get started.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+15599608804"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-bold text-base w-full justify-center"
                      style={{
                        background: "oklch(0.97 0.010 130)",
                        color: "oklch(0.38 0.14 148)",
                        fontFamily: "var(--font-display)",
                        textDecoration: "none",
                        transition: "opacity 160ms ease-out, transform 120ms ease-out",
                      }}
                      aria-label="Call Rodriguez Landscaping"
                    >
                      <IconPhone />
                      Call (559) 960-8804
                    </a>
                    <div className="flex gap-3">
                      <a
                        href="https://www.instagram.com/rodriguezlandscapingca/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold"
                        style={{
                          background: "oklch(0.97 0.010 130 / 0.15)",
                          color: "oklch(0.97 0.005 130)",
                          fontFamily: "var(--font-display)",
                          textDecoration: "none",
                          border: "1px solid oklch(0.97 0.010 130 / 0.25)",
                        }}
                        aria-label="Rodriguez Landscaping on Instagram"
                      >
                        <IconInstagram />
                        Instagram
                      </a>
                      <a
                        href="https://www.facebook.com/rodriguezlandscapingandgardeningservices/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold"
                        style={{
                          background: "oklch(0.97 0.010 130 / 0.15)",
                          color: "oklch(0.97 0.005 130)",
                          fontFamily: "var(--font-display)",
                          textDecoration: "none",
                          border: "1px solid oklch(0.97 0.010 130 / 0.25)",
                        }}
                        aria-label="Rodriguez Landscaping on Facebook"
                      >
                        <IconFacebook />
                        Facebook
                      </a>
                    </div>
                  </div>

                  <div
                    className="mt-6 pt-6"
                    style={{ borderTop: "1px solid oklch(0.97 0.010 130 / 0.2)" }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5" style={{ color: "oklch(0.90 0.10 80)" }}>
                        {[1,2,3,4,5].map(i => <IconStar key={i} />)}
                      </div>
                      <span className="text-sm opacity-85">5-Star Rated on Google</span>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Rodriguez%20Landscaping%20%26%20Gardening&query_place_id=ChIJU4Gz_WZelIAR2kBXk_lBVd8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm mt-2 opacity-75 hover:opacity-100"
                      style={{ color: "oklch(0.97 0.005 130)", textDecoration: "underline" }}
                    >
                      See us on Google Maps
                      <IconArrow />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className="py-10 px-6"
        style={{
          background: "oklch(0.22 0.030 145)",
          color: "oklch(0.60 0.020 145)",
        }}
        aria-label="Footer"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <p
              className="font-bold text-base mb-1"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.90 0.012 145)" }}
            >
              Rodriguez Landscaping &amp; Gardening
            </p>
            <p className="text-sm">East Fresno, CA · Serving Fresno and surrounding areas</p>
            <p className="text-xs mt-1" style={{ color: "oklch(0.45 0.018 145)" }}>
              © {new Date().getFullYear()} Rodriguez Landscaping &amp; Gardening. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <a href="tel:+15599608804" className="hover:underline" style={{ color: "oklch(0.60 0.12 145)" }}>
              (559) 960-8804
            </a>
            <a href="https://www.instagram.com/rodriguezlandscapingca/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Instagram
            </a>
            <a href="https://www.facebook.com/rodriguezlandscapingandgardeningservices/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
