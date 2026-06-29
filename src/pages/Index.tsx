import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const B = 'https://cdn.poehali.dev/projects/5c0aa1d6-fba8-4491-b743-a96258e3832e/bucket/';
const LOGO = 'https://cdn.poehali.dev/files/957af5f0-c629-450d-83f5-55897994d42a.jpeg';

const PHOTO_REF = B + 'd6dfcf7a-940c-4407-a1ea-2697aee96360.jpeg';

const gallery = [
  { src: B + '19bca214-5a06-43ed-8d96-45f1f7a078c8.jpeg', tag: 'Дуэт' },
  { src: B + 'd3bac9e8-ed61-4dc2-85b0-83eeb46e6eb1.jpeg', tag: 'Место силы' },
  { src: B + '7c973ce3-3680-493a-b7ac-b141dc70b71a.jpeg', tag: 'Байкал' },
  { src: B + 'a4f16e86-7057-4f40-80ed-685b6246d293.jpeg', tag: 'Олень' },
  { src: B + '8cd604de-68b3-4970-b0c6-5763179f7fc8.jpeg', tag: 'Нерпа' },
  { src: B + '7c37fc4b-367f-47c2-b408-0e824ee62216.jpeg', tag: 'Свитшот' },
  { src: B + '03c87a6b-2ae2-444b-8fce-adfaf57a9eac.jpeg', tag: 'Оранж' },
  { src: B + 'a162c6e2-c489-468e-aa4c-e791d1415260.jpeg', tag: 'Худи' },
];

