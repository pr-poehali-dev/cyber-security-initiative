import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  const protectionRules = [
    { icon: "KeyRound", text: "Уникальные сложные пароли + менеджер паролей" },
    { icon: "ShieldCheck", text: "Двухфакторная аутентификация (2FA)" },
    { icon: "Settings", text: "Настройки приватности в соцсетях" },
    { icon: "MapPinOff", text: "Отключить геолокацию для ненужных приложений" },
    { icon: "Wifi", text: "Использовать VPN и блокировщики трекеров" },
    { icon: "Trash2", text: "Регулярно чистить историю браузера и кэш" },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-4xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-6xl lg:text-7xl">
                Как защитить
                <br />
                <span className="text-foreground/40">себя?</span>
              </h2>
              <p className="font-mono text-sm text-foreground/60">/ Практические методы защиты</p>
            </div>

            <div
              className={`mb-6 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/80 md:text-base">
                Полностью исчезнуть из сети невозможно, но можно значительно минимизировать риски.
                Главное — осознанность и соблюдение простых правил.
              </p>
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(4)}>
                К выводам
              </MagneticButton>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <ul className="space-y-3 md:space-y-4">
              {protectionRules.map((rule, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-4 transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: `${250 + i * 100}ms` }}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground/10 text-foreground/70">
                    <Icon name={rule.icon} size={16} fallback="Check" />
                  </div>
                  <span className="text-sm leading-snug text-foreground/85 md:text-base">{rule.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
