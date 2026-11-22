import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Clock
} from 'lucide-react';
import { ROUTINE_SLOTS } from '../../data/slidesData';
import { CINEMATIC_IMAGES } from '../../data/cinematicImages';
import { soundManager } from '../../utils/audioSystem';

export default function Slide10_DailyRoutine() {
  const [activeSlotIndex, setActiveSlotIndex] = useState(0);
  const activeSlot = ROUTINE_SLOTS[activeSlotIndex];

  const routineImages: Record<string, string> = {
    Morning: CINEMATIC_IMAGES.morningSunlight,
    Afternoon: CINEMATIC_IMAGES.middayLunchTable,
    Evening: CINEMATIC_IMAGES.eveningWorkoutWalk,
    Night: CINEMATIC_IMAGES.nightSleepQuiet
  };

  const periodColors = {
    Morning: { accent: '#FFB347', border: 'border-amber-400/40', badge: 'text-amber-300' },
    Afternoon: { accent: '#00C896', border: 'border-emerald-400/40', badge: 'text-[#00C896]' },
    Evening: { accent: '#C7F36B', border: 'border-lime-400/40', badge: 'text-[#C7F36B]' },
    Night: { accent: '#A78BFA', border: 'border-purple-400/40', badge: 'text-purple-300' }
  };

  const currentTheme = periodColors[activeSlot.period as keyof typeof periodColors] || periodColors.Morning;

  const handleSelectSlot = (idx: number) => {
    soundManager.playReveal();
    setActiveSlotIndex(idx);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden bg-[#071D18]">
      {/* Background Cinematic Atmosphere with Dark Film Vignette */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none transition-all duration-700"
        style={{ backgroundImage: `url(${routineImages[activeSlot.period]})` }}
      />
      <div className="absolute inset-0 cinematic-vignette-heavy pointer-events-none" />

      {/* Slide Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0B2922] text-[#00C896] border border-[#00C896]/30">
              Slide 10 • Chrono-Nutrition
            </span>
            <span className="text-xs font-mono text-[#C7F36B]/80 hidden sm:inline">
              Cinematic 24-Hour Timeline • Synchronizing meal windows with human circadian clocks
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#FBF9F4] font-display tracking-tight uppercase">
            HEALTHY 24-HOUR ROUTINE
          </h2>
          <p className="text-xs sm:text-sm text-[#F5F1E8]/75 font-sans max-w-2xl mt-1">
            Circadian biology proves that <em>when</em> you eat is almost as critical as <em>what</em> you eat. An actionable 24-hour routine designed specifically for college students.
          </p>
        </div>

        <div className="px-3.5 py-1.5 rounded-2xl bg-[#0B2922]/90 border border-[#00C896]/30 text-xs font-mono text-[#C7F36B]">
          Current Focus: <span className="font-bold text-[#FBF9F4]">{activeSlot.period} Phase</span>
        </div>
      </div>

      {/* Main Interactive Stage: 24h Timeline Bar & Showcase */}
      <div className="relative z-10 my-auto">
        
        {/* Horizontal Timeline Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {ROUTINE_SLOTS.map((slot, idx) => {
            const isSelected = activeSlotIndex === idx;
            const theme = periodColors[slot.period as keyof typeof periodColors];

            return (
              <motion.button
                key={slot.period}
                onClick={() => handleSelectSlot(idx)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`p-3 rounded-2xl text-left border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? `bg-gradient-to-br from-[#0B2922] to-[#0F382F] ${theme.border} ring-2 ring-[#00C896]/40 shadow-xl`
                    : "glass-card hover:bg-[#0B2922]/40 border-[#00C896]/15"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase font-bold" style={{ color: theme.accent }}>
                    Phase 0{idx + 1} • {slot.period}
                  </span>
                  <span className="text-[10px] font-mono text-[#F5F1E8]/60">
                    {slot.time.split('–')[0]}
                  </span>
                </div>

                <h4 className="text-xs sm:text-sm font-bold font-display text-[#FBF9F4] leading-tight">
                  {slot.title.split('&')[0]}
                </h4>

                {isSelected && (
                  <motion.div 
                    layoutId="active-timeline-indicator"
                    className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#00C896] via-[#2BE0B2] to-[#C7F36B]"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Detailed Phase Inspection Board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlot.period}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className={`p-6 rounded-3xl glass-panel border ${currentTheme.border} shadow-2xl relative overflow-hidden`}
          >
            {/* Phase Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#00C896]/20 pb-3 mb-4 gap-2">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C7F36B]">
                  {activeSlot.time} • Biological Window
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#FBF9F4] font-display uppercase">
                  {activeSlot.title}
                </h3>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-[#F5F1E8] bg-[#071D18] border border-[#00C896]/30 shrink-0">
                Target Nutrients: {activeSlot.focusNutrient}
              </span>
            </div>

            {/* Content Columns: Actions & Student Tips */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              
              {/* 3 Core Action Items (7 cols) */}
              <div className="lg:col-span-7 space-y-2.5">
                <span className="text-xs font-mono uppercase font-bold text-[#00C896] block mb-1">
                  Non-Negotiable Protocol Actions:
                </span>
                {activeSlot.actionItems.map((action, i) => (
                  <div 
                    key={i}
                    className="p-3 rounded-2xl bg-[#071D18]/80 border border-[#00C896]/20 flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#00C896]/20 text-[#00C896] flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 border border-[#00C896]/30">
                      0{i + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#F5F1E8] font-medium leading-relaxed">
                      {action}
                    </p>
                  </div>
                ))}
              </div>

              {/* Student Reality Check (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between p-4 rounded-2xl bg-[#0B2922]/80 border border-[#C7F36B]/25">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[#FFB347]" />
                    <span className="text-xs font-mono uppercase font-bold text-[#FFB347]">
                      College Student Reality Check
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F5F1E8]/90 leading-relaxed font-medium mb-3">
                    {activeSlot.studentTip}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#071D18]/90 border border-[#00C896]/20 text-[11px] text-[#C7F36B] font-mono">
                  💡 Chronobiology Maxim: Insulin sensitivity is naturally highest in daylight hours and drops sharply after sunset.
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Footer Keynote Takeaway */}
      <div className="relative z-10 pt-3 border-t border-[#00C896]/20 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-[#F5F1E8]/80">
          <Clock className="w-4 h-4 text-[#00C896]" />
          <span><strong>Circadian Principle:</strong> "Eat breakfast like a king, lunch like a prince, and dinner like a pauper." Give your digestive organs a complete 12-hour rest overnight.</span>
        </div>
        <span className="text-[11px] font-mono text-[#00C896]/80 hidden md:inline">
          Nobel Prize in Circadian Medicine 2017 & ICMR-NIN 2024
        </span>
      </div>
    </div>
  );
}