const palette = [
  { name: 'Лесной', hex: '#1F4D3A', use: 'Основной цвет бренда. Логотип, заголовки, крупные блоки.', dark: false },
  { name: 'Ночное небо', hex: '#13202B', use: 'Фон, глубина, премиальность. База тёмных макетов.', dark: false },
  { name: 'Закат', hex: '#E8632A', use: 'Главный акцент. Кнопки, призывы к действию, выделения.', dark: false },
  { name: 'Золото', hex: '#F4B73F', use: 'Тёплый акцент. Иконки, детали, второстепенные акценты.', dark: true },
  { name: 'Байкал', hex: '#2E6CB5', use: 'Холодный акцент. Графика, принты, инфоблоки.', dark: false },
  { name: 'Камень', hex: '#E9E4D8', use: 'Светлый фон и основной текст на тёмном.', dark: true },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={shown ? 'animate-fade-up' : 'opacity-0'}
    >
      {children}
    </div>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-night text-stone font-body overflow-x-hidden">
      {/* HERO */}
      <header className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 grain opacity-[0.15] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full bg-forest/40 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-sunset/20 blur-[120px]" />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-10 animate-fade-up">
            <img src={LOGO} alt="Дух Сибири" className="w-16 h-16 rounded-full object-cover ring-1 ring-stone/20 animate-float" />
            <span className="font-display tracking-[0.3em] text-xs uppercase text-gold">Brand Guidelines</span>
          </div>

          <h1 className="font-display font-700 uppercase leading-[0.92] text-balance animate-fade-up" style={{ animationDelay: '120ms' }}>
            <span className="block text-stone text-6xl md:text-9xl">Дух</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sunset via-gold to-sunset text-6xl md:text-9xl">Сибири</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg md:text-xl text-stone/70 animate-fade-up" style={{ animationDelay: '260ms' }}>
            Одежда для тех, кто живёт движением. Брендбук — единый язык бренда:
            цвет, шрифт и фотография, которые звучат как сибирский простор.
          </p>

          <div className="mt-12 flex flex-wrap gap-6 animate-fade-up" style={{ animationDelay: '400ms' }}>
            {[
              { icon: 'Palette', label: 'Палитра' },
              { icon: 'Type', label: 'Типографика' },
              { icon: 'Camera', label: 'Фотосъёмка' },
            ].map((m) => (
              <div key={m.label} className="flex items-center gap-2 text-sm text-stone/60">
                <Icon name={m.icon} size={18} className="text-gold" />
                {m.label}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone/40 text-xs animate-float">
          <span className="tracking-widest uppercase">Листай</span>
          <Icon name="ChevronDown" size={18} />
        </div>
      </header>

      {/* МАНИФЕСТ / АУДИТОРИЯ */}
      <section className="px-6 md:px-16 py-28 border-t border-stone/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="font-accent text-gold text-3xl mb-4">место силы</p>
            <h2 className="font-display uppercase text-4xl md:text-6xl leading-tight mb-6">
              Для тех, кто <span className="text-sunset">в пути</span>
            </h2>
            <p className="text-stone/70 text-lg leading-relaxed">
              Активные люди 25–45 лет, которые любят природу, путешествия
              и качественную одежду для приключений. Наш характер — честный,
              выносливый, спокойно-уверенный. Без пафоса, с уважением к дикой природе.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: 'Природа', v: 'основа всего' },
                { k: 'Движение', v: 'образ жизни' },
                { k: 'Качество', v: 'без компромиссов' },
                { k: 'Свобода', v: 'каждый день' },
              ].map((c) => (
                <div key={c.k} className="rounded-2xl bg-forest/20 border border-stone/10 p-6 hover:bg-forest/30 transition-colors">
                  <p className="font-display uppercase text-xl text-gold">{c.k}</p>
                  <p className="text-stone/60 text-sm mt-1">{c.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ЛОГОТИП */}
      <section className="px-6 md:px-16 py-28 bg-forest/10 border-y border-stone/10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionLabel n="01" title="Логотип" />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
            <Reveal delay={120}>
              <div className="rounded-3xl bg-stone p-12 flex items-center justify-center">
                <img src={LOGO} alt="Логотип Дух Сибири" className="w-72 h-72 object-contain" />
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="space-y-6">
                {[
                  { icon: 'CheckCircle2', c: 'text-gold', t: 'Свободное поле вокруг логотипа — не меньше высоты буквы «Д».' },
                  { icon: 'CheckCircle2', c: 'text-gold', t: 'Минимальный размер для печати — 20 мм, для экрана — 64 px.' },
                  { icon: 'XCircle', c: 'text-sunset', t: 'Нельзя искажать пропорции, менять цвета и добавлять тени.' },
                  { icon: 'XCircle', c: 'text-sunset', t: 'Не размещать на пёстром фоне без подложки.' },
                ].map((r, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <Icon name={r.icon} size={24} className={r.c + ' shrink-0 mt-0.5'} />
                    <p className="text-stone/80 text-lg">{r.t}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ПАЛИТРА */}
      <section className="px-6 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionLabel n="02" title="Цветовая палитра" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {palette.map((c, i) => (
              <Reveal key={c.hex} delay={i * 80}>
                <div className="group rounded-3xl overflow-hidden border border-stone/10 hover:-translate-y-1 transition-transform">
                  <div className="h-40 flex items-end p-5" style={{ background: c.hex }}>
                    <span className={`font-display uppercase text-2xl ${c.dark ? 'text-night' : 'text-stone'}`}>
                      {c.name}
                    </span>
                  </div>
                  <div className="p-5 bg-forest/15">
                    <div className="flex items-center justify-between mb-3">
                      <code className="text-sm tracking-widest text-gold">{c.hex}</code>
                      <Icon name="Copy" size={16} className="text-stone/40 group-hover:text-stone/80 transition-colors" />
                    </div>
                    <p className="text-stone/65 text-sm leading-relaxed">{c.use}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ТИПОГРАФИКА */}
      <section className="px-6 md:px-16 py-28 bg-forest/10 border-y border-stone/10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionLabel n="03" title="Типографика" />
          </Reveal>
          <div className="space-y-6 mt-12">
            <Reveal>
              <TypeCard
                role="Заголовки"
                font="Oswald"
                note="Плотный, мощный гротеск. Заглавные буквы, широкий трекинг."
                sample="ДИКАЯ ПРИРОДА"
                className="font-display uppercase text-5xl md:text-7xl"
              />
            </Reveal>
            <Reveal delay={120}>
              <TypeCard
                role="Основной текст"
                font="Golos Text"
                note="Чистый и читаемый. Для абзацев, описаний и интерфейса."
                sample="Одежда, которая выдержит любой маршрут — от тайги до вершины."
                className="font-body text-xl md:text-2xl text-stone/80"
              />
            </Reveal>
            <Reveal delay={240}>
              <TypeCard
                role="Акцент"
                font="Caveat"
                note="Рукописный. Слоганы и эмоциональные подписи. Дозированно."
                sample="место силы"
                className="font-accent text-4xl md:text-6xl text-gold"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ФОТОСЪЁМКА */}
      <section className="px-6 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionLabel n="04" title="Фотосъёмка продукции" />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-12 mt-12 items-stretch">
            <Reveal>
              <div className="rounded-3xl overflow-hidden h-full min-h-[420px]">
                <img src={PHOTO_REF} alt="Референс фотосъёмки" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-5">
                {[
                  { icon: 'Sun', t: 'Свет', d: 'Мягкий естественный дневной свет. Утро или «золотой час». Без жёстких вспышек.' },
                  { icon: 'Mountain', t: 'Среда', d: 'Натуральные фактуры: камень, дерево, мох, вода. Природа — главный фон.' },
                  { icon: 'Palette', t: 'Обработка', d: 'Приглушённые землистые тона, тёплый баланс белого. Контраст умеренный, без «кислотности».' },
                  { icon: 'Crop', t: 'Композиция', d: 'Воздух вокруг продукта, диагонали, детали принта крупным планом.' },
                  { icon: 'Ban', t: 'Избегаем', d: 'Глянцевых студийных фонов, неоновых фильтров и пластиковой ретуши.' },
                ].map((r) => (
                  <div key={r.t} className="flex gap-4 rounded-2xl bg-forest/20 border border-stone/10 p-5">
                    <div className="w-11 h-11 rounded-xl bg-sunset/20 flex items-center justify-center shrink-0">
                      <Icon name={r.icon} size={20} className="text-sunset" />
                    </div>
                    <div>
                      <p className="font-display uppercase text-lg text-gold">{r.t}</p>
                      <p className="text-stone/65 text-sm mt-1">{r.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-10">
            {gallery.map((g, i) => (
              <Reveal key={g.src} delay={i * 70}>
                <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[3/4]">
                  <img src={g.src} alt={g.tag} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 font-display uppercase text-xs tracking-widest text-stone bg-night/50 backdrop-blur px-3 py-1 rounded-full">
                    {g.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-16 py-20 border-t border-stone/10 bg-forest/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="Дух Сибири" className="w-12 h-12 rounded-full object-cover" />
            <span className="font-display uppercase tracking-widest text-stone">Дух Сибири</span>
          </div>
          <p className="text-stone/50 text-sm">Брендбук · {new Date().getFullYear()} · место силы</p>
        </div>
      </footer>
    </div>
  );
};

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-5">
      <span className="font-display text-sunset text-2xl">{n}</span>
      <div className="h-px flex-1 max-w-[60px] bg-stone/20" />
      <h2 className="font-display uppercase text-3xl md:text-5xl">{title}</h2>
    </div>
  );
}

function TypeCard({ role, font, note, sample, className }: { role: string; font: string; note: string; sample: string; className: string }) {
  return (
    <div className="rounded-3xl border border-stone/10 bg-night/40 p-8 md:p-10">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <span className="font-display uppercase tracking-widest text-sm text-gold">{role}</span>
        <code className="text-xs text-stone/50 tracking-widest">{font}</code>
      </div>
      <p className={className + ' mb-4 leading-tight'}>{sample}</p>
      <p className="text-stone/50 text-sm">{note}</p>
    </div>
  );
}

export default Index;