import Image from "next/image";
import Link from "next/link";

const testFlightUrl = "https://testflight.apple.com/join/Hjwm71W9";
const testFlightAppUrl = "https://apps.apple.com/us/app/testflight/id899247664";
const siteUrl = "moxiepulse.social";
const waitlistUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfbmlMxTN067WTq2L3zGA3CW6s6ZbmqvUshM3nZv146yHXx-g/viewform?usp=publish-editor";
const instagramUrl = "https://www.instagram.com/moxiepulsesocial/";
const tiktokUrl = "https://www.tiktok.com/@moxiepulse";

const betaHighlights = [
  {
    title: "Values-Based Discovery",
    body: "Meet people through more than proximity. Shared values, interests, goals, and intentions help make the first hello feel less random.",
  },
  {
    title: "Groups That Move",
    body: "Create circles for study groups, concert crews, gaming squads, faith community, campus friends, or the people you already trust.",
  },
  {
    title: "Founder Perks",
    body: "The first 10,000 beta users get lifetime Premium founder status, plus first access to launch rewards and early feature drops.",
  },
  {
    title: "Nearby Compatibility",
    body: "Get early access to proximity matching, group signals, and notifications that show who is nearby and what you have in common.",
  },
];

const campusSignals = [
  {
    title: "Values-forward by design",
    body: "Faith, purpose, lifestyle, interests, and goals can all become part of the signal for students, alumni, and Valley locals who want aligned community.",
  },
  {
    title: "Community before clout",
    body: "Moxie is for building circles that actually do things together: study after class, show up to events, game online, or make plans nearby.",
  },
  {
    title: "Friends, networking, and dating",
    body: "Choose what you are open to, then discover compatible people nearby when the purpose and overlap are mutual.",
  },
];

const howMoxieWorks = [
  {
    eyebrow: "Values",
    title: "Know what matters before you say hey.",
    body: "Moxie helps people connect around values, interests, local life, faith, goals, hobbies, personality, and the kind of connection they are open to.",
  },
  {
    eyebrow: "Groups",
    title: "Make real circles easy to gather.",
    body: "Create groups like Group Study, Concert Crew, Gaming Squad, Campus Friends, or Faith Community so your people can coordinate faster.",
  },
  {
    eyebrow: "Signals",
    title: "Send a quick signal when plans are forming.",
    body: "A group signal lets your circle know what is happening now, whether you are studying, going out, heading to an event, or jumping online.",
  },
  {
    eyebrow: "Nearby",
    title: "Find compatible people around you.",
    body: "Moxie can notify you when someone nearby has meaningful overlap with you, then show the values, interests, or intentions you share.",
  },
];

const groupIdeas = [
  "Group Study",
  "Concert Crew",
  "Gaming Squad",
  "Campus Friends",
  "Faith Community",
  "Networking Circle",
];

const connectionModes = [
  "Community",
  "Friends",
  "Networking",
  "Dating",
];

