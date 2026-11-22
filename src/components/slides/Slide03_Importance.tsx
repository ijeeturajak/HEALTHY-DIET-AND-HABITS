import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Shield, Brain, Activity, ChevronRight, Dna } from 'lucide-react';
import { CINEMATIC_IMAGES } from '../../data/cinematicImages';
import { soundManager } from '../../utils/audioSystem';

interface EcosystemPillar {
  id: string;
  name: string;
  category: string;
  image: string;
  icon: any;
  color: string;
  stat: string;
  statLabel: string;
  mechanism: string;
  clinicalImpact: string;
}

const ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    id: "energy",
    name: "Cellular ATP & Steady Stamina",
    category: "Metabolic Engine",
    image: CINEMATIC_IMAGES.vitalityEnergy,
    icon: Zap,
    color: "#00C896",
    stat: "100%",
    statLabel: "Sustained Mental Alertness",
    mechanism: "Complex slow-release carbohydrates supply steady glucose to neurons, preventing severe 2:00 PM classroom somnolence.",
    clinicalImpact: "Eliminates reactive hypoglycemia, fatigue crashes, and chronic afternoon brain fog."
  },
  {
    id: "immunity",
    name: "Immune Armor & Pathogen Shield",
    category: "Defense System",
    image: CINEMATIC_IMAGES.cellularImmunity,
    icon: Shield,
    color: "#C7F36B",
    stat: "70%",
    statLabel: "Immune Tissue in Gut",
    mechanism: "Vitamins A, C, E, zinc, and dietary fiber feed the gut microbiota, which orchestrates over 70% of human immune responses.",
    clinicalImpact: "Drastically lowers frequency of seasonal infections, common colds, and chronic systemic inflammation."
  },
  {
    id: "brain",
    name: "Neurotransmitter & Study Focus",
    category: "Cognitive Power",
    image: CINEMATIC_IMAGES.brainFocus,
    icon: Brain,
    color: "#FFB347",
    stat: "20%",
    statLabel: "Total Caloric Use by Brain",
    mechanism: "Omega-3 fatty acids, B-complex vitamins, and amino acids (tyrosine, tryptophan) synthesize dopamine and serotonin.",
    clinicalImpact: "Sharpens memory consolidation during exam preparation and stabilizes emotional mood resilience."
  },
  {
    id: "repair",
    name: "Cellular Renewal & Tissue Repair",
    category: "Anabolic Regeneration",
    image: CINEMATIC_IMAGES.cleanProteinLentils,
    icon: Dna,
    color: "#2BE0B2",
    stat: "300B",
    statLabel: "New Cells Built Every Day",
    mechanism: "High-biological-value proteins provide essential amino acids for continuous muscle, enzyme, and skin cell regeneration.",
    clinicalImpact: "Accelerates exercise recovery, preserves lean muscle mass, and promotes vibrant skin and hair vitality."
  }
];

