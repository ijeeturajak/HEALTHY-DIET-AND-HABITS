import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  RotateCcw, 
  CheckCheck,
  Trophy
} from 'lucide-react';
import { HABIT_ITEMS } from '../../data/slidesData';
import { CINEMATIC_IMAGES } from '../../data/cinematicImages';
import { soundManager } from '../../utils/audioSystem';

export default function Slide07_HealthyHabits() {
  const [checkedHabits, setCheckedHabits] = useState<Record<string, boolean>>({
    h1: true,
    h2: true,
    h3: false,
    h4: false,
    h5: true,
    h6: true,
    h7: false,
    h8: true
  });
  const [activeStoryScene, setActiveStoryScene] = useState<number>(0);
  const [inspectedHabitId, setInspectedHabitId] = useState<string>('h1');

  const lifestyleScenes = [
    {
      title: "Morning: Protein Fuel & Hydration",
      tagline: "Break Fast within 90 mins of Waking",
      image: CINEMATIC_IMAGES.mindfulBreakfast,
      habitKey: "h2",
      story: "Rushing out without breakfast causes a mid-morning dopamine slump, leading directly to compulsive sugar cravings at 11 AM."
    },
    {
      title: "Midday: The 20-Minute Screen-Free Lunch",
      tagline: "Sensory Mindful Chewing",
      image: CINEMATIC_IMAGES.screenFreeMeal,
      habitKey: "h4",
      story: "Stepping away from laptops and phones allows your brain's leptin receptors to register true satiety, preventing accidental overeating."
    },
    {
      title: "Afternoon: Smart Whole-Food Snacks",
      tagline: "Crunch without Oxidized Trans-Fats",
      image: CINEMATIC_IMAGES.roastedChanaCrunch,
      habitKey: "h6",
      story: "Swapping fried canteen samosas for roasted chana or seasonal fruit maintains steady energy for late-afternoon lectures."
    },
    {
      title: "Evening: Digestive Calm & Hygiene",
      tagline: "Consistent Circadian Windows",
      image: CINEMATIC_IMAGES.chewingSlowlyDining,
      habitKey: "h1",
      story: "Synchronizing daily meal timings aligns digestive enzymes with your peripheral circadian clock, improving glucose clearance."
    }
  ];

  const toggleHabit = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.playSubtleClick();
    setCheckedHabits(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const checkAll = () => {
    soundManager.playVictory();
    const all: Record<string, boolean> = {};
    HABIT_ITEMS.forEach(h => { all[h.id] = true; });
    setCheckedHabits(all);
  };

  const resetAll = () => {
    soundManager.playSubtleClick();
    const none: Record<string, boolean> = {};
    HABIT_ITEMS.forEach(h => { none[h.id] = false; });
    setCheckedHabits(none);
  };

  const checkedCount = Object.values(checkedHabits).filter(Boolean).length;
  const totalCount = HABIT_ITEMS.length;
  const progressPercent = Math.round((checkedCount / totalCount) * 100);

  const currentScene = lifestyleScenes[activeStoryScene];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden bg-[#071D18]">
      {/* Background Soft Glow & Dark Film Vignette */}
      <div className="absolute inset-0 cinematic-vignette-heavy pointer-events-none" />

      {/* Slide Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0B2922] text-[#00C896] border border-[#00C896]/30">
              Slide 07 • Lifestyle Storytelling
            </span>
            <span className="text-xs font-mono text-[#C7F36B]/80 hidden sm:inline">
              A Day in the Life • Interactive student routine habits
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#FBF9F4] font-display tracking-tight uppercase">
            HEALTHY EATING HABITS
          </h2>
          <p className="text-xs sm:text-sm text-[#F5F1E8]/75 font-sans max-w-2xl mt-1">
            Nutrition is what you put on your plate; habits govern how your gut digests, absorbs, and metabolizes it. 8 foundational everyday behaviors.
          </p>
        </div>

        {/* Quick Bulk Actions for Live Keynote Demo */}
        <div className="flex items-center gap-2">
          <button
            onClick={checkAll}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#00C896] text-[#071D18] text-xs font-mono font-bold cursor-pointer transition-all shadow-md hover:scale-105"
          >
            <CheckCheck className="w-3.5 h-3.5" />
            <span>Select All</span>
          </button>
          <button
            onClick={resetAll}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0B2922] hover:bg-[#0F382F] border border-[#00C896]/20 text-[#F5F1E8] text-xs font-mono font-bold cursor-pointer transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage: Lifestyle Scenes & Live Habit Trackers */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-stretch">
        
        {/* Left Arena: Cinematic Lifestyle Story Scenes (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          
          {/* Active Scene Photographic Showcase */}
          <div className="relative h-56 sm:h-64 rounded-3xl overflow-hidden border border-[#00C896]/30 shadow-2xl mb-3">
            <img 
              src={currentScene.image} 
              alt={currentScene.title} 
              className="w-full h-full object-cover transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071D18] via-[#071D18]/50 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7F36B] font-bold block mb-1">
                Lifestyle Scene 0{activeStoryScene + 1}
              </span>
              <h4 className="text-lg sm:text-xl font-black text-[#FBF9F4] font-display uppercase leading-tight">
                {currentScene.title}
              </h4>
              <p className="text-xs text-[#F5F1E8]/90 mt-1 leading-relaxed font-medium">
                {currentScene.story}
              </p>
            </div>
          </div>

          {/* 4 Story Navigation Pills */}
          <div className="grid grid-cols-4 gap-2">
            {lifestyleScenes.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  soundManager.playSubtleClick();
                  setActiveStoryScene(i);
                }}
                className={`py-2 px-1 rounded-xl text-center border text-[11px] font-mono font-bold transition-all cursor-pointer truncate ${
                  activeStoryScene === i
                    ? "bg-[#00C896] text-[#071D18] border-[#00C896] shadow-md"
                    : "glass-card text-[#F5F1E8]/70 hover:text-[#FBF9F4] border-[#00C896]/15"
                }`}
              >
                Scene 0{i + 1}
              </button>
            ))}
          </div>

        </div>

        {/* Right Arena: 8 Interactive Habit Controls & Score Gauge (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          
          {/* Habits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
            {HABIT_ITEMS.map((habit) => {
              const isChecked = !!checkedHabits[habit.id];
              const isInspected = inspectedHabitId === habit.id;

              return (
                <div
                  key={habit.id}
                  onClick={() => {
                    soundManager.playSubtleClick();
                    setInspectedHabitId(habit.id);
                  }}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                    isInspected 
                      ? "ring-2 ring-[#00C896] bg-gradient-to-br from-[#0B2922] to-[#0F382F] border-[#00C896]" 
                      : isChecked
                        ? "bg-[#0B2922]/70 border-[#00C896]/30"
                        : "glass-card hover:bg-[#0B2922]/30 border-[#00C896]/15"
                  }`}
                >
                  <button
                    onClick={(e) => toggleHabit(habit.id, e)}
                    className="mt-0.5 shrink-0 cursor-pointer focus:outline-none"
                  >
                    {isChecked ? (
                      <CheckCircle2 className="w-5 h-5 text-[#00C896] fill-[#0B2922]" />
                    ) : (
                      <Circle className="w-5 h-5 text-[#00C896]/40 hover:text-[#00C896]" />
                    )}
                  </button>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded bg-[#071D18] text-[#00C896] border border-[#00C896]/20">
                        {habit.category}
                      </span>
                    </div>
                    <h4 className={`text-xs font-bold leading-tight ${isChecked ? "text-[#FBF9F4]" : "text-[#F5F1E8]/70"}`}>
                      {habit.title}
                    </h4>
                    <p className="text-[10px] text-[#F5F1E8]/60 line-clamp-1 mt-0.5">
                      {habit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Adherence Score Gauge Bar */}
          <div className="p-3.5 rounded-2xl glass-panel border border-[#00C896]/20 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-[#FFB347] shrink-0" />
              <div>
                <span className="text-xs font-mono font-bold text-[#FBF9F4] block">
                  Daily Habit Adherence: {checkedCount} / {totalCount} ({progressPercent}%)
                </span>
                <span className="text-[11px] font-mono text-[#00C896]">
                  {checkedCount >= 7 ? "Optimal Longevity & Vitality Zone" : checkedCount >= 5 ? "Resilient Baseline" : "At Risk of Afternoon Crashes"}
                </span>
              </div>
            </div>

            <div className="w-32 sm:w-48 h-3 bg-[#071D18] rounded-full overflow-hidden border border-[#00C896]/30">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#00C896] via-[#2BE0B2] to-[#C7F36B] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

        </div>

      </div>

      {/* Slide Footer Keynote Takeaway */}
      <div className="relative z-10 pt-3 border-t border-[#00C896]/20 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-[#F5F1E8]/80">
          <Sparkles className="w-4 h-4 text-[#00C896]" />
          <span><strong>The 20-Minute Leptin Rule:</strong> It takes ~20 minutes for gastric fullness signals to reach the brain. Chewing slowly is the easiest natural way to avoid overeating.</span>
        </div>
        <span className="text-[11px] font-mono text-[#00C896]/80 hidden md:inline">
          James Clear Atomic Habits & ICMR-NIN 2024
        </span>
      </div>
    </div>
  );
}
