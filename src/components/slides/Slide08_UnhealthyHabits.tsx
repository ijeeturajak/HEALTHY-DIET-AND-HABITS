import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RefreshCw,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { CINEMATIC_IMAGES } from '../../data/cinematicImages';
import { soundManager } from '../../utils/audioSystem';

interface CinematicComparison {
  id: string;
  unhealthyTitle: string;
  unhealthySubtitle: string;
  unhealthyImage: string;
  unhealthyDetails: string;
  unhealthyEffects: string[];
  healthyTitle: string;
  healthySubtitle: string;
  healthyImage: string;
  healthyBenefits: string[];
  takeaway: string;
}

const COMPARISONS: CinematicComparison[] = [
  {
    id: "soda_vs_chaas",
    unhealthyTitle: "Packaged Sugary Soda (350ml)",
    unhealthySubtitle: "~38g Added Sugar • Zero Micronutrients",
    unhealthyImage: CINEMATIC_IMAGES.sodaFizzyCold,
    unhealthyDetails: "Contains nearly 10 teaspoons of high-fructose corn syrup/free sugar in liquid form with phosphoric acid.",
    unhealthyEffects: [
      "Rapid glycemic surge triggers sharp insulin spike followed by reactive hypoglycemia",
      "Phosphoric acid promotes dental enamel demineralization and mineral leaching",
      "Liquid calories bypass normal leptin chewing satiety cues, driving fat accumulation"
    ],
    healthyTitle: "Fresh Mint Chaas (Spiced Buttermilk)",
    healthySubtitle: "Live Probiotics • Natural Electrolytes",
    healthyImage: CINEMATIC_IMAGES.chaasButtermilkMint,
    healthyBenefits: [
      "Delivers active Lactobacillus bacteria to fortify gut mucosal barrier",
      "Rich in natural potassium, magnesium, and bioavailable calcium without sugar",
      "Cools gastric tract and enhances digestion after spicy college cafeteria meals"
    ],
    takeaway: "Liquid sugar is the single fastest driver of visceral fatty liver. Swap with buttermilk for real hydration."
  },
  {
    id: "chips_vs_chana",
    unhealthyTitle: "Deep-Fried Potato Chips / Namkeen",
    unhealthySubtitle: "Oxidized Reheated Oil • Excess Sodium",
    unhealthyImage: CINEMATIC_IMAGES.deepFriedChips,
    unhealthyDetails: "Cooked at high temperatures in repeatedly reheated commercial palm oil with artificial flavor enhancers.",
    unhealthyEffects: [
      "Industrial trans-fats trigger vascular endothelial inflammation and raise atherogenic LDL",
      "Excess sodium promotes extracellular fluid retention and elevated blood pressure",
      "Hyper-palatable salt-fat ratio hacks brain dopamine, driving compulsive overeating"
    ],
    healthyTitle: "Roasted Bengal Gram (Chana) & Makhana",
    healthySubtitle: "7g Plant Protein • Zero Trans-Fats",
    healthyImage: CINEMATIC_IMAGES.roastedChanaCrunch,
    healthyBenefits: [
      "Supplies 7g of muscle-building plant protein and prebiotic soluble fiber per cup",
      "Low glycemic index provides slow, continuous amino acid and glucose release",
      "Naturally abundant in magnesium, iron, and potassium without toxic oxidized lipids"
    ],
    takeaway: "Swap fried crunch for roasted protein crunch to keep your arteries clean and mind alert."
  },
  {
    id: "noodles_vs_millets",
    unhealthyTitle: "Instant 2-Minute Maida Noodles",
    unhealthySubtitle: "Refined Starch • Palm Olein • >1200mg Sodium",
    unhealthyImage: CINEMATIC_IMAGES.instantNoodlesMaida,
    unhealthyDetails: "Stripped of cereal germ, bran, and essential B-vitamins; pre-fried in palm oil and packed with sodium.",
    unhealthyEffects: [
      "Nearly 60% of daily sodium allowance in a single serving strains renal filtration",
      "Fast gastrointestinal starch absorption causes blood glucose spikes and subsequent lethargy",
      "Completely depleted of protective fiber, promoting sluggish digestion and dysbiosis"
    ],
    healthyTitle: "Spiced Vegetable Millet Khichdi / Oats",
    healthySubtitle: "Complex Fiber • Natural B-Vitamins",
    healthyImage: CINEMATIC_IMAGES.spicedMilletBowl,
    healthyBenefits: [
      "Beta-glucan and insoluble millet fiber lower serum cholesterol and regulate motility",
      "Cooked with green peas, carrots, cumin, and turmeric for antioxidant protection",
      "Takes only 10 minutes to prepare and keeps you satiated through 3 full hours of lectures"
    ],
    takeaway: "Refined maida spikes insulin repeatedly; traditional millets fuel sustained classroom stamina."
  }
];

