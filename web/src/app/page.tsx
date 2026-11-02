"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";

type ModuleId = "phishing" | "account" | "malware" | "network";

type TrainingModule = {
  id: ModuleId;
  number: string;
  title: string;
  description: string;
  accent: string;
};

const modules: TrainingModule[] = [
  {
    id: "phishing",
    number: "01",
    title: "Phishing",
    description:
      "Investigate suspicious messages and separate genuine requests from deception.",
    accent: "#67e8f9",
  },
  {
    id: "account",
    number: "02",
    title: "Account Security",
    description:
      "Recognise suspicious access and practise protecting your digital identity.",
    accent: "#c4b5fd",
  },
  {
    id: "malware",
    number: "03",
    title: "Malware / Ransomware",
    description:
      "Identify warning signs and make decisions that contain a simulated threat.",
    accent: "#fda4af",
  },
  {
    id: "network",
    number: "04",
    title: "Network Security",
    description:
      "Explore connections and defend a network through practical decisions.",
    accent: "#6ee7b7",
  },
];

function ModuleIllustration({ type }: { type: ModuleId }) {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      aria-hidden="true"
      className="module-illustration"
    >
      {/* Shared background details */}
      <ellipse
        cx="140"
        cy="151"
        rx="83"
        ry="16"
        fill="currentColor"
        opacity="0.08"
      />

      <ellipse
        cx="140"
        cy="151"
        rx="102"
        ry="25"
        stroke="currentColor"
        strokeDasharray="4 7"
        opacity="0.22"
      />

      <circle cx="43" cy="48" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="239" cy="110" r="3" fill="currentColor" opacity="0.5" />

      <path
        d="M225 38v12m-6-6h12M47 113v10m-5-5h10"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.45"
      />

      {/* Phishing illustration */}
      {type === "phishing" && (
        <>
          <rect
            x="58"
            y="64"
            width="154"
            height="88"
            rx="14"
            fill="#10243a"
            stroke="currentColor"
            strokeWidth="2"
          />

          <path
            d="m61 72 65 47a16 16 0 0 0 19 0l64-47"
            stroke="currentColor"
            strokeWidth="2"
          />

          <path
            d="m62 145 47-36m99 36-47-36"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.5"
          />

          <path
            d="M171 19v45a17 17 0 0 1-34 0V53l9 8"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle
            cx="211"
            cy="131"
            r="22"
            fill="#10243a"
            stroke="currentColor"
            strokeWidth="2"
          />

          <path
            d="M211 120v12m0 8v1"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </>
      )}

      {/* Account security illustration */}
      {type === "account" && (
        <>
          <rect
            x="57"
            y="43"
            width="124"
            height="106"
            rx="16"
            fill="#1c203b"
            stroke="currentColor"
            strokeWidth="2"
          />

          <circle
            cx="115"
            cy="78"
            r="17"
            stroke="currentColor"
            strokeWidth="2"
          />

          <path
            d="M85 126c0-17 13-28 30-28s30 11 30 28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="m191 71 35 13v29c0 22-18 36-35 43-17-7-35-21-35-43V84Z"
            fill="#1c203b"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          <path
            d="m176 111 10 10 20-23"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {/* Malware and ransomware illustration */}
      {type === "malware" && (
        <>
          <rect
            x="51"
            y="37"
            width="178"
            height="111"
            rx="12"
            fill="#2a1d30"
            stroke="currentColor"
            strokeWidth="2"
          />

          <path
            d="M52 61h176M117 148l-6 15h58l-6-15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          <circle cx="65" cy="49" r="3" fill="currentColor" opacity="0.8" />
          <circle cx="77" cy="49" r="3" fill="currentColor" opacity="0.5" />
          <circle cx="89" cy="49" r="3" fill="currentColor" opacity="0.3" />

          <rect
            x="119"
            y="94"
            width="43"
            height="36"
            rx="7"
            fill="#42263d"
            stroke="currentColor"
            strokeWidth="2"
          />

          <path
            d="M128 94V83a12 12 0 0 1 24 0v11M140 108v9"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M72 83h24m-24 12h16m99 16h19m-14 12h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.45"
          />
        </>
      )}

      {/* Network security illustration */}
      {type === "network" && (
        <>
          <path
            d="m140 87-68-42m68 42 68-42m-68 42-68 49m68-49 68 49"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5 5"
            opacity="0.7"
          />

          {[
            [51, 26],
            [187, 26],
            [51, 119],
            [187, 119],
          ].map(([x, y]) => (
            <g key={`${x}-${y}`}>
              <rect
                x={x}
                y={y}
                width="42"
                height="31"
                rx="6"
                fill="#142d30"
                stroke="currentColor"
                strokeWidth="2"
              />

              <path
                d={`M${x + 21} ${y + 31}v7m-11 0h22`}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          ))}

          <path
            d="m140 55 31 12v25c0 20-16 33-31 40-15-7-31-20-31-40V67Z"
            fill="#142d30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          <path
            d="m127 90 9 9 18-20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(true);

  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside it or pressing Escape.
  useEffect(() => {
    if (!menuOpen) return;

    function handleOutsideClick(event: globalThis.PointerEvent) {
      if (
        event.target instanceof Node &&
        !menuRef.current?.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  function resetGrid() {
    const surface = surfaceRef.current;

    if (!surface) return;

    surface.style.setProperty("--pointer-x", "50%");
    surface.style.setProperty("--pointer-y", "35%");
    surface.style.setProperty("--grid-x", "0px");
    surface.style.setProperty("--grid-y", "0px");
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (
      !motionEnabled ||
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    event.currentTarget.style.setProperty("--pointer-x", `${x}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${y}px`);

    event.currentTarget.style.setProperty(
      "--grid-x",
      `${(x / bounds.width - 0.5) * 18}px`,
    );

    event.currentTarget.style.setProperty(
      "--grid-y",
      `${(y / bounds.height - 0.5) * 12}px`,
    );
  }

  return (
    <div
      ref={surfaceRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetGrid}
      className="simulator-home relative isolate min-h-screen w-full overflow-hidden bg-[#07101e] text-slate-100"
      data-motion={motionEnabled ? "on" : "off"}
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="background-haze" />
        <div className="background-grid" />
        <div className="grid-spotlight" />
        <div className="background-fade" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 sm:px-10">
        {/* Page header */}
        <header className="relative flex items-center justify-center border-b border-white/10 py-7 pr-14 sm:py-9 sm:pl-14">
          <div className="text-center">
            <p className="mb-2 text-[10px] font-semibold tracking-[0.3em] text-cyan-300 sm:text-xs">
              EXPLORE. RECOGNISE. DEFEND.
            </p>

            <h1 className="font-mono text-xl leading-tight font-black tracking-tight uppercase sm:text-3xl lg:text-4xl">
              <span className="text-white">Cybersecurity</span>

              <span className="mt-1 block text-sm font-bold tracking-[0.35em] text-cyan-300 sm:text-lg">
                Simulator
              </span>
            </h1>
          </div>

          {/* Navigation dropdown */}
          <div
            ref={menuRef}
            className="absolute right-0 top-1/2 z-30 -translate-y-1/2"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setMenuOpen(false);
              }
            }}
          >
            <button
              ref={menuButtonRef}
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="homepage-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-cyan-200 transition-colors hover:border-cyan-300/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path d="m6 6 12 12M18 6 6 18" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {menuOpen && (
              <div
                id="homepage-navigation"
                className="absolute right-0 top-14 w-64 rounded-2xl border border-white/15 bg-[#101c2e] p-3 shadow-2xl shadow-black/50"
              >
                <p className="px-3 py-2 text-[10px] font-semibold tracking-[0.2em] text-slate-400">
                  YOUR WORKSPACE
                </p>

                {["Dashboard", "Account", "Settings"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    disabled
                    className="flex w-full cursor-not-allowed items-center justify-between rounded-lg px-3 py-3 text-left text-sm text-slate-400"
                  >
                    {item}

                    <span className="text-[10px] text-slate-500">
                      Coming soon
                    </span>
                  </button>
                ))}

                <div className="mt-2 border-t border-white/10 px-3 pt-4 pb-2">
                  <label className="flex cursor-pointer items-center justify-between gap-3 text-sm text-slate-200">
                    Background animation

                    <input
                      type="checkbox"
                      checked={motionEnabled}
                      onChange={(event) => {
                        setMotionEnabled(event.target.checked);
                        resetGrid();
                      }}
                      className="h-4 w-4 accent-cyan-300"
                    />
                  </label>
                </div>
              </div>
            )}
          </div>
        </header>

        <main className="flex-1 py-9 sm:py-12">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3 sm:mb-10">
            <div>
              <h2 className="text-sm font-medium text-slate-200">
                Your training ground
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Four areas of defence. One place to practise.
              </p>
            </div>

            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-[10px] font-medium tracking-[0.15em] text-cyan-200">
              SIMULATED ENVIRONMENT
            </span>
          </div>

          {/* Training module cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {modules.map((module) => (
              <article
                key={module.id}
                aria-labelledby={`${module.id}-heading`}
                className="module-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101c2e]/80 p-6 sm:p-8"
                style={
                  {
                    "--module-accent": module.accent,
                  } as CSSProperties
                }
              >
                <div
                  aria-hidden="true"
                  className="module-top-line absolute inset-x-8 top-0 h-px"
                />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-slate-500">
                    MODULE / {module.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: module.accent }}
                  />
                </div>

                <h3
                  id={`${module.id}-heading`}
                  className="relative z-10 mt-5 text-center text-xl font-semibold tracking-tight sm:text-2xl"
                >
                  {module.title}
                </h3>

                <div
                  className="illustration-stage relative mx-auto mt-2 flex h-44 w-full max-w-80 items-center justify-center"
                  style={{ color: module.accent }}
                >
                  <div
                    aria-hidden="true"
                    className="illustration-glow absolute h-24 w-40 rounded-full"
                  />

                  <ModuleIllustration type={module.id} />
                </div>

                <p className="mx-auto mt-1 min-h-12 max-w-sm text-center text-sm leading-6 text-slate-400">
                  {module.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs text-slate-500">
                    Interactive training
                  </span>

                  <button
                    type="button"
                    disabled
                    className="cursor-not-allowed rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400"
                  >
                    Coming soon
                  </button>
                </div>
              </article>
            ))}
          </div>
        </main>

        <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 py-5 text-xs text-slate-500">
          <p>A safe space to make mistakes and learn.</p>
          <p>Fictional scenarios. Practical skills.</p>
        </footer>
      </div>

      <style>{`
        .simulator-home {
          --pointer-x: 50%;
          --pointer-y: 35%;
          --grid-x: 0px;
          --grid-y: 0px;
          color-scheme: dark;
        }

        .background-haze {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              ellipse at 15% 15%,
              rgba(8, 145, 178, 0.13),
              transparent 45%
            ),
            radial-gradient(
              ellipse at 85% 55%,
              rgba(99, 102, 241, 0.1),
              transparent 45%
            );
        }

        .background-grid {
          position: absolute;
          inset: -30%;
          background-image:
            linear-gradient(
              rgba(103, 232, 249, 0.09) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(103, 232, 249, 0.09) 1px,
              transparent 1px
            );
          background-size: 54px 54px;
          transform:
            perspective(900px)
            rotateX(24deg)
            translate3d(var(--grid-x), var(--grid-y), 0);
          transform-origin: center 35%;
          transition: transform 180ms ease-out;
        }

        .grid-spotlight {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              rgba(103, 232, 249, 0.35) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(103, 232, 249, 0.35) 1px,
              transparent 1px
            );
          background-size: 54px 54px;
          mask-image: radial-gradient(
            100px circle at var(--pointer-x) var(--pointer-y),
            black 0%,
            rgba(0, 0, 0, 0.65) 30%,
            rgba(0, 0, 0, 0.18) 65%,
            transparent 100%
          );
          -webkit-mask-image: radial-gradient(
            100px circle at var(--pointer-x) var(--pointer-y),
            black 0%,
            rgba(0, 0, 0, 0.65) 30%,
            rgba(0, 0, 0, 0.18) 65%,
            transparent 100%
          );
          opacity: 0.65;
        }

        .background-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(7, 16, 30, 0.1),
            transparent 40%,
            rgba(7, 16, 30, 0.75)
          );
        }

        .module-card {
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.16);
          transition:
            border-color 220ms ease,
            background-color 220ms ease;
        }

        .module-card:hover {
          border-color: var(--module-accent);
          background-color: rgba(16, 28, 46, 0.96);
        }

        .module-top-line {
          background: linear-gradient(
            90deg,
            transparent,
            var(--module-accent),
            transparent
          );
          opacity: 0.7;
        }

        .illustration-glow {
          background: currentColor;
          filter: blur(42px);
          opacity: 0.13;
        }

        .module-illustration {
          position: relative;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 12px 12px rgba(0, 0, 0, 0.3));
        }

        @media (prefers-reduced-motion: no-preference) {
          .simulator-home[data-motion="on"] .module-illustration {
            animation: module-float 6s ease-in-out infinite;
          }

          .module-card:nth-child(2) .module-illustration {
            animation-delay: -1.5s;
          }

          .module-card:nth-child(3) .module-illustration {
            animation-delay: -3s;
          }

          .module-card:nth-child(4) .module-illustration {
            animation-delay: -4.5s;
          }
        }

        @keyframes module-float {
          0%,
          100% {
            transform: translateY(3px);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        .simulator-home[data-motion="off"] .background-grid {
          transform: perspective(900px) rotateX(24deg);
          transition: none;
        }

        .simulator-home[data-motion="off"] .grid-spotlight {
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .background-grid {
            transform: perspective(900px) rotateX(24deg);
            transition: none;
          }

          .grid-spotlight {
            display: none;
          }

          .module-card {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}