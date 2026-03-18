import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  const activeTypes = [
    {
      number: "01",
      title: "Активный след",
      category: "Вы создаёте его сами",
      items: ["Посты и комментарии", "Загруженные фото и видео", "Лайки и репосты", "Регистрации на сайтах"],
      direction: "left",
    },
    {
      number: "02",
      title: "Пассивный след",
      category: "Собирается без вашего ведома",
      items: ["IP-адрес и геолокация", "История браузера", "Поисковые запросы", "Время и устройство"],
      direction: "right",
    },
    {
      number: "03",
      title: "Кто собирает данные?",
      category: "Основные источники",
      items: ["Социальные сети", "Поисковые системы", "Рекламные трекеры", "Мобильные приложения"],
      direction: "left",
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
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Что такое
            <br />
            <span className="text-foreground/40">цифровой след?</span>
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Определение и типы</p>
        </div>

        <div className="mb-8">
          <p
            className={`max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Цифровой след — совокупность информации о действиях пользователя в интернете.
            Формируется при каждом взаимодействии с цифровой средой.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {activeTypes.map((item, i) => (
            <div
              key={i}
              className={`group border border-foreground/10 rounded-lg p-5 transition-all duration-700 hover:border-foreground/25 hover:bg-foreground/5 ${
                isVisible
                  ? "translate-x-0 translate-y-0 opacity-100"
                  : item.direction === "left"
                  ? "-translate-x-16 opacity-0"
                  : "translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-xs text-foreground/30">{item.number}</span>
                <div className="h-px flex-1 bg-foreground/10 transition-all duration-300 group-hover:bg-foreground/25" />
              </div>
              <h3 className="mb-1 font-sans text-xl font-light text-foreground md:text-2xl">{item.title}</h3>
              <p className="mb-4 font-mono text-xs text-foreground/50">{item.category}</p>
              <ul className="space-y-2">
                {item.items.map((point, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="h-1 w-1 rounded-full bg-foreground/40 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
