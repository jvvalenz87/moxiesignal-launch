import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Moxie",
  description:
    "Moxie Privacy Policy for the mobile app, beta features, wearable integrations, and related services.",
};

const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "Moxie collects the information needed to create and operate your account, including your email address, profile details, interests, social modes, age, profile photos, event activity, groups, messages, glows, blocked users, reports, and app settings.",
      "When you enable location features, Moxie may process approximate location for nearby discovery and event features. Trusted group features may use more precise location when you choose settings that allow it.",
      "During beta testing, Moxie may collect app version, build number, device model, iOS version, crash signals, feedback, and session diagnostics to improve reliability.",
    ],
  },
  {
    title: "2. How We Use Information",
    paragraphs: [
      "We use your information to create your profile, help you discover compatible people and nearby events, operate group and glow features, sync supported wearable experiences, provide support, investigate reports, prevent abuse, and improve the Service.",
    ],
  },
  {
    title: "3. What Other Users Can See",
    paragraphs: [
      "Other users may see information you choose to make part of your Moxie profile or activity, such as your display name, profile photos, interests, bio, compatibility signals, event participation, groups, glows, and approximate proximity when enabled.",
      "Privacy and safety settings let you adjust discoverability, compatibility visibility, public proximity behavior, group location precision, passive signals, and wearable behavior.",
    ],
  },
  {
    title: "4. Service Providers",
    paragraphs: [
      "Moxie uses service providers to operate the app, including Firebase services for authentication, database storage, and media storage. Beta feedback may also be handled through Apple TestFlight feedback tools and support forms you choose to submit.",
      "These providers process information for app operation, security, diagnostics, support, and infrastructure.",
    ],
  },
  {
    title: "5. Safety, Reports, and Legal Requests",
    paragraphs: [
      "Reports, blocks, and moderation signals may be used to review unsafe behavior, remove content, restrict accounts, and protect the community.",
      "We may preserve or disclose information if required by law, to respond to valid legal process, to enforce our Terms, or to protect users, Moxie, or others from harm.",
    ],
  },
  {
    title: "6. Data Choices",
    paragraphs: [
      "You can change app permissions through iOS Settings and update Moxie privacy controls from Account.",
      "You can delete your profile from Account. Deletion removes your account from Moxie and starts cleanup of profile, media, notifications, discovery, groups, event, and related account data.",
    ],
  },
  {
    title: "7. Children",
    paragraphs: [
      "Moxie is for people who are at least 18 years old. We do not knowingly allow children to create accounts.",
    ],
  },
  {
    title: "8. Contact",
    paragraphs: [
      "For privacy questions, support, deletion requests, or safety concerns, contact moxiepulsesocial@gmail.com.",
    ],
  },
];

export default function PrivacyPolicy() {
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
              <span className="tracking-[0.35em] text-sm font-semibold">
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
              PRIVACY POLICY
            </p>

            <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl">
              Moxie Privacy Policy
            </h1>

            <p className="mb-5 text-sm font-semibold text-purple-300">
              Last Updated: June 2026
            </p>

            <p className="max-w-3xl text-lg text-zinc-300">
              This Privacy Policy explains how Moxie collects, uses, shares,
              and protects information when you use the Moxie mobile app, beta
              features, wearable integrations, and related services.
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
              <Link href="/terms" className="text-purple-300 hover:text-purple-200">
                Terms of Service
              </Link>
              <a
                href="mailto:moxiepulsesocial@gmail.com?subject=Moxie Privacy"
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
