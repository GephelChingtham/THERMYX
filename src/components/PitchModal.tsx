/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';

interface PitchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRegion?: (regionId: string) => void;
}

interface PitchSlide {
  title: string;
  subtitle: string;
  script: string;
  highlightStat?: string;
  highlightLabel?: string;
  targetSection?: string;
  regionToSelect?: string;
}

const slides: PitchSlide[] = [
  {
    title: "Founder Introduction",
    subtitle: "Built by Gephel Chingtham & remote teammate",
    script: "I’m Gephel Chingtham, and I built THERMYX with a remote teammate.",
    highlightStat: "THERMYX",
    highlightLabel: "Global Fire Harmonization",
  },
  {
    title: "The Problem & Calibration",
    subtitle: "MODIS vs VIIRS & The 2012 Artifact Jump",
    script: "NASA has two satellite fire records. The newer sensor detects smaller fires, so merging them creates a fake spike in 2012. THERMYX fixes that calibration.",
    highlightStat: "2012",
    highlightLabel: "Camera Upgrade Artifact",
    targetSection: "the-problem",
  },
  {
    title: "California Baseline Proof",
    subtitle: "Dropping the fake jump from 134% to 20%",
    script: "In California, that fake jump drops from 134 percent to 20.",
    highlightStat: "134% → 20%",
    highlightLabel: "California Jump Reduction",
    targetSection: "proof",
    regionToSelect: "california_west_us",
  },
  {
    title: "Target Markets & Global Reach",
    subtitle: "Forest departments, climate policy & carbon auditors",
    script: "Forest departments, climate policy, and carbon-credit auditors all rely on accurate baselines. Right now, THERMYX covers six regions, including India.",
    highlightStat: "6 Regions",
    highlightLabel: "Including India & Amazon",
    targetSection: "california",
    regionToSelect: "india",
  },
  {
    title: "Architecture & Scalability",
    subtitle: "Static files, near-zero server cost, ready for grants & APIs",
    script: "Because we turn free NASA data into lightweight static files, our server cost is near zero—making it cheap to scale through grants and data APIs.",
    highlightStat: "$0 / near zero",
    highlightLabel: "Server Cost & High Scale",
  },
];

export function PitchModal({ isOpen, onClose, onSelectRegion }: PitchModalProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  if (!isOpen) return null;

  const slide = slides[currentSlideIndex];

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      const nextIdx = currentSlideIndex + 1;
      setCurrentSlideIndex(nextIdx);
      triggerSlideAction(slides[nextIdx]);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      const prevIdx = currentSlideIndex - 1;
      setCurrentSlideIndex(prevIdx);
      triggerSlideAction(slides[prevIdx]);
    }
  };

  const triggerSlideAction = (s: PitchSlide) => {
    if (s.regionToSelect && onSelectRegion) {
      onSelectRegion(s.regionToSelect);
    }
    if (s.targetSection) {
      const el = document.getElementById(s.targetSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#131316] border border-[#26262B] rounded-[32px] w-full max-w-2xl p-6 sm:p-8 relative flex flex-col shadow-2xl">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-dotted border-[#26262B]">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FC5000]" />
            <span className="font-headline text-[18px] tracking-[0.04em] text-[#F2EFE9] uppercase">
              THERMYX · Interactive Pitch Mode
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono-numbers text-[#8A8A93] px-2.5 py-1 rounded-full bg-[#0A0A0C] border border-[#26262B]">
              Step {currentSlideIndex + 1} of {slides.length}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#0A0A0C] border border-[#26262B] text-[#8A8A93] hover:text-[#F2EFE9] flex items-center justify-center text-[14px] cursor-pointer transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Slide Content */}
        <div className="flex-1 py-4">
          <div className="text-[11px] font-mono-numbers text-[#FC5000] uppercase tracking-wider mb-2">
            {slide.subtitle}
          </div>
          <h3 className="font-headline text-[32px] sm:text-[38px] text-[#F2EFE9] uppercase mb-6 leading-tight">
            {slide.title}
          </h3>

          <div className="bg-[#0A0A0C] p-6 sm:p-7 rounded-[22px] border border-[#26262B] mb-6 relative">
            <span className="text-[10px] font-mono-numbers text-[#8A8A93] uppercase block mb-2">
              Pitch Script & Telemetry
            </span>
            <p className="text-[16px] sm:text-[18px] font-sans text-[#F2EFE9] leading-relaxed italic">
              "{slide.script}"
            </p>

            {slide.highlightStat && (
              <div className="mt-6 pt-5 border-t border-dotted border-[#26262B] flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono-numbers text-[#8A8A93] uppercase block">
                    {slide.highlightLabel}
                  </span>
                  <span className="font-mono-numbers text-[26px] sm:text-[32px] font-bold text-[#FC5000]">
                    {slide.highlightStat}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono-numbers text-[#3FD0C9] bg-[#3FD0C9]/10 px-3 py-1 rounded-full border border-[#3FD0C9]/20 inline-block">
                    Live Demo Ready
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-4 border-t border-dotted border-[#26262B] flex items-center justify-between gap-4">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className={`min-h-[40px] px-5 py-2 rounded-full text-[12px] font-mono-numbers uppercase tracking-wider transition-colors cursor-pointer ${
              currentSlideIndex === 0
                ? 'opacity-30 cursor-not-allowed bg-[#0A0A0C] text-[#8A8A93]'
                : 'bg-[#0A0A0C] text-[#F2EFE9] hover:bg-[#1E1E24] border border-[#26262B]'
            }`}
          >
            ← Previous
          </button>

          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentSlideIndex ? 'bg-[#FC5000] w-6' : 'bg-[#26262B]'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="min-h-[40px] px-6 py-2 rounded-full text-[12px] font-mono-numbers uppercase font-bold tracking-wider bg-[#FC5000] text-white hover:bg-[#e04700] transition-colors cursor-pointer shadow-lg shadow-[#FC5000]/20"
          >
            {currentSlideIndex === slides.length - 1 ? 'Finish & Explore App →' : 'Next Step →'}
          </button>
        </div>
      </div>
    </div>
  );
}
