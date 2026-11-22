import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Utensils,
  Milk,
  Layers
} from 'lucide-react';
import { CINEMATIC_IMAGES } from '../../data/cinematicImages';
import { soundManager } from '../../utils/audioSystem';

interface PlateSection {
  id: string;
  name: string;
  share: string;
  percentage: number;
  color: string;
  borderColor: string;
  image: string;
  purpose: string;
  guidelines: string;
  indianExamples: string[];
  messTips: string;
}

const SECTIONS: PlateSection[] = [
  {
    id: 'veggies',
    name: 'Vegetables & Fruits',
    share: '50% (Half of Plate)',
    percentage: 50,
    color: '#00C896',
    borderColor: '#2BE0B2',
    image: CINEMATIC_IMAGES.plateVeggiesSection,
    purpose: 'Supplies essential micronutrients (vitamins A, C, K, folate), electrolytes, and dietary soluble fibre for gut motility.',
    guidelines: 'Target at least 400g to 500g daily across various colors (green, red, orange, purple) to ensure polyphenol diversity.',
    indianExamples: ['Palak / Methi Sabzi', 'Cucumber & Carrot Salad', 'Bhindi Masala', 'Gourd / Lauki', 'Papaya, Guava & Citrus'],
    messTips: 'Always start lunch with a double serving of raw salad before touching rice or chapati.'
  },
  {
    id: 'grains',
    name: 'Whole Grains & Millets',
    share: '25% (Quarter of Plate)',
    percentage: 25,
    color: '#FFB347',
    borderColor: '#F59E0B',
    image: CINEMATIC_IMAGES.plateGrainsSection,
    purpose: 'Provides complex carbohydrates with intact bran and germ for slow-release glycogen without causing afternoon insulin crashes.',
    guidelines: 'ICMR-NIN 2024 advises replacing polished white rice and maida with traditional unpolished millets.',
    indianExamples: ['Ragi & Jowar Rotis', 'Brown / Hand-Pounded Rice', 'Whole Wheat Phulka', 'Foxtail Millet Khichdi', 'Oats Dalia'],
    messTips: 'Choose 2-3 small whole wheat rotis over a large heap of sticky white canteen rice.'
  },
  {
    id: 'proteins',
    name: 'Proteins & Pulses',
    share: '25% (Quarter of Plate)',
    percentage: 25,
    color: '#C7F36B',
    borderColor: '#D8F794',
    image: CINEMATIC_IMAGES.plateProteinSection,
    purpose: 'Supplies essential amino acids for muscular tissue repair, enzyme synthesis, hormone balance, and sustained satiety.',
    guidelines: 'Consume 0.83g protein per kg body weight daily. Combine cereals and pulses (4:1 ratio) to achieve a complete amino acid profile.',
    indianExamples: ['Moong / Chana Dal', 'Sprouted Green Gram', 'Paneer / Tofu', 'Boiled Eggs / Omelette', 'Grilled Fish / Chicken Breast'],
    messTips: 'Take a thick bowl of dal, or add boiled eggs/paneer bhurji from the mess counter.'
  },
  {
    id: 'probiotics',
    name: 'Probiotic Curd / Chaas',
    share: 'Side Companion Bowl',
    percentage: 15,
    color: '#8B5CF6',
    borderColor: '#A78BFA',
    image: CINEMATIC_IMAGES.plateCurdDrinkSide,
    purpose: 'Nourishes the gut microbiome with Lactobacillus and Bifidobacteria, aiding nutrient assimilation and immune resilience.',
    guidelines: '1 cup (150-200ml) fresh, unsweetened curd or spiced buttermilk (chaas with roasted jeera).',
    indianExamples: ['Unsweetened Curd (Dahi)', 'Jeera-Hing Buttermilk', 'Cucumber Mint Raita'],
    messTips: 'Avoid sugary lassi or sweetened yogurt cups; stick to plain homemade curd.'
  }
];

