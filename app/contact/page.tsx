export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-14 md:pt-12 md:pb-20">
        
        {/* Heading */}
        <div className="mb-10 text-center md:text-left">
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
            Contact
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Contact Young Waziri Foundation
          </h1>

          <p className="mt-3 text-sm md:text-base text-slate-700 max-w-3xl">
            For school support requests, partnerships, donations or general enquiries, 
            please reach out using the details or form below. We are always ready to 
            support learners, teachers and communities.
          </p>
        </div>

        <div className="grid md:grid-cols-[2fr,3fr] gap-10">
          
          {/* Contact Details */}
          <div className="space-y-6 text-sm text-slate-700">

            {/* Primary Contact */}
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900 mb-2">
                📩 Primary Contact
              </h2>

              <p className="mb-1">
                <span className="font-semibold">Email: </span>
                <a
                  href="mailto:info@youngwazirifoundation.org"
                  className="text-sky-700 hover:underline"
                >
                  info@youngwazirifoundation.org
                </a>
              </p>

              <p>
                <span className="font-semibold">Location: </span>
                Kenya
              </p>

              <p className="mt-3 text-xs text-slate-600">
                Include your school name, county and nature of your enquiry for faster assistance.
              </p>
            </div>

            {/* Useful Info */}
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900 mb-2">
                📝 Useful Details To Share
              </h2>

              <ul className="text-xs text-slate-700 list-disc list-inside space-y-1">
                <li>Your name and role (teacher, parent, partner, etc.)</li>
                <li>School name and location</li>
                <li>Type of support needed or partnership idea</li>
                <li>Number of learners or teachers affected</li>
              </ul>
            </div>

            {/* Quick Support */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900 mb-2">
                ⚡ Quick Support
              </h2>

              <p className="text-xs text-slate-700">
                We respond fastest to:
              </p>

              <ul className="text-xs text-slate-700 list-disc list-inside space-y-1 mt-1">
                <li>School emergencies (fires, floods, displacement)</li>
                <li>Uniform & learning materials shortages</li>
                <li>Teacher counselling or welfare support requests</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900 mb-4">
              Send Us a Message
            </h2>

            <form className="space-y-4 text-sm">
              
              <div>
                <label className="block text-slate-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-1">Role</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
                  placeholder="Teacher, Parent, Partner, Student"
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-1">
                  School / Organisation (optional)
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
                  placeholder="Name of school or institution"
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-1">Message</label>
                <textarea
                  rows={5}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
                  placeholder="Briefly describe your enquiry or support request..."
                />
              </div>

              {/* Submit button */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-800 transition shadow-sm"
              >
                Submit 
              </button>

            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
