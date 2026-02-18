export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-14 md:pt-12 md:pb-16">

        {/* Heading */}
        <div className="mb-8 text-center md:text-left">
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
            About Us
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Young Waziri Foundation
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-700 max-w-3xl">
            Young Waziri Foundation is a community-rooted initiative dedicated to
            ensuring children in Kenya can attend school with dignity, safety and
            hope. We work in underserved communities supporting learners, teachers
            and schools through uniforms, improved learning environments, teacher
            welfare and youth development.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Our Mission
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              To give every child in Kenya the dignity to learn, grow and succeed
              by supporting schools with uniforms, safe classrooms, empowered
              teachers and positive youth programs.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Our Vision
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              A Kenya where no child misses school because of poverty, and where
              schools are places of dignity, safety and opportunity for every
              learner and teacher.
            </p>
          </div>
        </div>

        {/* What We Focus On */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm mb-12">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            What We Focus On
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">

            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">School uniforms & basics</span>{" "}
                for vulnerable learners who risk dropping out or staying at home.
              </li>
              <li>
                <span className="font-semibold">Conducive learning environments</span>{" "}
                with desks, classroom repairs, sanitation and access to clean water.
              </li>
              <li>
                <span className="font-semibold">Teachers’ welfare & motivation</span>{" "}
                so those shaping Kenya’s future feel supported and valued.
              </li>
              <li>
                <span className="font-semibold">Sports, mentorship & life skills</span>{" "}
                to build confidence, discipline and better opportunities for youth.
              </li>
            </ul>

            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">Counselling & financial education</span>{" "}
                for teachers to help them manage stress, avoid debt traps and plan ahead.
              </li>
              <li>
                <span className="font-semibold">Learning materials</span>{" "}
                including books, stationery and revision tools for needy schools.
              </li>
              <li>
                <span className="font-semibold">Digital literacy</span>{" "}
                through devices, training and basic ICT exposure where possible.
              </li>
              <li>
                <span className="font-semibold">Emergency support</span>{" "}
                for learners affected by fires, floods or sudden family crises.
              </li>
            </ul>

          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-sm">
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-1">Dignity</h3>
            <p className="text-slate-700">
              Every child and teacher deserves respect, decent clothing and a safe space to learn
              and grow.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-1">Community</h3>
            <p className="text-slate-700">
              We collaborate with parents, teachers and local leaders to shape
              support that truly fits each school.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-1">Accountability</h3>
            <p className="text-slate-700">
              We honour every contribution with clear, visible and trackable impact
              in the lives of learners.
            </p>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-2">
            Our Commitment
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Young Waziri Foundation is built on compassion, community and support.
            We exist to uplift the children and teachers who carry the future of Kenya.
            With every uniform, every repaired classroom, every mentorship session
            and every act of care, we commit ourselves to restoring dignity and hope.
          </p>
        </div>

      </section>
    </main>
  );
}
