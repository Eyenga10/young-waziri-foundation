import Image from "next/image";

export default function Donate() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-16 md:pt-12 md:pb-20">
        {/* Heading */}
        <div className="mb-10 text-center md:text-left">
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
            Donate
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Support Young Waziri Foundation
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-700 max-w-3xl">
            Every contribution you make goes directly towards school uniforms,
            desks, classroom repairs, teacher support and essential learning
            materials for children in underserved communities across Kenya.
          </p>
        </div>

        {/* Why donate */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm mb-10">
          <h2 className="text-lg font-semibold text-slate-900 mb-2">
            Why Your Support Matters
          </h2>
          <p className="text-sm text-slate-700 mb-3">
            Many children in Kenya miss school simply because they lack a uniform.
            Others learn in broken desks, leaking classrooms or under-equipped schools.
            Your donation helps restore dignity, confidence and opportunity —
            one child, one classroom, one school at a time.
          </p>
        </div>

        {/* Donation Options */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* M-PESA */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">M-PESA (Kenya)</h2>
            <p className="text-sm text-slate-700 mb-1">
              <span className="font-semibold">PayBill:</span> 000000
            </p>
            <p className="text-sm text-slate-700 mb-1">
              <span className="font-semibold">Account:</span> YWF
            </p>
            <p className="mt-3 text-xs text-slate-500">
              *Coming soon.*
            </p>
          </div>

          {/* Bank Transfer */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Bank Transfer (Kenya)
            </h2>
            <p className="text-sm text-slate-700">
              <span className="font-semibold">Bank:</span> ABC Bank
            </p>
            <p className="text-sm text-slate-700">
              <span className="font-semibold">Account Name:</span> Young Waziri Foundation
            </p>
            <p className="text-sm text-slate-700">
              <span className="font-semibold">Account Number:</span> 0000000000
            </p>
            <p className="text-sm text-slate-700">
              <span className="font-semibold">Branch:</span> Nairobi
            </p>
            <p className="mt-3 text-xs text-slate-500">
              *Coming soon.*
            </p>
          </div>

          {/* International Support */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm md:col-span-2">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              International & Card Donations
            </h2>

            <p className="text-sm text-slate-700 mb-3">
              Friends and partners outside Kenya can support Young Waziri Foundation
              securely through our online donation link using major debit/credit cards,
              or via international bank transfer (SWIFT).
            </p>

            {/* Secure Online Donation */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Secure Online Donation (Debit & Credit Cards)
              </h3>
              <p className="text-sm text-slate-700 mb-2">
                Donate using global debit and credit cards (Visa, Mastercard, etc.),
                or supported digital wallets. Payments are securely processed and
                settled directly to the foundation.
              </p>

              <a
                href="https://donate.youngwazirifoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-800 transition"
              >
                Give Online Securely
              </a>

              <p className="mt-2 text-[0.7rem] text-slate-500">
                *Coming soon.*
              </p>
            </div>

            {/* SWIFT Transfer */}
            <div className="mt-5">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                International Bank Transfer (SWIFT)
              </h3>
              <p className="text-sm text-slate-700 mb-1">
                For larger or institutional gifts, donate via SWIFT:
              </p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">Account Name:</span> Young Waziri Foundation
              </p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">IBAN / Account No:</span> To be provided
              </p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">SWIFT / BIC:</span> XXXXKENX
              </p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">Bank & Branch:</span> To be provided
              </p>

              <p className="mt-2 text-[0.7rem] text-slate-500">
                *Coming soon.*
              </p>
            </div>
          </div>
        </div>

        {/* QR Code Placeholder */}
        <div className="text-center mt-12">
          <p className="text-sm text-slate-600 mb-3">
            Scan to Donate (QR Code Coming Soon)
          </p>
          <div className="w-40 h-40 mx-auto bg-slate-200 rounded-lg flex items-center justify-center text-slate-500">
            QR Code
          </div>
        </div>
      </section>
    </main>
  );
}
