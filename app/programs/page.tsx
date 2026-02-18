export default function Programs() {
  const programs = [
    {
      icon: "🧥",
      title: "School Uniforms & Basics",
      desc: "Providing full school uniforms, shoes and essentials so no child misses class or suffers shame due to poverty.",
    },
    {
      icon: "🏫",
      title: "Learning Environment Support",
      desc: "Improving classrooms, desks, sanitation, lighting and water access for safe and child-friendly learning spaces.",
    },
    {
      icon: "👩🏽‍🏫",
      title: "Teachers’ Welfare Support",
      desc: "Strengthening teachers through motivation, materials, training and recognition.",
    },
    {
      icon: "🧠",
      title: "Teachers’ Counselling & Financial Education",
      desc: "Providing mental health support, stress management and financial literacy to reduce burnout and debt traps.",
    },
    {
      icon: "⚽",
      title: "Sports & Talent Development",
      desc: "Supplying sports kits and equipment, organizing tournaments and mentorship to nurture discipline and talent.",
    },
    {
      icon: "📚",
      title: "Learning Materials Program",
      desc: "Distributing textbooks, exercise books, stationery and backpacks to learners who need them most.",
    },
    {
      icon: "🌱",
      title: "Mentorship & Life Skills",
      desc: "Leadership training, girls’ empowerment, career talks and youth mentorship programs.",
    },
    {
      icon: "💻",
      title: "Digital Literacy Program",
      desc: "Introducing basic ICT skills through devices, computer labs and teacher digital training.",
    },
    {
      icon: "🥣",
      title: "Nutrition & Feeding",
      desc: "Supporting porridge programs, water storage and basic nutrition initiatives.",
    },
    {
      icon: "⛑️",
      title: "Emergency Support Fund",
      desc: "Helping learners affected by fires, floods, loss of parents or sudden crises to stay in school.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-14 md:pt-12 md:pb-20">
        
        {/* Heading */}
        <div className="mb-10 text-center md:text-left">
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
            Our Programs
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            How We Support Children & Schools
          </h1>

          <p className="mt-3 text-sm md:text-base text-slate-700 max-w-3xl">
            Young Waziri Foundation runs practical, dignity-centered initiatives 
            that keep children in class, empower teachers and uplift schools 
            in underserved communities across Kenya.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{item.icon}</span>
                <h2 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h2>
              </div>
              <p className="text-sm text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-14 bg-slate-50 border border-slate-200 rounded-lg p-6 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            Want to Get Involved?
          </h2>
          <p className="text-sm text-slate-700 max-w-2xl mx-auto mb-4">
            From sponsoring a child’s uniform to helping build better classrooms,
            your support goes directly into transforming lives.
          </p>
          <a
            href="/donate"
            className="inline-flex px-6 py-3 rounded-md bg-sky-600 text-white text-sm font-semibold hover:bg-sky-500 transition shadow"
          >
            Donate or Partner With Us
          </a>
        </div>

      </section>
    </main>
  );
}
