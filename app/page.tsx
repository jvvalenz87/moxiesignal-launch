import Image from "next/image";
import Link from "next/link";

const testFlightUrl = "https://testflight.apple.com/join/Hjwm71W9";
const waitlistUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfbmlMxTN067WTq2L3zGA3CW6s6ZbmqvUshM3nZv146yHXx-g/viewform?usp=publish-editor";
const instagramUrl = "https://www.instagram.com/moxiepulsesocial/";
const tiktokUrl = "https://www.tiktok.com/@moxiepulse";

const signalPoints = [
  "Real connections",
  "No swiping",
  "Nearby matches",
  "Find your tribe",
];

const betaHighlights = [
  {
    title: "Private Beta",
    body: "Step into the first invite wave before the public launch and help shape how Moxie feels in real places.",
  },
  {
    title: "Real-World Energy",
    body: "Discover nearby people, events, and communities that match your vibe without getting trapped in another scroll.",
  },
  {
    title: "Founder Perks",
    body: "Founding members are first in line for launch rewards, Premium access windows, and early feature drops.",
  },
  {
    title: "Early Access",
    body: "Try proximity matching, group signals, and Moxie Pulse concepts while the next layer of social connection is being built.",
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
              Join Beta
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
            PRIVATE BETA
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

          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2">
            {signalPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-zinc-100 shadow-[0_0_22px_rgba(34,211,238,0.18)] backdrop-blur sm:text-sm"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
            <a
              href={testFlightUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-purple-600 px-7 py-4 text-center font-semibold shadow-[0_0_45px_rgba(168,85,247,0.85)] transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_0_65px_rgba(168,85,247,1)] sm:px-8"
            >
              Join the iPhone Beta
            </a>

            <a
              href={waitlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-purple-500 px-7 py-4 text-center font-semibold text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.45)] transition-all duration-300 hover:bg-purple-500/20 hover:shadow-[0_0_50px_rgba(168,85,247,0.75)] sm:px-8"
            >
              Join the Waitlist
            </a>
          </div>

          <div className="mx-auto mt-5 grid w-full max-w-sm grid-cols-2 gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-fuchsia-300/70 bg-fuchsia-500/15 px-3 py-3 text-center text-xs font-semibold text-fuchsia-100 shadow-[0_0_35px_rgba(217,70,239,0.35)] transition-all duration-300 hover:bg-fuchsia-500/25 hover:shadow-[0_0_55px_rgba(217,70,239,0.55)] sm:text-sm"
            >
              Instagram
            </a>

            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-300/70 bg-cyan-400/15 px-3 py-3 text-center text-xs font-semibold text-cyan-100 shadow-[0_0_35px_rgba(34,211,238,0.35)] transition-all duration-300 hover:bg-cyan-400/25 hover:shadow-[0_0_55px_rgba(34,211,238,0.55)] sm:text-sm"
            >
              TikTok @moxiepulse
            </a>
          </div>

          <a
            href="#concept"
            className="mt-5 inline-flex text-sm font-semibold text-purple-300 underline-offset-4 transition-colors hover:text-purple-200 hover:underline"
          >
            Watch Concept
          </a>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-zinc-400">
            Requires Apple TestFlight. Features may change as we learn from
            early testers.
          </p>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-purple-500/40 bg-purple-500/10 px-5 py-5 shadow-[0_0_55px_rgba(168,85,247,0.35)] backdrop-blur sm:px-6">
            <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:text-left">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-[0.28em] text-purple-300 sm:text-sm sm:tracking-[0.35em]">
                  FOUNDING ACCESS
                </p>

                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Join the first wave, thoughtfully.
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Tap the beta link or scan from your iPhone to join the
                  current TestFlight. The waitlist stays open for later invite
                  waves and launch-day founder updates.
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
                SCAN FROM IPHONE
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
            Discover the new way to interact with people around you.
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
            The next wave of social connection should feel alive, local, and
            mutual. Moxie is opening carefully so the first community can help
            define what comes next.
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

      <section id="contact" className="px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-purple-500/30 bg-white/[0.05] p-6 text-center shadow-[0_0_65px_rgba(168,85,247,0.24)] backdrop-blur sm:p-10">
          <p className="mb-3 text-xs font-semibold tracking-[0.38em] text-purple-300">
            CONTACT
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Join the founding circle.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Claim your beta spot, follow the build, or reach out about campus,
            creator, and local community partnerships. The first wave is where
            Moxie starts to feel inevitable.
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
            <a
              href="mailto:moxiepulsesocial@gmail.com?subject=Moxie%20Contact"
              className="rounded-full bg-purple-600 px-7 py-4 text-center font-semibold text-white shadow-[0_0_45px_rgba(168,85,247,0.72)] transition-all duration-300 hover:bg-purple-500"
            >
              Email Moxie
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-fuchsia-300/80 bg-fuchsia-500/15 px-7 py-4 text-center font-semibold text-fuchsia-100 shadow-[0_0_35px_rgba(217,70,239,0.32)] transition-all duration-300 hover:bg-fuchsia-500/25"
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
              Join Beta
            </a>

            <a
              href={waitlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-purple-500 px-7 py-4 text-center font-semibold text-purple-300 transition-all duration-300 hover:bg-purple-500/20"
            >
              Join Waitlist
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
