import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const B = 'https://cdn.poehali.dev/projects/5c0aa1d6-fba8-4491-b743-a96258e3832e/bucket/';
const LOGO = 'https://cdn.poehali.dev/files/957af5f0-c629-450d-83f5-55897994d42a.jpeg';

const BAIKAL_BG = B + 'a37a3915-0b6c-4dc2-9ee1-05750d4527d0.jpeg';
const SHIRT_BAIKAL = B + 'd0c48248-62bc-4647-89da-d8cfc9f130eb.jpeg';

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

const baikal = [
  { src: B + '7b6a7772-ec9c-4c64-acbe-b6a9760767ba.jpeg', tag: 'Место силы', size: 'tall' },
  { src: B + '46d0d8b6-c37a-48d4-8330-0708491482a2.jpeg', tag: 'Чёрная', size: 'normal' },
  { src: B + 'd214b63b-20f7-43d2-aca5-90c31ffbb074.jpeg', tag: 'Женская', size: 'normal' },
  { src: B + '84dadf4f-8368-4e53-bfe6-3e2e1d408523.jpeg', tag: 'Нерпа', size: 'tall' },
  { src: B + 'ddd877c6-0059-4eef-9539-509bda02c343.jpeg', tag: 'Синяя', size: 'normal' },
  { src: B + 'feab33b1-1bda-4875-93e5-3a8f52380a50.jpeg', tag: 'Медведь', size: 'normal' },
  { src: B + 'adbab531-511b-4e6c-b1d8-da62c2809f5b.jpeg', tag: 'Закат', size: 'tall' },
  { src: B + 'd7457ee6-54a2-463f-a3cf-a4bd96b99bfd.jpeg', tag: 'Беж', size: 'normal' },
  { src: B + '13cf4dab-305c-4a16-bed6-8c9231d1306a.jpeg', tag: 'Спина', size: 'normal' },
];

const palette = [
  { name: 'Лесной', hex: '#1F4D3A', use: 'Основной цвет бренда. Логотип, заголовки, крупные блоки.', dark: false },
  { name: 'Ночное небо', hex: '#13202B', use: 'Фон, глубина, премиальность. База тёмных макетов.', dark: false },
  { name: 'Закат', hex: '#E8632A', use: 'Главный акцент. Кнопки, призывы к действию, выделения.', dark: false },
  { name: 'Золото', hex: '#F4B73F', use: 'Тёплый акцент. Иконки, детали, второстепенные акценты.', dark: true },
  { name: 'Байкал', hex: '#2E6CB5', use: 'Холодный акцент. Графика, принты, инфоблоки.', dark: false },
  { name: 'Камень', hex: '#E9E4D8', use: 'Светлый фон и основной текст на тёмном.', dark: true },
];

