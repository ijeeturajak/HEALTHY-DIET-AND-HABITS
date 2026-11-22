import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  BookOpen, 
  ExternalLink, 
  ShieldCheck, 
  RotateCcw
} from 'lucide-react';
import { FINAL_QUIZ } from '../../data/slidesData';
import { CINEMATIC_IMAGES } from '../../data/cinematicImages';
import { soundManager } from '../../utils/audioSystem';

interface Slide12Props {
  onRestartPresentation?: () => void;
}

export default function Slide12_Conclusion({ onRestartPresentation }: Slide12Props) {
  const [activeTab, setActiveTab] = useState<'finale' | 'quiz' | 'references'>('finale');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<number, boolean>>({});

  const handleSelectQuizAnswer = (questionId: number, optionIdx: number) => {
    soundManager.playSubtleClick();
    setQuizAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
    setQuizSubmitted(prev => ({ ...prev, [questionId]: true }));

    const question = FINAL_QUIZ.find(q => q.id === questionId);
    if (question && question.correctIndex === optionIdx) {
      soundManager.playVictory();
      confetti({
        particleCount: 60,
        spread: 65,
        origin: { y: 0.7 },
        colors: ['#00C896', '#C7F36B', '#2BE0B2', '#FFB347']
      });
    }
  };

  const finaleStatements = [
    { text: "EAT BALANCED.", desc: "Honor the 50-25-25 plate rule with diverse whole plants.", color: "text-[#00C896]" },
    { text: "CHOOSE WISELY.", desc: "Swap fried snacks for roasted legumes & sugary sodas for chaas.", color: "text-[#C7F36B]" },
    { text: "STAY HYDRATED.", desc: "Proactively sip water based on climate and body demand.", color: "text-cyan-400" },
    { text: "BUILD HEALTHY HABITS.", desc: "Eat screen-free, chew thoroughly, and honor circadian sleep.", color: "text-[#FFB347]" }
  ];

  const references = [
    {
      title: "ICMR - National Institute of Nutrition (NIN) Dietary Guidelines for Indians, 2024",
      org: "Indian Council of Medical Research (ICMR)",
      url: "https://www.nin.res.in",
      note: "Comprehensive national dietary recommendations on millets, pulses, oil safety, and lifestyle disease prevention."
    },
    {
      title: "World Health Organization (WHO) — Healthy Diet Factsheet No. 394",
      org: "World Health Organization (WHO)",
      url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
      note: "Global consensus on limiting free sugars (<10%), saturated fats (<10%), and sodium (<2,000 mg/day)."
    },
    {
      title: "The Healthy Eating Plate & Pyramid",
      org: "Harvard T.H. Chan School of Public Health",
      url: "https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/",
      note: "The international gold-standard visual model for evidence-based balanced meal composition."
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden bg-[#071D18]">
      {/* Background Cinematic Food Composition */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none transition-all duration-700"
        style={{ backgroundImage: `url(${CINEMATIC_IMAGES.grandFinaleFest})` }}
      />
      <div className="absolute inset-0 cinematic-vignette-heavy pointer-events-none" />

      {/* Slide Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0B2922] text-[#00C896] border border-[#00C896]/30">
              Slide 12 • The Grand Finale
            </span>
            <span className="text-xs font-mono text-[#C7F36B]/80 hidden sm:inline">
              Crescendo • Core Takeaways & Official Citations
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#FBF9F4] font-display tracking-tight uppercase">
            THE GRAND FINALE
          </h2>
          <p className="text-xs sm:text-sm text-[#F5F1E8]/75 font-sans max-w-2xl mt-1">
            True health is not a temporary 30-day punishment diet; it is the compound interest of daily mindful choices.
          </p>
        </div>

        {/* Section Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#071D18]/90 border border-[#00C896]/20 rounded-2xl backdrop-blur-md">
          <button
            onClick={() => {
              soundManager.playSubtleClick();
              setActiveTab('finale');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === 'finale'
                ? "bg-[#00C896] text-[#071D18] shadow-lg shadow-[#00C896]/30"
                : "text-[#F5F1E8]/60 hover:text-[#F5F1E8] hover:bg-[#0B2922]"
            }`}
          >
            Core Statements
          </button>
          <button
            onClick={() => {
              soundManager.playSubtleClick();
              setActiveTab('quiz');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'quiz'
                ? "bg-[#00C896] text-[#071D18] shadow-lg shadow-[#00C896]/30"
                : "text-[#F5F1E8]/60 hover:text-[#F5F1E8] hover:bg-[#0B2922]"
            }`}
          >
            <span>Finale Quiz</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB347]" />
          </button>
          <button
            onClick={() => {
              soundManager.playSubtleClick();
              setActiveTab('references');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === 'references'
                ? "bg-[#00C896] text-[#071D18] shadow-lg shadow-[#00C896]/30"
                : "text-[#F5F1E8]/60 hover:text-[#F5F1E8] hover:bg-[#0B2922]"
            }`}
          >
            References
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative z-10 my-auto">
        <AnimatePresence mode="wait">
          
          {/* Tab 1: Cinematic Core Statements & Grand Reveal */}
          {activeTab === 'finale' && (
            <motion.div
              key="finale"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-4"
            >
              {/* 4 Statement Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {finaleStatements.map((item, idx) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    className="p-5 rounded-3xl glass-panel border border-[#00C896]/25 bg-gradient-to-br from-[#0B2922] to-[#071D18] shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#00C896] font-bold block mb-2">
                        Principle 0{idx + 1}
                      </span>
                      <h4 className={`text-xl sm:text-2xl font-black font-display tracking-tight mb-2 ${item.color}`}>
                        {item.text}
                      </h4>
                      <p className="text-xs text-[#F5F1E8]/85 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-[#00C896]/15 flex items-center gap-1.5 text-[10px] font-mono text-[#00C896]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Daily Lifelong Standard</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Grand Callout Banner: "YOUR HEALTH IS YOUR EVERYDAY INVESTMENT." */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="p-5 rounded-3xl glass-panel border-2 border-[#00C896]/40 bg-gradient-to-r from-[#0B2922] via-[#0F382F] to-[#0B2922] shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#FBF9F4] font-display uppercase tracking-tight">
                    "YOUR HEALTH IS YOUR EVERYDAY INVESTMENT."
                  </h3>
                  <p className="text-sm font-serif italic text-[#C7F36B] mt-0.5">
                    "Let food be thy medicine and medicine be thy food." — Hippocrates
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-lg font-black font-display text-[#00C896] tracking-wider uppercase">
                    THANK YOU!
                  </span>
                  {onRestartPresentation && (
                    <button
                      onClick={onRestartPresentation}
                      className="px-4 py-2 rounded-xl bg-[#071D18] hover:bg-[#0B2922] border border-[#00C896]/30 text-[#00C896] text-xs font-mono font-bold cursor-pointer transition-all flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Replay Keynote</span>
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Tab 2: Finale Classroom Quiz */}
          {activeTab === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold uppercase text-[#00C896]">
                  Classroom Comprehension Check (3 Final Questions)
                </span>
                <span className="text-xs font-mono text-[#C7F36B]">
                  Instant Interactive Feedback
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {FINAL_QUIZ.map((q, qIndex) => {
                  const userAnswer = quizAnswers[q.id];
                  const isAnswered = quizSubmitted[q.id];

                  return (
                    <div 
                      key={q.id}
                      className="p-4 rounded-3xl glass-panel border border-[#00C896]/30 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#071D18] text-[#00C896] border border-[#00C896]/30">
                            Q0{qIndex + 1}
                          </span>
                          {isAnswered && (
                            <span className={`text-[10px] font-mono font-bold ${
                              userAnswer === q.correctIndex ? "text-[#00C896]" : "text-rose-400"
                            }`}>
                              {userAnswer === q.correctIndex ? "✓ Correct!" : "✕ Review Fact"}
                            </span>
                          )}
                        </div>

                        <h4 className="text-xs font-bold text-[#FBF9F4] leading-snug mb-3">
                          {q.question}
                        </h4>

                        <div className="space-y-1.5">
                          {q.options.map((opt, optIdx) => {
                            const isChosen = userAnswer === optIdx;
                            const isCorrectOpt = q.correctIndex === optIdx;

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                                className={`w-full text-left p-2 rounded-xl text-[11px] font-medium border transition-all cursor-pointer ${
                                  !isAnswered
                                    ? "glass-card hover:bg-[#0B2922] border-[#00C896]/15 text-[#F5F1E8]/85"
                                    : isCorrectOpt
                                      ? "bg-[#0B2922] border-[#00C896] text-[#00C896] font-bold"
                                      : isChosen
                                        ? "bg-rose-950/60 border-rose-500/50 text-rose-300"
                                        : "glass-card opacity-50 border-transparent text-[#F5F1E8]/50"
                                }`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {isAnswered && (
                        <div className="mt-3 p-2 rounded-xl bg-[#071D18] border border-[#00C896]/20 text-[10px] text-[#00C896] leading-relaxed">
                          <strong>Scientific Insight:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Tab 3: Official References */}
          {activeTab === 'references' && (
            <motion.div
              key="references"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-3"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {references.map((ref, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-3xl glass-panel border border-[#00C896]/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase text-[#00C896] font-bold">
                          Official Standard 0{idx + 1}
                        </span>
                        <BookOpen className="w-4 h-4 text-[#00C896]" />
                      </div>
                      <h4 className="text-sm font-bold text-[#FBF9F4] font-display leading-tight mb-1">
                        {ref.title}
                      </h4>
                      <p className="text-[11px] font-mono text-[#C7F36B] mb-2">
                        Authority: {ref.org}
                      </p>
                      <p className="text-xs text-[#F5F1E8]/75 leading-relaxed">
                        {ref.note}
                      </p>
                    </div>

                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#00C896] hover:text-[#C7F36B] underline underline-offset-4 font-mono font-bold"
                    >
                      <span>Verify Official Documentation</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Slide Footer Keynote Takeaway */}
      <div className="relative z-10 pt-3 border-t border-[#00C896]/20 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-[#F5F1E8]/80">
          <ShieldCheck className="w-4 h-4 text-[#00C896]" />
          <span><strong>The Food Factor:</strong> Eat smart. Live strong. Feel amazing. Thank you for your attention!</span>
        </div>
        <span className="text-[11px] font-mono text-[#00C896]/80 hidden md:inline">
          College Classroom Presentation Competition
        </span>
      </div>
    </div>
  );
}
