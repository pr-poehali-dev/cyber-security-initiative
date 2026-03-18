import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  const conclusions = [
    { icon: "Eye", text: "Цифровой след оставляет каждый пользователь интернета" },
    { icon: "Database", text: "Данные — это товар: их продают, анализируют, используют против нас" },
    { icon: "ShieldAlert", text: "70% пользователей не знают, как защитить свои данные" },
    { icon: "CheckCircle", text: "Осознанность + простые правила = минимальный риск" },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
                Выводы
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Заключение проекта</p>
            </div>

            <ul className="space-y-4 md:space-y-5">
              {conclusions.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: `${200 + i * 120}ms` }}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground/10 text-foreground/70 mt-0.5">
                    <Icon name={item.icon} size={16} fallback="Info" />
                  </div>
                  <span className="text-sm leading-relaxed text-foreground/85 md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center gap-8">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <blockquote className="border-l-2 border-foreground/30 pl-5">
                <p className="font-sans text-lg font-light italic leading-relaxed text-foreground md:text-2xl">
                  «Интернет помнит всё —<br />думайте, прежде чем публиковать!»
                </p>
              </blockquote>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <p className="font-mono text-xs text-foreground/60 uppercase tracking-widest">Продукт проекта</p>
              <div className="rounded-lg border border-foreground/15 bg-foreground/5 p-4">
                <p className="mb-1 font-sans text-base font-light text-foreground md:text-lg">
                  Буклет-памятка
                </p>
                <p className="text-sm text-foreground/60">
                  «Управление и безопасность цифрового следа» — чек-листы, советы, инструкции для школьников и студентов
                </p>
              </div>
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "650ms" }}
            >
              <p className="mb-4 font-mono text-xs text-foreground/50">
                Спасибо за внимание! Готов ответить на вопросы.
              </p>
              <MagneticButton variant="primary" size="lg" onClick={() => window.scrollTo(0, 0)}>
                К началу
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