export default function Slide03_Importance() {
  const [activePillarId, setActivePillarId] = useState<string>("energy");
  const activePillar = ECOSYSTEM_PILLARS.find(p => p.id === activePillarId) || ECOSYSTEM_PILLARS[0];

  const handleSelectPillar = (id: string) => {
    soundManager.playReveal();
    setActivePillarId(id);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden bg-[#071D18]">
      {/* Background Cinematic Texture with Dark Film Vignette */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none transition-all duration-700"
        style={{ backgroundImage: `url(${activePillar.image})` }}
      />
      <div className="absolute inset-0 cinematic-vignette-heavy pointer-events-none" />

      {/* Slide Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0B2922] text-[#00C896] border border-[#00C896]/30">
              Slide 03 • Physiological Value
            </span>
            <span className="text-xs font-mono text-[#C7F36B]/80 hidden sm:inline">
              The Living Bio-Ecosystem • How nutrition powers human vitality
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#FBF9F4] font-display tracking-tight uppercase">
            IMPORTANCE OF BALANCED NUTRITION
          </h2>
          <p className="text-xs sm:text-sm text-[#F5F1E8]/75 font-sans max-w-2xl mt-1">
            Food is not just calories; it is molecular biological information. Every nutrient communicates directly with your genome, hormones, and immune cells.
          </p>
        </div>

        {/* Global ICMR Stat Badge */}
        <div className="px-3.5 py-1.5 rounded-2xl bg-[#0B2922]/90 border border-[#00C896]/30 text-xs font-mono text-[#C7F36B]">
          <span className="font-bold text-[#FBF9F4]">56.4% Disease Burden</span> in India Linked to Unhealthy Diet (ICMR-NIN)
        </div>
      </div>

      {/* Main Interactive Stage: 4 Bio-Ecosystem Hubs */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-stretch">
        
        {/* Left Column: 4 Interactive Pillars (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
          {ECOSYSTEM_PILLARS.map((pillar) => {
            const isSelected = activePillarId === pillar.id;
            const Icon = pillar.icon;

            return (
              <motion.button
                key={pillar.id}
                onClick={() => handleSelectPillar(pillar.id)}
                whileHover={{ x: 4 }}
                className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between relative overflow-hidden ${
                  isSelected
                    ? "bg-gradient-to-r from-[#0B2922] to-[#0F382F] border-[#00C896] ring-2 ring-[#00C896]/40 shadow-xl"
                    : "glass-card hover:bg-[#0B2922]/50 border-[#00C896]/15"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-md shrink-0"
                    style={{ backgroundColor: isSelected ? pillar.color : '#071D18', color: isSelected ? '#071D18' : pillar.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#00C896] block">
                      {pillar.category}
                    </span>
                    <h4 className={`text-sm font-bold font-display ${isSelected ? "text-[#FBF9F4]" : "text-[#F5F1E8]/85"}`}>
                      {pillar.name}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#C7F36B]">
                    {pillar.stat}
                  </span>
                  <ChevronRight className={`w-4 h-4 ${isSelected ? "text-[#00C896]" : "text-[#F5F1E8]/30"}`} />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Right Column: High-End Photographic Deep-Dive & Biological Mechanism (7 cols) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-3xl glass-panel border border-[#00C896]/30 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full"
            >
              {/* Header with Photo Banner */}
              <div className="relative h-40 sm:h-44 rounded-2xl overflow-hidden mb-4 border border-[#00C896]/20">
                <img 
                  src={activePillar.image} 
                  alt={activePillar.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071D18] via-[#071D18]/50 to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C7F36B] font-bold block">
                      Physiological Mechanism
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#FBF9F4] font-display uppercase">
                      {activePillar.name}
                    </h3>
                  </div>

                  <div className="px-3 py-1 rounded-xl bg-[#071D18]/90 border border-[#00C896]/40 text-right backdrop-blur-md">
                    <span className="text-sm font-black text-[#00C896] font-mono block leading-none">
                      {activePillar.stat}
                    </span>
                    <span className="text-[9px] font-mono text-[#F5F1E8]/70">
                      {activePillar.statLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Pathway Description */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#071D18]/80 border border-[#00C896]/20">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#00C896] block mb-1">
                    Cellular Pathway
                  </span>
                  <p className="text-xs sm:text-sm text-[#F5F1E8] font-medium leading-relaxed">
                    {activePillar.mechanism}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#0B2922]/60 border border-[#C7F36B]/25">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#C7F36B] block mb-1">
                    Real-World Health Consequence
                  </span>
                  <p className="text-xs sm:text-sm text-[#F5F1E8]/90 leading-relaxed">
                    {activePillar.clinicalImpact}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Slide Footer Keynote Takeaway */}
      <div className="relative z-10 pt-3 border-t border-[#00C896]/20 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-[#F5F1E8]/80">
          <Activity className="w-4 h-4 text-[#00C896]" />
          <span><strong>The Nutrition Equation:</strong> Nutrient-dense meals fuel uninterrupted mitochondrial ATP synthesis, leaving fast-food fatigue behind.</span>
        </div>
        <span className="text-[11px] font-mono text-[#00C896]/80 hidden md:inline">
          Harvard T.H. Chan Public Health Insights
        </span>
      </div>
    </div>
  );
}
