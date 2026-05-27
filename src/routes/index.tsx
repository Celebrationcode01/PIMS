import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, Instagram, Facebook, Twitter, Youtube, ChevronLeft, ChevronRight, Send, Sparkles, Leaf, FlaskConical, Cookie, Citrus, Heart } from "lucide-react";
import heroDrink from "@/assets/img5.PNG";
import aboutBottle from "@/assets/img4.PNG";
import teaStraw from "@/assets/tea-strawgranny.jpg";
import teaMatcha from "@/assets/tea-milkymatcha.jpg";
import teaPeachy from "@/assets/tea-peachy.jpg";
import teaAllin from "@/assets/tea-allin.jpg";
import teaJasmine from "@/assets/tea-jasmine.jpg";
import teaGluhwein from "@/assets/tea-gluhwein.jpg";
import foodClassic from "@/assets/img1.JPG";
import foodBrioche from "@/assets/img2.JPG";
import foodSweet from "@/assets/img3.JPG";
import newsCheers from "@/assets/img6.jpg";
import newsCream from "@/assets/img9.jpg";
import newsSummer from "@/assets/img10.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PIMS — Tu fórmula perfecta en una taza" },
      { name: "description", content: "PIMS es una bebida a base de té que despertará tu imaginación, te dará energía natural y sorprenderá tu paladar." },
    ],
  }),
});


const newsSlides = [
  {
    title: "¡NUEVOS SABORES PIMS!",
    text1: "¡Recárgate con los nuevos sabores de verano de PIMS!",
    text2: "Cada gran momento puede ser aún mejor con mezclas refrescantes y llenas de energía.",
    text3: "Descubre combinaciones frutales únicas y disfruta una explosión de sabor en cada sorbo.",
    img: newsCheers,
  },

  {
    title: "PIMS CREAM EDITION",
    text1: "Nuestra famosa PIMS Cream ahora en nuevas combinaciones.",
    text2: "Más cremosa, más intensa y perfecta para cualquier momento.",
    text3: "Prueba sabores únicos hechos con ingredientes naturales.",
    img: newsCream,
  },

  {
    title: "NUEVO MENÚ DE TEMPORADA",
    text1: "Llegaron bebidas exclusivas por tiempo limitado.",
    text2: "Inspiradas en frutas tropicales y mezclas refrescantes.",
    text3: "Ven y descubre tu nuevo sabor favorito.",
    img: newsSummer,
  },
];



const teas = [
  { name: "STRAWGRANNY", price: "100 Pesos MXN", img: teaStraw },
  { name: "MILKY&MATCHA", price: "150 Pesos MXN", img: teaMatcha },
  { name: "PEACHY LYCHEE", price: "125 Pesos MXN", img: teaPeachy },
  { name: "ALL IN", price: "100 Pesos MXN", img: teaAllin },
  { name: "JASMINE CREAM", price: "125 Pesos MXN", img: teaJasmine },
  { name: "PIMS GLUHWEIN", price: "100 Pesos MXN", img: teaGluhwein },
];

const foods = [
  { name: "CLASSIC COMBO", price: "100 Pesos MXN", img: foodClassic },
  { name: "BRIOCHE COMBO", price: "100 Pesos MXN", img: foodBrioche },
  { name: "SWEET COMBO", price: "100 Pesos MXN", img: foodSweet },
];

const features = [
  { icon: Sparkles, title: "Más que solo té", desc: "sabores nuevos, intensos y explosivos" },
  { icon: Leaf, title: "Energía 100% natural", desc: "sin aditivos artificiales" },
  { icon: FlaskConical, title: "Ingrediente secreto", desc: "abre nuevas dimensiones del té" },
  { icon: Cookie, title: "Toppings únicos", desc: "para todos los gustos" },
  { icon: Heart, title: "PIMS Cream", desc: "hecha con ingredientes naturales" },
  { icon: Citrus, title: "Frutas tropicales", desc: "sabores reales y puros" },
];



