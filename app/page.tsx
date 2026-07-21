import Image from "next/image";
import Link from "next/link";

const testFlightUrl = "https://testflight.apple.com/join/Hjwm71W9";
const testFlightAppUrl = "https://apps.apple.com/us/app/testflight/id899247664";
const waitlistUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfbmlMxTN067WTq2L3zGA3CW6s6ZbmqvUshM3nZv146yHXx-g/viewform?usp=publish-editor";
const instagramUrl = "https://www.instagram.com/moxiepulsesocial/";
const tiktokUrl = "https://www.tiktok.com/@moxiepulse";

const betaInstallSteps = [
  {
    step: "1",
    title: "Install TestFlight",
    body: "New to TestFlight? Install Apple's free beta app first.",
    href: testFlightAppUrl,
    label: "Install TestFlight",
  },
  {
    step: "2",
    title: "Open Moxie from this link",
    body: "Come back here and tap the Moxie beta link. The public invite adds Moxie automatically, with no code.",
    href: testFlightUrl,
    label: "Open Moxie Beta",
  },
];

const betaHighlights = [
  {
    title: "Private Beta",
    body: "Step into the first invite wave before the public launch and help shape the kind of community Moxie becomes.",
  },
  {
    title: "Real-World Energy",
    body: "Discover nearby people, events, and communities that match your vibe without getting trapped in another scroll.",
  },
  {
    title: "Founder Perks",
    body: "The first 10,000 beta users get lifetime Premium founder status, plus first access to launch rewards and early feature drops.",
  },
  {
    title: "Early Access",
    body: "Try proximity matching, group signals, and Moxie Pulse concepts while the first real-world community is being built.",
  },
];

const campusSignals = [
  {
    title: "Not just dating",
    body: "Use Moxie for community, friends, dating, or networking, depending on what you are open to in that moment.",
  },
  {
    title: "Real-life icebreaker",
    body: "Find nearby people who share your interests, values, and places you already care about, then make the first hello feel natural.",
  },
  {
    title: "Campus perks",
    body: "Current students and alumni from GCU, ASU, NAU, U of A, and other college communities will be first in line for special perks and events.",
  },
];

