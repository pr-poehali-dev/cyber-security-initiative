import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  const risks = [
    {
      icon: "ShoppingCart",
      title: "Коммерция",
      description: "Таргетированная реклама, динамическое ценообразование, кредитный скоринг",
      stat: "72%",
      statLabel: "компаний продают данные",
      direction: "top",
      color: "text-blue-400",
    },
    {
      icon: "Scale",
      title: "Государство",
      description: "Правоохранительные органы используют данные для раскрытия преступлений и слежки",
      stat: "50+",
      statLabel: "стран законно следят",
      direction: "right",
      color: "text-violet-400",
    },
    {
      icon: "Skull",
      title: "Мошенники",
      description: "Кража личности, фишинг, шантаж, взлом аккаунтов",
      stat: "95%",
      statLabel: "утечек — человеческий фактор",
      direction: "left",
      color: "text-red-400",
    },
    {
      icon: "TrendingUp",
      title: "Статистика угроз",
      description: "Последствия: кража денег, репутационные потери, дискриминация при трудоустройстве",
      stat: "4.5 млрд",
      statLabel: "записей утекло в 2023",
      direction: "bottom",
      color: "text-emerald-400",
    },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Риски
            <br />
            <span className="text-foreground/40">и угрозы</span>
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Как используются ваши данные</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-x-16">
          {risks.map((risk, i) => {
            const getRevealClass = () => {
              if (!isVisible) {
                switch (risk.direction) {
                  case "left": return "-translate-x-16 opacity-0"
                  case "right": return "translate-x-16 opacity-0"
                  case "top": return "-translate-y-16 opacity-0"
                  case "bottom": return "translate-y-16 opacity-0"
                  default: return "translate-y-12 opacity-0"
                }
              }
              return "translate-x-0 translate-y-0 opacity-100"
            }

            return (
              <div
                key={i}
                className={`group flex gap-5 transition-all duration-700 ${getRevealClass()}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="shrink-0">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/10 transition-colors group-hover:bg-foreground/15 ${risk.color}`}>
                    <Icon name={risk.icon} size={18} fallback="AlertCircle" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-baseline gap-3">
                    <h3 className="font-sans text-xl font-light text-foreground md:text-2xl">{risk.title}</h3>
                    <span className={`font-mono text-sm font-medium ${risk.color}`}>{risk.stat}</span>
                  </div>
                  <p className="mb-1 max-w-sm text-sm leading-relaxed text-foreground/70 md:text-base">{risk.description}</p>
                  <p className="font-mono text-xs text-foreground/40">{risk.statLabel}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
