"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const reasonKeys = [
  "expertise",
  "results",
  "flexibility",
  "speed",
  "partnership",
] as const;

export default function WhyUs() {
  const t = useTranslations("whyUs");
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: accordion */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-accent-navy" />
              <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                {t("badge")}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-10">
              {t("title")}
            </h2>

            <div className="space-y-0">
              {reasonKeys.map((key, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={key} className="border-b border-border">
                    <button
                      className="w-full flex items-center justify-between py-5 text-left group"
                      onClick={() =>
                        setOpenIndex(isOpen ? -1 : index)
                      }
                    >
                      <span className="text-base font-semibold group-hover:text-foreground/70 transition-colors">
                        {t(`reasons.${key}.title`)}
                      </span>
                      <span className="text-2xl leading-none ml-4 shrink-0">
                        {isOpen ? "\u2212" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pb-5 pr-10">
                        <p className="text-sm text-muted leading-relaxed">
                          {t(`reasons.${key}.description`)}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: decorative image placeholder */}
          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-accent-navy/20 via-accent-blue/20 to-accent-red/20">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Geometric composition */}
                <svg
                  viewBox="0 0 400 500"
                  className="w-full h-full"
                  fill="none"
                >
                  <circle cx="200" cy="180" r="120" fill="#0a0f5c" opacity="0.6" />
                  <path
                    d="M100 350C100 294.8 144.8 250 200 250C255.2 250 300 294.8 300 350H100Z"
                    fill="#3b8beb"
                    opacity="0.7"
                  />
                  <polygon
                    points="200,100 280,240 120,240"
                    fill="#e8503a"
                    opacity="0.5"
                  />
                  <circle cx="280" cy="400" r="60" fill="#f5a623" opacity="0.6" />
                  <path
                    d="M80 380C80 352 103 330 130 330C157 330 180 352 180 380H80Z"
                    fill="#0a0f5c"
                    opacity="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
