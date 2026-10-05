import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check as CheckIcon, Zap, TrendingUp, MessageCircle } from 'lucide-react'
import { SERVICES, MARQUEE, STEPS, WHY, STATS, WORK, PLANS } from '../data/content'
import { CTA, Icon, Reveal, SectionHead } from '../components/ui'
import { PlanCard } from '../components/Plans'
import Faq from '../components/Faq'
import fullImg from '../assets/logo-full.png'

const Chip = ({ className, icon, title, sub, grad, delay }) => (
  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay, type: 'spring' }} className={`absolute z-10 ${className}`}>
    <div className="flex animate-bob items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 font-display text-sm font-bold shadow-soft" style={{ animationDelay: `${delay * -2}s` }}>
      <span className={`grid h-9 w-9 flex-none place-items-center rounded-xl text-white ${grad}`}>{icon}</span>
      <span>{title}<small className="block font-sans text-xs font-medium text-muted">{sub}</small></span>
    </div>
  </motion.div>
)

export default function Home() {
  const mq = [...MARQUEE, ...MARQUEE]
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16">
        <div className="pointer-events-none absolute -right-20 -top-28 h-[420px] w-[420px] animate-float rounded-full bg-[#6c4fd0] opacity-45 blur-[80px] dark:opacity-25" />
        <div className="pointer-events-none absolute -bottom-36 -left-24 h-[360px] w-[360px] animate-float rounded-full bg-[#2d8cff] opacity-40 blur-[80px] [animation-delay:-6s] dark:opacity-20" />
        <div className="pointer-events-none absolute inset-0 bg-grid-lines opacity-60 [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_30%,transparent_80%)]" />
        <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-14">
          <div>
            <Reveal><span className="eyebrow"><i className="h-[7px] w-[7px] animate-dot rounded-full bg-ok" /> Now taking new projects</span></Reveal>
            <Reveal delay={0.08}><h1 className="h1 mb-5">Your growth partner for <span className="grad-text">websites, design &amp; marketing</span></h1></Reveal>
            <Reveal delay={0.16}><p className="max-w-xl text-base sm:text-xl">Grow Nex is a team of skilled freelancers working as one agency. You get agency-quality results, direct communication and friendly prices — without the big-agency overhead.</p></Reveal>
            <Reveal delay={0.24} className="my-8 flex flex-wrap gap-3.5">
              <Link to="/contact" className="btn btn-primary">Get a Free Quote <ArrowRight className="h-[18px] w-[18px]" /></Link>
              <Link to="/services" className="btn btn-ghost">Explore Services</Link>
            </Reveal>
            <Reveal delay={0.3} className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted">
              {['Free consultation', 'Clear fixed prices', 'Fast delivery'].map((t) => <span key={t} className="flex items-center gap-2"><CheckIcon className="h-[18px] w-[18px] text-ok" />{t}</span>)}
            </Reveal>
          </div>
          <Reveal delay={0.2} x={30} y={0} className="relative mx-auto min-h-[400px] w-full max-w-[520px] sm:min-h-[460px]">
            <div className="absolute inset-x-8 inset-y-6 grid place-items-center overflow-hidden rounded-[2rem] border border-line bg-surface p-6 shadow-glow dark:bg-white sm:inset-x-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(108,79,208,.22),transparent_55%)]" />
              <img src={fullImg} alt="Grow Nex" className="relative w-[85%] animate-bob" />
            </div>
            <Chip className="right-0 top-0" icon={<Zap className="h-[18px] w-[18px]" />} title="Fast start" sub="First draft in ~3 days" grad="bg-grad" delay={0.6} />
            <Chip className="-left-1 bottom-20 sm:-left-3" icon={<TrendingUp className="h-[18px] w-[18px]" />} title="Built to grow" sub="SEO + ads + content" grad="bg-gradient-to-br from-[#ff8a3d] to-[#ffb020]" delay={0.8} />
            <Chip className="bottom-0 right-5" icon={<MessageCircle className="h-[18px] w-[18px]" />} title="Direct chat" sub="Talk to the person doing the work" grad="bg-gradient-to-br from-[#16a37a] to-[#2dd4a0]" delay={1} />
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-line bg-surface py-5">
        <div className="flex w-max animate-marquee gap-10 font-display text-base font-bold text-muted">
          {mq.map((m, i) => <span key={i} className="flex items-center gap-10 whitespace-nowrap">{m}<span className="text-brand2">✦</span></span>)}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="What we do" sub="One team for your website, brand and marketing, so everything works together.">Everything your business needs to <span className="grad-text">go digital</span></SectionHead>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.08}>
                <Link to="/services" state={{ scrollTo: s.id }} className="card block h-full">
                  <div className="ico"><Icon name={s.icon} className="h-6 w-6" /></div>
                  <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="mt-2 inline-flex items-center gap-2 font-display text-sm font-bold text-brand2">Learn more <ArrowRight className="h-4 w-4" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="section bg-bg2">
        <div className="wrap">
          <SectionHead eyebrow="How it works" sub="A clear process so you always know what's happening and what's next.">From idea to launch in <span className="grad-text">4 simple steps</span></SectionHead>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.1}>
                <span className="grad-text mb-3 block font-display text-6xl font-extrabold leading-none">0{i + 1}</span>
                <h3 className="mb-2 text-xl font-bold">{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Our work" sub="A taste of what we create for clients.">Projects we love to <span className="grad-text">build</span></SectionHead>
          <div className="grid gap-6 md:grid-cols-3">
            {WORK.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.1}>
                <motion.div whileHover={{ y: -8 }} className="overflow-hidden rounded-3xl border border-line bg-surface shadow-soft transition-shadow hover:shadow-glow">
                  <div className={`flex aspect-[16/11] flex-col gap-2 bg-gradient-to-br p-5 ${w.bg}`}>
                    <div className="flex gap-1.5">{[0, 1, 2].map((d) => <i key={d} className="h-2 w-2 rounded-full bg-white/60" />)}</div>
                    <div className="mt-3 h-5 w-[70%] rounded-md bg-white/90" />
                    <div className="h-3 w-[45%] rounded-md bg-white/55" />
                    <div className="mt-1 h-7 w-[30%] rounded-full bg-white" />
                    <div className="mt-auto grid grid-cols-3 gap-2">{[0, 1, 2].map((d) => <b key={d} className="h-12 rounded-xl bg-white/30" />)}</div>
                  </div>
                  <div className="p-6">
                    <span className="mb-1 block font-display text-[.7rem] font-bold uppercase tracking-widest text-brand2">{w.tag}</span>
                    <h3 className="mb-1 text-xl font-bold">{w.t}</h3>
                    <p className="!mb-0">{w.d}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-sm">Sample concept previews — real client case studies are shared on request.</p>
        </div>
      </section>

      {/* WHY + STATS */}
      <section className="section bg-bg2">
        <div className="wrap">
          <SectionHead eyebrow="Why Grow Nex">Agency quality, <span className="grad-text">freelancer flexibility</span></SectionHead>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.08}>
                <div className="card h-full"><div className="ico"><Icon name={w.icon} /></div><h3 className="mb-2 text-lg font-bold">{w.t}</h3><p className="!mb-0">{w.d}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal className="relative mt-14 grid grid-cols-2 gap-6 overflow-hidden rounded-[2rem] bg-grad p-8 text-white shadow-glow sm:p-12 lg:grid-cols-4">
            <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/10" />
            {STATS.map((s) => (
              <div key={s.l} className="relative">
                <b className="block font-display text-3xl font-extrabold leading-none sm:text-5xl">{s.v}</b>
                <span className="mt-1 block text-sm opacity-85">{s.l}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Pricing" sub="Starting prices for our most popular services. Need something custom? Use the estimator.">Simple packages, <span className="grad-text">fair prices</span></SectionHead>
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {[PLANS.web[0], PLANS.web[1], PLANS.design[1]].map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1} className="flex"><div className="w-full"><PlanCard plan={{ ...p, pop: i === 1 }} cat={i === 2 ? 'design' : 'web'} /></div></Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center"><Link to="/pricing" className="btn btn-ghost">See all packages &amp; estimator <ArrowRight className="h-[18px] w-[18px]" /></Link></Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-bg2">
        <div className="wrap">
          <SectionHead eyebrow="FAQ">Questions we often get</SectionHead>
          <Faq />
        </div>
      </section>
      <CTA />
    </>
  )
}
