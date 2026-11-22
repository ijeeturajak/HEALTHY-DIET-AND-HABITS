import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SLIDES_META } from './data/slidesData';

// 12 Keynote Slides
import Slide01_Intro from './components/slides/Slide01_Intro';
import Slide02_Definition from './components/slides/Slide02_Definition';
import Slide03_Importance from './components/slides/Slide03_Importance';
import Slide04_Nutrients from './components/slides/Slide04_Nutrients';
import Slide05_FoodGroups from './components/slides/Slide05_FoodGroups';
import Slide06_HealthyPlate from './components/slides/Slide06_HealthyPlate';
import Slide07_HealthyHabits from './components/slides/Slide07_HealthyHabits';
import Slide08_UnhealthyHabits from './components/slides/Slide08_UnhealthyHabits';
import Slide09_Hydration from './components/slides/Slide09_Hydration';
import Slide10_DailyRoutine from './components/slides/Slide10_DailyRoutine';
import Slide11_FoodChallenge from './components/slides/Slide11_FoodChallenge';
import Slide12_Conclusion from './components/slides/Slide12_Conclusion';

// Presentation layout & drawers
import PresentationLayout from './components/layout/PresentationLayout';
import PresenterNotesDrawer from './components/layout/PresenterNotesDrawer';
import SlideNavigationMenu from './components/layout/SlideNavigationMenu';
import HelpModal from './components/layout/HelpModal';
import { soundManager } from './utils/audioSystem';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Presentation stopwatch timers
  const [totalElapsedTime, setTotalElapsedTime] = useState(0);
  const [slideElapsedTime, setSlideElapsedTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const totalSlides = SLIDES_META.length;
  const currentSlide = SLIDES_META[currentSlideIndex];

  // Stopwatch interval
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTotalElapsedTime(t => t + 1);
        setSlideElapsedTime(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Sync fullscreen state with DOM
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Slide navigation handlers
  const goToNextSlide = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      soundManager.playWhoosh();
      setDirection(1);
      setCurrentSlideIndex(prev => prev + 1);
      setSlideElapsedTime(0);
    }
  }, [currentSlideIndex, totalSlides]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      soundManager.playWhoosh();
      setDirection(-1);
      setCurrentSlideIndex(prev => prev - 1);
      setSlideElapsedTime(0);
    }
  }, [currentSlideIndex]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      soundManager.playWhoosh();
      setDirection(index > currentSlideIndex ? 1 : -1);
      setCurrentSlideIndex(index);
      setSlideElapsedTime(0);
    }
  }, [currentSlideIndex, totalSlides]);

  const toggleFullscreen = useCallback(() => {
    soundManager.playSubtleClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error('Fullscreen request error:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, []);

  // Global Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          goToNextSlide();
          break;
        case ' ': // Space advances
          e.preventDefault();
          goToNextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          goToPrevSlide();
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          soundManager.playSubtleClick();
          setIsNotesOpen(prev => !prev);
          break;
        case 'm':
        case 'M':
          e.preventDefault();
          soundManager.playSubtleClick();
          setIsMenuOpen(prev => !prev);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'a':
        case 'A':
          e.preventDefault();
          soundManager.toggle();
          break;
        case 't':
        case 'T':
          e.preventDefault();
          soundManager.playSubtleClick();
          setTotalElapsedTime(0);
          setSlideElapsedTime(0);
          break;
        case '?':
        case 'h':
        case 'H':
          e.preventDefault();
          soundManager.playSubtleClick();
          setIsHelpOpen(prev => !prev);
          break;
        case 'Escape':
          e.preventDefault();
          setIsNotesOpen(false);
          setIsMenuOpen(false);
          setIsHelpOpen(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, toggleFullscreen]);

  // Render Slide Component dynamically
  const renderCurrentSlide = () => {
    switch (currentSlideIndex) {
      case 0:
        return <Slide01_Intro onStartPresentation={goToNextSlide} />;
      case 1:
        return <Slide02_Definition />;
      case 2:
        return <Slide03_Importance />;
      case 3:
        return <Slide04_Nutrients />;
      case 4:
        return <Slide05_FoodGroups />;
      case 5:
        return <Slide06_HealthyPlate />;
      case 6:
        return <Slide07_HealthyHabits />;
      case 7:
        return <Slide08_UnhealthyHabits />;
      case 8:
        return <Slide09_Hydration />;
      case 9:
        return <Slide10_DailyRoutine />;
      case 10:
        return <Slide11_FoodChallenge />;
      case 11:
        return <Slide12_Conclusion onRestartPresentation={() => goToSlide(0)} />;
      default:
        return <Slide01_Intro onStartPresentation={goToNextSlide} />;
    }
  };

  const slideVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 40 : -40,
      scale: 0.98
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut"
      }
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -40 : 40,
      scale: 0.98,
      transition: {
        duration: 0.25,
        ease: "easeInOut"
      }
    })
  };

  return (
    <PresentationLayout
      currentSlide={currentSlide}
      currentIndex={currentSlideIndex}
      totalSlides={totalSlides}
      onNext={goToNextSlide}
      onPrev={goToPrevSlide}
      onToggleNotes={() => {
        soundManager.playSubtleClick();
        setIsNotesOpen(!isNotesOpen);
      }}
      isNotesOpen={isNotesOpen}
      onToggleMenu={() => {
        soundManager.playSubtleClick();
        setIsMenuOpen(!isMenuOpen);
      }}
      onToggleHelp={() => {
        soundManager.playSubtleClick();
        setIsHelpOpen(!isHelpOpen);
      }}
      isFullscreen={isFullscreen}
      onToggleFullscreen={toggleFullscreen}
      totalElapsedTime={totalElapsedTime}
      isTimerRunning={isTimerRunning}
      onToggleTimer={() => {
        soundManager.playSubtleClick();
        setIsTimerRunning(!isTimerRunning);
      }}
      onResetTimer={() => {
        soundManager.playSubtleClick();
        setTotalElapsedTime(0);
        setSlideElapsedTime(0);
      }}
    >
      {/* Animated Slide Stage */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlideIndex}
          custom={direction}
          variants={slideVariants as any}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full h-full relative"
        >
          {renderCurrentSlide()}
        </motion.div>
      </AnimatePresence>

      {/* Speaker Notes Teleprompter Drawer (P key) */}
      <PresenterNotesDrawer
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        note={currentSlide.presenterNote}
        slideNumber={currentSlide.slideNumber}
        slideTitle={currentSlide.title}
        slideElapsedTime={slideElapsedTime}
      />

      {/* 12-Slide Jump Overview Menu (M key) */}
      <SlideNavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={goToSlide}
      />

      {/* Keyboard Shortcuts Guide Modal (? key) */}
      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
    </PresentationLayout>
  );
}