export default function Slide08_UnhealthyHabits() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isSwapped, setIsSwapped] = useState(false);

  const current = COMPARISONS[activeIdx];

  const handleSelect = (idx: number) => {
    soundManager.playSubtleClick();
    setActiveIdx(idx);
    setIsSwapped(false);
  };

  const handleToggleSwap = () => {
    soundManager.playWhoosh();
    setIsSwapped(!isSwapped);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden bg-[#071D18]">
      {/* Background Soft Glow & Dark Film Vignette */}
      <div className="absolute inset-0 cinematic-vignette-heavy pointer-events-none" />

      {/* Slide Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-950 text-rose-300 border border-rose-500/30">
              Slide 08 • The Biological Contrast
            </span>
            <span className="text-xs font-mono text-[#C7F36B]/80 hidden sm:inline">
              Cinematic Split-Screen Duel • Nutritious vs Ultra-Processed Convenience Foods
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#FBF9F4] font-display tracking-tight uppercase">
            UNHEALTHY HABITS & HEALTHY SWAPS
          </h2>
          <p className="text-xs sm:text-sm text-[#F5F1E8]/75 font-sans max-w-2xl mt-1">
            Ultra-processed foods trick our brain's reward centers while quietly inducing systemic inflammation. Small, smart everyday swaps deliver monumental metabolic wins.
          </p>
        </div>

        {/* Swap Trigger Button */}
        <button
          onClick={handleToggleSwap}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-mono font-bold border cursor-pointer transition-all shadow-xl hover:scale-105 ${
            isSwapped
              ? "bg-[#00C896] text-[#071D18] border-[#00C896] shadow-[#00C896]/30"
              : "bg-rose-950 text-rose-200 border-rose-500/40 shadow-rose-950/50"
          }`}
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isSwapped ? "rotate-180" : ""} transition-transform duration-500`} />
          <span>{isSwapped ? "Focus: Unhealthy Baseline" : "⚡ Execute Healthy Swap"}</span>
        </button>
      </div>

      {/* Main Interactive Stage: Split-Screen Duel */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-stretch">
        
        {/* Left Rail: 3 Duel Scenarios (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-2.5 justify-center">
          {COMPARISONS.map((comp, idx) => {
            const isSelected = activeIdx === idx;

            return (
              <motion.button
                key={comp.id}
                onClick={() => handleSelect(idx)}
                whileHover={{ x: 4 }}
                className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? "bg-gradient-to-r from-[#0B2922] to-[#0F382F] border-[#00C896] ring-2 ring-[#00C896]/40 shadow-xl"
                    : "glass-card hover:bg-[#0B2922]/40 border-[#00C896]/15"
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono text-[#00C896] uppercase font-bold block mb-0.5">
                    Duel Scenario 0{idx + 1}
                  </span>
                  <h4 className={`text-xs sm:text-sm font-bold font-display ${isSelected ? "text-[#FBF9F4]" : "text-[#F5F1E8]/85"}`}>
                    {comp.unhealthyTitle.split('(')[0]}
                  </h4>
                  <p className="text-[11px] text-[#C7F36B] font-mono mt-0.5 truncate">
                    Swap: {comp.healthyTitle.split('(')[0]}
                  </p>
                </div>
                <ChevronRight className={`w-4 h-4 ${isSelected ? "text-[#00C896]" : "text-[#F5F1E8]/30"}`} />
              </motion.button>
            );
          })}
        </div>

        {/* Right Arena: Split-Screen Visual Cards (8 cols) */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${current.id}-${isSwapped}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full"
            >
              {/* Unhealthy Choice Card (Left) */}
              <div className={`p-5 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                isSwapped 
                  ? "bg-[#101613]/50 border-rose-500/20 opacity-50 scale-98" 
                  : "bg-gradient-to-br from-rose-950/70 via-[#101613] to-[#071D18] border-rose-500/40 shadow-2xl ring-1 ring-rose-500/30"
              }`}>
                <div>
                  <div className="relative h-28 rounded-2xl overflow-hidden mb-3 border border-rose-500/25">
                    <img src={current.unhealthyImage} alt={current.unhealthyTitle} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-950/90 text-rose-300 border border-rose-500/30">
                      High Metabolic Cost
                    </span>
                  </div>

                  <h3 className="text-base font-black text-rose-100 font-display leading-tight mb-1">
                    {current.unhealthyTitle}
                  </h3>
                  <p className="text-[11px] text-rose-200/80 mb-3">
                    {current.unhealthySubtitle}
                  </p>

                  <ul className="space-y-1.5 text-xs text-[#F5F1E8]/90">
                    {current.unhealthyEffects.map((eff, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-400 font-bold shrink-0 mt-0.5">✕</span>
                        <span className="leading-snug">{eff}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3 pt-2 border-t border-rose-500/20 text-[10px] font-mono text-rose-300/80 flex justify-between">
                  <span>Glycemic Load: Rapid Spike</span>
                  <span>Empty Calories</span>
                </div>
              </div>

              {/* Healthy Swap Card (Right) */}
              <div className={`p-5 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                !isSwapped
                  ? "bg-[#0B2922]/30 border-[#00C896]/20 opacity-70"
                  : "bg-gradient-to-br from-[#0B2922] via-[#0F382F] to-[#071D18] border-[#00C896] shadow-2xl ring-2 ring-[#00C896]/40"
              }`}>
                <div>
                  <div className="relative h-28 rounded-2xl overflow-hidden mb-3 border border-[#00C896]/30">
                    <img src={current.healthyImage} alt={current.healthyTitle} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#071D18]/90 text-[#00C896] border border-[#00C896]/30">
                      Smart Wholesome Swap
                    </span>
                  </div>

                  <h3 className="text-base font-black text-[#00C896] font-display leading-tight mb-1">
                    {current.healthyTitle}
                  </h3>
                  <p className="text-[11px] text-[#C7F36B] mb-3 font-mono">
                    {current.healthySubtitle}
                  </p>

                  <ul className="space-y-1.5 text-xs text-[#F5F1E8]/90">
                    {current.healthyBenefits.map((ben, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#00C896] font-bold shrink-0 mt-0.5">✓</span>
                        <span className="leading-snug">{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3 pt-2 border-t border-[#00C896]/20 text-[10px] font-mono text-[#00C896] flex justify-between">
                  <span>Glycemic Load: Sustained</span>
                  <span>High Bioavailability</span>
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
          <span><strong>The Takeaway:</strong> {current.takeaway}</span>
        </div>
        <span className="text-[11px] font-mono text-[#00C896]/80 hidden md:inline">
          WHO Free Sugar Standard: &lt; 25g/day
        </span>
      </div>
    </div>
  );
}
