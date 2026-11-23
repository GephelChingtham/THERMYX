/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { JargonTooltip, PlainWordsLine } from './JargonTooltip';

interface AboutSectionProps {
  simpleView?: boolean;
}

export function AboutSection({ simpleView = false }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="w-full py-14 sm:py-24 px-4 sm:px-6 max-w-[1400px] mx-auto border-t border-dotted border-[#26262B]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h2
            className={`font-headline leading-[0.94] text-[#F2EFE9] uppercase transition-all ${
              simpleView
                ? 'text-[clamp(28px,4.5vw,48px)]'
                : 'text-[clamp(36px,6vw,68px)]'
            }`}
          >
            THE MISSION & IMPACT.
          </h2>
          <PlainWordsLine
            text="Built by Gephel Chingtham and a remote teammate to fix global wildfire baselines."
            simpleView={simpleView}
          />
        </div>

        <div className="bg-[#131316] px-4 py-2 rounded-full border border-dotted border-[#26262B] text-[12px] font-mono-numbers text-[#FC5000]">
          Creator: Gephel Chingtham
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Main Pitch Card */}
        <div className="lg:col-span-8 bg-[#131316] p-6 sm:p-9 rounded-[24px] sm:rounded-[36px] border border-dotted border-[#26262B] flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-mono-numbers uppercase tracking-widest text-[#FC5000] mb-4">
              Project Pitch & Calibration Overview
            </div>

            <p className="text-[16px] sm:text-[18px] font-sans text-[#F2EFE9] leading-relaxed mb-6">
              “I’m <strong className="text-white font-semibold">Gephel Chingtham</strong>, and I built THERMYX with a remote teammate. NASA has two satellite fire records. The newer sensor detects smaller fires, so merging them creates a fake spike in 2012. THERMYX fixes that calibration.”
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="bg-[#0A0A0C] p-4 rounded-[18px] border border-[#26262B]">
                <span className="text-[11px] font-mono-numbers text-[#8A8A93] uppercase block mb-1">
                  California 2012 Jump Calibration
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono-numbers text-[28px] font-bold text-[#6E6E78] line-through">
                    134%
                  </span>
                  <span className="text-[#FC5000] text-xl font-bold">→</span>
                  <span className="font-mono-numbers text-[28px] font-bold text-[#FC5000]">
                    20%
                  </span>
                </div>
              </div>

              <div className="bg-[#0A0A0C] p-4 rounded-[18px] border border-[#26262B]">
                <span className="text-[11px] font-mono-numbers text-[#8A8A93] uppercase block mb-1">
                  Global Coverage
                </span>
                <span className="font-mono-numbers text-[24px] font-bold text-[#F2EFE9]">
                  6 Regions
                </span>
                <span className="block text-[12px] text-[#9A8F85] font-sans mt-0.5">
                  Including California, Amazon, Australia, Canada Boreal, India & Malaysia
                </span>
              </div>
            </div>

            <p className="text-[15px] sm:text-[16px] font-sans text-[#9A8F85] leading-relaxed">
              Forest departments, climate policy analysts, and carbon-credit auditors all rely on accurate baselines. THERMYX provides that trusted ground-truth across active fire basins.
            </p>
          </div>
        </div>

        {/* Sustainability & Architecture Card */}
        <div className="lg:col-span-4 bg-[#131316] p-6 sm:p-8 rounded-[24px] sm:rounded-[36px] border border-dotted border-[#26262B] flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-mono-numbers uppercase tracking-widest text-[#3FD0C9] mb-4">
              Sustainability & Scale
            </div>

            <h3 className="font-headline text-[24px] text-[#F2EFE9] uppercase mb-3">
              NEAR-ZERO SERVER COST.
            </h3>

            <p className="text-[14px] sm:text-[15px] font-sans text-[#F2EFE9] leading-relaxed mb-6">
              Because we turn free NASA data into lightweight static files, our server cost is near zero—making it cheap to scale through research grants and public data APIs.
            </p>

            <div className="space-y-3 pt-4 border-t border-dotted border-[#26262B] font-mono-numbers text-[12px]">
              <div className="flex items-center justify-between text-[#8A8A93]">
                <span>Architecture</span>
                <span className="text-[#F2EFE9]">Static Data JSON + Vite SPA</span>
              </div>
              <div className="flex items-center justify-between text-[#8A8A93]">
                <span>Data Source</span>
                <span className="text-[#3FD0C9]">NASA FIRMS (MODIS & VIIRS)</span>
              </div>
              <div className="flex items-center justify-between text-[#8A8A93]">
                <span>Target Users</span>
                <span className="text-[#FC5000]">Auditors & Policy Makers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