const campusCommunities = [
  {
    mark: "ASU",
    name: "Arizona State",
    theme: "asu",
  },
  {
    mark: "GCU",
    name: "Grand Canyon",
    theme: "gcu",
  },
  {
    mark: "A",
    name: "The University of Arizona",
    theme: "arizona",
  },
  {
    mark: "NAU",
    name: "Northern Arizona",
    theme: "nau",
  },
  {
    mark: "STU",
    name: "Students",
    theme: "students",
  },
  {
    mark: "ALM",
    name: "Alumni",
    theme: "alumni",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 pb-16 pt-28 text-center sm:px-6 sm:pt-32">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          src="/videos/Concept_video_2.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black" />
        <div className="absolute bottom-0 left-0 right-0 z-[1] h-64 bg-gradient-to-b from-transparent via-purple-950/25 to-black blur-2xl" />

        <nav className="absolute left-0 top-0 z-10 flex w-full items-center justify-between gap-3 px-4 py-4 sm:px-8 sm:py-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/App_Icon.png"
              alt="Moxie"
              width={40}
              height={40}
              className="h-9 w-9 rounded-xl shadow-[0_0_35px_rgba(168,85,247,0.9)] sm:h-10 sm:w-10"
            />
            <span className="hidden tracking-[0.35em] text-sm font-semibold sm:inline">
              MOXIE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="whitespace-nowrap rounded-full border border-purple-500/70 px-4 py-2 text-xs font-semibold text-purple-300 transition-all duration-300 hover:bg-purple-500/20 sm:px-5 sm:text-sm"
            >
              Contact
            </a>
            <a
              href={testFlightUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.55)] transition-all duration-300 hover:bg-purple-500 sm:px-5 sm:text-sm"
            >
              Open Beta Link
            </a>
          </div>
        </nav>

        <div className="relative z-10 w-full max-w-4xl">
          <Image
            src="/logos/App_Icon.png"
            alt="Moxie Logo"
            width={128}
            height={128}
            priority
            className="mx-auto mb-7 h-24 w-24 animate-pulse rounded-[1.6rem] shadow-[0_0_85px_rgba(168,85,247,1)] sm:h-32 sm:w-32 sm:rounded-[2rem]"
          />

          <p className="mb-4 text-xs font-semibold tracking-[0.36em] text-purple-300 sm:text-sm sm:tracking-[0.55em]">
            PRIVATE BETA / FIRST 10K FOUNDERS
          </p>

          <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-[0.98] tracking-tight sm:text-5xl md:text-7xl">
            DISCOVER YOUR{" "}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
              SIGNAL
            </span>
          </h1>

          <p className="mx-auto mb-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg md:text-xl">
            Real connections, no endless swiping. Moxie helps you find nearby
            people who match your energy, join your community, and turn shared
            places into actual moments.
          </p>

          <p className="mx-auto max-w-xl text-sm font-semibold leading-6 text-purple-200 sm:text-base">
            The first 10,000 beta users get lifetime Premium founder status.
            Don't let another moment pass by without knowing who around you is
            worth meeting.
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
            <a
              href={testFlightUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-purple-600 px-8 py-4 text-center text-base font-bold text-white shadow-[0_0_55px_rgba(168,85,247,0.95)] transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_0_75px_rgba(168,85,247,1)] sm:px-10 sm:text-lg"
            >
              Open Moxie Beta
            </a>

            <a
              href={waitlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-purple-500/80 px-7 py-4 text-center font-semibold text-purple-300 transition-all duration-300 hover:bg-purple-500/20 sm:px-8"
            >
              Join the Waitlist
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-semibold">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fuchsia-200 underline-offset-4 transition-colors hover:text-fuchsia-100 hover:underline"
            >
              Instagram
            </a>

            <span className="text-zinc-600">/</span>

            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-200 underline-offset-4 transition-colors hover:text-cyan-100 hover:underline"
            >
              TikTok @moxiepulse
            </a>

            <span className="text-zinc-600">/</span>

            <a
              href="#concept"
              className="text-purple-300 underline-offset-4 transition-colors hover:text-purple-200 hover:underline"
            >
              Watch Concept
            </a>
          </div>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-zinc-400">
            Moxie beta access opens through{" "}
            <a
              href={testFlightAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan-200 underline-offset-4 transition-colors hover:text-cyan-100 hover:underline"
            >
              Apple&apos;s official TestFlight app
            </a>
            . No invite code is needed for the public beta link.
          </p>

          <div className="mx-auto mt-7 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
            {betaInstallSteps.map((item) => (
              <a
                key={item.step}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-purple-500/35 bg-black/45 p-4 shadow-[0_0_32px_rgba(168,85,247,0.22)] backdrop-blur transition-all duration-300 hover:border-cyan-300/60 hover:bg-purple-500/10"
              >
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-sm font-black text-white shadow-[0_0_24px_rgba(168,85,247,0.65)]">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  {item.body}
                </p>
                <span className="mt-4 inline-flex text-sm font-bold text-cyan-200 transition-colors group-hover:text-cyan-100">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          <p className="mx-auto mt-4 max-w-2xl rounded-2xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-3 text-sm font-semibold leading-6 text-cyan-100">
            Seeing a code screen? Close TestFlight, return to moxiesignal.com,
            and tap Open Moxie Beta again.
          </p>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-purple-500/40 bg-purple-500/10 px-5 py-5 shadow-[0_0_55px_rgba(168,85,247,0.35)] backdrop-blur sm:px-6">
            <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:text-left">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-[0.28em] text-purple-300 sm:text-sm sm:tracking-[0.35em]">
                  FOUNDING ACCESS
                </p>

                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  The first 10K founders keep Premium status for life.
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Tap the Moxie beta link or scan from your iPhone to join the
                  current TestFlight. If TestFlight is not installed yet, install
                  it, return to this page, and tap the Moxie link again.
                </p>

                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  If you open TestFlight by itself, it may ask for a code. The
                  public beta invite is the Moxie link on this page.
                </p>
              </div>

              <a
                href={testFlightUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join the Moxie TestFlight beta"
                className="mx-auto flex w-44 shrink-0 flex-col items-center gap-3 text-center text-xs font-semibold tracking-[0.18em] text-purple-200 transition-transform duration-300 hover:scale-[1.03] sm:mx-0"
              >
                <span className="block rounded-2xl bg-white p-3 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                  <Image
                    src="/moxie-testflight-qr.svg"
                    alt="QR code for the Moxie TestFlight beta"
                    width={152}
                    height={152}
                    className="h-36 w-36"
                  />
                </span>
                SCAN THE MOXIE BETA LINK
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-purple-300/60">
          ↓
        </div>
      </section>

      <section className="relative flex min-h-[88svh] flex-col items-center justify-center px-5 py-20 text-center sm:-mt-20 sm:min-h-screen sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

        <video
          className="relative z-10 mb-8 h-56 w-56 rounded-full object-cover opacity-90 shadow-[0_0_105px_rgba(168,85,247,1)] sm:h-72 sm:w-72"
          src="/videos/Pulse_loading.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="relative z-10">
          <p className="mb-4 text-xs font-semibold tracking-[0.42em] text-purple-300 sm:text-sm sm:tracking-[0.6em]">
            THE SIGNAL
          </p>

          <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
            Built to revolutionize how you interact with people around you.
          </h2>

          <p className="mx-auto max-w-xl leading-7 text-zinc-400">
            Moxie is built for the moments that apps usually miss: the people
            nearby, the group you actually want to join, and the signal that
            turns a place into a community.
          </p>
        </div>
      </section>

      <section
        id="concept"
        className="relative flex min-h-[88svh] flex-col items-center justify-center px-5 py-20 sm:min-h-screen sm:px-6"
      >
        <div className="mb-10 text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.38em] text-purple-300 sm:text-sm sm:tracking-[0.5em]">
            CONCEPT
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
            A glimpse of what&apos;s coming.
          </h2>
        </div>

        <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-purple-500/40 bg-white/5 shadow-[0_0_95px_rgba(168,85,247,0.5)] transition-all duration-500 hover:shadow-[0_0_130px_rgba(168,85,247,0.78)] sm:rounded-[2rem]">
          <video
            className="h-full w-full object-cover"
            src="/videos/Concept_video_1.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.38em] text-purple-300">
            FOUNDING BETA
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Be early to the social app built for real life.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Moxie is not trying to be for everyone. The first wave is for people
            who want social discovery to feel alive, local, mutual, and worth
            showing up for.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {betaHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-purple-500/30 bg-white/[0.04] p-7 text-center shadow-[0_0_45px_rgba(168,85,247,0.25)] backdrop-blur transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_70px_rgba(168,85,247,0.45)]"
            >
              <h3 className="mb-3 text-xl font-semibold text-purple-300">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-zinc-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-8 pt-2 sm:px-6 sm:pb-10">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.38em] text-purple-300">
            CAMPUS FIRST
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Made to start something in real life.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Moxie is a real-life icebreaker for college life. Meet nearby
            people who share your interests and values without turning every
            connection into another endless feed. Come for community, friends,
            dating, or networking, then take the signal offline.
          </p>
        </div>

        <div className="mx-auto mb-5 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {campusCommunities.map((community) => (
            <div
              key={community.mark}
              aria-label={`${community.name} community`}
              className={`campus-card campus-card-${community.theme}`}
            >
              <span
                aria-hidden="true"
                className={`campus-wordmark campus-wordmark-${community.theme}`}
              >
                {community.mark}
              </span>
              <span
                aria-hidden="true"
                className="campus-card-label"
              >
                {community.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mx-auto mb-10 max-w-2xl text-center text-[0.68rem] leading-5 text-zinc-600 sm:text-xs">
          Moxie is independent from and not endorsed by the listed universities.
        </p>

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {campusSignals.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-purple-500/30 bg-white/[0.04] p-7 text-center shadow-[0_0_45px_rgba(168,85,247,0.2)] backdrop-blur transition-all duration-300 hover:border-cyan-300/45 hover:shadow-[0_0_70px_rgba(34,211,238,0.24)]"
            >
              <h3 className="mb-3 text-xl font-semibold text-purple-300">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-zinc-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-purple-500/30 bg-white/[0.05] p-6 text-center shadow-[0_0_65px_rgba(168,85,247,0.24)] backdrop-blur sm:p-10">
          <p className="mb-3 text-xs font-semibold tracking-[0.38em] text-purple-300">
            CONTACT
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Don't let another moment pass by.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Founding access is limited to the first 10,000 beta users with
            lifetime Premium status included. Claim your spot, follow the
            build, or reach out about campus, creator, and local community
            partnerships.
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-fuchsia-600 px-7 py-4 text-center font-semibold text-white shadow-[0_0_45px_rgba(217,70,239,0.72)] transition-all duration-300 hover:bg-fuchsia-500"
            >
              Follow Instagram
            </a>

            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-300/80 bg-cyan-400/15 px-7 py-4 text-center font-semibold text-cyan-100 shadow-[0_0_35px_rgba(34,211,238,0.32)] transition-all duration-300 hover:bg-cyan-400/25"
            >
              TikTok @moxiepulse
            </a>

            <a
              href={testFlightUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-purple-500 px-7 py-4 text-center font-semibold text-purple-300 transition-all duration-300 hover:bg-purple-500/20"
            >
              Open Moxie Beta
            </a>

            <a
              href={waitlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-purple-500 px-7 py-4 text-center font-semibold text-purple-300 transition-all duration-300 hover:bg-purple-500/20"
            >
              Join Waitlist
            </a>

            <a
              href="mailto:moxiepulsesocial@gmail.com?subject=Moxie%20Contact"
              className="rounded-full border border-purple-500/70 px-7 py-4 text-center font-semibold text-purple-300 transition-all duration-300 hover:bg-purple-500/20"
            >
              Email Moxie
            </a>
          </div>

          <p className="mt-5 text-sm text-zinc-500">
            moxiepulsesocial@gmail.com
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-zinc-500">
        <p>© 2026 Moxie. All rights reserved.</p>
        <p className="mt-2">moxiesignal.com</p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <a
            href="mailto:moxiepulsesocial@gmail.com?subject=Moxie%20Contact"
            className="text-purple-300 hover:text-purple-200"
          >
            Contact
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-200"
          >
            Instagram
          </a>
          <a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-cyan-200"
          >
            TikTok @moxiepulse
          </a>
          <Link href="/privacy" className="text-purple-300 hover:text-purple-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-purple-300 hover:text-purple-200">
            Terms of Service
          </Link>
          <a
            href="mailto:moxiepulsesocial@gmail.com?subject=Moxie Contact"
            className="text-purple-300 hover:text-purple-200"
          >
            moxiepulsesocial@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
