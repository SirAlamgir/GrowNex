import { TEAM, VALUES } from '../data/content'
import { CTA, Icon, PageHero, Reveal, SectionHead } from '../components/ui'
import fullImg from '../assets/logo-full.png'

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" sub="Grow Nex brings together passionate freelancers — developers, designers and marketers — so you get a complete agency experience with personal attention.">Freelancers united to <span className="grad-text">grow you</span></PageHero>
      <section className="section !pt-8">
        <div className="wrap">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal x={-30} y={0}>
              <h2 className="h2 mb-4">Our story</h2>
              <p className="text-base sm:text-lg">We started Grow Nex because small and growing businesses deserve the same quality as big brands, without paying big-agency prices.</p>
              <p className="text-base sm:text-lg">Our logo says it all: a letter G rising into an arrow — growth, forward motion, ambition. Every project we take is built around that idea: <b className="text-ink">Innovate. Elevate. Accelerate.</b></p>
            </Reveal>
            <Reveal x={30} y={0} delay={0.1}>
              <div className="relative mx-auto grid aspect-square w-full max-w-[420px] place-items-center overflow-hidden rounded-[2rem] border border-line bg-surface p-8 shadow-glow dark:bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(108,79,208,.22),transparent_55%)]" />
                <img src={fullImg} alt="Grow Nex" className="relative w-[88%] animate-bob" />
              </div>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3 sm:mt-20">
            {VALUES.map((v, i) => <Reveal key={v.t} delay={i * 0.1}><div className="card h-full"><div className="ico"><Icon name={v.icon} /></div><h3 className="mb-2 text-lg font-bold">{v.t}</h3><p className="!mb-0">{v.d}</p></div></Reveal>)}
          </div>
        </div>
      </section>
      <section className="section bg-bg2">
        <div className="wrap">
          <SectionHead eyebrow="The team" sub="Edit these cards in src/data/content.js with your real team names and roles.">The people behind your project</SectionHead>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((t, i) => (
              <Reveal key={t.r} delay={i * 0.08}>
                <div className="card h-full">
                  <div className="mb-5 grid h-20 w-20 place-items-center rounded-3xl bg-grad font-display text-3xl font-extrabold text-white shadow-[0_14px_30px_-10px_rgba(108,79,208,.6)]">{t.a}</div>
                  <h3 className="mb-2 text-lg font-bold">{t.r}</h3><p className="!mb-0">{t.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
