import { useTranslations } from "next-intl";

const locationKeys = [
  "brussels",
  "paris",
  "london",
  "amsterdam",
  "luxembourg",
  "miami",
] as const;

export default function Offices() {
  const t = useTranslations("offices");

  return (
    <section className="py-16 border-t border-border">
      {/* Office details */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mb-12">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-3 h-3 rounded-full bg-accent-navy" />
          <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
            {t("badge")}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Head office */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-muted uppercase mb-3">
              {t("headOfficeLabel")}
            </h3>
            <p className="text-lg font-semibold">
              {t("headOffice.city")}, {t("headOffice.country")}
            </p>
          </div>

          {/* United States Office */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-muted uppercase mb-3">
              {t("usOfficeLabel")}
            </h3>
            <div className="space-y-1">
              <p className="text-lg font-semibold">{t("usOffice.address")}</p>
              <p className="text-sm text-muted">{t("usOffice.city")}</p>
              <p className="text-sm text-muted">{t("usOffice.country")}</p>
              <p className="text-sm text-muted mt-2">{t("usOffice.phone")}</p>
              <p className="text-sm text-muted">
                <a
                  href={`mailto:${t("usOffice.email")}`}
                  className="hover:text-foreground transition-colors"
                >
                  {t("usOffice.email")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee-slow w-max">
          {[...locationKeys, ...locationKeys, ...locationKeys, ...locationKeys].map(
            (key, i) => (
              <div
                key={`${key}-${i}`}
                className="flex items-center gap-6 px-8"
              >
                <span className="text-lg font-medium text-foreground whitespace-nowrap">
                  {t(`locations.${key}`)}
                </span>
                <span className="w-2 h-2 rounded-full bg-accent-navy shrink-0" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
