import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative pt-20 md:pt-28 pb-20 text-white">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Young Waziri Foundation"
            fill
            className="object-cover w-full h-full"
            priority
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2F395B]/85 to-[#3E476C]/85" />
        </div>

        {/* Foreground Content */}
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          {/* Foundation Name */}
          <h1
            className="mt-6 text-4xl md:text-5xl font-semibold leading-snug"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Young Waziri Foundation
          </h1>

          {/* Mission Statement */}
          <p className="mt-4 text-base md:text-lg text-slate-200 max-w-2xl mx-auto">
            Giving every child in Kenya the dignity to learn, grow and succeed.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/programs"
              className="px-6 py-3 rounded-md bg-white text-[#2F395B] font-semibold hover:bg-slate-100 transition"
            >
              Our Programs
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-md border border-white text-white font-semibold hover:bg-white/10 transition"
            >
              Contact Us
            </Link>

            <Link
              href="/donate"
              className="px-6 py-3 rounded-md bg-sky-600 text-white font-semibold hover:bg-sky-500 transition shadow-lg"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            What We Do
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
            Young Waziri Foundation supports school children, teachers and
            communities across Kenya through practical, dignity-centered
            programs in education, welfare and youth development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-slate-900 mb-2">
              Uniforms &amp; Basics
            </h3>
            <p className="text-slate-700">
              Providing decent school uniforms, shoes and essentials so no child
              stays at home or feels ashamed because of what they wear.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-slate-900 mb-2">
              Learning Environments
            </h3>
            <p className="text-slate-700">
              Supporting schools with desks, classroom repairs, sanitation and
              basic infrastructure for safe, focused learning.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-slate-900 mb-2">
              Teachers &amp; Youth Support
            </h3>
            <p className="text-slate-700">
              Standing with teachers through welfare, counselling, financial
              education and youth programs in sports, mentorship and life skills.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE HIGHLIGHTS SECTION */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-8">
          Our Work in Pictures
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="relative h-48 md:h-56 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/gallery1.jpg"
              alt="Young Waziri Foundation"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="relative h-48 md:h-56 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/gallery2.jpg"
              alt="Young Waziri Foundation"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="relative h-48 md:h-56 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/gallery3.jpg"
              alt="Young Waziri Foundation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/gallery"
            className="text-sky-700 font-semibold hover:underline text-sm md:text-base"
          >
            More Photos →
          </Link>
        </div>
      </section>
    </main>
  );
}
