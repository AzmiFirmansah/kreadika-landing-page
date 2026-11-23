import { useRef, useState } from "react";
import logoIcon from "../assets/logo-icon.webp";
import { PETA_JALAN, TANGGAL_PENTING } from "../data/kreadikaData";
import { handleNavClick } from "../utils/navigation";

export function BrandMark({ priority = false }) {
  return (
    <span className="inline-flex items-center gap-3">
      <img
        src={logoIcon}
        alt=""
        aria-hidden="true"
        width="48"
        height="33"
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? undefined : "lazy"}
        decoding="async"
        className="h-8 w-auto shrink-0 sm:h-9"
      />
      <span className="flex flex-col text-left">
        <span className="font-display text-lg font-extrabold tracking-[0.04em] text-white leading-none sm:text-xl">
          KREADIKA
        </span>
        <span className="mt-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-kreadika-mist leading-none">
          Seminar Nasional Pendidikan
        </span>
      </span>
    </span>
  );
}

export function PageHero({
  title,
  description,
  aside,
}) {
  return (
    <section className="home-surface-dark bg-kreadika-950 text-white">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-12 sm:px-6 sm:pt-14 sm:pb-16 lg:px-8 lg:pt-18 lg:pb-20">
        <div
          className={`grid grid-cols-1 gap-8 ${
            aside ? "lg:grid-cols-12 lg:gap-12" : ""
          }`}
        >
          <div className={aside ? "lg:col-span-8" : "max-w-3xl"}>
            <h1
              className="font-display font-extrabold tracking-[-0.03em] text-white"
              style={{
                fontSize: "clamp(2.1rem, 4.8vw, 3.85rem)",
                lineHeight: 1.06,
              }}
            >
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-kreadika-mist sm:text-lg">
                {description}
              </p>
            )}
          </div>

          {aside && (
            <div className="border-t border-white/20 pt-6 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function ClosingBand({
  id,
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  onNavigate,
}) {
  return (
    <section
      id={id}
      className="home-surface-dark border-t border-white/15 bg-kreadika-700 text-white"
    >
      <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            {eyebrow && (
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-kreadika-100">
                {eyebrow}
              </p>
            )}
            <h2
              className="mt-3 font-display font-bold tracking-[-0.02em] text-white"
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                lineHeight: 1.12,
              }}
            >
              {title}
            </h2>
            {description && (
              <p className="mt-3 max-w-xl text-base leading-relaxed text-kreadika-100">
                {description}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-5 lg:justify-end">
            {primaryAction &&
              (primaryAction.disabled ? (
                <button
                  type="button"
                  disabled
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-kreadika-100"
                >
                  {primaryAction.label}
                </button>
              ) : (
                <a
                  href={primaryAction.href}
                  onClick={(e) =>
                    handleNavClick(e, primaryAction.href, onNavigate)
                  }
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-amber-accent px-7 py-3 text-sm font-bold text-kreadika-950 transition-colors duration-200 hover:bg-amber-hover active:scale-[0.99]"
                >
                  {primaryAction.label}
                </a>
              ))}

            {secondaryAction && (
              <a
                href={secondaryAction.href}
                onClick={(e) =>
                  handleNavClick(e, secondaryAction.href, onNavigate)
                }
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/45 bg-transparent px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10 active:scale-[0.99]"
              >
                {secondaryAction.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TimelineBand({
  id = "tanggal-penting",
  heading = "Tanggal Penting KREADIKA 2027",
  showCta = true,
  onNavigate,
}) {
  return (
    <section id={id} className="home-surface-dark bg-kreadika-950 text-white">
      <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 border-b border-white/15 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-amber-accent">
              Agenda dan Lini Masa
            </p>
            <h2
              className="mt-3 font-display font-bold tracking-[-0.02em] text-white"
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                lineHeight: 1.12,
              }}
            >
              {heading}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-kreadika-mist">
            Seluruh batas waktu pengiriman naskah dan pelaksanaan kegiatan
            menggunakan Waktu Indonesia Barat (WIB).
          </p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-0 divide-y divide-white/15 md:grid-cols-2 md:divide-y-0 md:gap-x-8 md:gap-y-8 lg:grid-cols-5 lg:gap-x-6">
          {TANGGAL_PENTING.map((item) => (
            <li
              key={item.step}
              className={`flex flex-col justify-between py-5 md:border-t md:pt-6 md:pb-0 ${
                item.highlight
                  ? "border-amber-accent md:border-t-2"
                  : "border-white/20"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-display text-sm font-extrabold tabular-nums ${
                      item.highlight
                        ? "text-amber-accent"
                        : "text-kreadika-mist"
                    }`}
                  >
                    {item.step}
                  </span>
                  {item.highlight && (
                    <span className="bg-amber-accent px-2 py-0.5 text-[11px] font-bold tracking-wide uppercase text-kreadika-950">
                      {item.tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-base font-bold leading-snug text-white">
                  {item.label}
                </h3>
              </div>

              <p
                className={`mt-4 font-display text-lg font-bold ${
                  item.highlight ? "text-amber-accent" : "text-kreadika-mist"
                }`}
              >
                {item.date}
              </p>
            </li>
          ))}
        </ol>

        {showCta && (
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-7">
            <p className="text-sm text-kreadika-mist">
              Jadwal resmi akan diperbarui di halaman ini segera setelah
              penetapan panitia.
            </p>
            <a
              href="/call-for-papers#kirim"
              onClick={(e) =>
                handleNavClick(e, "/call-for-papers#kirim", onNavigate)
              }
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-amber-accent px-6 py-2.5 text-sm font-bold text-kreadika-950 transition-colors duration-200 hover:bg-amber-hover active:scale-[0.99]"
            >
              Kirim Abstrak
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export function RoadmapSwitcher({
  id = "peta-jalan",
  eyebrow = "Peta Jalan 5 Tahun",
  bgClass = "bg-white",
}) {
  const [activeYearIndex, setActiveYearIndex] = useState(0);
  const tabRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    let nextIndex = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      nextIndex = (index + 1) % PETA_JALAN.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      nextIndex = (index - 1 + PETA_JALAN.length) % PETA_JALAN.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = PETA_JALAN.length - 1;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      setActiveYearIndex(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  const selectedYear = PETA_JALAN[activeYearIndex];

  return (
    <section id={id} className={bgClass}>
      <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-kreadika-700">
              {eyebrow}
            </p>
            <h2
              className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                lineHeight: 1.12,
              }}
            >
              Satu Tema Setiap Tahun, 2027 hingga 2031
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base lg:col-span-5">
            KREADIKA dirancang sebagai rangkaian seminar tahunan dengan tema
            berkesinambungan. Pilih tahun untuk membaca fokus tiap edisi.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Peta jalan tema tahunan KREADIKA 2027 hingga 2031"
          className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-5"
        >
          {PETA_JALAN.map((item, index) => {
            const isSelected = index === activeYearIndex;
            return (
              <button
                key={item.year}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                id={`${id}-tab-${item.year}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`${id}-panel-${item.year}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveYearIndex(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`flex min-h-12 flex-col items-start justify-between border px-4 py-3 text-left transition-colors duration-200 ${
                  isSelected
                    ? "border-kreadika-950 bg-kreadika-950 text-white"
                    : "border-slate-300 bg-white text-kreadika-950 hover:border-kreadika-700 hover:bg-paper"
                }`}
              >
                <span className="font-display text-xl font-extrabold tabular-nums">
                  {item.year}
                </span>
                <span
                  className={`mt-1 text-xs font-semibold ${
                    isSelected ? "text-amber-accent" : "text-slate-700"
                  }`}
                >
                  {item.year === "2027" ? "Tahun ini" : "Rencana"}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id={`${id}-panel-${selectedYear.year}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${selectedYear.year}`}
          className="mt-6 grid grid-cols-1 gap-6 border border-slate-200 bg-paper p-6 sm:p-8 lg:grid-cols-12 lg:items-center"
        >
          <div className="lg:col-span-3">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-terracotta">
              {selectedYear.status}
            </p>
            <p className="mt-1 font-display text-4xl font-extrabold tabular-nums text-kreadika-950 sm:text-5xl">
              {selectedYear.year}
            </p>
          </div>
          <div className="lg:col-span-9">
            <h3 className="font-display text-xl font-bold leading-snug text-kreadika-950 sm:text-2xl">
              {selectedYear.theme}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
              {selectedYear.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
