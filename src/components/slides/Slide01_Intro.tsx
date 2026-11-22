import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, User, GraduationCap, Edit3 } from 'lucide-react';
import { soundManager } from '../../utils/audioSystem';
import { CINEMATIC_IMAGES } from '../../data/cinematicImages';

interface SlideProps {
  onStartPresentation?: () => void;
  onNext?: () => void;
}

export default function Slide01_Intro({ onStartPresentation, onNext }: SlideProps) {
  const [stage, setStage] = useState<number>(0); // 0: Dark Void -> 1: Floating Elements -> 2: Reveal Meal -> 3: Title & CTA
  const [presenterName, setPresenterName] = useState('Jeetu ');
  const courseSection = 'College Classroom Keynote • Unit Presentation';
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 600);
    const t2 = setTimeout(() => setStage(2), 1600);
    const t3 = setTimeout(() => setStage(3), 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleStart = () => {
    soundManager.playStartKeynote();
    if (onStartPresentation) onStartPresentation();
    else if (onNext) onNext();
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between p-6 sm:p-10 md:p-14 overflow-hidden bg-[#071D18]">
      {/* Cinematic Full-Screen Photography Background with Heavy Vignette */}
      <motion.div
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: stage >= 2 ? 0.38 : 0.08, scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${CINEMATIC_IMAGES.heroDarkIngredients})` }}
      />

      {/* Atmospheric Vignette & Depth Mask */}
      <div className="absolute inset-0 cinematic-vignette-heavy pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071D18] via-transparent to-[#071D18]/90 pointer-events-none" />

      {/* Floating Organic Glow Specks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${(i % 3) * 3 + 3}px`,
              height: `${(i % 3) * 3 + 3}px`,
              top: `${(i * 19) % 95}%`,
              left: `${(i * 27) % 95}%`,
              backgroundColor: i % 2 === 0 ? '#00C896' : '#C7F36B',
              opacity: 0.35,
              filter: 'blur(1px)'
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, (i % 2 === 0 ? 15 : -15), 0],
              opacity: [0.2, 0.65, 0.2]
            }}
            transition={{
              duration: 5 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />
        ))}
      </div>

      {/* Top Header Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-10 flex items-center justify-between w-full max-w-6xl"
      >
        <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#071D18]/90 border border-[#00C896]/30 backdrop-blur-md shadow-xl">
          <span className="w-2 h-2 rounded-full bg-[#00C896] animate-ping" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#C7F36B] font-bold">
            THE FOOD FACTOR • PRESENTATION KEYNOTE
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-[#F5F1E8]/70">
          <span className="text-[#00C896]">ICMR-NIN 2024</span>
          <span>•</span>
          <span className="text-[#C7F36B]">WHO Healthy Diet Standard</span>
        </div>
      </motion.div>

      {/* Main Center Stage: Huge Editorial Typography & Scene Reveal */}
      <div className="relative z-10 my-auto text-center flex flex-col items-center max-w-5xl">

        {/* Curated Pre-title Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: stage >= 1 ? 1 : 0, scale: stage >= 1 ? 1 : 0.9 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B2922]/90 border border-[#00C896]/30 text-xs font-mono font-bold text-[#6AECC8]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C7F36B]" />
          <span>AN INTERACTIVE CINEMATIC SCIENCE DOCUMENTARY</span>
        </motion.div>

        {/* Main Title: Editorial & Bold */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: stage >= 2 ? 1 : 0, y: stage >= 2 ? 0 : 30 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#FBF9F4] font-display uppercase leading-[1.02]"
        >
          HEALTHY DIET <br />
          <span className="bg-gradient-to-r from-[#00C896] via-[#C7F36B] to-[#FBF9F4] bg-clip-text text-transparent">
            & HABITS
          </span>
        </motion.h1>

        {/* Tagline: Editorial Playfair Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 3 ? 1 : 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-5 space-y-1.5"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#C7F36B] font-semibold tracking-wide">
            Eat Smart. Live Strong. Feel Amazing.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[#F5F1E8]/75 font-sans max-w-2xl mx-auto leading-relaxed">
            Every cell, neurotransmitter, and muscle fibre in your body is forged directly from what is on your plate.
          </p>
        </motion.div>

        {/* Start Experience Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: stage >= 3 ? 1 : 0, y: stage >= 3 ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={handleStart}
            className="group relative inline-flex items-center gap-3.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00C896] via-[#2BE0B2] to-[#C7F36B] hover:from-[#C7F36B] hover:to-[#00C896] text-[#071D18] font-black text-sm sm:text-base tracking-wider uppercase shadow-2xl shadow-[#00C896]/30 hover:shadow-[#C7F36B]/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer font-display"
          >
            <div className="w-8 h-8 rounded-xl bg-[#071D18]/15 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 fill-[#071D18] text-[#071D18]" />
            </div>
            <span>START EXPERIENCE</span>
          </button>
        </motion.div>

      </div>

      {/* Bottom Metadata & Presenter Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: stage >= 3 ? 1 : 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl pt-4 border-t border-[#00C896]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
      >
        {/* Presenter info pill */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#071D18]/90 border border-[#00C896]/25 text-[#F5F1E8]">
            <User className="w-3.5 h-3.5 text-[#00C896]" />
            {isEditing ? (
              <input
                type="text"
                value={presenterName}
                onChange={(e) => setPresenterName(e.target.value)}
                onBlur={() => setIsEditing(false)}
                autoFocus
                className="bg-transparent border-b border-[#00C896] text-xs font-bold text-[#F5F1E8] focus:outline-none"
              />
            ) : (
              <span className="font-bold text-[#F5F1E8]">Presenter: {presenterName}</span>
            )}
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="hover:text-[#C7F36B] text-[#00C896]/70 transition-colors cursor-pointer ml-1"
              title="Click to edit presenter name"
            >
              <Edit3 className="w-3 h-3" />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-[#F5F1E8]/70 font-mono">
            <GraduationCap className="w-3.5 h-3.5 text-[#C7F36B]" />
            <span>{courseSection}</span>
          </div>
        </div>

        {/* Hotkeys reminder */}
        <div className="text-[11px] font-mono text-[#00C896]/80 flex items-center gap-2">
          <span>Press [Space] or [→] to advance</span>
          <span>•</span>
          <span>[P] for Speaker Notes</span>
          <span>•</span>
          <span>[F] Fullscreen</span>
        </div>
      </motion.div>
    </div>
  );
}
