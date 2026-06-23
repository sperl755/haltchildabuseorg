import QuickExit from './components/QuickExit';

// ---------------------------------------------------------------------------
// Replace these with your real links when they are ready.
const CHANNEL_URL = 'https://www.youtube.com/@haltchildabuse';
const DONATE_URL = '#donate';
const HOTLINE_DISPLAY = '1-800-422-4453';
const HOTLINE_TEL = 'tel:18004224453';
// ---------------------------------------------------------------------------

type Episode = {
  title: string;
  guest: string;
  role: string;
  length: string;
  blurb: string;
  url: string;
  thumb: string;
};

const FEATURED: Episode = {
  title: 'What every parent wishes they had known sooner',
  guest: 'Dr. Lena Ortiz',
  role: 'Child psychologist, 20 years in family trauma',
  length: '38 min',
  blurb:
    'A conversation about the quiet signs that something is wrong, how to ask a child the right way, and what to do the moment you feel unsure.',
  url: CHANNEL_URL,
  thumb:
    'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&h=675&fit=crop&auto=format',
};

const EPISODES: Episode[] = [
  {
    title: 'Talking to kids so they feel safe telling you the truth',
    guest: 'Marcus Bell',
    role: 'Father of three, abuse survivor',
    length: '26 min',
    blurb: 'A parent shares what helped his children open up, and what shut them down.',
    url: CHANNEL_URL,
    thumb:
      'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=720&h=480&fit=crop&auto=format',
  },
  {
    title: 'The warning signs teachers notice first',
    guest: 'Priya Nair',
    role: 'Elementary school counselor',
    length: '31 min',
    blurb: 'How professionals spot early changes, and how families can do the same at home.',
    url: CHANNEL_URL,
    thumb:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=720&h=480&fit=crop&auto=format',
  },
  {
    title: 'What to do in the first 24 hours',
    guest: 'Officer Dana Cole',
    role: 'Child protective services liaison',
    length: '29 min',
    blurb: 'A clear, calm walkthrough of reporting, protecting the child, and what comes next.',
    url: CHANNEL_URL,
    thumb:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=720&h=480&fit=crop&auto=format',
  },
];

const SIGNS: { title: string; body: string }[] = [
  {
    title: 'Changes in behavior',
    body: 'Sudden withdrawal, fearfulness, aggression, or a return to younger behaviors like bedwetting or thumb sucking.',
  },
  {
    title: 'Physical clues',
    body: 'Unexplained bruises, burns, or injuries, especially ones that do not match the explanation given.',
  },
  {
    title: 'Fear of a person or place',
    body: 'A child seems anxious or distressed around a specific adult, or resists going to a particular home or activity.',
  },
  {
    title: 'Shifts in mood or sleep',
    body: 'New nightmares, trouble sleeping, depression, or a loss of interest in friends and things they once loved.',
  },
  {
    title: 'Knowledge beyond their age',
    body: 'Language or behavior about adult topics that does not fit the child’s age or stage.',
  },
  {
    title: 'Avoiding home',
    body: 'Reluctance to go home, arriving early, staying late, or running away.',
  },
];

const STEPS: { n: string; h: string; b: string }[] = [
  {
    n: '01',
    h: 'Stay calm and listen',
    b: 'If a child tells you something, believe them. Let them speak in their own words. Do not press for details or react with alarm.',
  },
  {
    n: '02',
    h: 'Keep the child safe',
    b: 'Make sure the child is not alone with the person you are worried about while you figure out the next step.',
  },
  {
    n: '03',
    h: 'Report it',
    b: `Call the national hotline at ${HOTLINE_DISPLAY}, or your local child protective services. You do not need proof to make a report.`,
  },
];

const HEADING = 'font-serif opsz-96 leading-[1.1] tracking-[-0.01em]';
const SECTION_HEADING = `${HEADING} text-[clamp(28px,4vw,44px)]`;

