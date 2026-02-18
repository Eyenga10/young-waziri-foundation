import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-10">
      <div className="max-w-5xl mx-auto px-4 py-6 text-xs md:text-sm text-slate-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Left: Name + tagline */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-slate-900">
            Young Waziri Foundation
          </p>
          <p>Giving every child in Kenya the dignity to learn, grow and succeed.</p>
        </div>

        {/* Middle: Contact */}
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p>
            Email:{" "}
            <a
              href="mailto:info@youngwazirifoundation.org"
              className="text-sky-700 hover:underline"
            >
              info@youngwazirifoundation.org
            </a>
          </p>
          <p>Kenya</p>
        </div>

        {/* Right: Quick links + Donate */}
        <div className="flex flex-col items-center md:items-end gap-3">

          {/* Quick links */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            <Link href="/about" className="hover:text-sky-700">About</Link>
            <Link href="/programs" className="hover:text-sky-700">Programs</Link>
            <Link href="/gallery" className="hover:text-sky-700">Gallery</Link>
            <Link href="/impact" className="hover:text-sky-700">Impact</Link>
            <Link href="/get-involved" className="hover:text-sky-700">Get Involved</Link>
            <Link href="/contact" className="hover:text-sky-700">Contact Us</Link>
          </div>

          {/* Donate Button (Footer) */}
          <Link
            href="/donate"
            className="px-4 py-2 bg-sky-600 text-white rounded-md font-semibold hover:bg-sky-500 transition shadow text-xs md:text-sm"
          >
            Donate
          </Link>

        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-3 text-[0.7rem] text-slate-500 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Young Waziri Foundation. All rights reserved.
          </p>
          <p>
            Working with schools, teachers and communities to keep children in class.
          </p>
        </div>
      </div>
    </footer>
  );
}
