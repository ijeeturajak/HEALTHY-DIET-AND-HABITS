import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, AlertTriangle, ShieldCheck } from 'lucide-react';
import { ESSENTIAL_NUTRIENTS } from '../../data/slidesData';
import type { EssentialNutrient } from '../../types/presentation';
import { CINEMATIC_IMAGES } from '../../data/cinematicImages';
import { soundManager } from '../../utils/audioSystem';

export default function Slide04_Nutrients() {
  const [selectedNutrient, setSelectedNutrient] = useState<EssentialNutrient | null>(null);

  const nutrientImages: Record<string, string> = {
    carbs: CINEMATIC_IMAGES.carbsComplex,
    proteins: CINEMATIC_IMAGES.proteinsAmino,
    fats: CINEMATIC_IMAGES.healthyFatsAvocado,
    vitamins: CINEMATIC_IMAGES.vitaminsCitrus,
    minerals: CINEMATIC_IMAGES.mineralsSpinachSeeds,
    water_fiber: CINEMATIC_IMAGES.fibreChiaWater
  };

  const handleOpenNutrient = (nutrient: EssentialNutrient) => {
    soundManager.playReveal();
    setSelectedNutrient(nutrient);
  };

  const handleCloseNutrient = () => {
    soundManager.playSubtleClick();
    setSelectedNutrient(null);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden bg-[#071D18]">
      {/* Background Subtle Gradient & Vignette */}
      <div className="absolute inset-0 cinematic-vignette-heavy pointer-events-none" />

      {/* Slide Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0B2922] text-[#00C896] border border-[#00C896]/30">
              Slide 04 • Biochemical Building Blocks
            </span>
            <span className="text-xs font-mono text-[#C7F36B]/80 hidden sm:inline">
              Click any nutrient card to inspect realistic food imagery & metabolic profiles
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#FBF9F4] font-display tracking-tight uppercase">
            THE SIX ESSENTIAL NUTRIENTS
          </h2>
          <p className="text-xs sm:text-sm text-[#F5F1E8]/75 font-sans max-w-2xl mt-1">
            Human biology cannot manufacture these compounds from scratch. They must be ingested regularly in balanced bioavailable proportions.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#C7F36B] bg-[#0B2922]/80 px-3 py-1.5 rounded-xl border border-[#00C896]/20">
          <Sparkles className="w-3.5 h-3.5 text-[#00C896]" />
          <span>3 Macros • 2 Micros • 1 Vital Element</span>
        </div>
      </div>

      {/* Main Grid: 6 Visually Distinctive Photographic Nutrient Cards */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 my-auto">
        {ESSENTIAL_NUTRIENTS.map((item) => {
          const imgUrl = nutrientImages[item.id] || CINEMATIC_IMAGES.macroFreshProduce;

          return (
            <motion.div
              key={item.id}
              onClick={() => handleOpenNutrient(item)}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-3xl overflow-hidden border border-[#00C896]/20 bg-[#101613] shadow-xl hover:border-[#00C896] hover:shadow-2xl hover:shadow-[#00C896]/25 transition-all duration-300 cursor-pointer flex flex-col justify-between h-64 sm:h-72"
            >
              {/* Top Photo Cover with Dramatic Dark Vignette */}
              <div className="relative h-32 sm:h-36 overflow-hidden">
                <img 
                  src={imgUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101613] via-transparent to-black/30" />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-[#071D18]/90 text-[#C7F36B] border border-[#00C896]/30 backdrop-blur-md">
                  {item.category.split(' ')[0]}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="p-3.5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-sm sm:text-base font-black text-[#FBF9F4] font-display uppercase tracking-tight group-hover:text-[#00C896] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-[#F5F1E8]/70 line-clamp-2 mt-1 font-medium leading-relaxed">
                    {item.function}
                  </p>
                </div>

                <div className="mt-2 pt-2 border-t border-[#00C896]/15 flex items-center justify-between text-[10px] font-mono text-[#00C896]">
                  <span>Explore Deep-Dive</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Deep-Dive Inspection Modal */}
      <AnimatePresence>
        {selectedNutrient && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#071D18]/85 backdrop-blur-md">
            <div className="absolute inset-0" onClick={handleCloseNutrient} />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative z-10 w-full max-w-3xl rounded-3xl glass-panel border-2 border-[#00C896]/50 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Top Banner with Realistic Photo */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img 
                  src={nutrientImages[selectedNutrient.id]} 
                  alt={selectedNutrient.name} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071D18] via-[#071D18]/60 to-transparent" />
                
                <div className="absolute top-4 right-4">
                  <button
                    onClick={handleCloseNutrient}
                    className="w-9 h-9 rounded-full bg-[#071D18]/80 hover:bg-[#0B2922] border border-[#00C896]/40 text-[#FBF9F4] flex items-center justify-center cursor-pointer transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7F36B] font-bold block mb-1">
                      {selectedNutrient.category} Profile
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#FBF9F4] font-display uppercase">
                      {selectedNutrient.name}
                    </h3>
                  </div>

                  <span className="px-3 py-1 rounded-xl bg-[#00C896] text-[#071D18] text-xs font-mono font-black uppercase">
                    Essential Intake
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto space-y-4 no-scrollbar">
                {/* Primary Function */}
                <div className="p-4 rounded-2xl bg-[#0B2922]/80 border border-[#00C896]/20">
                  <span className="text-xs font-mono uppercase font-bold text-[#00C896] block mb-1">
                    Primary Biological Role
                  </span>
                  <p className="text-sm text-[#FBF9F4] font-medium leading-relaxed">
                    {selectedNutrient.function} — {selectedNutrient.importance}
                  </p>
                </div>

                {/* Dietary Food Sources */}
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-[#C7F36B] block mb-2">
                    Optimal Wholesome Food Sources (Indian & Global Staples)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedNutrient.examples.map((ex, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-[#071D18] border border-[#00C896]/30 text-xs font-semibold text-[#F5F1E8]"
                      >
                        ✓ {ex}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deficiency Symptoms Warning */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono uppercase font-bold text-amber-300">
                      Inadequacy & Deficiency Warnings:
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                    {selectedNutrient.inadequacyEffects}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Slide Footer Keynote Takeaway */}
      <div className="relative z-10 pt-3 border-t border-[#00C896]/20 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-[#F5F1E8]/80">
          <ShieldCheck className="w-4 h-4 text-[#00C896]" />
          <span><strong>The Complete Matrix:</strong> No single superfood contains all six nutrients; dietary variety is the only biological safeguard against deficiency.</span>
        </div>
        <span className="text-[11px] font-mono text-[#00C896]/80 hidden md:inline">
          ICMR-NIN 2024 Nutrient Requirements for Indians
        </span>
      </div>
    </div>
  );
}