const valleyCommunities = [
  "Phoenix",
  "Scottsdale",
  "Tempe",
  "Mesa",
  "Gilbert",
  "Surrounding areas",
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

const quickPeekScreens = [
  {
    title: "Discover signals nearby",
    body: "See compatible people and light signals around real places.",
    src: "/screenshots/signal-map.png",
    alt: "Moxie Signal map view showing nearby compatible people",
    width: 1170,
    height: 2532,
  },
  {
    title: "Send a group pulse",
    body: "Let your circle know when something is happening now.",
    src: "/screenshots/group-pulse.png",
    alt: "Moxie Group Pulse screen for sending a shared wearable signal",
    width: 1206,
    height: 2622,
  },
  {
    title: "Find real overlap",
    body: "Compatibility, mutual glows, and quick signals keep discovery intentional.",
    src: "/screenshots/compatible-people.png",
    alt: "Moxie compatibility profile screen with mutual glow status",
    width: 1206,
    height: 2622,
  },
];

function AppleMark() {
  return (
    <Image
      aria-hidden="true"
      src="/logos/apple-logo.png"
      alt=""
      width={256}
      height={256}
      className="h-4 w-4 shrink-0 object-contain drop-shadow-[0_0_4px_rgba(255,255,255,0.65)] sm:h-5 sm:w-5"
    />
  );
}

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
              href={waitlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.55)] transition-all duration-300 hover:bg-purple-500 sm:px-5 sm:text-sm"
            >
              Join Waitlist
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
            Real connections, no endless swiping. Moxie helps you meet nearby
            people through shared values, join the circles that fit your life,
            and turn shared places into actual moments.
          </p>

          <p className="mx-auto max-w-xl text-sm font-semibold leading-6 text-purple-200 sm:text-base">
            Built for community, friends, networking, and dating. Campus-first
            in Arizona, and already growing across Phoenix, Scottsdale, Tempe,
            Mesa, Gilbert, and the surrounding Valley.
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
            <a
              href={testFlightUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-8 py-4 text-center text-base font-bold text-white shadow-[0_0_55px_rgba(168,85,247,0.95)] transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_0_75px_rgba(168,85,247,1)] sm:px-10 sm:text-lg"
            >
              <AppleMark />
              <span>Join the Moxie Beta</span>
            </a>
          </div>

          <p className="mx-auto mt-4 max-w-xl text-sm font-semibold leading-6 text-zinc-300">
            Opens in Apple TestFlight. iPhone required. No invite code needed.
          </p>

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
            New to TestFlight? Install{" "}
            <a
              href={testFlightAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan-200 underline-offset-4 transition-colors hover:text-cyan-100 hover:underline"
            >
              Apple&apos;s free TestFlight app
            </a>
            , then tap Join the Moxie Beta again.
          </p>

          <p className="mx-auto mt-4 max-w-2xl rounded-2xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-3 text-sm font-semibold leading-6 text-cyan-100">
            Seeing a code screen? Close TestFlight, return to {siteUrl},
            and tap Join the Moxie Beta again.
          </p>

          <p className="mx-auto mt-3 max-w-2xl rounded-2xl border border-emerald-300/30 bg-emerald-400/10 px-4 py-3 text-sm font-semibold leading-6 text-emerald-100">
            New profile signups are open again after a Firebase Storage access
            issue was fixed.
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
                  Tap Join the Moxie Beta or scan from your iPhone to claim
                  founding access in the current TestFlight.
                </p>

                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  If TestFlight asks for a code, come back here and use the
                  Moxie beta link instead.
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
                SCAN TO JOIN THE BETA
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-purple-300/60">
          ↓
        </div>
      </section>

      <section className="relative px-5 py-16 sm:px-6 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.38em] text-cyan-200">
              QUICK PEEK
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              See Moxie before you join.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
              Real screens from the beta: nearby discovery, group pulses, and
              compatibility.
            </p>
          </div>

          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
            {quickPeekScreens.map((screen, index) => (
              <article
                key={screen.title}
                className={`group w-[78vw] max-w-[21rem] shrink-0 snap-center rounded-3xl border border-white/10 bg-white/[0.045] p-3 shadow-[0_0_50px_rgba(0,0,0,0.3)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 md:w-auto md:max-w-none md:shrink ${
                  index === 1 ? "md:mt-8" : ""
                }`}
              >
                <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-black">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={screen.width}
                    height={screen.height}
                    sizes="(max-width: 768px) 86vw, 30vw"
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="px-2 pb-2 pt-5 text-center">
                  <h3 className="text-lg font-bold text-white">
                    {screen.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {screen.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[88svh] flex-col items-center justify-center px-5 py-20 text-center sm:min-h-screen sm:px-6">
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
            Built to make nearby people feel less unknown.
          </h2>

          <p className="mx-auto max-w-xl leading-7 text-zinc-400">
            Moxie is built for the moments that apps usually miss: the people
            nearby, the group you actually want to join, and the signal that
            turns a place into a community.
          </p>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 text-left md:grid-cols-3">
            <div className="rounded-3xl border border-cyan-300/25 bg-cyan-400/10 p-6 shadow-[0_0_44px_rgba(34,211,238,0.16)] backdrop-blur">
              <p className="mb-3 text-xs font-bold tracking-[0.28em] text-cyan-200">
                VALUES
              </p>
              <h3 className="text-xl font-bold text-white">
                Shared beliefs, goals, and interests.
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Discover people who line up with what matters to you, not just
                who happens to be on the same feed.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-300/25 bg-emerald-400/10 p-6 shadow-[0_0_44px_rgba(52,211,153,0.14)] backdrop-blur">
              <p className="mb-3 text-xs font-bold tracking-[0.28em] text-emerald-200">
                GROUPS
              </p>
              <h3 className="text-xl font-bold text-white">
                Circles for the people you trust.
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Build the crews you actually move with: study, campus friends,
                events, games, faith groups, and more.
              </p>
            </div>

            <div className="rounded-3xl border border-amber-300/25 bg-amber-400/10 p-6 shadow-[0_0_44px_rgba(251,191,36,0.13)] backdrop-blur">
              <p className="mb-3 text-xs font-bold tracking-[0.28em] text-amber-200">
                NEARBY
              </p>
              <h3 className="text-xl font-bold text-white">
                Context when someone compatible is close.
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Get a clearer reason to say hello when Moxie finds meaningful
                overlap around you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="values"
        className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-24"
      >
        <div className="moxie-context-bg absolute inset-0" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.38em] text-cyan-200">
              VALUES / GROUPS / NEARBY
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Moxie gives real life a little more context.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
              The app stays simple on purpose: show what you care about, choose
              what kind of connection you are open to, gather your groups, and
              notice compatible people nearby when the overlap is worth knowing.
            </p>
          </div>

          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0">
            {howMoxieWorks.map((item, index) => (
              <article
                key={item.title}
                className="w-[78vw] max-w-[20rem] shrink-0 snap-center rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_0_44px_rgba(0,0,0,0.22)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 lg:w-auto lg:max-w-none lg:shrink"
              >
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-black text-black">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mb-3 text-xs font-bold tracking-[0.24em] text-cyan-200">
                  {item.eyebrow}
                </p>
                <h3 className="text-xl font-bold leading-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-emerald-300/25 bg-emerald-400/10 p-6 shadow-[0_0_50px_rgba(52,211,153,0.12)] backdrop-blur sm:p-8">
              <p className="mb-3 text-xs font-bold tracking-[0.28em] text-emerald-200">
                GROUP IDEAS
              </p>
              <h3 className="text-2xl font-bold text-white">
                Create groups for the circles you already live in.
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {groupIdeas.map((group) => (
                  <span
                    key={group}
                    className="rounded-full border border-emerald-200/30 bg-black/35 px-4 py-2 text-sm font-semibold text-emerald-100"
                  >
                    {group}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-amber-300/25 bg-amber-400/10 p-6 shadow-[0_0_50px_rgba(251,191,36,0.12)] backdrop-blur sm:p-8">
              <p className="mb-3 text-xs font-bold tracking-[0.28em] text-amber-200">
                CONNECTION MODES
              </p>
              <h3 className="text-2xl font-bold text-white">
                Use one app for friendship, community, networking, and dating.
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Moxie can show who is nearby and what you have in common, but
                the connection should still feel mutual, intentional, and in
                your control.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                {connectionModes.map((mode) => (
                  <span
                    key={mode}
                    className="rounded-2xl border border-amber-200/25 bg-black/35 px-3 py-3 text-center text-sm font-bold text-amber-100"
                  >
                    {mode}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
            The first wave is for students, alumni, and local community builders
            who want social discovery to feel values-driven, local, mutual, and
            worth showing up for.
          </p>
        </div>

        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-6 sm:px-6 lg:mx-auto lg:grid lg:max-w-5xl lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0">
          {betaHighlights.map((item) => (
            <div
              key={item.title}
              className="w-[78vw] max-w-[20rem] shrink-0 snap-center rounded-3xl border border-purple-500/30 bg-white/[0.04] p-7 text-center shadow-[0_0_45px_rgba(168,85,247,0.25)] backdrop-blur transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_70px_rgba(168,85,247,0.45)] lg:w-auto lg:max-w-none lg:shrink"
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
            Campus first, but not campus only.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Moxie is not only for current university students or alumni. It is
            for everyone looking for real connections: people who share your
            interests, values, and intentions without turning every connection
            into another endless feed.
          </p>
          <div className="mx-auto mt-6 max-w-3xl rounded-3xl border border-cyan-300/25 bg-cyan-400/10 px-5 py-5 shadow-[0_0_48px_rgba(34,211,238,0.14)] backdrop-blur sm:px-7">
            <p className="text-sm font-semibold leading-6 text-cyan-100 sm:text-base">
              The Moxie community is already growing around the Valley: Phoenix,
              Scottsdale, Tempe, Mesa, Gilbert, and surrounding areas.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {valleyCommunities.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-cyan-200/25 bg-black/35 px-3 py-1.5 text-xs font-bold text-cyan-100"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
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

        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-6 sm:px-6 md:mx-auto md:grid md:max-w-5xl md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {campusSignals.map((item) => (
            <div
              key={item.title}
              className="w-[78vw] max-w-[20rem] shrink-0 snap-center rounded-3xl border border-purple-500/30 bg-white/[0.04] p-7 text-center shadow-[0_0_45px_rgba(168,85,247,0.2)] backdrop-blur transition-all duration-300 hover:border-cyan-300/45 hover:shadow-[0_0_70px_rgba(34,211,238,0.24)] md:w-auto md:max-w-none md:shrink"
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
              className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-500 px-7 py-4 text-center font-semibold text-purple-300 transition-all duration-300 hover:bg-purple-500/20"
            >
              <AppleMark />
              <span>Join the Moxie Beta</span>
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
        <p className="mt-2">{siteUrl}</p>
        <a
          href={waitlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-5 inline-flex rounded-full border border-purple-500/70 px-6 py-3 text-sm font-semibold text-purple-300 transition-all duration-300 hover:bg-purple-500/20 hover:text-purple-200"
        >
          Join the Waitlist
        </a>
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
