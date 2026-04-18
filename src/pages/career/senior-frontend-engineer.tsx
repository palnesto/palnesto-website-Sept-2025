import {
  MapPin,
  Wallet2,
  Layers,
  Paperclip,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import CareerLayout from "../../layouts/CareerLayout";
import { FieldPretty } from "../../components/common/FieldPretty";
export default function SeniorFrontendEngineer() {
  return (
    <CareerLayout>
      <section className="relative bg-white dark:bg-neutral-900 overflow-hidden flex flex-col lg:block h-auto lg:h-[440px]">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop"
          alt="hero"
          className="
        order-2 lg:order-none
        h-[260px] w-full object-cover
        lg:absolute lg:inset-y-0 lg:right-0 lg:z-0 lg:h-full lg:w-[38%]
      "
        />

        <div
          className={[
            "relative lg:absolute inset-0 z-10 text-white bg-neutral-900",
            "px-6 md:px-10 py-8 md:py-10",
            "lg:[clip-path:polygon(0%_0%,66%_0%,76%_50%,66%_100%,0%_100%)]",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-20%,rgba(255,255,255,.08),transparent)]" />

          <div className="relative max-w-2xl">
            <h1 className="text-[28px] md:text-[44px] font-semibold leading-tight">
              Senior Frontend Engineer
            </h1>
            <p className="mt-3 md:mt-4 text-[15px] leading-relaxed text-neutral-300">
              We’re looking for a talented engineer (React + TypeScript) to
              build best-in-class interfaces that are fast, accessible, and
              delightful.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 md:gap-8">
              <button className="h-10 rounded-md bg-sky-600 px-5 text-[14px] font-medium text-white shadow hover:bg-sky-700">
                Apply now
              </button>
              <button className="h-10 rounded-md border border-white/35 px-5 text-[14px] font-medium text-white/95 hover:bg-white/10">
                Recommend
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
              <Chip
                icon={<Layers className="h-4 w-4" />}
                label="Department"
                value="Design / Frontend"
              />
              <Chip
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
                value="Bengaluru (Hybrid) / Remote"
              />
              <Chip
                icon={<Wallet2 className="h-4 w-4" />}
                label="Salary"
                value="₹24L – ₹40L + Benefits"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex flex-col lg:flex-row gap-7 max-w-[90vw] pt-10 pb-20  min-h-screen">
        <article className="max-w-xl 2xl:max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  <Briefcase className="h-5 w-5" />
                </span>
                <div className="text-xs font-semibold tracking-wider text-neutral-500">
                  POSITION
                </div>
              </div>
              <a className="mt-3 inline-block text-[15px] font-medium text-sky-600 hover:underline">
                Senior Frontend Engineer
              </a>
            </div>

            <div className="group rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  <Briefcase className="h-5 w-5" />
                </span>
                <div className="text-xs font-semibold tracking-wider text-neutral-500">
                  EMPLOYMENT
                </div>
              </div>
              <a className="mt-3 inline-block text-[15px] font-medium text-sky-600 hover:underline">
                In-house or remote
              </a>
            </div>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <div className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
            <h3 className="text-xs font-semibold tracking-wider text-neutral-500">
              YOUR MISSION
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-neutral-700 dark:text-neutral-300">
              You’ll collaborate across product, design, and backend to build
              delightful, performant experiences for millions of users. You
              obsess over polish, accessibility, and speed.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <h3 className="text-xs font-semibold tracking-wider text-neutral-500">
              HERE’S HOW YOU’LL BE CONTRIBUTING
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Lead complex React + TypeScript features end-to-end.",
                "Craft cohesive, accessible UI with Tailwind.",
                "Profile and optimize runtime performance.",
                "Design tasteful micro-interactions (Framer Motion).",
                "Mentor teammates; raise the bar on code quality.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-[2px] inline-flex rounded-full bg-emerald-500/10 p-1">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  </span>
                  <span className="text-[15px] leading-7 text-neutral-700 dark:text-neutral-300">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <aside className="lg:-mt-24 h-fit z-20 right-0 rounded-2xl border border-neutral-200 bg-white/95 shadow-[0_20px_45px_rgba(2,6,23,0.08)] backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/95">
          <div className="relative overflow-hidden rounded-t-2xl">
            <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500" />
          </div>

          <div className="px-6 py-5">
            <h3 className="text-[18px] font-semibold">Ready to apply?</h3>
            <p className="mt-1 text-[13px] text-neutral-500">
              Complete the eligibility checklist now and get started with your
              online application
            </p>
          </div>

          <form className="px-6 pb-6 space-y-4">
            <FieldPretty label="Name *" type="text" />
            <FieldPretty label="Email *" type="email" />
            <FieldPretty label="Phone *" type="tel" />

            <div className="text-[13px]">
              <label className="mb-2 block">Upload CV *</label>
              <div
                className="
                group flex items-center justify-between gap-3 rounded-xl border border-dashed
                border-neutral-300 px-4 py-4 text-neutral-600 transition
                hover:border-emerald-400 hover:bg-emerald-50/40 dark:border-neutral-700
                dark:hover:border-emerald-500 dark:hover:bg-emerald-900/10
              "
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-neutral-100 p-2 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    <Paperclip className="h-4 w-4" />
                  </span>
                  <div className="leading-tight">
                    <div className="text-[13px] font-medium">
                      Drop files to attach
                    </div>
                    <div className="text-[12px] text-neutral-400">
                      PDF, DOCX — max 5 MB
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-lg bg-neutral-900 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-neutral-800 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-white"
                >
                  Choose
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="mt-1 w-full rounded-xl bg-emerald-600 py-3 text-[14px] font-semibold text-white shadow hover:bg-emerald-700 active:scale-[0.99]"
            >
              Apply now
            </button>

            <p className="text-center text-[12px] text-neutral-400">
              By applying, you agree to our{" "}
              <a href="/privacy" className="text-emerald-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </aside>
      </section>
    </CareerLayout>
  );
}

function Chip({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[10px] bg-white/5 px-4 py-3">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
        {icon}
      </span>
      <div>
        <div className="text-[12px] text-neutral-400">{label}</div>
        <div className="text-[13px] font-medium text-white">{value}</div>
      </div>
    </div>
  );
}

function Tab({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={[
        "relative py-3",
        active
          ? "text-emerald-600 font-medium after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-emerald-600"
          : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200",
      ].join(" ")}
      type="button"
    >
      {children}
    </button>
  );
}

function KV({
  label,
  value,
  link = false,
}: {
  label: string;
  value: string;
  link?: boolean;
}) {
  return (
    <div>
      <div className="text-[11px] font-semibold tracking-wider text-neutral-500">
        {label}
      </div>
      {link ? (
        <a className="mt-1 inline-block text-[14px] font-medium text-sky-600 hover:underline">
          {value}
        </a>
      ) : (
        <div className="mt-1 text-[14px] font-medium text-neutral-800 dark:text-neutral-100">
          {value}
        </div>
      )}
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10">
      <h3 className="text-[12px] font-semibold tracking-wider text-neutral-500">
        {title}
      </h3>
      <div className="mt-3 text-[15px] leading-[1.75] text-neutral-700 dark:text-neutral-300">
        {children}
      </div>
    </div>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="text-[13px] block">
      {label}
      <input
        type={type}
        className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-[14px] focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-neutral-950 dark:border-neutral-700"
      />
    </label>
  );
}
