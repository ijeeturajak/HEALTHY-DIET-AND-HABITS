import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  Brain, 
  Sun, 
  Dumbbell,
  Activity
} from 'lucide-react';
import { CINEMATIC_IMAGES } from '../../data/cinematicImages';
import { soundManager } from '../../utils/audioSystem';

export default function Slide09_Hydration() {
  const [activityTier, setActivityTier] = useState<'sedentary' | 'moderate' | 'athletic'>('moderate');
  const [climateMode, setClimateMode] = useState<'temperate' | 'tropical'>('tropical');
  const [weightTier, setWeightTier] = useState<'55' | '70' | '85'>('70');

  // Dynamic scientific calculation: base ~35ml/kg + climate + activity adjustments
  const calculateFluidTarget = () => {
    let baseLiters = Number(weightTier) * 0.035; // 35ml per kg
    if (activityTier === 'moderate') baseLiters += 0.4;
    if (activityTier === 'athletic') baseLiters += 0.9;
    if (climateMode === 'tropical') baseLiters += 0.5;
    return baseLiters.toFixed(1);
  };

  const targetLiters = calculateFluidTarget();

  const handleTierChange = (type: string, val: string) => {
    soundManager.playSubtleClick();
    if (type === 'activity') setActivityTier(val as any);
    if (type === 'climate') setClimateMode(val as any);
    if (type === 'weight') setWeightTier(val as any);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden bg-[#071D18]">
      {/* Background Water Splash Photography with Deep Blue Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none transition-all duration-700"
        style={{ backgroundImage: `url(${CINEMATIC_IMAGES.waterSplashPure})` }}
      />
      <div className="absolute inset-0 cinematic-vignette-heavy pointer-events-none" />

      {/* Floating Translucent Water Droplets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/30 border border-cyan-200/40 backdrop-blur-sm"
            style={{
              width: `${(i % 3) * 6 + 8}px`,
              height: `${(i % 3) * 6 + 8}px`,
              top: `${(i * 14) % 90}%`,
              left: `${(i * 23) % 90}%`
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.7, 0.2]
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Slide Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-500/30">
              Slide 09 • The Living Fluid
            </span>
            <span className="text-xs font-mono text-[#C7F36B]/80 hidden sm:inline">
              Personalized Hydration Science • No rigid one-size-fits-all myths
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#FBF9F4] font-display tracking-tight uppercase">
            WATER & HYDRATION DYNAMICS
          </h2>
          <p className="text-xs sm:text-sm text-[#F5F1E8]/75 font-sans max-w-2xl mt-1">
            The human body is ~60% water; your brain is ~73% water. Hydration is an individual calculation based on your body mass, metabolic sweat rate, and ambient climate.
          </p>
        </div>

        {/* Dynamic Fluid Target Display */}
        <div className="flex items-center gap-3 p-2 px-4 rounded-2xl glass-panel border border-cyan-400/40 bg-[#071D18]/90">
          <Droplets className="w-5 h-5 text-cyan-400 animate-pulse" />
          <div>
            <span className="text-[10px] font-mono uppercase text-cyan-300 block">Personalized Target</span>
            <span className="text-lg font-black text-[#FBF9F4] font-mono leading-none">
              ~{targetLiters} Liters / Day
            </span>
          </div>
        </div>
      </div>

      {/* Main Interactive Stage: Personalized Calculation & Visual Cylinder */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        
        {/* Left Arena: Personalized Calculation Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-3.5">
          
          {/* Weight Tier */}
          <div className="p-3.5 rounded-2xl glass-panel border border-cyan-500/20">
            <span className="text-xs font-mono uppercase font-bold text-cyan-300 block mb-2 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" />
              1. Approximate Body Mass:
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { val: '55', label: '50 – 60 kg' },
                { val: '70', label: '65 – 75 kg' },
                { val: '85', label: '80+ kg' }
              ].map(tier => (
                <button
                  key={tier.val}
                  onClick={() => handleTierChange('weight', tier.val)}
                  className={`py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    weightTier === tier.val
                      ? "bg-cyan-500 text-[#071D18] shadow-md shadow-cyan-500/30"
                      : "bg-[#071D18] text-[#F5F1E8]/70 hover:text-[#FBF9F4] border border-cyan-500/15"
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>

          {/* Activity Tier */}
          <div className="p-3.5 rounded-2xl glass-panel border border-cyan-500/20">
            <span className="text-xs font-mono uppercase font-bold text-cyan-300 block mb-2 flex items-center gap-1.5">
              <Dumbbell className="w-3.5 h-3.5" />
              2. Daily Campus Physical Activity:
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { val: 'sedentary', label: 'Desk Study' },
                { val: 'moderate', label: 'Campus Walk' },
                { val: 'athletic', label: 'Gym / Sports' }
              ].map(act => (
                <button
                  key={act.val}
                  onClick={() => handleTierChange('activity', act.val)}
                  className={`py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activityTier === act.val
                      ? "bg-cyan-500 text-[#071D18] shadow-md shadow-cyan-500/30"
                      : "bg-[#071D18] text-[#F5F1E8]/70 hover:text-[#FBF9F4] border border-cyan-500/15"
                  }`}
                >
                  {act.label}
                </button>
              ))}
            </div>
          </div>

          {/* Climate Mode */}
          <div className="p-3.5 rounded-2xl glass-panel border border-cyan-500/20">
            <span className="text-xs font-mono uppercase font-bold text-cyan-300 block mb-2 flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5" />
              3. Ambient Climate & Temperature:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {[
                { val: 'temperate', label: 'Cool / AC Rooms' },
                { val: 'tropical', label: 'Warm / Indian Summer' }
              ].map(clim => (
                <button
                  key={clim.val}
                  onClick={() => handleTierChange('climate', clim.val)}
                  className={`py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    climateMode === clim.val
                      ? "bg-cyan-500 text-[#071D18] shadow-md shadow-cyan-500/30"
                      : "bg-[#071D18] text-[#F5F1E8]/70 hover:text-[#FBF9F4] border border-cyan-500/15"
                  }`}
                >
                  {clim.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Arena: Physiological Impacts & Urine Color Indicator (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          
          {/* Real-time Biological Fact Card */}
          <div className="p-6 rounded-3xl glass-panel border border-cyan-500/30 bg-gradient-to-br from-[#0B2922] via-[#071D18] to-cyan-950/40 shadow-2xl">
            <div className="flex items-center gap-3 mb-3 border-b border-cyan-500/20 pb-3">
              <Brain className="w-6 h-6 text-cyan-400" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                  Neurological & Cognitive Impact
                </span>
                <h3 className="text-xl font-black text-[#FBF9F4] font-display uppercase">
                  Brain Dehydration Kinetics
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F5F1E8] font-medium leading-relaxed mb-4">
              Just a <strong>1.5% drop in normal body water volume</strong> triggers noticeable cognitive fatigue, headache sensitivity, short-term memory impairment, and a 10% reduction in mental processing speed during afternoon exams.
            </p>

            {/* Urine Self-Assessment Color Scale */}
            <div>
              <span className="text-xs font-mono uppercase font-bold text-[#C7F36B] block mb-2">
                Real-Time Self-Assessment: Urine Color Indicator
              </span>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { color: '#FEF08A', label: 'Clear / Pale Straw', status: 'Optimal Hydrated' },
                  { color: '#FDE047', label: 'Light Yellow', status: 'Adequate Baseline' },
                  { color: '#F59E0B', label: 'Deep Yellow', status: 'Mild Dehydration' },
                  { color: '#B45309', label: 'Amber / Brown', status: 'Severe Fluid Debt' }
                ].map((item, idx) => (
                  <div key={idx} className="p-2 rounded-xl bg-[#071D18]/90 border border-cyan-500/15 text-center">
                    <div className="w-full h-3 rounded-full mb-1" style={{ backgroundColor: item.color }} />
                    <span className="text-[10px] font-mono text-[#F5F1E8] block font-bold truncate">{item.label}</span>
                    <span className="text-[9px] font-mono text-cyan-300/80 truncate block">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Three Golden Hydration Maxim Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-2xl glass-card border border-cyan-500/20">
              <span className="text-[10px] font-mono uppercase font-bold text-cyan-300 block mb-0.5">
                Morning Cellular Flush
              </span>
              <p className="text-xs text-[#F5F1E8]/85">
                Drink 500ml of room-temperature water immediately upon waking to rehydrate metabolic organs.
              </p>
            </div>
            <div className="p-3 rounded-2xl glass-card border border-cyan-500/20">
              <span className="text-[10px] font-mono uppercase font-bold text-cyan-300 block mb-0.5">
                Meal Dilution Rule
              </span>
              <p className="text-xs text-[#F5F1E8]/85">
                Avoid drinking large icy gulps during meals; hydrate 30 mins before or 40 mins after eating.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Slide Footer Keynote Takeaway */}
      <div className="relative z-10 pt-3 border-t border-[#00C896]/20 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-[#F5F1E8]/80">
          <Droplets className="w-4 h-4 text-cyan-400" />
          <span><strong>Medical Maxim:</strong> By the time your throat senses dry thirst, cellular dehydration has already occurred. Sip clean water proactively throughout lectures.</span>
        </div>
        <span className="text-[11px] font-mono text-cyan-400/80 hidden md:inline">
          ICMR-NIN 2024 Guidelines for Tropical Climates
        </span>
      </div>
    </div>
  );
}
