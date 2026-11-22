import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShieldCheck, Info } from 'lucide-react';
import { CINEMATIC_IMAGES } from '../../data/cinematicImages';
import { soundManager } from '../../utils/audioSystem';

interface UniverseNode {
  id: string;
  name: string;
  subtitle: string;
  pillar: string;
  image: string;
  color: string;
  highlight: string;
  whoCriteria: string;
  classroomTakeaway: string;
  angle: number; // for orbital position
}

const UNIVERSE_NODES: UniverseNode[] = [
  {
    id: "balance",
    name: "Macronutrient Balance",
    subtitle: "Carbs, Proteins & Healthy Lipids",
    pillar: "Pillar 01: Balance",
    image: CINEMATIC_IMAGES.vitalityEnergy,
    color: "#00C896",
    highlight: "Energy and repair in complete physiological equilibrium.",
    whoCriteria: "WHO Standard: Total fat < 30% of energy, free sugars < 10%, saturated fats < 10%.",
    classroomTakeaway: "Combine carbohydrates with protein and fiber to eliminate rapid insulin spikes.",
    angle: 0
  },
  {
    id: "variety",
    name: "Bio-Diversity & Rainbow",
    subtitle: "Phytonutrients, Vitamins & Minerals",
    pillar: "Pillar 02: Variety",
    image: CINEMATIC_IMAGES.berriesMacro,
    color: "#C7F36B",
    highlight: "Eating across 5 different color spectrums daily.",
    whoCriteria: "ICMR-NIN 2024: Minimum 400g–500g of varied fruits and vegetables every single day.",
    classroomTakeaway: "Different colors represent distinct protective polyphenols and antioxidants.",
    angle: 90
  },
  {
    id: "moderation",
    name: "Metabolic Moderation",
    subtitle: "Controlling Salt, Sugar & Trans-Fats",
    pillar: "Pillar 03: Moderation",
    image: CINEMATIC_IMAGES.ancientGrains,
    color: "#FFB347",
    highlight: "Enjoying wholesome food without chronic overconsumption.",
    whoCriteria: "WHO Limit: Keep sodium intake below 2,000 mg/day (less than 1 teaspoon of table salt).",
    classroomTakeaway: "It is not about starvation; it is about stopping when 80% full (Hara Hachi Bu).",
    angle: 180
  },
  {
    id: "adequacy",
    name: "Nutritional Adequacy",
    subtitle: "Meeting Real Cellular Demands",
    pillar: "Pillar 04: Adequacy",
    image: CINEMATIC_IMAGES.cleanProteinLentils,
    color: "#2BE0B2",
    highlight: "Zero micronutrient deficiencies in young adults.",
    whoCriteria: "ICMR-NIN 2024: 0.83g protein per kg body weight daily for active young adults.",
    classroomTakeaway: "Guarantees adequate iron, zinc, calcium, and B-vitamins for study stamina.",
    angle: 270
  }
];

