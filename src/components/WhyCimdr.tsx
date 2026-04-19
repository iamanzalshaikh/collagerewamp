import { GraduationCap, LineChart, Users } from "lucide-react";

const items = [
  {
    step: "01",
    title: "Faculty profile",
    body: "Scholarly, experienced faculty with an average of around 11 years of experience — focused on mentoring and student development.",
    icon: Users,
  },
  {
    step: "02",
    title: "Placements",
    body: "Recruiters include ICICI, Axis, HDFC, D-Mart, E-Clerks, and more. A large share of students secure campus placements; many pursue startups or family enterprises.",
    icon: GraduationCap,
  },
  {
    step: "03",
    title: "Academic excellence",
    body: "Consistent university-level performance — 75+ university rank holders across MBA, BBA, BCA, and DBM to date.",
    icon: LineChart,
  },
];

export default function WhyCimdr() {
  return (
    <section id="why-cimdr" className="section-padding scroll-mt-28 border-b border-[var(--line)] bg-white/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Why CIMDR</p>
          <h2 className="mt-3 text-3xl text-primary sm:text-4xl">Teaching, outcomes, and recognition</h2>
          <p className="mt-4 text-[15px] text-muted">
            A concise snapshot of what students and recruiters value about the institute.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
            <article key={item.step} className="surface-card flex flex-col p-8 transition-colors duration-300 hover:border-primary/12">
              <div className="flex items-start justify-between gap-4">
                <span className="font-[family-name:var(--font-jakarta)] text-3xl font-semibold text-primary/25">
                  {item.step}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-muted text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-jakarta)] text-xl font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
