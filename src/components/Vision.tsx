export default function Vision() {
  return (
    <section className="section-padding border-b border-[var(--line)] bg-white/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Vision &amp; mission</p>
          <h2 className="mt-3 text-3xl text-primary sm:text-4xl">Quality policy</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="surface-card p-8">
            <h3 className="font-[family-name:var(--font-jakarta)] text-xl font-semibold text-primary">Vision</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              To be a distinguished institute aspiring to excel in the field of management education to support ethical and
              modern business practices.
            </p>
          </article>
          <article className="surface-card p-8">
            <h3 className="font-[family-name:var(--font-jakarta)] text-xl font-semibold text-primary">Mission</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              To participate in development by imparting modern and ethical management education to students, executives, and
              others who strive for individual, organisational, and social development.
            </p>
          </article>
          <article className="surface-card p-8">
            <h3 className="font-[family-name:var(--font-jakarta)] text-xl font-semibold text-primary">Quality policy</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              We work as a team of learners and educators, committed to imparting knowledge gained from diverse sources and
              research, so students become effective executives and citizens.
            </p>
          </article>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted">
          We build faculty capability for innovative pedagogy, update curricula with emerging workforce needs, and strengthen
          industry interface so students work on projects that reflect real-time practice.
        </p>
      </div>
    </section>
  );
}