export default function Slide02_Definition() {
  const [activeNodeId, setActiveNodeId] = useState<string>("balance");
  const activeNode = UNIVERSE_NODES.find(n => n.id === activeNodeId) || UNIVERSE_NODES[0];

  const handleSelectNode = (id: string) => {
    soundManager.playReveal();
    setActiveNodeId(id);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden bg-[#071D18]">
      {/* Background Cinematic Food Universe Ambient Glow */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none transition-all duration-700"
        style={{ backgroundImage: `url(${CINEMATIC_IMAGES.foodUniverseCosmos})` }}
      />
      <div className="absolute inset-0 cinematic-vignette-heavy pointer-events-none" />

      {/* Slide Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0B2922] text-[#00C896] border border-[#00C896]/30">
              Slide 02 • Core Definition
            </span>
            <span className="text-xs font-mono text-[#C7F36B]/80 hidden sm:inline">
              Interactive Food Universe • Click any celestial node to explore
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#FBF9F4] font-display tracking-tight uppercase">
            WHAT IS A HEALTHY DIET?
          </h2>
          <p className="text-xs sm:text-sm text-[#F5F1E8]/75 font-sans max-w-2xl mt-1">
            Not starvation. Not calorie obsession. A healthy diet is a living bio-equilibrium that nourishes every cellular pathway without inducing metabolic fatigue.
          </p>
        </div>

        {/* 4 Pillars Mini Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-[#071D18]/90 border border-[#00C896]/20 rounded-2xl backdrop-blur-md">
          {UNIVERSE_NODES.map(node => (
            <button
              key={node.id}
              onClick={() => handleSelectNode(node.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeNodeId === node.id
                  ? "bg-[#00C896] text-[#071D18] shadow-lg shadow-[#00C896]/30"
                  : "text-[#F5F1E8]/60 hover:text-[#F5F1E8] hover:bg-[#0B2922]"
              }`}
            >
              {node.pillar.split(':')[1]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Stage: Interactive Food Universe */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        
        {/* Left Arena: Celestial Orbital Visual (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
            
            {/* Orbital Rings */}
            <div className="absolute inset-0 rounded-full border border-[#00C896]/20 animate-spin" style={{ animationDuration: '60s' }} />
            <div className="absolute inset-8 rounded-full border border-dashed border-[#C7F36B]/25 animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />

            {/* Central Star Core */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-[#0B2922] via-[#0F382F] to-[#071D18] border-2 border-[#00C896] p-2 flex flex-col items-center justify-center text-center shadow-2xl shadow-[#00C896]/30 z-10"
            >
              <Sparkles className="w-5 h-5 text-[#C7F36B] mb-1" />
              <span className="text-[10px] font-mono uppercase text-[#00C896] font-bold">The Core</span>
              <span className="text-xs font-black text-[#FBF9F4] font-display uppercase leading-tight">
                Living Food Harmony
              </span>
            </motion.div>

            {/* 4 Orbiting Food Nodes */}
            {UNIVERSE_NODES.map((node, i) => {
              const isSelected = activeNodeId === node.id;
              // Circular coordinates
              const angles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
              const radius = 120; // px
              const x = Math.cos(angles[i]) * radius;
              const y = Math.sin(angles[i]) * radius;

              return (
                <motion.button
                  key={node.id}
                  onClick={() => handleSelectNode(node.id)}
                  style={{ x, y }}
                  whileHover={{ scale: 1.15 }}
                  className={`absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 cursor-pointer shadow-xl transition-all ${
                    isSelected
                      ? "ring-4 ring-[#00C896] border-[#FBF9F4] scale-110 z-20"
                      : "border-[#00C896]/40 opacity-75 hover:opacity-100"
                  }`}
                >
                  <img src={node.image} alt={node.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                </motion.button>
              );
            })}
          </div>

          <span className="text-[11px] font-mono text-[#00C896]/80 mt-2 text-center">
            Click any orbiting food planet to inspect its nutritional law
          </span>
        </div>

        {/* Right Arena: Cinematic Editorial Card & Documentary Deep-Dive (7 cols) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35 }}
              className="p-6 sm:p-7 rounded-3xl glass-panel border border-[#00C896]/30 shadow-2xl relative overflow-hidden"
            >
              {/* Top Accent & Image Snippet */}
              <div className="flex items-start justify-between gap-4 border-b border-[#00C896]/20 pb-4 mb-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C7F36B] block mb-1">
                    {activeNode.pillar}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#FBF9F4] font-display uppercase tracking-tight">
                    {activeNode.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-serif italic text-[#00C896] mt-0.5">
                    "{activeNode.highlight}"
                  </p>
                </div>

                {/* Circular Photo Preview */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#00C896]/40 shrink-0 shadow-lg">
                  <img src={activeNode.image} alt={activeNode.name} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* WHO & ICMR-NIN Scientific Criteria */}
              <div className="p-3.5 rounded-2xl bg-[#071D18]/80 border border-[#00C896]/20 mb-3.5">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#00C896]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00C896] font-mono">
                    Global Health Benchmark
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#F5F1E8] font-medium leading-relaxed">
                  {activeNode.whoCriteria}
                </p>
              </div>

              {/* Practical Classroom Rule */}
              <div className="p-3.5 rounded-2xl bg-[#0F382F]/40 border border-[#C7F36B]/25">
                <div className="flex items-center gap-2 mb-1">
                  <Info className="w-4 h-4 text-[#C7F36B]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C7F36B] font-mono">
                    Student Practical Takeaway
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#F5F1E8]/90 leading-relaxed">
                  {activeNode.classroomTakeaway}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Slide Footer Keynote Takeaway */}
      <div className="relative z-10 pt-3 border-t border-[#00C896]/20 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-[#F5F1E8]/80">
          <span className="w-2 h-2 rounded-full bg-[#00C896]" />
          <span><strong>The 4 Pillars Rule:</strong> A healthy diet is not an extreme restriction; it is an enduring lifestyle of balance, variety, moderation, and adequacy.</span>
        </div>
        <span className="text-[11px] font-mono text-[#00C896]/80 hidden md:inline">
          World Health Organization Factsheet 394
        </span>
      </div>
    </div>
  );
}