export default function Slide06_HealthyPlate() {
  const [selectedSectionId, setSelectedSectionId] = useState<string>('veggies');
  const [assembledStep, setAssembledStep] = useState<number>(0);
  const [activeMealPreset, setActiveMealPreset] = useState<'lunch' | 'dinner' | 'breakfast'>('lunch');

  // Trigger smooth step-by-step assembly of the plate on load!
  useEffect(() => {
    const timer1 = setTimeout(() => setAssembledStep(1), 300);
    const timer2 = setTimeout(() => setAssembledStep(2), 700);
    const timer3 = setTimeout(() => setAssembledStep(3), 1100);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const activeSection = SECTIONS.find(s => s.id === selectedSectionId) || SECTIONS[0];

  const handleSelectSection = (id: string) => {
    soundManager.playReveal();
    setSelectedSectionId(id);
  };

  const sampleMeals = {
    breakfast: {
      title: "Nutritious Student Breakfast",
      veggie: "1 bowl papaya cubes + spinach in batter",
      grain: "2 vegetable millet uttapams or oats upma",
      protein: "Boiled sprouts or 2 boiled eggs / paneer cubes",
      side: "1 small cup warm milk / curd"
    },
    lunch: {
      title: "Balanced Thali Lunch",
      veggie: "Mixed salad (cucumber, carrot) + Bhindi/Gobi sabzi",
      grain: "2 whole wheat phulkas or 1 cup brown rice",
      protein: "1 full katori thick Tadka Moong Dal + Paneer / Soya",
      side: "1 glass chilled spiced jeera chaas"
    },
    dinner: {
      title: "Light & Restorative Dinner",
      veggie: "Steamed broccoli, beans, and carrot stir-fry",
      grain: "1 small Jowar roti or small bowl millet khichdi",
      protein: "Chana dal soup, grilled paneer, or tofu stir-fry",
      side: "Warm chamomile water 1 hr before sleep"
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden bg-[#071D18]">
      {/* Background Soft Glow & Dark Film Vignette */}
      <div className="absolute inset-0 cinematic-vignette-heavy pointer-events-none" />

      {/* Slide Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0B2922] text-[#00C896] border border-[#00C896]/30">
              Slide 06 • Keynote Masterpiece
            </span>
            <span className="text-xs font-mono text-[#C7F36B]/80 hidden sm:inline">
              Interactive Assembled Plate • Harvard & ICMR-NIN 2024 "My Plate for the Day"
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#FBF9F4] font-display tracking-tight uppercase">
            THE HEALTHY PLATE MODEL
          </h2>
          <p className="text-xs sm:text-sm text-[#F5F1E8]/75 font-sans max-w-2xl mt-1">
            An intuitive visual equation: Fill half your plate with colorful plants first; share the remaining half equally between whole grains and clean protein.
          </p>
        </div>

        {/* Meal Preset Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#071D18]/90 border border-[#00C896]/20 rounded-2xl backdrop-blur-md">
          {(['breakfast', 'lunch', 'dinner'] as const).map(preset => (
            <button
              key={preset}
              onClick={() => {
                soundManager.playSubtleClick();
                setActiveMealPreset(preset);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold capitalize transition-all cursor-pointer ${
                activeMealPreset === preset
                  ? "bg-[#00C896] text-[#071D18] shadow-lg shadow-[#00C896]/30"
                  : "text-[#F5F1E8]/60 hover:text-[#F5F1E8] hover:bg-[#0B2922]"
              }`}
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage: The Master Plate & Detailed Inspector */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        
        {/* Left Arena: Huge Centerpiece Ceramic Plate (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
            
            {/* Ambient Backlight Halo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00C896]/20 via-[#C7F36B]/15 to-[#FFB347]/20 blur-3xl -z-10 animate-pulse-glow" />

            {/* Top-Down Circular Ceramic Plate Container */}
            <div className="relative w-full h-full rounded-full border-4 border-[#00C896]/30 bg-[#0A1813] p-3 shadow-2xl overflow-hidden flex items-center justify-center">
              
              {/* Outer Ceramic Plate Rim */}
              <div className="absolute inset-1 rounded-full border border-[#00C896]/20 pointer-events-none" />

              {/* Segment 1: 50% Vegetables & Fruits (Left Half) */}
              <motion.div
                initial={{ opacity: 0, x: -40, scale: 0.9 }}
                animate={{ opacity: assembledStep >= 1 ? 1 : 0, x: assembledStep >= 1 ? 0 : -40, scale: assembledStep >= 1 ? 1 : 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onClick={() => handleSelectSection('veggies')}
                className={`absolute left-2 inset-y-2 w-[48%] rounded-l-full overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
                  selectedSectionId === 'veggies'
                    ? "border-[#00C896] ring-4 ring-[#00C896]/50 shadow-2xl scale-102 z-10"
                    : "border-transparent opacity-85 hover:opacity-100"
                }`}
              >
                <img src={CINEMATIC_IMAGES.plateVeggiesSection} alt="Veggies" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
                <div className="absolute bottom-4 left-4 text-left">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#071D18]/90 text-[#00C896] border border-[#00C896]/30">
                    50%
                  </span>
                  <span className="block text-xs font-black text-[#FBF9F4] font-display uppercase drop-shadow mt-1">
                    Vegetables & Fruits
                  </span>
                </div>
              </motion.div>

              {/* Segment 2: 25% Whole Grains & Millets (Top Right Quarter) */}
              <motion.div
                initial={{ opacity: 0, y: -40, scale: 0.9 }}
                animate={{ opacity: assembledStep >= 2 ? 1 : 0, y: assembledStep >= 2 ? 0 : -40, scale: assembledStep >= 2 ? 1 : 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onClick={() => handleSelectSection('grains')}
                className={`absolute right-2 top-2 w-[48%] h-[48%] rounded-tr-full overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
                  selectedSectionId === 'grains'
                    ? "border-[#FFB347] ring-4 ring-[#FFB347]/50 shadow-2xl scale-102 z-10"
                    : "border-transparent opacity-85 hover:opacity-100"
                }`}
              >
                <img src={CINEMATIC_IMAGES.plateGrainsSection} alt="Grains" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />
                <div className="absolute top-4 right-4 text-right">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#071D18]/90 text-[#FFB347] border border-[#FFB347]/30">
                    25%
                  </span>
                  <span className="block text-[11px] font-black text-[#FBF9F4] font-display uppercase drop-shadow mt-0.5">
                    Whole Grains
                  </span>
                </div>
              </motion.div>

              {/* Segment 3: 25% Protein Powerhouse (Bottom Right Quarter) */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: assembledStep >= 3 ? 1 : 0, y: assembledStep >= 3 ? 0 : 40, scale: assembledStep >= 3 ? 1 : 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onClick={() => handleSelectSection('proteins')}
                className={`absolute right-2 bottom-2 w-[48%] h-[48%] rounded-br-full overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
                  selectedSectionId === 'proteins'
                    ? "border-[#C7F36B] ring-4 ring-[#C7F36B]/50 shadow-2xl scale-102 z-10"
                    : "border-transparent opacity-85 hover:opacity-100"
                }`}
              >
                <img src={CINEMATIC_IMAGES.plateProteinSection} alt="Proteins" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
                <div className="absolute bottom-4 right-4 text-right">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#071D18]/90 text-[#C7F36B] border border-[#C7F36B]/30">
                    25%
                  </span>
                  <span className="block text-[11px] font-black text-[#FBF9F4] font-display uppercase drop-shadow mt-0.5">
                    Clean Proteins
                  </span>
                </div>
              </motion.div>

              {/* Center Dividers Hub */}
              <div className="absolute w-8 h-8 rounded-full bg-[#071D18] border-2 border-[#00C896] z-20 flex items-center justify-center shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C7F36B]" />
              </div>

            </div>

            {/* Companion Side Buttons */}
            <div className="flex gap-2.5 mt-3">
              <button
                onClick={() => handleSelectSection('probiotics')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-semibold cursor-pointer transition-all ${
                  selectedSectionId === 'probiotics'
                    ? "bg-[#8B5CF6]/30 border-[#A78BFA] text-[#A78BFA] ring-2 ring-[#8B5CF6]/40"
                    : "glass-card border-[#8B5CF6]/20 text-[#A78BFA]/70 hover:bg-[#8B5CF6]/20"
                }`}
              >
                <Milk className="w-3.5 h-3.5" />
                <span>Side: Probiotic Curd / Chaas</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Arena: Cinematic Section Deep-Dive (7 cols) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-3xl glass-panel border border-[#00C896]/30 shadow-2xl relative overflow-hidden"
            >
              {/* Header Row */}
              <div className="flex items-center justify-between border-b border-[#00C896]/20 pb-3 mb-3.5">
                <div>
                  <div className="flex items-center gap-2">
                    <span 
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider"
                      style={{ backgroundColor: `${activeSection.color}25`, color: activeSection.color, border: `1px solid ${activeSection.color}50` }}
                    >
                      {activeSection.share}
                    </span>
                    <span className="text-xs font-mono text-[#F5F1E8]/60">
                      Standard Guideline
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#FBF9F4] font-display uppercase tracking-tight mt-1">
                    {activeSection.name}
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-[#00C896]/30 shadow-md">
                  <img src={activeSection.image} alt={activeSection.name} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Purpose & Guidelines */}
              <div className="space-y-3 mb-3.5">
                <div className="p-3.5 rounded-2xl bg-[#071D18]/80 border border-[#00C896]/20">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#00C896] block mb-1">
                    Biological Purpose
                  </span>
                  <p className="text-xs sm:text-sm text-[#F5F1E8] font-medium leading-relaxed">
                    {activeSection.purpose}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#0B2922]/60 border border-[#C7F36B]/20">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#C7F36B] block mb-1">
                    ICMR-NIN 2024 Recommendation
                  </span>
                  <p className="text-xs text-[#F5F1E8]/90 leading-relaxed">
                    {activeSection.guidelines}
                  </p>
                </div>
              </div>

              {/* Indian Staples & Hostel Hack */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-2.5">
                <Utensils className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-300 block">
                    College Hostel / Mess Practical Hack:
                  </span>
                  <p className="text-xs text-amber-100/90 mt-0.5">
                    {activeSection.messTips}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Active Preset Meal Sample Summary Pill */}
          <div className="mt-3.5 p-3 rounded-2xl glass-card border border-[#00C896]/20 flex items-center justify-between text-xs">
            <span className="font-bold text-[#C7F36B] font-mono">
              Live Thali ({sampleMeals[activeMealPreset].title}):
            </span>
            <div className="flex items-center gap-2 text-[11px] text-[#F5F1E8]/80 font-mono">
              <span className="bg-[#071D18] px-2 py-0.5 rounded border border-[#00C896]/20">🥬 {sampleMeals[activeMealPreset].veggie}</span>
              <span className="bg-[#071D18] px-2 py-0.5 rounded border border-[#FFB347]/20">🌾 {sampleMeals[activeMealPreset].grain}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Slide Footer Keynote Takeaway */}
      <div className="relative z-10 pt-3 border-t border-[#00C896]/20 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-[#F5F1E8]/80">
          <Layers className="w-4 h-4 text-[#00C896]" />
          <span><strong>Golden Law of Assembly:</strong> Never start by piling rice or chapatis. Place your salads, cooked vegetables, and dal first — the rest naturally falls into balance.</span>
        </div>
        <span className="text-[11px] font-mono text-[#00C896]/80 hidden md:inline">
          Harvard T.H. Chan & ICMR-NIN 2024
        </span>
      </div>
    </div>
  );
}
