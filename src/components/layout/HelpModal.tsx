import { motion, AnimatePresence } from 'framer-motion';
import { Keyboard, X } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelpModal({ isOpen, onClose }: HelpModalProps) {
  const shortcuts = [
    { key: '→ / Space / PgDn', desc: 'Advance to next keynote slide smoothly' },
    { key: '← / PgUp', desc: 'Return to previous slide' },
    { key: 'P', desc: 'Toggle Presenter Speaker Notes with spoken script' },
    { key: 'M', desc: 'Open 12-slide thumbnail overview to jump anywhere' },
    { key: 'F', desc: 'Toggle true 16:9 Fullscreen presentation mode' },
    { key: 'A', desc: 'Toggle interactive cinematic sound effects' },
    { key: 'T', desc: 'Reset presentation elapsed stopwatch timer' },
    { key: 'Esc', desc: 'Dismiss any open drawer, modal, or close notes' },
    { key: '?', desc: 'Toggle this keyboard shortcut guide' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#071D18]/85 backdrop-blur-md">
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative z-10 w-full max-w-lg bg-[#071D18] border border-[#00C896]/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-4 bg-[#0B2922]/90 border-b border-[#00C896]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#00C896] text-[#071D18] flex items-center justify-center font-bold">
                  <Keyboard className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#FBF9F4] font-display uppercase tracking-tight">
                    Keynote Keyboard Shortcuts
                  </h3>
                  <p className="text-xs text-[#00C896] font-mono">
                    Presenter Stage Hotkeys
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-xl hover:bg-[#0B2922] border border-[#00C896]/20 text-[#F5F1E8]/70 hover:text-[#FBF9F4] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close shortcuts help"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List */}
            <div className="p-6 space-y-2.5">
              {shortcuts.map((sc, i) => (
                <div 
                  key={i}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B2922]/50 border border-[#00C896]/15"
                >
                  <span className="text-xs text-[#F5F1E8]">
                    {sc.desc}
                  </span>
                  <kbd className="px-2.5 py-1 rounded-lg bg-[#071D18] border border-[#00C896]/30 text-[#00C896] font-mono text-xs font-bold shadow-sm whitespace-nowrap">
                    {sc.key}
                  </kbd>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-[#071D18] border-t border-[#00C896]/20 text-center text-xs text-[#C7F36B] font-mono">
              Designed for flawless live college classroom presentations
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
