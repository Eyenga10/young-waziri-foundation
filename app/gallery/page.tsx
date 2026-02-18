"use client";

import Image from "next/image";
import { useState } from "react";

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) return null; // If image not found, hide it

  return (
    <div className="relative h-48 md:h-56 rounded-lg overflow-hidden shadow-md group">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        onError={() => setError(true)}
      />
    </div>
  );
}

export default function Gallery() {
  // Try gallery1.jpg up to gallery40.jpg
  const images = Array.from({ length: 40 }, (_, i) => `/gallery${i + 1}.jpg`);

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-16 md:pt-12 md:pb-20">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Gallery
          </h1>
          <p className="text-sm md:text-base text-slate-700 mt-2 max-w-2xl">
            Moments from Young Waziri Foundation’s work with schools, children,
            teachers and communities across Kenya. These photos reflect our
            values of compassion, community and support.
          </p>
        </div>

        {/* Divider */}
        <div className="border-b border-slate-200 mb-8" />

        {/* Photos Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <GalleryImage
              key={idx}
              src={img}
              alt={`Young Waziri Foundation Photo ${idx + 1}`}
            />
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-slate-500 mt-8">
          *Upload photos as <code>gallery1.jpg</code>, <code>gallery2.jpg</code>,{" "}
          <code>gallery3.jpg</code> up to <code>gallery40.jpg</code> in the
          <code> public/</code> folder. Missing files are skipped automatically.*
        </p>
      </section>
    </main>
  );
}
