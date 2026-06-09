import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Moxie",
  description:
    "Moxie Terms of Service for the mobile app, beta features, and related services.",
};

const sections = [
  {
    title: "1. Eligibility",
    paragraphs: [
      "You must be at least 18 years old to use Moxie. By using the Service, you confirm that you can legally enter into this agreement and will comply with applicable laws and these Terms.",
    ],
  },
  {
    title: "2. Purpose of the Service",
    paragraphs: [
      "Moxie is a social discovery platform designed to support real-world connection, community, events, and optional companion experiences. Some features may be experimental, limited, or available only during beta periods.",
    ],
  },
  {
    title: "3. Accounts",
    paragraphs: [
      "You are responsible for keeping your account secure and for all activity that occurs under your account. You may not impersonate others, create misleading profiles, attempt unauthorized access, or use Moxie for unsafe, illegal, or harmful behavior.",
    ],
  },
  {
    title: "4. User Content",
    paragraphs: [
      "You retain ownership of content you upload, including profile information, photos, event posts, messages, and related materials. By uploading content, you grant Moxie permission to display and operate that content as needed to provide the Service.",
      "You may not upload illegal, hateful, harassing, explicit, exploitative, misleading, or rights-infringing content. Moxie may remove content or restrict accounts that violate these Terms.",
    ],
  },
  {
    title: "5. Location, Events, and Interactions",
    paragraphs: [
      "Some Moxie features may use location or proximity-based signals when you enable them. You may adjust permissions and privacy controls through the app and iOS Settings.",
      "Users are responsible for their own interactions, plans, meetings, and events. Moxie does not guarantee user identity, compatibility, event quality, or personal safety.",
    ],
  },
  {
    title: "6. Beta and Companion Features",
    paragraphs: [
      "Beta features and companion experiences are provided as available and may change, pause, or stop at any time. Moxie is not responsible for hardware compatibility issues, connection interruptions, or third-party service limitations.",
    ],
  },
  {
    title: "7. Privacy and Safety",
    paragraphs: [
      "Your use of Moxie is also governed by the Privacy Policy. Reports, blocks, moderation signals, and safety tools may be used to review unsafe behavior and protect the community.",
    ],
  },
  {
    title: "8. Termination",
    paragraphs: [
      "Moxie may suspend, restrict, or terminate accounts that violate these Terms, create risk for others, misuse the Service, or harm the platform or community.",
    ],
  },
  {
    title: "9. Disclaimers",
    paragraphs: [
      "Moxie is provided as is and as available. We do not guarantee uninterrupted availability, error-free functionality, successful matches, specific outcomes, or access to every feature.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, Moxie and its creators are not liable for indirect damages, lost profits, personal disputes, event-related incidents, data loss, device issues, or other damages arising from use of the Service.",
    ],
  },
  {
    title: "11. Changes to These Terms",
    paragraphs: [
      "We may update these Terms periodically. Continued use of Moxie after updates means you accept the revised Terms.",
    ],
  },
  {
    title: "12. Contact",
    paragraphs: [
      "For questions about these Terms, contact moxiepulsesocial@gmail.com.",
    ],
  },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-6 py-10 sm:py-14">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/40 to-black" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <nav className="mb-14 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logos/App_Icon.png"
                alt="Moxie"
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl shadow-[0_0_35px_rgba(168,85,247,0.9)]"
              />
              <span className="hidden tracking-[0.35em] text-sm font-semibold sm:inline">
                MOXIE
              </span>
            </Link>

            <Link
              href="/"
              className="rounded-full border border-purple-500 px-5 py-2 text-sm text-purple-300 transition-all duration-300 hover:bg-purple-500/20"
            >
              Home
            </Link>
          </nav>

          <header className="mb-8">
            <p className="mb-4 tracking-[0.45em] text-sm font-semibold text-purple-300">
              TERMS OF SERVICE
            </p>

            <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl">
              Moxie Terms of Service
            </h1>

            <p className="mb-5 text-sm font-semibold text-purple-300">
              Last Updated: June 2026
            </p>

            <p className="max-w-3xl text-lg text-zinc-300">
              These Terms govern access to and use of the Moxie mobile app,
              beta features, companion experiences, websites, and related
              services.
            </p>
          </header>

          <div className="grid gap-5">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-3xl border border-purple-500/25 bg-white/[0.06] p-6 shadow-[0_0_45px_rgba(168,85,247,0.18)] backdrop-blur"
              >
                <h2 className="mb-3 text-xl font-semibold text-white">
                  {section.title}
                </h2>

                <div className="space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-zinc-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <footer className="mt-12 border-t border-white/10 pt-8 text-sm text-zinc-500">
            <p>© 2026 Moxie. All rights reserved.</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/privacy" className="text-purple-300 hover:text-purple-200">
                Privacy Policy
              </Link>
              <a
                href="mailto:moxiepulsesocial@gmail.com?subject=Moxie Terms"
                className="text-purple-300 hover:text-purple-200"
              >
                moxiepulsesocial@gmail.com
              </a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
