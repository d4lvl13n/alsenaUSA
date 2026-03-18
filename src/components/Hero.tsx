import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden pt-28 pb-0">
      {/* Text content */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center mb-14">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-3 h-3 rounded-full bg-accent-navy" />
          <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
            {t("badge")}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-semibold leading-[1.1] tracking-tight max-w-4xl mx-auto">
          {t("title")}
        </h1>
      </div>

      {/* Video section */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="relative w-full aspect-[16/7] rounded-3xl overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-accent-navy/40" />
          {/* Decorative geometric shapes overlaying the video */}
          <div className="absolute inset-0 flex items-end justify-between p-8 lg:p-12 pointer-events-none">
            <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-30 hidden lg:block">
              <circle cx="60" cy="60" r="55" fill="#ffffff" />
            </svg>
            <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-20 hidden lg:block">
              <polygon points="60,0 120,120 0,120" fill="#ffffff" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
