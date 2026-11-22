export interface PresenterNote {
  whatToSay: string;
  explanation: string;
  practicalExample: string;
  scientificFact: string;
  transitionSentence: string;
  timeEstimateSeconds: number;
}

export interface SlideInfo {
  id: number;
  slideNumber: string; // e.g. "01"
  title: string;
  subtitle: string;
  badge: string;
  presenterNote: PresenterNote;
}

export interface EssentialNutrient {
  id: string;
  name: string;
  category: 'Macronutrient' | 'Micronutrient' | 'Vital Element';
  icon: string;
  color: string;
  badgeColor: string;
  function: string;
  importance: string;
  examples: string[];
  inadequacyEffects: string;
}

export interface FoodGroup {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  portionGuidance: string;
  keyNutrients: string[];
  benefits: string[];
  indianExamples: string[];
  imageUrl: string;
}

export interface HabitItem {
  id: string;
  title: string;
  desc: string;
  benefit: string;
  category: 'Timing' | 'Mindfulness' | 'Nutritional Choice' | 'Hygiene';
  iconName: string;
}

export interface UnhealthyComparison {
  id: string;
  unhealthyItem: string;
  unhealthyDetails: string;
  effects: string[];
  healthyAlternative: string;
  alternativeBenefits: string[];
  whyItMatters: string;
}

export interface RoutineTimeSlot {
  time: string;
  period: 'Morning' | 'Afternoon' | 'Evening' | 'Night';
  title: string;
  actionItems: string[];
  studentTip: string;
  focusNutrient: string;
  iconName: string;
}

export interface FoodChallengeRound {
  id: number;
  question: string;
  optionA: {
    name: string;
    description: string;
    caloriesApprox: string;
    nutritionProfile: string;
    isHealthy: boolean;
  };
  optionB: {
    name: string;
    description: string;
    caloriesApprox: string;
    nutritionProfile: string;
    isHealthy: boolean;
  };
  correctOption: 'A' | 'B';
  explanation: string;
  takeaway: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