const paletteAltai = [
  { name: 'Катунь', hex: '#3BBFA3', use: 'Бирюза вод Катуни. Акцент коллекции Алтай, принты и детали.', dark: true },
  { name: 'Маральник', hex: '#C0306A', use: 'Малиновый цвет цветения маральника. Яркий сезонный акцент.', dark: false },
  { name: 'Белуха', hex: '#A8C8E8', use: 'Голубой ледников Белухи. Холодный, чистый, воздушный тон.', dark: true },
  { name: 'Душа Алтая', hex: '#F5F0E8', use: 'Белый — душа Алтая. Чистота, свет, простор горных вершин.', dark: true },
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

          {/* Байкал */}
          <Reveal delay={80}>
            <div className="flex items-center gap-5 mt-12 mb-8">
              <span className="font-accent text-gold text-xl">Байкал</span>
              <div className="h-px flex-1 bg-stone/10" />
              <p className="text-stone/40 text-xs uppercase tracking-widest">Основная палитра</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {/* Алтай */}
          <Reveal delay={80}>
            <div className="flex items-center gap-5 mt-16 mb-8">
              <span className="font-accent text-gold text-xl">Алтай</span>
              <div className="h-px flex-1 bg-stone/10" />
              <p className="text-stone/40 text-xs uppercase tracking-widest">Алтайская палитра</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paletteAltai.map((c, i) => (
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
          {/* Герой-кадр раздела — Байкал + продукт */}
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden mt-12 h-[480px] md:h-[560px]">
              <img src={BAIKAL_BG} alt="Алтай" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-night/75 via-night/30 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-8 md:px-14 flex flex-col md:flex-row items-center md:items-end gap-8 w-full">
                  <div className="flex-1">
                    <p className="font-accent text-2xl mb-2" style={{ color: '#3BBFA3' }}>Белуха · Алтай</p>
                    <h3 className="font-display uppercase text-3xl md:text-5xl leading-tight mb-4">
                      Горы — <br/>лучший фон
                    </h3>
                    <p className="text-stone/75 max-w-sm text-base">
                      Алтай — место силы. Принты рождаются здесь, среди ледников
                      Белухи и вечных хребтов.
                    </p>
                  </div>
                  <div className="w-56 md:w-72 shrink-0">
                    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-night/80 relative">
                      <img src={SHIRT_BAIKAL} alt="Футболка Алтай" className="w-full h-auto object-cover" style={{ filter: 'hue-rotate(180deg) saturate(0.6) brightness(0.95)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {[
                { icon: 'Sun', t: 'Свет', d: 'Мягкий естественный дневной свет. Утро или «золотой час». Без жёстких вспышек.' },
                { icon: 'Mountain', t: 'Среда', d: 'Натуральные фактуры: камень, дерево, мох, вода. Природа — главный фон.' },
                { icon: 'Palette', t: 'Обработка', d: 'Приглушённые землистые тона, тёплый баланс белого. Без «кислотности».' },
                { icon: 'Crop', t: 'Композиция', d: 'Воздух вокруг продукта, диагонали, детали принта крупным планом.' },
                { icon: 'Focus', t: 'Акцент', d: 'Фирменный принт — всегда читаемым. Глубина резкости подчёркивает детали.' },
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

      {/* КОЛЛЕКЦИЯ БАЙКАЛ */}
      <section className="px-6 md:px-16 py-28 bg-forest/10 border-t border-stone/10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionLabel n="05" title="Коллекция Байкал" />
            <p className="text-stone/60 mt-4 max-w-xl text-base">
              Одежда, вдохновлённая природой Байкала. Каждая деталь — принт, нашивка, 
              лента тесьмы — несёт в себе образ самого глубокого озера планеты.
            </p>
          </Reveal>

          {/* Главные акценты — 3 больших кадра */}
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {[
              { src: B + 'bb9f5918-a5c8-4704-8c55-4e8ca01f06eb.jpeg', tag: 'Оранжевая', accent: '#E8632A', desc: 'Яркий акцент сезона' },
              { src: B + 'feab33b1-1bda-4875-93e5-3a8f52380a50.jpeg', tag: 'Медведь', accent: '#13202B', desc: 'Суровый характер' },
              { src: B + '84dadf4f-8368-4e53-bfe6-3e2e1d408523.jpeg', tag: 'Нерпа', accent: '#2E6CB5', desc: 'Символ Байкала' },
            ].map((item, i) => (
              <Reveal key={item.src} delay={i * 100}>
                <div className="group relative rounded-3xl overflow-hidden aspect-[3/4]">
                  <img src={item.src} alt={item.tag} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-8 h-1 rounded-full mb-3" style={{ background: item.accent }} />
                    <p className="font-display uppercase text-2xl">{item.tag}</p>
                    <p className="text-stone/60 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Детали и нашивки */}
          <Reveal>
            <div className="flex items-center gap-5 mt-16 mb-8">
              <span className="font-accent text-gold text-2xl">детали</span>
              <div className="h-px flex-1 bg-stone/10" />
              <p className="text-stone/50 text-sm uppercase tracking-widest">Знак качества</p>
            </div>
          </Reveal>

          {/* Мозаика — разные форматы */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Строка 1: tall + normal + normal + tall */}
            <Reveal delay={0}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[2/3]">
                <img src={B + '7b6a7772-ec9c-4c64-acbe-b6a9760767ba.jpeg'} alt="Место силы" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-night/80 to-transparent" />
                <span className="absolute bottom-3 left-3 font-display uppercase text-xs tracking-widest text-stone/90">Место силы</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="flex flex-col gap-4 h-full">
                <div className="group relative rounded-2xl overflow-hidden flex-1">
                  <img src={B + 'd214b63b-20f7-43d2-aca5-90c31ffbb074.jpeg'} alt="Женская" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent" />
                  <span className="absolute bottom-2 left-3 font-display uppercase text-xs tracking-widest text-stone/90">Женская</span>
                </div>
                <div className="group relative rounded-2xl overflow-hidden flex-1">
                  <img src={B + 'e1ad71fc-28e0-489e-b05f-ebdfcfe9d34d.jpeg'} alt="Спина" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent" />
                  <span className="absolute bottom-2 left-3 font-display uppercase text-xs tracking-widest text-stone/90">Нашивка</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="flex flex-col gap-4 h-full">
                <div className="group relative rounded-2xl overflow-hidden flex-1">
                  <img src={B + 'ddd877c6-0059-4eef-9539-509bda02c343.jpeg'} alt="Синяя" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent" />
                  <span className="absolute bottom-2 left-3 font-display uppercase text-xs tracking-widest text-stone/90">Синяя</span>
                </div>
                <div className="group relative rounded-2xl overflow-hidden flex-1">
                  <img src={B + '475c4e3b-2f40-483f-bf0a-f1994b88bbae.jpeg'} alt="Профиль" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent" />
                  <span className="absolute bottom-2 left-3 font-display uppercase text-xs tracking-widest text-stone/90">Шеврон</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[2/3]">
                <img src={B + 'd7457ee6-54a2-463f-a3cf-a4bd96b99bfd.jpeg'} alt="Беж" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-night/80 to-transparent" />
                <span className="absolute bottom-3 left-3 font-display uppercase text-xs tracking-widest text-stone/90">Беж</span>
              </div>
            </Reveal>
          </div>

          {/* Горизонтальная полоса — принты крупным планом */}
          <Reveal delay={100}>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { src: B + '9048c07b-e452-467d-860f-4521de2d6954.jpeg', tag: 'Спина беж' },
                { src: B + 'b6652fa2-551b-448b-9167-9cb2e8e152d3.jpeg', tag: 'Байкал беж' },
                { src: B + '13cf4dab-305c-4a16-bed6-8c9231d1306a.jpeg', tag: 'Спина мятная' },
              ].map((item) => (
                <div key={item.src} className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={item.src} alt={item.tag} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 font-display uppercase text-xs tracking-widest text-stone/90">{item.tag}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* КОЛЛЕКЦИЯ АЛТАЙ */}
      <section className="px-6 md:px-16 py-28 bg-night border-t border-stone/10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionLabel n="06" title="Коллекция Алтай" />
            <p className="text-stone/60 mt-4 max-w-xl text-base">
              Горы, духи, древние знаки. Коллекция вдохновлена петроглифами,
              шаманскими символами и силой алтайских хребтов.
            </p>
          </Reveal>

          {/* Логотипы коллекции */}
          <Reveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              {[
                { src: B + '485e74f3-8bc0-4d95-ae53-3c72bbc9a352.jpeg', name: 'Дух Сибири', sub: 'Сила древних земель', bg: 'bg-stone/5' },
                { src: B + 'cec6db51-a20c-47ed-aa46-4776dce68b50.jpeg', name: 'Алтай', sub: 'Горный логотип', bg: 'bg-stone/5' },
                { src: B + '00e4f710-6982-4b8a-b998-6149e4909a9a.jpeg', name: 'Алтай · Место силы', sub: 'Олень и горы', bg: 'bg-stone/5' },
                { src: B + 'ca9027f9-9527-4e49-9c3a-5d0cd2d4287c.jpeg', name: 'Снежный барс', sub: 'Хранитель гор', bg: 'bg-stone/5' },
                { src: B + 'd3d22148-e5eb-43a6-8a21-c1f49219d9f2.jpeg', name: 'Алтай · Юрта', sub: 'Чёрная версия', bg: 'bg-[#111]' },
                { src: B + 'bb74ccaf-ca2c-49ef-ad00-8f36644eb94f.jpeg', name: 'Алтай · Юрта', sub: 'Белая версия', bg: 'bg-stone/5' },
              ].map((item, i) => (
                <Reveal key={item.src} delay={i * 80}>
                  <div className={`rounded-2xl overflow-hidden border border-stone/10 ${item.bg} p-6 flex flex-col items-center gap-4`}>
                    <div className="w-full aspect-square flex items-center justify-center">
                      <img src={item.src} alt={item.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="text-center">
                      <p className="font-display uppercase text-sm tracking-widest text-stone/90">{item.name}</p>
                      <p className="text-stone/40 text-xs mt-1">{item.sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Мокапы одежды */}
          <Reveal>
            <div className="flex items-center gap-5 mt-16 mb-10">
              <span className="font-accent text-gold text-2xl">мокапы</span>
              <div className="h-px flex-1 bg-stone/10" />
              <p className="text-stone/50 text-sm uppercase tracking-widest">Алтайская линейка</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Футболка */}
            <Reveal delay={0}>
              <div className="relative rounded-3xl overflow-hidden bg-stone/5 border border-stone/10 p-8 flex flex-col items-center min-h-[380px]">
                <div className="relative w-56 h-64">
                  <svg viewBox="0 0 200 220" className="w-full h-full" fill="none">
                    <path d="M60 10 L20 50 L40 60 L40 200 L160 200 L160 60 L180 50 L140 10 L120 30 C115 35 85 35 80 30 Z" fill="#1a3040" stroke="#2E6CB5" strokeWidth="1.5"/>
                    <path d="M60 10 L20 50 L40 60" fill="none" stroke="#2E6CB5" strokeWidth="1.5"/>
                    <path d="M140 10 L180 50 L160 60" fill="none" stroke="#2E6CB5" strokeWidth="1.5"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center pt-8">
                    <img src={B + 'dc2dee45-0d17-4d56-b52c-89a38a4256c6.jpeg'} alt="Сила Алтая" className="w-28 h-28 object-contain mix-blend-lighten opacity-90" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="font-display uppercase text-lg text-stone">Футболка</p>
                  <p className="text-stone/50 text-sm mt-1">Принт «Сила Алтая»</p>
                </div>
                <div className="flex gap-2 mt-4">
                  {['#1a3040','#2d2d2d','#3a5a3a','#8B4513'].map(c => (
                    <div key={c} className="w-5 h-5 rounded-full border border-stone/20" style={{ background: c }} />
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Худи */}
            <Reveal delay={100}>
              <div className="relative rounded-3xl overflow-hidden bg-stone/5 border border-stone/10 p-8 flex flex-col items-center min-h-[380px]">
                <div className="relative w-56 h-64">
                  <svg viewBox="0 0 220 240" className="w-full h-full" fill="none">
                    <path d="M75 20 L15 65 L40 78 L40 215 L180 215 L180 78 L205 65 L145 20 C140 10 130 8 120 25 C115 32 105 32 100 25 C95 15 85 8 75 20Z" fill="#1F3320" stroke="#1F4D3A" strokeWidth="1.5"/>
                    <path d="M85 20 C80 5 70 0 65 8 L50 30 C55 28 65 25 75 20Z" fill="#1F3320" stroke="#1F4D3A" strokeWidth="1.5"/>
                    <path d="M135 20 C140 5 150 0 155 8 L170 30 C165 28 155 25 145 20Z" fill="#1F3320" stroke="#1F4D3A" strokeWidth="1.5"/>
                    <path d="M75 155 L145 155 L145 185 L75 185Z" fill="none" stroke="#1F4D3A" strokeWidth="1.2"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center pt-4">
                    <img src={B + 'bb74ccaf-ca2c-49ef-ad00-8f36644eb94f.jpeg'} alt="Алтай" className="w-24 h-24 object-contain mix-blend-lighten opacity-80" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="font-display uppercase text-lg text-stone">Худи</p>
                  <p className="text-stone/50 text-sm mt-1">Принт «Сила Алтая»</p>
                </div>
                <div className="flex gap-2 mt-4">
                  {['#1F3320','#13202B','#4a3520','#2E3A4A'].map(c => (
                    <div key={c} className="w-5 h-5 rounded-full border border-stone/20" style={{ background: c }} />
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Костюм */}
            <Reveal delay={200}>
              <div className="relative rounded-3xl overflow-hidden bg-stone/5 border border-stone/10 p-8 flex flex-col items-center min-h-[380px]">
                <div className="relative w-56 h-64">
                  <svg viewBox="0 0 220 260" className="w-full h-full" fill="none">
                    <path d="M70 15 L15 55 L38 67 L38 145 L182 145 L182 67 L205 55 L150 15 C145 8 130 12 125 20 C120 28 100 28 95 20 C90 12 75 8 70 15Z" fill="#2d1a0a" stroke="#8B4513" strokeWidth="1.5"/>
                    <path d="M38 145 L38 245 L100 245 L110 180 L120 245 L182 245 L182 145Z" fill="#2d1a0a" stroke="#8B4513" strokeWidth="1.5"/>
                    <line x1="38" y1="155" x2="182" y2="155" stroke="#8B4513" strokeWidth="1.5" strokeDasharray="4 3"/>
                  </svg>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center justify-center w-28 h-20">
                    <img src={B + '00e4f710-6982-4b8a-b998-6149e4909a9a.jpeg'} alt="Алтай место силы" className="w-full h-full object-contain mix-blend-lighten opacity-75" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="font-display uppercase text-lg text-stone">Костюм</p>
                  <p className="text-stone/50 text-sm mt-1">Принт «Алтай · Место силы»</p>
                </div>
                <div className="flex gap-2 mt-4">
                  {['#2d1a0a','#1a1a2e','#2a3a2a','#3a2a1a'].map(c => (
                    <div key={c} className="w-5 h-5 rounded-full border border-stone/20" style={{ background: c }} />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Принты крупным планом */}
          <Reveal delay={150}>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#111] border border-stone/10 p-8 flex items-center justify-center aspect-video">
                <img src={B + 'd3d22148-e5eb-43a6-8a21-c1f49219d9f2.jpeg'} alt="Алтай юрта чёрная" className="max-h-52 object-contain" />
              </div>
              <div className="rounded-2xl bg-stone/5 border border-stone/10 p-8 flex items-center justify-center aspect-video">
                <img src={B + 'ca9027f9-9527-4e49-9c3a-5d0cd2d4287c.jpeg'} alt="Снежный барс" className="max-h-52 object-contain" />
              </div>
            </div>
          </Reveal>
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