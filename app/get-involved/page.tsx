import Link from "next/link";

export default function GetInvolved() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-14 md:pt-12 md:pb-20">
        {/* Heading */}
        <div className="mb-10 text-center md:text-left">
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
            Get Involved
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Stand With Learners & Teachers
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-700 max-w-3xl">
            Whether you are an individual, school, company or community group,
            there is a way to support Young Waziri Foundation&apos;s work and
            help children learn with dignity.
          </p>
        </div>

        {/* Ways to help */}
        <div className="grid md:grid-cols-2 gap-8 mb-10 text-sm">
          {/* Donate */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              💙 Donate
            </h2>
            <p className="text-slate-700 mb-3">
              Financial contributions help us respond quickly to the most urgent
              needs in schools – uniforms, desks, repairs, learning materials
              and basic welfare.
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>One-off gifts to support a specific school or program</li>
              <li>Monthly contributions to sustain ongoing work</li>
              <li>Group fundraising through schools, SACCOs or churches</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-md bg-sky-700 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-800 transition"
              >
                Go to Donate Page
              </Link>
            </div>
          </div>

          {/* Partner */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              🤝 Partner With Us
            </h2>
            <p className="text-slate-700 mb-3">
              We welcome partnerships with schools, NGOs, companies and other
              institutions that care about education and community wellbeing.
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Corporate social responsibility (CSR) initiatives</li>
              <li>Joint school improvement or sports programs</li>
              <li>In-kind support such as materials or logistics</li>
            </ul>
          </div>

          {/* Volunteer */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              🙋 Volunteer
            </h2>
            <p className="text-slate-700 mb-3">
              Time and skills are just as valuable as money. Volunteers help us
              organise events, support mentorship and coordinate school outreach.
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Support during uniform distributions and sports days</li>
              <li>Mentorship sessions and life-skills talks</li>
              <li>Professional skills such as counselling or training</li>
            </ul>
          </div>

          {/* In-Kind */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              🎒 In-Kind Support
            </h2>
            <p className="text-slate-700 mb-3">
              We also accept non-financial support that can be used in the
              schools we serve.
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>New or gently used uniforms and school shoes</li>
              <li>Sports equipment, books and stationery</li>
              <li>Building materials for small repairs and upgrades</li>
            </ul>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-sm text-slate-700 text-center md:text-left">
          <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
            Ready to Get Involved?
          </h2>
          <p className="mb-3">
            If you would like to donate, partner, volunteer or discuss a
            specific idea, please get in touch with us. Together, we can make
            school a place of dignity and opportunity for more children.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-800 transition"
            >
              Contact the Foundation
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-md border border-sky-700 px-5 py-2.5 text-sm font-semibold text-sky-700 hover:bg-sky-50 transition"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
