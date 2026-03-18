import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");
  const o = useTranslations("offices");

  return (
    <footer className="border-t border-foreground">
      {/* Big tagline */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-24">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="text-[clamp(3rem,8vw,8rem)] font-black leading-[0.95] tracking-tighter">
            Your Partner
          </span>
          <span className="text-[clamp(3rem,8vw,8rem)] font-black leading-[0.95] tracking-tighter">
            In
          </span>
          <span className="inline-block w-[clamp(2rem,5vw,5rem)] h-[clamp(2rem,5vw,5rem)] rounded-full bg-accent-navy shrink-0" />
          <span className="text-[clamp(3rem,8vw,8rem)] font-black leading-[0.95] tracking-tighter">
            Digital
          </span>
        </div>
      </div>

      {/* Footer content */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-12">
          {/* Logo + brand */}
          <div className="flex items-center gap-3 mb-10">
            <Image
              src="/AlsenaLogo.png"
              alt="Alsena Group"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="text-xl font-black tracking-tight">ALSENA</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Services */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.15em] text-muted uppercase mb-4">
                {t("servicesTitle")}
              </h4>
              <ul className="space-y-2.5">
                {(["digitalStrategy", "webDevelopment", "seoContent", "socialMedia", "digitalAdvertising"] as const).map((key) => (
                  <li key={key}>
                    <a href="#services" className="text-sm text-foreground hover:text-foreground/60 transition-colors">
                      {t(`services.${key}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Head office */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.15em] text-muted uppercase mb-4">
                {o("headOfficeLabel")}
              </h4>
              <div className="space-y-1 text-sm text-foreground">
                <p className="font-semibold">{o("headOffice.company")}</p>
                <p>{o("headOffice.address")}</p>
                <p>{o("headOffice.city")}, {o("headOffice.country")}</p>
                <p>
                  <a href={`mailto:${o("headOffice.email")}`} className="hover:text-foreground/60 transition-colors">
                    {o("headOffice.email")}
                  </a>
                </p>
              </div>
            </div>

            {/* US Office */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.15em] text-muted uppercase mb-4">
                {o("usOfficeLabel")}
              </h4>
              <div className="space-y-1 text-sm text-foreground">
                <p>{o("usOffice.address")}</p>
                <p>{o("usOffice.city")}</p>
                <p>{o("usOffice.country")}</p>
                <p className="pt-1">{o("usOffice.phone")}</p>
                <p>
                  <a
                    href={`mailto:${o("usOffice.email")}`}
                    className="hover:text-foreground/60 transition-colors"
                  >
                    {o("usOffice.email")}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6">
          <span className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {t("copyright")}
          </span>
        </div>
      </div>
    </footer>
  );
}
