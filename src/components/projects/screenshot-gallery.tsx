"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "./lightbox";

export function ScreenshotGallery({
  screenshots,
  title,
}: {
  screenshots: string[];
  title: string;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <div className="mt-10 space-y-6">
        {screenshots.map((src, i) => (
          <div
            key={src}
            className="cursor-pointer overflow-hidden rounded-lg border shadow-sm"
            onClick={() => setSelected(src)}
          >
            <Image
              src={src}
              alt={`${title} - capture ${i + 1}`}
              width={1200}
              height={675}
              className="w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <Lightbox src={selected} alt={title} onClose={() => setSelected(null)} />
    </>
  );
}
