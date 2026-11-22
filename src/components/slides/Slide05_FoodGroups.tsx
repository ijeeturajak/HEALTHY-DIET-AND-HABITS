import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Utensils } from 'lucide-react';
import { FOOD_GROUPS } from '../../data/slidesData';
import { CINEMATIC_IMAGES } from '../../data/cinematicImages';
import { soundManager } from '../../utils/audioSystem';

export default function Slide05_FoodGroups() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const activeGroup = FOOD_GROUPS[activeGroupIndex];

  const galleryImages: Record<string, string> = {
    fruits: CINEMATIC_IMAGES.fruitsPomegranate,
    vegetables: CINEMATIC_IMAGES.veggiesCrisp,
    grains: CINEMATIC_IMAGES.milletsGrains,
    pulses: CINEMATIC_IMAGES.pulsesDals,
    dairy: CINEMATIC_IMAGES.dairyProbioticCurd,
    nuts: CINEMATIC_IMAGES.nutsAlmondsWalnuts
  };

  const handleSelectGroup = (index: number) => {
    soundManager.playReveal();
    setActiveGroupIndex(index);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden bg-[#071D18]">
      {/* Background Soft Glow & Dark Film Vignette */}
      <div className="absolute inset-0 cinematic-vignette-heavy pointer-events-none" />

      {/* Slide Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0B2922] text-[#00C896] border border-[#00C896]/30">
              Slide 05 • Editorial Culinary Gallery
            </span>
            <span className="text-xs font-mono text-[#C7F36B]/80 hidden sm:inline">
              Interactive Image Reveals • Click food groups to inspect wholesome Indian staples
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#FBF9F4] font-display tracking-tight uppercase">
            FOOD GROUPS & DIVERSITY
          </h2>
          <p className="text-xs sm:text-sm text-[#F5F1E8]/75 font-sans max-w-2xl mt-1">
            Nutrients don't come in isolated bottles; they arrive in the rich culinary matrix of millets, dals, crisp vegetables, probiotic curds, and seasonal fruits.
          </p>
        </div>

        <div className="px-3.5 py-1.5 rounded-2xl bg-[#0B2922]/90 border border-[#00C896]/30 text-xs font-mono text-[#C7F36B]">
          Portion Guide: <span className="font-bold text-[#FBF9F4]">{activeGroup.portionGuidance}</span>
        </div>
      </div>

      {/* Main Stage: Editorial Split-Screen Gallery */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-stretch">
        
        {/* Left Column: 6 Selector Tabs with Image Thumbnails (5 cols) */}
        <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-2 gap-2.5">
          {FOOD_GROUPS.map((group, idx) => {
            const isSelected = activeGroupIndex === idx;
            const thumbImg = galleryImages[group.id] || CINEMATIC_IMAGES.macroFreshProduce;

            return (
              <motion.button
                key={group.id}
                onClick={() => handleSelectGroup(idx)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                  isSelected
                    ? "bg-gradient-to-br from-[#0B2922] to-[#0F382F] border-[#00C896] ring-2 ring-[#00C896]/40 shadow-xl"
                    : "glass-card hover:bg-[#0B2922]/40 border-[#00C896]/15"
                }`}
              >
                {/* Micro Thumbnail */}
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#00C896]/30 shrink-0">
                    <img src={thumbImg} alt={group.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[10px] font-mono text-[#00C896] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h4 className={`text-xs sm:text-sm font-bold font-display ${isSelected ? "text-[#FBF9F4]" : "text-[#F5F1E8]/85"}`}>
                    {group.name}
                  </h4>
                  <p className="text-[10px] text-[#C7F36B]/80 font-mono truncate mt-0.5">
                    {group.tagline}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Right Column: Hero Cinematic Editorial Presentation (7 cols) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-3xl glass-panel border border-[#00C896]/30 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full"
            >
              {/* Top Photographic Hero Showcase */}
              <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden mb-4 border border-[#00C896]/20">
                <img 
                  src={galleryImages[activeGroup.id]} 
                  alt={activeGroup.name} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071D18] via-[#071D18]/50 to-transparent" />
                
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7F36B] font-bold block mb-0.5">
                      Food Category 0{activeGroupIndex + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#FBF9F4] font-display uppercase">
                      {activeGroup.name}
                    </h3>
                  </div>

                  <span className="px-3 py-1 rounded-xl bg-[#00C896] text-[#071D18] text-xs font-mono font-bold">
                    {activeGroup.portionGuidance}
                  </span>
                </div>
              </div>

              {/* Indian Staples & Key Nutrients */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#071D18]/80 border border-[#00C896]/20">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#00C896] block mb-1.5 flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5" />
                    Traditional Indian Dishes & Staples:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeGroup.indianExamples.map((item, i) => (
                      <span 
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#0B2922] border border-[#00C896]/30 text-[#F5F1E8]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#0B2922]/60 border border-[#C7F36B]/25">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#C7F36B] block mb-1">
                    Key Health Benefits:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-[#F5F1E8]/90">
                    {activeGroup.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-[#00C896]">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Slide Footer Keynote Takeaway */}
      <div className="relative z-10 pt-3 border-t border-[#00C896]/20 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-[#F5F1E8]/80">
          <Sparkles className="w-4 h-4 text-[#00C896]" />
          <span><strong>Culinary Synergy:</strong> Combining grains and lentils in a 4:1 ratio creates a complete, bioavailable amino acid profile comparable to animal protein.</span>
        </div>
        <span className="text-[11px] font-mono text-[#00C896]/80 hidden md:inline">
          ICMR-NIN 2024 Dietary Diversity Metric
        </span>
      </div>
    </div>
  );
}
