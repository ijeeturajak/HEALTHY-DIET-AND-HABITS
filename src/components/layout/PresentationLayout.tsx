import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Mic, 
  LayoutGrid, 
  HelpCircle, 
  Clock, 
  Pause, 
  Play, 
  RotateCcw,
  Volume2,
  VolumeX
} from 'lucide-react';
import type { SlideInfo } from '../../types/presentation';
import { soundManager } from '../../utils/audioSystem';

interface PresentationLayoutProps {
  children: ReactNode;
  currentSlide: SlideInfo;
  currentIndex: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onToggleNotes: () => void;
  isNotesOpen: boolean;
  onToggleMenu: () => void;
  onToggleHelp: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  totalElapsedTime: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
}

export default function PresentationLayout({
  children,
  currentSlide,
  currentIndex,
  totalSlides,
  onNext,
  onPrev,
  onToggleNotes,
  isNotesOpen,
  onToggleMenu,
  onToggleHelp,
  isFullscreen,
  onToggleFullscreen,
  totalElapsedTime,
  isTimerRunning,
  onToggleTimer,
  onResetTimer
}: PresentationLayoutProps) {
  const [isAudioActive, setIsAudioActive] = useState(soundManager.isEnabled());
  const progressPercent = ((currentIndex + 1) / totalSlides) * 100;

  const handleToggleAudio = () => {
    const nextState = soundManager.toggle();
    setIsAudioActive(nextState);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative w-screen h-screen bg-[#071D18] text-[#F5F1E8] overflow-hidden flex flex-col select-none">
      
      {/* Top Header Bar */}
      <header className="h-14 px-4 sm:px-6 bg-[#071D18]/90 backdrop-blur-md border-b border-[#00C896]/20 flex items-center justify-between shrink-0 z-30">
        
        {/* Left: Branding & Subtitle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00C896] animate-ping" />
            <h1 className="text-xs sm:text-sm font-black font-display tracking-wider text-[#FBF9F4] uppercase">
              THE FOOD FACTOR
            </h1>
          </div>
          <span className="hidden md:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-[#0B2922] text-[#00C896] border border-[#00C896]/30">
            HEALTHY DIET & HABITS
          </span>
        </div>

        {/* Center: Slide Progress Pill */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-black text-[#00C896]">
            {currentSlide.slideNumber}
          </span>
          <span className="text-xs font-mono text-[#00C896]/40">/</span>
          <span className="text-xs font-mono text-[#C7F36B]">
            {totalSlides.toString().padStart(2, '0')}
          </span>
          <span className="hidden sm:inline text-xs font-display font-bold text-[#F5F1E8]/90 ml-1 truncate max-w-xs">
            • {currentSlide.title}
          </span>
        </div>

        {/* Right: Presentation Tools */}
        <div className="flex items-center gap-2">
          
          {/* Audio Mute/Unmute Toggle */}
          <button
            onClick={handleToggleAudio}
            title={isAudioActive ? "Mute interactive audio" : "Enable interactive audio"}
            className={`p-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
              isAudioActive
                ? "bg-[#00C896]/20 border-[#00C896] text-[#00C896]"
                : "bg-[#0B2922]/60 hover:bg-[#0B2922] border-[#00C896]/20 text-[#F5F1E8]/50 hover:text-[#F5F1E8]"
            }`}
          >
            {isAudioActive ? <Volume2 className="w-4 h-4 text-[#00C896]" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden lg:inline text-[11px] font-bold">
              {isAudioActive ? "Audio: On" : "Audio: Muted"}
            </span>
          </button>

          {/* Stopwatch Elapsed Timer */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#0B2922]/80 border border-[#00C896]/25 text-xs font-mono">
            <Clock className="w-3.5 h-3.5 text-[#00C896]" />
            <span className="font-bold text-[#FBF9F4]">{formatTime(totalElapsedTime)}</span>
            <button
              onClick={onToggleTimer}
              title={isTimerRunning ? "Pause stopwatch" : "Resume stopwatch"}
              className="hover:text-[#00C896] text-[#F5F1E8]/60 cursor-pointer ml-0.5"
            >
              {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button
              onClick={onResetTimer}
              title="Reset stopwatch [T]"
              className="hover:text-[#FFB347] text-[#F5F1E8]/60 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>

          {/* Jump Menu Trigger [M] */}
          <button
            onClick={onToggleMenu}
            title="12-Slide Overview Menu [M]"
            className="p-2 rounded-xl bg-[#0B2922]/60 hover:bg-[#0B2922] border border-[#00C896]/20 text-[#F5F1E8]/80 hover:text-[#00C896] transition-all cursor-pointer"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>

          {/* Speaker Notes Trigger [P] */}
          <button
            onClick={onToggleNotes}
            title="Speaker Notes Teleprompter [P]"
            className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 ${
              isNotesOpen
                ? "bg-[#00C896] text-[#071D18] border-[#00C896] font-bold shadow-md"
                : "bg-[#0B2922]/60 hover:bg-[#0B2922] border-[#00C896]/20 text-[#F5F1E8]/80 hover:text-[#00C896]"
            }`}
          >
            <Mic className="w-4 h-4" />
            <span className="hidden sm:inline text-xs font-mono">Notes [P]</span>
          </button>

          {/* Keyboard Shortcuts [?] */}
          <button
            onClick={onToggleHelp}
            title="Shortcuts Guide [?]"
            className="p-2 rounded-xl bg-[#0B2922]/60 hover:bg-[#0B2922] border border-[#00C896]/20 text-[#F5F1E8]/80 hover:text-[#00C896] transition-all cursor-pointer"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Fullscreen Trigger [F] */}
          <button
            onClick={onToggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen [F]" : "Fullscreen Mode [F]"}
            className="p-2 rounded-xl bg-[#0B2922]/60 hover:bg-[#0B2922] border border-[#00C896]/20 text-[#F5F1E8]/80 hover:text-[#00C896] transition-all cursor-pointer"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Top Thin Progress Bar */}
      <div className="w-full h-1 bg-[#071D18] relative z-30 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#00C896] via-[#2BE0B2] to-[#C7F36B]"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Main 16:9 Presentation Stage Container */}
      <main className="flex-1 w-full h-[calc(100vh-3.5rem)] relative overflow-hidden flex items-center justify-center p-2 sm:p-4 md:p-6">
        <div className="w-full h-full max-w-7xl max-h-[920px] rounded-3xl overflow-hidden shadow-2xl border border-[#00C896]/20 relative flex flex-col bg-[#071D18]">
          {children}
        </div>
      </main>

      {/* Bottom Floating Navigation Bar */}
      <footer className="fixed bottom-4 inset-x-0 z-40 flex justify-center pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2 p-1.5 px-3 rounded-full bg-[#071D18]/90 backdrop-blur-xl border border-[#00C896]/30 shadow-2xl">
          
          {/* Previous Button */}
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-full hover:bg-[#0B2922] disabled:opacity-30 disabled:hover:bg-transparent text-[#F5F1E8] hover:text-[#00C896] transition-all cursor-pointer"
            aria-label="Previous slide"
            title="Previous slide [←]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Slide Indicator & Thumbnail Button */}
          <button
            onClick={onToggleMenu}
            className="px-3 py-1 rounded-full bg-[#0B2922] hover:bg-[#0F382F] border border-[#00C896]/25 text-xs font-mono font-bold text-[#C7F36B] transition-all cursor-pointer"
            title="Click to jump to any slide [M]"
          >
            Slide {currentSlide.slideNumber} / {totalSlides}
          </button>

          {/* Next Button */}
          <button
            onClick={onNext}
            disabled={currentIndex === totalSlides - 1}
            className="p-2 rounded-full hover:bg-[#0B2922] disabled:opacity-30 disabled:hover:bg-transparent text-[#F5F1E8] hover:text-[#00C896] transition-all cursor-pointer"
            aria-label="Next slide"
            title="Next slide [→ or Space]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </footer>

    </div>
  );
}
