import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Swords, 
  Trophy, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw
} from 'lucide-react';
import { CHALLENGE_ROUNDS } from '../../data/slidesData';
import { CINEMATIC_IMAGES } from '../../data/cinematicImages';
import { soundManager } from '../../utils/audioSystem';

export default function Slide11_FoodChallenge() {
  const [currentRoundIdx, setCurrentRoundIdx] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState<Record<number, 'A' | 'B'>>({});
  const [revealedRounds, setRevealedRounds] = useState<Record<number, boolean>>({});

  const round = CHALLENGE_ROUNDS[currentRoundIdx];
  const userChoice = selectedChoices[round.id];
  const isRevealed = !!revealedRounds[round.id];

  // Specific duel photos for each of the 5 rounds
  const duelPhotos: Record<number, { imgA: string; imgB: string }> = {
    1: { imgA: CINEMATIC_IMAGES.challengeOrangeWhole, imgB: CINEMATIC_IMAGES.challengePackagedJuice },
    2: { imgA: CINEMATIC_IMAGES.challengeFriedChips, imgB: CINEMATIC_IMAGES.challengeRoastedLegumes },
    3: { imgA: CINEMATIC_IMAGES.challengeCoconutWater, imgB: CINEMATIC_IMAGES.challengeEnergyDrink },
    4: { imgA: CINEMATIC_IMAGES.challengeSugaryCereal, imgB: CINEMATIC_IMAGES.challengeSproutedEggsThali },
    5: { imgA: CINEMATIC_IMAGES.challengeLateNightInstantNoodles, imgB: CINEMATIC_IMAGES.challengeTurmericAlmondMilk }
  };

  const currentPhotos = duelPhotos[round.id] || { imgA: CINEMATIC_IMAGES.macroFreshProduce, imgB: CINEMATIC_IMAGES.deepFriedChips };

  const handleSelectChoice = (option: 'A' | 'B') => {
    soundManager.playSubtleClick();
    setSelectedChoices(prev => ({ ...prev, [round.id]: option }));
    setRevealedRounds(prev => ({ ...prev, [round.id]: true }));

    if (option === round.correctOption) {
      soundManager.playVictory();
      confetti({
        particleCount: 80,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#00C896', '#C7F36B', '#2BE0B2', '#FFB347']
      });
    }
  };

  const correctCount = Object.entries(selectedChoices).filter(([id, choice]) => {
    const r = CHALLENGE_ROUNDS.find(item => item.id === Number(id));
    return r && r.correctOption === choice;
  }).length;

  const resetAllRounds = () => {
    soundManager.playSubtleClick();
    setSelectedChoices({});
    setRevealedRounds({});
    setCurrentRoundIdx(0);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden bg-[#071D18]">
      {/* Background Soft Glow & Dark Film Vignette */}
      <div className="absolute inset-0 cinematic-vignette-heavy pointer-events-none" />

      {/* Slide Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0B2922] text-[#00C896] border border-[#00C896]/30 flex items-center gap-1.5">
              <Swords className="w-3.5 h-3.5" />
              Slide 11 • Live Audience Participation
            </span>
            <span className="text-xs font-mono text-[#C7F36B]/80 hidden sm:inline">
              Classroom Duel • Ask the audience: Which one would you choose?
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#FBF9F4] font-display tracking-tight uppercase">
            WHICH ONE WOULD YOU CHOOSE?
          </h2>
          <p className="text-xs sm:text-sm text-[#F5F1E8]/75 font-sans max-w-2xl mt-1">
            Five real-world college dining dilemma scenarios. Can the classroom spot the biological winner every single time?
          </p>
        </div>

        {/* Live Score Counter */}
        <div className="flex items-center gap-3 p-2 px-3.5 rounded-2xl glass-panel border border-[#00C896]/30 bg-[#071D18]/90">
          <Trophy className="w-5 h-5 text-[#FFB347]" />
          <div>
            <span className="text-[10px] font-mono uppercase text-[#00C896] block">Class Score</span>
            <span className="text-base font-black text-[#FBF9F4] font-mono">
              {correctCount} / {CHALLENGE_ROUNDS.length} Won
            </span>
          </div>
          <button
            onClick={resetAllRounds}
            className="p-1.5 rounded-lg hover:bg-[#0B2922] text-[#F5F1E8]/60 hover:text-[#FBF9F4] transition-all cursor-pointer ml-1"
            title="Reset game"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Duel Arena: Scenario Question & 2 Large Food Photographs Side-by-Side */}
      <div className="relative z-10 my-auto">
        
        {/* Scenario Banner */}
        <div className="p-3.5 rounded-2xl bg-[#0B2922]/90 border border-[#00C896]/30 mb-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#00C896] text-[#071D18] flex items-center justify-center text-xs font-mono font-black shrink-0">
              Q{round.id}
            </span>
            <p className="text-sm sm:text-base font-bold text-[#FBF9F4] font-display">
              {round.question}
            </p>
          </div>

          <span className="text-xs font-mono text-[#C7F36B] whitespace-nowrap hidden sm:inline">
            Scenario {currentRoundIdx + 1} of {CHALLENGE_ROUNDS.length}
          </span>
        </div>

        {/* 2 Photographic Duel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Option A */}
          <motion.div
            whileHover={{ y: isRevealed ? 0 : -3 }}
            onClick={() => !isRevealed && handleSelectChoice('A')}
            className={`p-4 sm:p-5 rounded-3xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
              !isRevealed
                ? "glass-card hover:border-[#00C896]/50 bg-[#101613]"
                : round.correctOption === 'A'
                  ? "bg-gradient-to-br from-[#0B2922] to-[#0F382F] border-[#00C896] ring-2 ring-[#00C896]/50 shadow-2xl"
                  : "bg-rose-950/30 border-rose-500/20 opacity-60"
            }`}
          >
            <div>
              {/* Photo Cover */}
              <div className="relative h-32 sm:h-36 rounded-2xl overflow-hidden mb-3 border border-[#00C896]/20">
                <img src={currentPhotos.imgA} alt={round.optionA.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <span className="absolute top-2.5 left-2.5 w-7 h-7 rounded-lg bg-[#071D18]/90 text-[#FBF9F4] font-bold font-mono text-xs flex items-center justify-center border border-[#00C896]/30">
                  A
                </span>

                {isRevealed && (
                  <span className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider ${
                    round.correctOption === 'A' ? "bg-[#00C896] text-[#071D18]" : "bg-rose-500/80 text-[#FBF9F4]"
                  }`}>
                    {round.correctOption === 'A' ? "✓ Biological Winner" : "✕ Suboptimal Choice"}
                  </span>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-black text-[#FBF9F4] font-display mb-1">
                {round.optionA.name}
              </h3>
              <p className="text-xs text-[#F5F1E8]/75 mb-3 leading-relaxed">
                {round.optionA.description}
              </p>

              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-2 border-t border-[#00C896]/15">
                <span className="text-[#F5F1E8]/70">Energy: {round.optionA.caloriesApprox}</span>
                <span className="text-[#C7F36B] truncate">{round.optionA.nutritionProfile}</span>
              </div>
            </div>

            {!isRevealed ? (
              <button 
                onClick={() => handleSelectChoice('A')}
                className="mt-3.5 w-full py-2.5 rounded-xl bg-[#0B2922] hover:bg-[#00C896] hover:text-[#071D18] border border-[#00C896]/30 text-[#00C896] font-bold text-xs uppercase tracking-wider cursor-pointer transition-all"
              >
                Classroom Vote: Pick Option A
              </button>
            ) : (
              <div className="mt-2 text-center text-[11px] font-mono text-[#00C896] font-bold">
                {userChoice === 'A' && "Class voted Option A"}
              </div>
            )}
          </motion.div>

          {/* Option B */}
          <motion.div
            whileHover={{ y: isRevealed ? 0 : -3 }}
            onClick={() => !isRevealed && handleSelectChoice('B')}
            className={`p-4 sm:p-5 rounded-3xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
              !isRevealed
                ? "glass-card hover:border-[#00C896]/50 bg-[#101613]"
                : round.correctOption === 'B'
                  ? "bg-gradient-to-br from-[#0B2922] to-[#0F382F] border-[#00C896] ring-2 ring-[#00C896]/50 shadow-2xl"
                  : "bg-rose-950/30 border-rose-500/20 opacity-60"
            }`}
          >
            <div>
              {/* Photo Cover */}
              <div className="relative h-32 sm:h-36 rounded-2xl overflow-hidden mb-3 border border-[#00C896]/20">
                <img src={currentPhotos.imgB} alt={round.optionB.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <span className="absolute top-2.5 left-2.5 w-7 h-7 rounded-lg bg-[#071D18]/90 text-[#FBF9F4] font-bold font-mono text-xs flex items-center justify-center border border-[#00C896]/30">
                  B
                </span>

                {isRevealed && (
                  <span className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider ${
                    round.correctOption === 'B' ? "bg-[#00C896] text-[#071D18]" : "bg-rose-500/80 text-[#FBF9F4]"
                  }`}>
                    {round.correctOption === 'B' ? "✓ Biological Winner" : "✕ Suboptimal Choice"}
                  </span>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-black text-[#FBF9F4] font-display mb-1">
                {round.optionB.name}
              </h3>
              <p className="text-xs text-[#F5F1E8]/75 mb-3 leading-relaxed">
                {round.optionB.description}
              </p>

              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-2 border-t border-[#00C896]/15">
                <span className="text-[#F5F1E8]/70">Energy: {round.optionB.caloriesApprox}</span>
                <span className="text-[#C7F36B] truncate">{round.optionB.nutritionProfile}</span>
              </div>
            </div>

            {!isRevealed ? (
              <button 
                onClick={() => handleSelectChoice('B')}
                className="mt-3.5 w-full py-2.5 rounded-xl bg-[#0B2922] hover:bg-[#00C896] hover:text-[#071D18] border border-[#00C896]/30 text-[#00C896] font-bold text-xs uppercase tracking-wider cursor-pointer transition-all"
              >
                Classroom Vote: Pick Option B
              </button>
            ) : (
              <div className="mt-2 text-center text-[11px] font-mono text-[#00C896] font-bold">
                {userChoice === 'B' && "Class voted Option B"}
              </div>
            )}
          </motion.div>

        </div>

        {/* Revealed Scientific Explanation */}
        <AnimatePresence>
          {isRevealed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3.5 p-3.5 rounded-2xl bg-[#0B2922]/95 border border-[#00C896]/40 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl"
            >
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-5 h-5 text-[#FFB347] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#00C896] block font-mono">
                    The Science: {round.explanation}
                  </span>
                  <span className="text-xs text-[#FBF9F4] font-semibold">
                    Key Practical Maxim: {round.takeaway}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  soundManager.playSubtleClick();
                  setCurrentRoundIdx((currentRoundIdx + 1) % CHALLENGE_ROUNDS.length);
                }}
                className="px-4 py-2 rounded-xl bg-[#00C896] hover:bg-[#C7F36B] text-[#071D18] text-xs font-mono font-bold whitespace-nowrap cursor-pointer transition-all shadow-md flex items-center gap-1.5 shrink-0"
              >
                <span>Next Scenario</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Slide Footer Stepper */}
      <div className="relative z-10 pt-3 border-t border-[#00C896]/20 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          {CHALLENGE_ROUNDS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                soundManager.playSubtleClick();
                setCurrentRoundIdx(i);
              }}
              className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                currentRoundIdx === i
                  ? "bg-[#00C896] text-[#071D18] shadow-md scale-105"
                  : selectedChoices[i + 1]
                    ? "bg-[#0B2922] text-[#00C896] border border-[#00C896]/30"
                    : "glass-card text-[#F5F1E8]/50 hover:text-[#FBF9F4]"
              }`}
            >
              0{i + 1}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              soundManager.playSubtleClick();
              setCurrentRoundIdx(Math.max(0, currentRoundIdx - 1));
            }}
            disabled={currentRoundIdx === 0}
            className="p-1.5 rounded-lg bg-[#0B2922] disabled:opacity-30 text-[#F5F1E8] cursor-pointer hover:bg-[#0F382F]"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-[#00C896]">
            Round {currentRoundIdx + 1} / {CHALLENGE_ROUNDS.length}
          </span>
          <button
            onClick={() => {
              soundManager.playSubtleClick();
              setCurrentRoundIdx(Math.min(CHALLENGE_ROUNDS.length - 1, currentRoundIdx + 1));
            }}
            disabled={currentRoundIdx === CHALLENGE_ROUNDS.length - 1}
            className="p-1.5 rounded-lg bg-[#0B2922] disabled:opacity-30 text-[#F5F1E8] cursor-pointer hover:bg-[#0F382F]"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
