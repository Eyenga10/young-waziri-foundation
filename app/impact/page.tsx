export default function Impact() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-14 md:pt-12 md:pb-20">

        {/* Heading */}
        <div className="mb-10 text-center md:text-left">
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
            Impact
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Lives Touched & Schools Supported
          </h1>

          <p className="mt-3 text-sm md:text-base text-slate-700 max-w-3xl">
            Every uniform, every repaired desk, every supporting teacher — these
            are real moments changing lives in classrooms across Kenya.
          </p>
        </div>

        {/* Colorful Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-sm">

          <div className="rounded-lg p-6 shadow-sm text-center bg-sky-50 border border-sky-100">
            <p className="text-4xl font-bold text-sky-700 mb-1">1,200+</p>
            <p className="text-slate-700">
              Children supported with uniforms & essentials
            </p>
          </div>

          <div className="rounded-lg p-6 shadow-sm text-center bg-emerald-50 border border-emerald-100">
            <p className="text-4xl font-bold text-emerald-700 mb-1">38+</p>
            <p className="text-slate-700">
              Schools helped through repairs & learning support
            </p>
          </div>

          <div className="rounded-lg p-6 shadow-sm text-center bg-amber-50 border border-amber-100">
            <p className="text-4xl font-bold text-amber-700 mb-1">160+</p>
            <p className="text-slate-700">
              Teachers uplifted through training & welfare programs
            </p>
          </div>
        </div>

        {/* Impact Highlights */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-lg p-6 shadow-sm mb-12">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            🌟 Impact Highlights
          </h2>

          <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
            <li>Uniforms delivered in remote public schools restoring dignity and confidence.</li>
            <li>Classroom repairs improving concentration and academic performance.</li>
            <li>Teachers receiving counselling and wellness support.</li>
            <li>Sports kits and tournaments building discipline and teamwork.</li>
            <li>Emergency assistance helping learners stay in school after crises.</li>
          </ul>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 text-sm">

          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              👧 A Child Back in Class
            </h2>
            <p className="text-slate-700 mb-2">
              Many learners stay home because they lack uniforms. After receiving new
              sets and shoes, children who once missed classes now walk confidently
              into school every morning.
            </p>
            <p className="text-xs text-slate-500">
              *This is a representative story to be replaced with real updates.*
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              🏫 A Classroom Transformed
            </h2>
            <p className="text-slate-700 mb-2">
              Before repairs, desks were broken and roofs leaked. After simple upgrades,
              the same classroom became a bright, inspiring space for learners and teachers.
            </p>
            <p className="text-xs text-slate-500">
              *This example can later be replaced with real school updates.*
            </p>
          </div>
        </div>

        {/* Closing Note */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-lg p-6 shadow-sm text-sm text-slate-700 mb-12">
          <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
            Measuring Impact Together
          </h2>
          <p className="mb-2">
            As Young Waziri Foundation expands its reach, we continue documenting 
            real stories, statistics, and school improvements across Kenya.
          </p>
          <p>
            Every uniform, desk or teacher-support session creates a ripple of opportunity
            that strengthens entire communities.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/donate"
            className="inline-flex px-6 py-3 rounded-md bg-sky-600 text-white text-sm font-semibold hover:bg-sky-500 transition shadow"
          >
            Support Our Work
          </a>
        </div>

      </section>
    </main>
  );
}
