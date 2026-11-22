import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, 
  BookOpen, 
  Lightbulb, 
  FlaskConical, 
  ArrowRightCircle, 
  Clock, 
  X, 
  Volume2 
} from 'lucide-react';
import type { PresenterNote } from '../../types/presentation';

interface PresenterNotesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  note: PresenterNote;
  slideNumber: string;
  slideTitle: string;
  slideElapsedTime: number; // in seconds
}

export default function PresenterNotesDrawer({
  isOpen,
  onClose,
  note,
  slideNumber,
  slideTitle,
  slideElapsedTime
}: PresenterNotesDrawerProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isOverTime = slideElapsedTime > note.timeEstimateSeconds;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 inset-x-0 z-50 max-h-[85vh] sm:max-h-[60vh] bg-[#071D18]/95 backdrop-blur-2xl border-t-2 border-[#00C896]/40 shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Drawer Top Header Bar */}
          <div className="px-6 py-3 bg-[#0B2922]/90 border-b border-[#00C896]/20 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#00C896] text-[#071D18] flex items-center justify-center font-bold">
                <Mic className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#00C896] font-bold tracking-wider">
                  Speaker Teleprompter • Slide {slideNumber}
                </span>
                <h3 className="text-sm font-bold text-[#FBF9F4] truncate max-w-md">
                  {slideTitle}
                </h3>
              </div>
            </div>

            {/* Slide Timer & Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#071D18] border border-[#00C896]/30 text-xs font-mono">
                <Clock className="w-3.5 h-3.5 text-[#00C896]" />
                <span className={`font-bold ${isOverTime ? "text-[#FFB347] animate-pulse" : "text-[#C7F36B]"}`}>
                  Slide Time: {formatTime(slideElapsedTime)} / ~{formatTime(note.timeEstimateSeconds)}
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg hover:bg-[#071D18] border border-[#00C896]/20 text-[#F5F1E8]/70 hover:text-[#FBF9F4] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close presenter notes"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Drawer Body Scrollable Content */}
          <div className="p-6 overflow-y-auto space-y-4 no-scrollbar">
            
            {/* Primary Script: What to say verbatim */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0B2922] to-[#0F382F] border border-[#00C896]/40 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00C896] mb-2 font-mono">
                <Volume2 className="w-4 h-4 text-[#00C896]" />
                <span>What to Say to the Judges & Audience (Spoken Script):</span>
              </div>
              <p className="text-sm md:text-base text-[#FBF9F4] font-medium leading-relaxed">
                "{note.whatToSay}"
              </p>
            </div>

            {/* Secondary Cues Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Core Explanation */}
              <div className="p-3.5 rounded-2xl bg-[#0B2922]/60 border border-[#00C896]/20">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-[#00C896] mb-1.5 font-mono">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Key Explanation:</span>
                </div>
                <p className="text-xs text-[#F5F1E8]/90 leading-relaxed">
                  {note.explanation}
                </p>
              </div>

              {/* Practical Example */}
              <div className="p-3.5 rounded-2xl bg-[#0B2922]/60 border border-[#00C896]/20">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-[#FFB347] mb-1.5 font-mono">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Classroom Example:</span>
                </div>
                <p className="text-xs text-[#F5F1E8]/90 leading-relaxed">
                  {note.practicalExample}
                </p>
              </div>

              {/* Scientific Fact */}
              <div className="p-3.5 rounded-2xl bg-[#0B2922]/60 border border-[#00C896]/20">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-[#C7F36B] mb-1.5 font-mono">
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>Verified Scientific Fact:</span>
                </div>
                <p className="text-xs text-[#F5F1E8]/90 leading-relaxed">
                  {note.scientificFact}
                </p>
              </div>
            </div>

            {/* Next Slide Transition Cue */}
            <div className="p-3 rounded-xl bg-[#071D18] border border-[#00C896]/30 flex items-start gap-2.5">
              <ArrowRightCircle className="w-4 h-4 text-[#00C896] shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold uppercase tracking-wider text-[#00C896] mr-2 font-mono">
                  Transition Sentence to Next Slide:
                </span>
                <span className="text-[#F5F1E8] italic">
                  "{note.transitionSentence}"
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