function Index() {
  const [currentTea, setCurrentTea] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
const [currentNews, setCurrentNews] = useState(0);

const nextTea = () => {
  setCurrentTea((prev) => (prev + 1) % teas.length);
};

const prevTea = () => {
  setCurrentTea((prev) =>
    prev === 0 ? teas.length - 1 : prev - 1
  );
};
const nextNews = () => {
  setCurrentNews((prev) => (prev + 1) % newsSlides.length);
};

const prevNews = () => {
  setCurrentNews((prev) =>
    prev === 0 ? newsSlides.length - 1 : prev - 1
  );
};
  return (
    <div className="min-h-screen bg-pims-cream font-sans text-pims-dark">
      {/* NAV */}
      <header className="sticky top-0 z-50 mx-auto flex max-w-7xl items-center justify-between border border-white/20 bg-white/90 px-6 py-6">
        <div className="font-display text-2xl font-bold tracking-tight text-pims-dark">PIMS - BUBBLE TEA SHOP</div>
        <nav className="hidden items-center gap-8 text-sm text-pims-dark md:flex">
          <a href="#about" className="hover:text-pims-pink-deep">Nosotros</a>
          <a href="#menu" className="hover:text-pims-pink-deep">Menu</a>
          <a href="#find" className="hover:text-pims-pink-deep">Encuentranos</a>
          <a href="#blog" className="hover:text-pims-pink-deep">Blog</a>
        </nav>
        <a href="tel:+971503011915" className="hidden items-center gap-2 rounded-full border border-pims-pink-deep/30 bg-white px-5 py-2 text-sm font-medium text-pims-dark shadow-sm transition hover:bg-pims-pink-soft md:flex">
          <Phone className="h-4 w-4 text-pims-pink-deep" /> +915-50-302-1917
        </a>
        <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="rounded-full border border-pims-pink-deep/30 bg-white p-2 md:hidden"
  aria-label="Menu"
>
          <Menu className="h-5 w-5" />
        </button>
      </header>
      {menuOpen && (
  <div className="flex flex-col gap-4 bg-white px-6 py-4 shadow-md md:hidden">
    <a href="#about">Nosotros</a>
    <a href="#menu">Menu</a>
    <a href="#find">Encuéntranos</a>
    <a href="#blog">Blog</a>
  </div>
)}

{/* HERO */}
<section className="mx-auto max-w-7xl px-6">
  <div
    className="relative overflow-hidden rounded-[2.5rem] p-8 md:p-14"
    style={{ background: "var(--gradient-hero)" }}
  >
    {/* Pink blob */}
    <div
      className="absolute -left-10 top-10 h-72 w-96 rounded-[60%_40%_55%_45%/_55%_45%_60%_40%] bg-pims-pink/70 blur-[1px]"
      aria-hidden
    />

    <div className="relative grid items-center gap-6 md:gap-10 md:grid-cols-2">

      {/* TEXT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl font-bold leading-none text-pims-dark md:text-7xl"
        >
          PIMS
        </motion.h1>

        <p className="mt-0 font-display text-xl font-semibold tracking-wide text-pims-dark md:text-2xl">
          TU FÓRMULA PERFECTA
          <br />
          EN UNA TAZA
        </p>

       <motion.a
  href="#menu"
  whileHover={{
    scale: 1.05,
    boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
  }}
  whileTap={{ scale: 0.96 }}
  className="inline-block mt-2 rounded-full bg-pims-pink-deep px-7 py-3 text-xs font-bold tracking-widest text-white shadow-md transition hover:opacity-90"
>
  VER MENÚ
</motion.a>

        <p className="mt-8 max-w-sm text-sm leading-relaxed text-pims-dark/80">
          PIMS es una bebida a base de té que despertará tu imaginación,
          te dará energía natural y sorprenderá tu paladar.
        </p>
      </motion.div>

      {/* IMAGE SIDE */}
      <div className="relative flex justify-center">
        <div
          className="absolute inset-0 m-auto h-80 w-80 rounded-full bg-white/40 blur-2xl"
          aria-hidden
        />

        <motion.img
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src={heroDrink}
          alt="PIMS bubble tea cup"
          width={400}
          height={520}
          className="relative z-10 max-h-[28rem] w-auto drop-shadow-2xl transition duration-500 hover:drop-shadow-[0_0_35px_rgba(255,105,180,0.5)]"
        />

        <span className="absolute bottom-4 right-4 font-display text-sm italic text-pims-dark/60">
          full pims
        </span>
      </div>

    </div>
  </div>
</section>

      {/* ABOUT */}
<motion.section
  id="about"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mx-auto max-w-7xl px-6 py-20"
>
  <p className="text-xs font-bold tracking-[0.25em] text-pims-dark/70">
    ABOUT PIMS
  </p>

  <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
    PIMS — Una nueva experiencia en cada taza.
  </h2>

  <p className="mt-3 max-w-xl text-sm text-pims-muted">
    Una divertida mezcla de sabores con frutas frescas y nuestra exclusiva
    PIMS CREAM.
  </p>

  <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
    <ul className="grid gap-5 sm:grid-cols-2">
      {features.map((f) => (
        <li key={f.title} className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pims-pink-soft text-pims-pink-deep">
            <f.icon className="h-4 w-4" />
          </span>

          <div>
            <p className="text-sm font-semibold text-pims-dark">
              {f.title}
            </p>

            <p className="text-xs text-pims-muted">
              {f.desc}
            </p>
          </div>
        </li>
      ))}
    </ul>

    <div className="relative flex h-72 items-center justify-center">
      <div
        className="absolute left-10 top-6 h-44 w-56 rounded-[60%_40%_55%_45%] bg-amber-300/70"
        aria-hidden
      />

      <div
        className="absolute right-6 bottom-4 h-40 w-52 rounded-[55%_45%_60%_40%] bg-amber-200/80"
        aria-hidden
      />

      <motion.img
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        src={aboutBottle}
        alt="Juice bottle"
        width={180}
        height={220}
        loading="lazy"
        className="relative z-10 h-56 w-auto"
      />
    </div>
  </div>
</motion.section>

{/* TEA MENU */}
<section id="menu" className="bg-pims-green-soft py-20">
  <div className="mx-auto max-w-7xl px-6">
    <p className="text-xs font-bold tracking-[0.25em] text-pims-dark/70">
      MENÚ DE TÉS PIMS
    </p>

    <div className="relative mt-10 flex items-center justify-center">

      {/* LEFT BUTTON */}
      <button
        onClick={prevTea}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg transition hover:scale-110"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* CARD */}
      <motion.article
        key={teas[currentTea].name}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
       whileHover={{
  y: -5,
}}
        className="group flex max-w-sm flex-col items-center rounded-3xl bg-white/90 p-6"
      >
        <div className="aspect-square w-full overflow-hidden rounded-2xl bg-pims-pink-soft/40">
          <img
            src={teas[currentTea].img}
            alt={teas[currentTea].name}
            width={400}
            height={400}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <h3 className="mt-4 text-sm font-bold tracking-wider text-pims-dark">
          {teas[currentTea].name}
        </h3>

        <span className="mt-2 rounded-full bg-pims-pink-soft px-4 py-1 text-xs font-semibold text-pims-pink-deep">
          {teas[currentTea].price}
        </span>
      </motion.article>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextTea}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg transition hover:scale-110"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>

    {/* DOTS */}
    <div className="mt-8 flex justify-center gap-2">
      {teas.map((_, index) => (
        <span
          key={index}
          className={`h-2 w-2 rounded-full ${
            currentTea === index
              ? "bg-pims-dark"
              : "bg-pims-dark/30"
          }`}
        />
      ))}
    </div>
  </div>
</section>

      {/* FOOD MENU */}
<section className="mx-auto max-w-7xl px-6 py-20">
  <p className="text-xs font-bold tracking-[0.25em] text-pims-dark/70">
    MENÚ DE COMIDA PIMS
  </p>

  <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {foods.map((f) => (
      <motion.article
        key={f.name}
        whileHover={{
          y: -10,
          scale: 1.03,
        }}
        transition={{ duration: 0.3 }}
        className="group flex flex-col items-center rounded-2xl bg-pims-pink-soft/40 p-6"
      >
        <div className="aspect-square w-full overflow-hidden rounded-xl bg-white">
          <img
            src={f.img}
            alt={f.name}
            width={400}
            height={400}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        <h3 className="mt-4 text-sm font-bold tracking-wider text-pims-dark">
          {f.name}
        </h3>

        <span className="mt-2 rounded-full bg-pims-pink-soft px-4 py-1 text-xs font-semibold text-pims-pink-deep">
          {f.price}
        </span>
      </motion.article>
    ))}
  </div>
</section>

 {/* NEWS */}
<section id="blog" className="mx-auto max-w-7xl px-6 pb-24">
  <p className="text-xs font-bold tracking-[0.25em] text-pims-dark/70">
    NOVEDADES PIMS
  </p>

  <div className="relative mt-8 grid items-center gap-10 md:grid-cols-2">

    {/* LEFT */}
    <button
      onClick={prevNews}
      className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow transition-transform hover:scale-110"
      aria-label="Previous"
    >
      <ChevronLeft className="h-5 w-5" />
    </button>

    {/* IMAGE */}
    <motion.div
      key={newsSlides[currentNews].title}
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-2xl"
    >
      <img
        src={newsSlides[currentNews].img}
        alt={newsSlides[currentNews].title}
        width={768}
        height={640}
        loading="lazy"
        className="h-80 w-full object-cover will-change-transform"
      />
    </motion.div>

    {/* TEXT */}
    <motion.div
      key={currentNews}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="font-display text-2xl font-semibold text-pims-dark">
        {newsSlides[currentNews].title}
      </h3>

      <div className="mt-4 space-y-3 text-sm leading-relaxed text-pims-muted">
        <p>{newsSlides[currentNews].text1}</p>
        <p>{newsSlides[currentNews].text2}</p>
        <p>{newsSlides[currentNews].text3}</p>
      </div>

      
    </motion.div>

    {/* RIGHT */}
    <button
      onClick={nextNews}
      className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow transition-transform hover:scale-110"
      aria-label="Next"
    >
      <ChevronRight className="h-5 w-5" />
    </button>
  </div>

  {/* DOTS */}
  <div className="mt-8 flex justify-center gap-2">
    {newsSlides.map((_, index) => (
      <span
        key={index}
        className={`h-2 w-2 rounded-full ${
          currentNews === index
            ? "bg-pims-dark"
            : "bg-pims-dark/30"
        }`}
      />
    ))}
  </div>
</section>



      {/* FOOTER */}
      <footer id="find" className="relative overflow-hidden" style={{ background: "var(--gradient-footer)" }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl font-bold text-pims-dark">PIMS</p>
            <div className="mt-4 flex gap-3 text-pims-dark">
              <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-pims-dark">CONTÁCTANOS</p>
            <p className="mt-4 text-sm text-pims-dark/80">Roxy Cinema Building,<br />The Walk, Jumeirah Beach Residence</p>
            <p className="mt-3 text-sm font-semibold text-pims-dark">+915-50-302-1917</p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-pims-dark">SUSCRÍBETE</p>
            <p className="mt-4 text-sm text-pims-dark/80">Ingresa tu correo para enterarte de nuestras nuevas bebidas.</p>
            <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="mt-4 flex items-center gap-2 rounded-full bg-white/80 p-1 pl-4"
>
  <input
    type="hidden"
    name="access_key"
    value="dbacf3f1-9d4a-470c-b54e-04dc97680f07"
  />

  <input
    type="email"
    name="email"
    required
    placeholder="Email"
    className="flex-1 bg-transparent text-sm outline-none placeholder:text-pims-muted"
  />

  <input
    type="hidden"
    name="subject"
    value="Nuevo suscriptor PIMS"
  />

  <button
    type="submit"
    aria-label="Subscribe"
    className="rounded-full bg-pims-pink-deep p-2 text-white"
  >
    <Send className="h-4 w-4" />
  </button>
</form>
          </div>
        </div>
        <div className="border-t border-white/30 py-4 text-center text-xs text-pims-dark/70">
          PIMS © Todos los derechos reservados 2026.
        </div>
      </footer>
    </div>
  );
}
