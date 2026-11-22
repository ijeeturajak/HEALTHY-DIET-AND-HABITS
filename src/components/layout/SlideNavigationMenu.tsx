import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, X, CheckCircle2, ChevronRight } from 'lucide-react';
import { SLIDES_META } from '../../data/slidesData';
import { soundManager } from '../../utils/audioSystem';

interface SlideNavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
}

export default function SlideNavigationMenu({
  isOpen,
  onClose,
  currentSlideIndex,
  onSelectSlide
}: SlideNavigationMenuProps) {
  const handleSelect = (idx: number) => {
    soundManager.playWhoosh();
    onSelectSlide(idx);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#071D18]/85 backdrop-blur-md">
          {/* Backdrop click dismiss */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative z-10 w-full max-w-5xl max-h-[88vh] bg-[#071D18] border border-[#00C896]/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-4 bg-[#0B2922]/90 border-b border-[#00C896]/20 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#00C896] text-[#071D18] flex items-center justify-center font-bold">
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#FBF9F4] font-display uppercase tracking-tight">
                    THE FOOD FACTOR • 12-SLIDE CURRICULUM
                  </h3>
                  <p className="text-xs text-[#00C896] font-mono">
                    Select any keynote slide card to jump immediately
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-xl hover:bg-[#0B2922] border border-[#00C896]/20 text-[#F5F1E8]/70 hover:text-[#FBF9F4] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close slide navigation menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Slide Grid (12 slides) */}
            <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 no-scrollbar">
              {SLIDES_META.map((slide, idx) => {
                const isActive = currentSlideIndex === idx;

                return (
                  <motion.button
                    key={slide.id}
                    onClick={() => handleSelect(idx)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                      isActive
                        ? "bg-gradient-to-br from-[#0B2922] to-[#0F382F] border-[#00C896] ring-2 ring-[#00C896]/50 shadow-xl"
                        : "glass-card hover:bg-[#0B2922]/60 border-[#00C896]/20"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-black text-[#00C896] px-2 py-0.5 rounded bg-[#071D18] border border-[#00C896]/20">
                          Slide {slide.slideNumber}
                        </span>
                        <span className="text-[10px] font-mono uppercase text-[#C7F36B]">
                          {slide.badge}
                        </span>
                      </div>

                      <h4 className={`text-sm font-bold font-display line-clamp-1 ${
                        isActive ? "text-[#FBF9F4]" : "text-[#F5F1E8]"
                      }`}>
                        {slide.title}
                      </h4>
                      <p className="text-xs text-[#F5F1E8]/70 line-clamp-1 mt-0.5">
                        {slide.subtitle}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#00C896]/15 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#00C896]/80">
                        ~{Math.round(slide.presenterNote.timeEstimateSeconds)}s target
                      </span>
                      {isActive ? (
                        <span className="flex items-center gap-1 text-[#00C896] font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Active</span>
                        </span>
                      ) : (
                        <span className="text-[#F5F1E8]/40 flex items-center gap-0.5">
                          <span>Jump</span>
                          <ChevronRight className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-[#071D18] border-t border-[#00C896]/20 flex items-center justify-between text-xs text-[#F5F1E8]/60 font-mono">
              <span>Press [M] to toggle this overview anytime</span>
              <span>Press [ESC] to return to current slide</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
