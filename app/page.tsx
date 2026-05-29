export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          src="/videos/Concept_video_2.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/60" />

        <nav className="absolute top-0 left-0 z-10 flex w-full items-center justify-between px-8 py-6">
          <div className="flex items-center gap-3">
            <img
              src="/logos/App_Icon.png"
              alt="Moxie"
              className="h-10 w-10 rounded-xl shadow-[0_0_35px_rgba(168,85,247,0.9)]"
            />
            <span className="tracking-[0.35em] text-sm font-semibold">
              MOXIE
            </span>
          </div>

          <a
            href="mailto:moxiepulsesocial@gmail.com?subject=Moxie Contact"
            className="rounded-full border border-purple-500 px-5 py-2 text-sm text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:bg-purple-500/20"
          >
            Contact
          </a>
        </nav>

        <div className="relative z-10 max-w-4xl">
          <img
            src="/logos/App_Icon.png"
            alt="Moxie Logo"
            className="mx-auto mb-8 h-32 w-32 rounded-[2rem] shadow-[0_0_90px_rgba(168,85,247,1)]"
          />

          <p className="mb-4 tracking-[0.55em] text-sm text-purple-300">
            LAUNCHING SOON
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            DISCOVER YOUR{" "}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
              SIGNAL
            </span>
          </h1>

          <p className="mx-auto mb-6 max-w-2xl text-lg text-zinc-300 md:text-xl">
            A new way to connect through proximity, shared interests,
            and real-world experiences.
          </p>

          <p className="mx-auto mb-10 max-w-xl text-sm text-purple-200">
            Want beta access? Email us and we’ll add you to the early list.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:moxiepulsesocial@gmail.com?subject=Moxie Early Access"
              className="rounded-full bg-purple-600 px-8 py-4 font-semibold shadow-[0_0_40px_rgba(168,85,247,0.75)] hover:bg-purple-500"
            >
              Request Early Access
            </a>

            <a
              href="#concept"
              className="rounded-full border border-purple-500 px-8 py-4 font-semibold text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.45)] hover:bg-purple-500/20"
            >
              Watch Concept
            </a>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

        <video
          className="relative z-10 mb-8 h-72 w-72 rounded-full object-cover opacity-90 shadow-[0_0_120px_rgba(168,85,247,1)]"
          src="/videos/Pulse_loading.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="relative z-10">
          <p className="mb-4 tracking-[0.6em] text-sm text-purple-300">
            COMING SOON
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-6xl">
            Something powerful is on the way.
          </h2>

          <p className="mx-auto max-w-xl text-zinc-400">
            Moxie is building a new layer for discovery, connection,
            and real-world social energy — with Moxie Pulse as the wearable
            signal companion.
          </p>
        </div>
      </section>

      <section
        id="concept"
        className="relative flex min-h-screen flex-col items-center justify-center px-6"
      >
        <div className="mb-10 text-center">
          <p className="mb-4 tracking-[0.5em] text-sm text-purple-300">
            CONCEPT
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            A glimpse of the signal.
          </h2>
        </div>

        <div className="w-full max-w-5xl overflow-hidden rounded-[2rem] border border-purple-500/40 bg-white/5 shadow-[0_0_120px_rgba(168,85,247,0.55)]">
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

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-4">
          {["Discovery", "Connection", "Experiences", "Signal"].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-purple-500/30 bg-white/[0.04] p-8 text-center shadow-[0_0_45px_rgba(168,85,247,0.25)] backdrop-blur"
            >
              <h3 className="mb-3 text-xl font-semibold text-purple-300">
                {item}
              </h3>
              <p className="text-sm text-zinc-400">
                Part of a new way to connect in the real world.
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-zinc-500">
        <p>© 2026 Moxie. All rights reserved.</p>
        <p className="mt-2">moxiepulse.social</p>
        <p className="mt-1">
          <a
            href="mailto:moxiepulsesocial@gmail.com?subject=Moxie Contact"
            className="text-purple-300 hover:text-purple-200"
          >
            moxiepulsesocial@gmail.com
          </a>
        </p>
      </footer>
    </main>
  );
}
