import { useTranslations } from "next-intl";

const serviceKeys = [
  "digitalStrategy",
  "webDevelopment",
  "seoContent",
  "socialMedia",
  "digitalAdvertising",
] as const;

const serviceIcons: Record<string, { colors: string[]; type: string }> = {
  digitalStrategy: {
    colors: ["#3b8beb", "#f5a623"],
    type: "circle-half",
  },
  webDevelopment: {
    colors: ["#f5a623", "#e8503a"],
    type: "arch",
  },
  seoContent: {
    colors: ["#3b8beb", "#0a0f5c"],
    type: "quarter",
  },
  socialMedia: {
    colors: ["#e8503a", "#3b8beb"],
    type: "arrow",
  },
  digitalAdvertising: {
    colors: ["#f5a623", "#e8503a", "#3b8beb"],
    type: "diamond",
  },
};

function ServiceIcon({ serviceKey }: { serviceKey: string }) {
  const icon = serviceIcons[serviceKey];
  if (!icon) return null;

  switch (icon.type) {
    case "circle-half":
      return (
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill={icon.colors[0]} />
          <path d="M24 4C35 4 44 13 44 24H24V4Z" fill={icon.colors[1]} />
        </svg>
      );
    case "arch":
      return (
        <svg width="48" height="48" viewBox="0 0 48 48">
          <path d="M4 40C4 22.3 18.3 8 36 8V40H4Z" fill={icon.colors[0]} />
          <polygon points="20,18 36,28 20,38" fill={icon.colors[1]} />
        </svg>
      );
    case "quarter":
      return (
        <svg width="48" height="48" viewBox="0 0 48 48">
          <path d="M4 4C26 4 44 22 44 44H4V4Z" fill={icon.colors[0]} />
          <circle cx="20" cy="28" r="8" fill={icon.colors[1]} />
        </svg>
      );
    case "arrow":
      return (
        <svg width="48" height="48" viewBox="0 0 48 48">
          <polygon points="4,8 28,24 4,40" fill={icon.colors[0]} />
          <polygon points="20,8 44,24 20,40" fill={icon.colors[1]} />
        </svg>
      );
    case "diamond":
      return (
        <svg width="48" height="48" viewBox="0 0 48 48">
          <polygon points="24,4 44,24 24,44 4,24" fill={icon.colors[0]} />
          <polygon points="24,12 36,24 24,36 12,24" fill={icon.colors[1]} />
          <polygon points="24,18 30,24 24,30 18,24" fill={icon.colors[2]} />
        </svg>
      );
    default:
      return null;
  }
}

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background blob */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[110%] max-w-[1600px] aspect-square bg-accent-navy/10 rounded-full -translate-y-[10%]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-foreground/20" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-2xl mx-auto">
            {t("title")}
          </h2>
        </div>

        {/* Service cards - first row of 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {serviceKeys.slice(0, 3).map((key) => (
            <div
              key={key}
              className="bg-card-bg rounded-2xl p-8 flex flex-col justify-between min-h-[280px] hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="mb-6">
                  <ServiceIcon serviceKey={key} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {t(`${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second row of 2, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {serviceKeys.slice(3).map((key) => (
            <div
              key={key}
              className="bg-card-bg rounded-2xl p-8 flex flex-col justify-between min-h-[280px] hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="mb-6">
                  <ServiceIcon serviceKey={key} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {t(`${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