export default function HomePage() {
  return (
    <>
      {/* Safety bar */}
      <div className="bg-ink text-white">
        <Container>
          <div className="flex flex-col items-start justify-between gap-2 py-2.5 text-[13px] sm:flex-row sm:items-center">
            <p className="text-mist-cool">
              In immediate danger? Call <strong className="text-white">911</strong>. To report
              abuse, call{' '}
              <a href={HOTLINE_TEL} className="font-semibold text-white underline-offset-2 hover:underline">
                {HOTLINE_DISPLAY}
              </a>
              .
            </p>
            <QuickExit />
          </div>
        </Container>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-20 border-b border-line-soft bg-mist/90 py-4 backdrop-blur-[8px]">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <Wordmark />
            <div className="hidden gap-7 md:flex">
              <NavLink href="#series">The series</NavLink>
              <NavLink href="#signs">Warning signs</NavLink>
              <NavLink href="#help">Get help</NavLink>
              <NavLink href="#mission">Our mission</NavLink>
            </div>
            <a
              href={DONATE_URL}
              className="rounded-full bg-warm px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-warm-deep"
            >
              Donate
            </a>
          </div>
        </Container>
      </nav>

      {/* Hero */}
      <header className="py-16 md:py-24">
        <Container>
          <div className="max-w-[860px]">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-trust-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-trust-deep">
              A nonprofit for families
            </p>
            <h1 className={`${HEADING} text-[clamp(38px,6vw,72px)]`}>
              Learn to see it.
              <br />
              Find the courage to stop it.
            </h1>
            <p className="mt-7 max-w-[600px] text-[clamp(18px,1.6vw,22px)] leading-[1.5] text-ink-soft">
              We help parents and caregivers recognize the signs of child abuse and act with
              confidence. Start with our interview series, where parents and experts share what
              they have learned.
            </p>
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href="#series"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-trust px-7 py-4 text-base font-semibold text-white no-underline transition hover:bg-trust-deep"
              >
                <PlayIcon />
                Watch the series
              </a>
              <a
                href={DONATE_URL}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-7 py-4 text-base font-semibold text-ink no-underline transition hover:border-warm hover:text-warm-deep"
              >
                Support our work
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* The series (primary focus) */}
      <section id="series" className="bg-mist-cool py-16 md:py-24">
        <Container>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-trust">
                The interview series
              </p>
              <h2 className={`${SECTION_HEADING} mt-3`}>Real conversations, real guidance</h2>
            </div>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-trust no-underline hover:text-trust-deep"
            >
              Visit our channel &rarr;
            </a>
          </div>

          {/* Featured episode */}
          <a
            href={FEATURED.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 grid grid-cols-1 overflow-hidden rounded-[18px] border border-line bg-surface no-underline shadow-card transition hover:shadow-card-hover md:grid-cols-[1.4fr_1fr]"
          >
            <div className="relative aspect-video overflow-hidden bg-mist-deep">
              <img
                src={FEATURED.thumb}
                alt=""
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-trust shadow-card transition group-hover:scale-110">
                  <PlayIcon big />
                </span>
              </span>
              <span className="absolute bottom-3 right-3 rounded-md bg-ink/80 px-2 py-1 text-xs font-medium text-white">
                {FEATURED.length}
              </span>
            </div>
            <div className="flex flex-col justify-center gap-3 p-7 md:p-9">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-warm-deep">
                Featured episode
              </span>
              <h3 className="font-serif text-[clamp(22px,2.4vw,30px)] leading-[1.2] tracking-[-0.01em] text-ink opsz-60">
                {FEATURED.title}
              </h3>
              <p className="text-[15px] leading-[1.55] text-ink-soft">{FEATURED.blurb}</p>
              <p className="mt-1 text-sm font-medium text-ink">
                {FEATURED.guest}
                <span className="block text-[13px] font-normal text-ink-mute">{FEATURED.role}</span>
              </p>
            </div>
          </a>

          {/* Episode grid */}
          <div className="mt-9 grid grid-cols-1 gap-7 md:grid-cols-3">
            {EPISODES.map((ep) => (
              <a
                key={ep.title}
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-[14px] border border-line bg-surface no-underline shadow-card transition hover:shadow-card-hover"
              >
                <div className="relative aspect-video overflow-hidden bg-mist-deep">
                  <img
                    src={ep.thumb}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-trust transition group-hover:scale-110">
                      <PlayIcon />
                    </span>
                  </span>
                  <span className="absolute bottom-2.5 right-2.5 rounded-md bg-ink/80 px-2 py-0.5 text-xs font-medium text-white">
                    {ep.length}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-serif text-lg leading-[1.25] tracking-[-0.005em] text-ink opsz-30">
                    {ep.title}
                  </h3>
                  <p className="text-sm leading-[1.5] text-ink-soft">{ep.blurb}</p>
                  <p className="mt-auto pt-2 text-[13px] font-medium text-ink">
                    {ep.guest}
                    <span className="block font-normal text-ink-mute">{ep.role}</span>
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-11 flex flex-col items-center gap-3 text-center">
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-trust px-7 py-3.5 text-sm font-semibold text-white no-underline transition hover:bg-trust-deep"
            >
              <PlayIcon />
              Watch on YouTube
            </a>
            <p className="text-sm text-ink-mute">New conversations released regularly. Subscribe so you do not miss one.</p>
          </div>
        </Container>
      </section>

      {/* Warning signs */}
      <section id="signs" className="py-16 md:py-24">
        <Container>
          <div className="max-w-[640px]">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-care">
              Know what to look for
            </p>
            <h2 className={`${SECTION_HEADING} mt-3`}>Recognizing the signs</h2>
            <p className="mt-4.5 text-[clamp(16px,1.4vw,18px)] leading-[1.55] text-ink-soft">
              No single sign means abuse is happening. But knowing the patterns helps you ask the
              right questions and trust your instincts.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {SIGNS.map((sign) => (
              <div
                key={sign.title}
                className="rounded-[14px] border border-line-soft bg-surface p-6 shadow-card"
              >
                <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-full bg-care-soft text-care">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
                    <path d="M12 9v4M12 17h.01" />
                    <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg tracking-[-0.005em] text-ink opsz-30">
                  {sign.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.55] text-ink-soft">{sign.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Get help */}
      <section id="help" className="bg-mist-cool py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-trust">
                If you are worried about a child
              </p>
              <h2 className={`${SECTION_HEADING} mt-3`}>What you can do today</h2>
              <p className="mt-4.5 max-w-[440px] text-[clamp(16px,1.4vw,18px)] leading-[1.55] text-ink-soft">
                You do not have to be certain to act. Reporting a concern is not an accusation. It
                is a request for trained people to take a careful look.
              </p>
              <div className="mt-8 rounded-[16px] border border-line bg-surface p-6 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-mute">
                  National Child Abuse Hotline
                </p>
                <a
                  href={HOTLINE_TEL}
                  className="mt-2 block font-serif text-[clamp(28px,4vw,40px)] leading-none tracking-[-0.01em] text-trust no-underline opsz-96"
                >
                  {HOTLINE_DISPLAY}
                </a>
                <p className="mt-3 text-sm leading-[1.55] text-ink-soft">
                  Free, confidential, and available 24 hours a day, every day. In an emergency,
                  always call 911 first.
                </p>
              </div>
            </div>
            <div>
              {STEPS.map((step, i) => (
                <div
                  key={step.n}
                  className={[
                    'flex gap-5 py-6',
                    i < STEPS.length - 1 ? 'border-b border-line-soft' : '',
                  ].join(' ')}
                >
                  <div className="font-serif text-2xl italic text-trust opsz-60">{step.n}</div>
                  <div>
                    <h3 className="font-serif text-xl tracking-[-0.005em] text-ink opsz-30">
                      {step.h}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-[1.55] text-ink-soft">{step.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section id="mission" className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-warm-deep">
              Our mission
            </p>
            <h2 className={`${SECTION_HEADING} mt-3`}>
              Every child deserves a safe childhood
            </h2>
            <p className="mt-5 text-[clamp(17px,1.5vw,20px)] leading-[1.6] text-ink-soft">
              Halt Child Abuse exists to put knowledge in the hands of the people closest to
              children. Through honest interviews, plain language guides, and a community of
              caregivers, we help families recognize abuse early and respond with confidence. We
              believe most harm can be prevented when adults know what to look for and feel ready
              to act.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
            <Stat num="1 in 7" lbl="children experience abuse or neglect each year" />
            <Stat num="90%" lbl="of abuse is by someone the child knows and trusts" />
            <Stat num="24/7" lbl="help is available the moment you reach out" />
          </div>
        </Container>
      </section>

      {/* Donate */}
      <section id="donate" className="bg-warm-soft py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-[680px] text-center">
            <h2 className={`${SECTION_HEADING} text-[clamp(30px,4.2vw,46px)]`}>
              Help us reach more families
            </h2>
            <p className="mt-5 text-[clamp(16px,1.4vw,18px)] leading-[1.6] text-ink-soft">
              Your gift funds new interviews, free guides, and outreach to the parents and
              caregivers who need them most. Every contribution helps a child stay safe.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {['$25', '$50', '$100', '$250'].map((amt) => (
                <a
                  key={amt}
                  href={DONATE_URL}
                  className="min-w-[88px] rounded-full border border-warm bg-surface px-6 py-3 text-base font-semibold text-warm-deep no-underline transition hover:bg-warm hover:text-white"
                >
                  {amt}
                </a>
              ))}
            </div>
            <a
              href={DONATE_URL}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-warm px-9 py-4 text-base font-semibold text-white no-underline transition hover:bg-warm-deep"
            >
              Donate now
            </a>
            <p className="mt-4 text-[13px] text-ink-mute">
              Halt Child Abuse is a nonprofit organization. Donations may be tax deductible.
            </p>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-line-soft bg-mist-cool pb-9 pt-14">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr] md:gap-10">
            <div>
              <Wordmark />
              <p className="mt-3.5 max-w-[300px] text-[14px] leading-[1.6] text-ink-soft">
                Helping families recognize child abuse and stop it. If a child is in immediate
                danger, call 911.
              </p>
              <p className="mt-3 text-sm font-semibold text-trust">
                Report abuse:{' '}
                <a href={HOTLINE_TEL} className="no-underline hover:underline">
                  {HOTLINE_DISPLAY}
                </a>
              </p>
            </div>
            <FooterCol
              title="Explore"
              links={[
                ['The series', '#series'],
                ['Warning signs', '#signs'],
                ['Get help', '#help'],
                ['Our mission', '#mission'],
              ]}
            />
            <FooterCol
              title="Get involved"
              links={[
                ['Donate', DONATE_URL],
                ['YouTube channel', CHANNEL_URL],
                ['Contact', '#'],
              ]}
            />
          </div>
          <div className="mt-12 flex flex-col items-start gap-2 border-t border-line-soft pt-6 text-xs text-ink-mute sm:flex-row sm:items-center sm:justify-between">
            <span>&copy; {new Date().getFullYear()} Halt Child Abuse</span>
            <span>haltchildabuse.org</span>
          </div>
        </Container>
      </footer>
    </>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">{children}</div>;
}

function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2.5 no-underline">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-trust text-white">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path d="M12 21s-7.5-4.8-10-9.2C.6 8.9 2 5.5 5.2 5.1 7 4.9 8.6 5.8 9.5 7.2 10.4 5.8 12 4.9 13.8 5.1 17 5.5 18.4 8.9 17 11.8 14.5 16.2 12 21 12 21Z" />
        </svg>
      </span>
      <span className="font-serif text-lg font-medium tracking-[-0.01em] text-ink opsz-30">
        Halt Child Abuse
      </span>
    </a>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-ink-soft no-underline transition-colors hover:text-trust"
    >
      {children}
    </a>
  );
}

function PlayIcon({ big }: { big?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={big ? 'ml-1 h-7 w-7' : 'ml-0.5 h-4 w-4'}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function Stat({ num, lbl }: { num: string; lbl: string }) {
  return (
    <div>
      <div className="font-serif text-[clamp(40px,5.5vw,64px)] leading-none tracking-[-0.02em] text-trust opsz-144">
        {num}
      </div>
      <div className="mx-auto mt-4 max-w-[240px] text-[14px] leading-[1.5] text-ink-soft">
        {lbl}
      </div>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-ink-mute">
        {title}
      </h4>
      <ul className="list-none">
        {links.map(([label, href]) => (
          <li key={label} className="py-1">
            <a
              href={href}
              className="text-sm text-ink no-underline transition-colors hover:text-trust"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
