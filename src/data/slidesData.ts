import type { 
  SlideInfo, 
  EssentialNutrient, 
  FoodGroup, 
  HabitItem, 
  UnhealthyComparison, 
  RoutineTimeSlot, 
  FoodChallengeRound, 
  QuizQuestion 
} from '../types/presentation';

export const SLIDES_META: SlideInfo[] = [
  {
    id: 1,
    slideNumber: "01",
    title: "HEALTHY DIET & HABITS",
    subtitle: "EAT SMART. LIVE BETTER.",
    badge: "Keynote Introduction",
    presenterNote: {
      whatToSay: "Good morning esteemed judges, professors, and fellow students. Today, I am thrilled to present our keynote on 'Healthy Diet and Habits: Eat Smart, Live Better'. In our busy college routines, we often treat food as merely quick fuel, but scientifically, every cell in our body is built from what we put on our plate.",
      explanation: "This opening slide establishes our focal point: nutrition and daily eating habits as the foundational drivers of daily vitality, academic performance, and long-term health.",
      practicalExample: "Think about how you feel after eating a heavy, greasy fast-food lunch versus a crisp, wholesome meal with fresh fruits and dal roti — the difference in afternoon alertness is immediate.",
      scientificFact: "According to the ICMR-NIN 2024 Dietary Guidelines for Indians, over 56% of the total disease burden in India is directly associated with unhealthy dietary patterns.",
      transitionSentence: "Before we explore food choices, let us clearly define what truly constitutes a 'healthy diet' from a biological and nutritional standpoint.",
      timeEstimateSeconds: 45
    }
  },
  {
    id: 2,
    slideNumber: "02",
    title: "WHAT IS A HEALTHY DIET?",
    subtitle: "The Four Foundational Nutritional Pillars",
    badge: "Core Principles",
    presenterNote: {
      whatToSay: "So, what actually is a healthy diet? It is not about starvation, strict calorie counting, or eliminating entire food groups. A healthy diet provides all essential macro and micro-nutrients in appropriate proportions to sustain growth, metabolic repair, and vitality without inducing metabolic toxicity.",
      explanation: "It rests upon four timeless nutritional pillars: Balance, Variety, Moderation, and Adequacy.",
      practicalExample: "Eating only brown rice or only salads every single day is not a healthy diet; combining grains with lentils, colorful greens, and healthy fats is.",
      scientificFact: "The World Health Organization emphasizes that a healthy diet must provide sufficient energy while limiting free sugars to less than 10% of total energy and sodium to less than 2,000 mg per day.",
      transitionSentence: "Now that we understand the four pillars, let us examine why maintaining a balanced diet is critical for our physiological functions.",
      timeEstimateSeconds: 50
    }
  },
  {
    id: 3,
    slideNumber: "03",
    title: "IMPORTANCE OF A BALANCED DIET",
    subtitle: "Fueling Human Vitality, Immunity & Focus",
    badge: "Physiological Impact",
    presenterNote: {
      whatToSay: "A balanced diet is the cornerstone of human vitality. It provides steady ATP energy for our muscles and neurons, supplies amino acids for continuous cellular tissue repair, fortifies immune defenses, stabilizes body weight, and sharpens cognitive focus during study hours.",
      explanation: "Nutrients do not act in isolation; they form an interconnected metabolic web. For instance, vitamin C enhances non-heme iron absorption from plant lentils.",
      practicalExample: "College students who eat balanced meals with adequate complex carbs and proteins experience steady blood glucose, avoiding the infamous 2 PM mental fog.",
      scientificFact: "Clinical studies demonstrate that sustained dietary fiber intake reduces systemic inflammatory markers by up to 22%, directly supporting vascular and digestive health.",
      transitionSentence: "To build a balanced plate, we must first break down the six essential nutrient classes that our bodies cannot synthesize on their own.",
      timeEstimateSeconds: 55
    }
  },
  {
    id: 4,
    slideNumber: "04",
    title: "SIX ESSENTIAL NUTRIENTS",
    subtitle: "The Biochemical Building Blocks of Life",
    badge: "Nutritional Science",
    presenterNote: {
      whatToSay: "Here on slide four, we examine the six essential nutrients: Carbohydrates, Proteins, Fats, Vitamins, Minerals, and Fibre with Water. Each plays an irreplaceable biological role — carbs supply glucose, proteins assemble structural tissues and enzymes, fats protect vital organs, and micronutrients facilitate millions of cellular enzymatic reactions.",
      explanation: "We differentiate macronutrients needed in grams from micronutrients required in milligrams or micrograms, yet equally vital.",
      practicalExample: "If an athlete consumes plenty of protein but zero complex carbohydrates, the body is forced to break down precious muscle protein for basic energy.",
      scientificFact: "ICMR-NIN 2024 recommends that 45-55% of total daily energy should come from complex carbohydrates, 10-15% from high-quality protein, and 20-30% from healthy fats.",
      transitionSentence: "Knowing the chemical nutrients is valuable, but how do they translate onto our dining table? Let us explore real-world food groups and Indian staples.",
      timeEstimateSeconds: 60
    }
  },
  {
    id: 5,
    slideNumber: "05",
    title: "FOOD GROUPS & BENEFITS",
    subtitle: "Translating Nutrients into Wholesome Indian Meals",
    badge: "Dietary Diversity",
    presenterNote: {
      whatToSay: "On this slide, we translate abstract nutrients into the vibrant food groups we enjoy daily: fresh fruits, leafy vegetables, whole grains like jowar and bajra, pulses like moong and chana dal, wholesome dairy, and nutritious seeds.",
      explanation: "Traditional Indian culinary wisdom inherently combines complimentary foods — like pairing cereal grains with pulses to achieve a complete amino acid profile.",
      practicalExample: "Combining traditional roti or rice with dal or rajma provides all nine essential amino acids that neither grain nor pulse provides alone.",
      scientificFact: "ICMR-NIN 2024 specifically recommends consuming at least 400 to 500 grams of vegetables and fruits daily, alongside traditional millets to combat micronutrient deficiencies.",
      transitionSentence: "To make portioning intuitive and practical, modern nutrition scientists created the visual concept of 'The Healthy Plate'.",
      timeEstimateSeconds: 55
    }
  },
  {
    id: 6,
    slideNumber: "06",
    title: "THE HEALTHY PLATE",
    subtitle: "Your Intuitive Visual Guide to Ideal Portions",
    badge: "Interactive Signature Slide",
    presenterNote: {
      whatToSay: "Behold 'The Healthy Food Plate'. Notice the elegant geometry: exactly half of your plate should consist of colorful vegetables and fruits. One quarter is dedicated to whole grains or millets, and the remaining quarter belongs to protein-rich foods like dal, sprouts, paneer, or eggs, accompanied by clean water and probiotic curd.",
      explanation: "This visual model replaces tedious gram weighing with a simple visual partition that anyone can implement in a student hostel or home kitchen.",
      practicalExample: "When you visit your college mess, mentally divide your thali: fill half with sabzi and salad, a quarter with roti or brown rice, and a quarter with dal or paneer.",
      scientificFact: "Visual plate-proportioning interventions show a 34% higher compliance rate over 12 months compared to numeric calorie-counting regimens.",
      transitionSentence: "However, even the most perfect food plate loses its value if eaten with poor habits. Let us look at the golden daily eating habits.",
      timeEstimateSeconds: 65
    }
  },
  {
    id: 7,
    slideNumber: "07",
    title: "HEALTHY EATING HABITS",
    subtitle: "The Science of Mindful & Consistent Nourishment",
    badge: "Actionable Daily Routine",
    presenterNote: {
      whatToSay: "How we eat is just as important as what we eat. On slide seven, we review the scientific habits: honoring regular meal timings, never skipping breakfast, chewing slowly, practicing mindful eating free from smartphone screens, and maintaining strict food hygiene.",
      explanation: "Chewing thoroughly allows salivary amylase to start carbohydrate digestion and gives the stomach 20 minutes to signal satiety via leptin to the hypothalamus.",
      practicalExample: "Eating your dinner while watching fast-paced YouTube videos leads to mindless overeating because sensory satiety signals are overridden by digital stimulation.",
      scientificFact: "Research in neurobiology indicates that eating in under 10 minutes increases the risk of metabolic indigestion and postprandial glucose surges by 40%.",
      transitionSentence: "Conversely, what happens when convenience foods and irregular schedules take over? Let us examine unhealthy food habits and their biological fallout.",
      timeEstimateSeconds: 50
    }
  },
  {
    id: 8,
    slideNumber: "08",
    title: "UNHEALTHY HABITS & EFFECTS",
    subtitle: "Understanding Ultra-Processed Foods & Biological Risks",
    badge: "Evidence-Based Caution",
    presenterNote: {
      whatToSay: "Convenience culture has normalized high-sodium chips, carbonated sodas, and deep-fried roadside snacks. On this slide, we examine their physiological consequences objectively: visceral adiposity, enamel erosion from phosphoric acid, and heightened long-term cardiometabolic risk.",
      explanation: "We do not demonize food; rather, we examine the metabolic difference between whole nutrient-dense food and industrially synthesized hyper-palatable snacks.",
      practicalExample: "Swapping an afternoon packet of fried chips with a cup of roasted chana or makhana saves over 250 kcal of oxidized trans-fats while providing 8 grams of prebiotic fiber.",
      scientificFact: "ICMR-NIN warns that ultra-processed foods (UPFs) contribute to high levels of saturated fats, hidden sugars, and high sodium, which accelerate non-communicable diseases in young adults.",
      transitionSentence: "Alongside solid food, there is one silent nutrient that represents 60% of our human body mass — clean water.",
      timeEstimateSeconds: 55
    }
  },
  {
    id: 9,
    slideNumber: "09",
    title: "HYDRATION & WATER BALANCE",
    subtitle: "The Catalyst for Cellular Homeostasis & Cognitive Agility",
    badge: "Fluid Physiology",
    presenterNote: {
      whatToSay: "Water is our most essential nutrient. It regulates body temperature through perspiration, lubricates joints, transports nutrients through blood plasma, and facilitates metabolic waste elimination through kidneys.",
      explanation: "Hydration is deeply individual: a student sitting in an air-conditioned library requires different intake compared to someone playing football in hot humid weather.",
      practicalExample: "A mild 2% dehydration level reduces short-term concentration, working memory, and exam recall by up to 15%.",
      scientificFact: "ICMR-NIN highlights that daily fluid requirements vary from 2.0 to 3.5 liters depending on climate, physical activity, and metabolic rate, emphasizing plain water over caffeinated energy drinks.",
      transitionSentence: "Let us now synchronize our nutrition and hydration into an optimal 24-hour daily timeline tailored for student life.",
      timeEstimateSeconds: 50
    }
  },
  {
    id: 10,
    slideNumber: "10",
    title: "A HEALTHY DAILY ROUTINE",
    subtitle: "Synchronizing Circadian Rhythms & Student Life",
    badge: "24-Hour Blueprint",
    presenterNote: {
      whatToSay: "Slide ten presents a realistic 24-hour daily routine for college students. From morning hydration and protein-rich breakfast, to balanced midday fuel, an active evening walk with smart snacks, and a light dinner finished 2 hours before restorative sleep.",
      explanation: "Our digestive organs function according to circadian clocks. Insulin sensitivity is peak in the morning and early afternoon, declining late at night.",
      practicalExample: "Eating heavy meals at 1:00 AM while cramming for exams forces the pancreas and liver to work when melatonin is signaling cellular rest, impairing sleep quality.",
      scientificFact: "Circadian rhythm research confirms that consuming at least 70% of daily calories before 7:00 PM correlates with significantly improved lipid profiles and deeper REM sleep cycles.",
      transitionSentence: "Now, it is time to test our instincts with an exciting interactive challenge! Let us involve the audience.",
      timeEstimateSeconds: 55
    }
  },
  {
    id: 11,
    slideNumber: "11",
    title: "HEALTHY FOOD VS JUNK FOOD",
    subtitle: "Interactive Audience Participation Challenge",
    badge: "Live Audience Quiz",
    presenterNote: {
      whatToSay: "Judges and classmates, it is your turn to participate! I will present two common food options on the screen. Tell me: Which one would you choose, and why? Let us see how many smart choices we make as a class!",
      explanation: "This interactive gamified slide invites audience responses, scores choices live, reveals immediate biochemical facts, and triggers celebration animations.",
      practicalExample: "We compare real choices students face daily: Coconut water versus packaged soda, or roasted peanuts versus processed chips.",
      scientificFact: "Behavioral nutrition proves that interactive decision-making reinforces dietary habit retention 3.5 times better than passive listening.",
      transitionSentence: "With those outstanding answers from our audience, let us synthesize our key conclusions and final recommendations.",
      timeEstimateSeconds: 80
    }
  },
  {
    id: 12,
    slideNumber: "12",
    title: "CONCLUSION & REFERENCES",
    subtitle: "Your Food Choices Shape Your Future",
    badge: "Final Synthesis & Quiz",
    presenterNote: {
      whatToSay: "In conclusion, remember this core message: Eating healthy is not about eating less — it is about nourishing your body better. Let us commit to the four lifelong principles: Eat Balanced, Choose Wisely, Stay Hydrated, and Build Consistent Habits. Thank you so much for your time and attentive engagement!",
      explanation: "The slide concludes with a quick 3-question knowledge check and official citations to WHO and ICMR-NIN 2024 Dietary Guidelines for Indians.",
      practicalExample: "Small daily swaps compound over years: choosing water over soda and adding one seasonal fruit daily transforms long-term health biomarkers.",
      scientificFact: "According to WHO, adopting a healthy lifestyle that includes a balanced diet and regular physical activity can prevent up to 80% of premature heart disease and type 2 diabetes.",
      transitionSentence: "I now welcome any questions or comments from our distinguished judges and faculty. Thank you!",
      timeEstimateSeconds: 60
    }
  }
];

export const ESSENTIAL_NUTRIENTS: EssentialNutrient[] = [
  {
    id: "carbs",
    name: "Carbohydrates",
    category: "Macronutrient",
    icon: "Wheat",
    color: "from-amber-500 to-yellow-600",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    function: "Primary cellular energy source; converts to glucose to fuel brain neurons and physical exertion.",
    importance: "Complex carbs supply dietary fiber for gut microbiome vitality and prevent sudden hypoglycemia.",
    examples: ["Whole wheat roti", "Brown rice", "Ragi (Finger millet)", "Jowar", "Oats", "Sweet potatoes"],
    inadequacyEffects: "Chronic lethargy, brain fog, ketosis-induced headaches, and premature muscle protein breakdown."
  },
  {
    id: "proteins",
    name: "Proteins",
    category: "Macronutrient",
    icon: "Dna",
    color: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    function: "Structural building blocks; synthesizes muscle fibers, metabolic enzymes, hormones, and immune antibodies.",
    importance: "Crucial for daily tissue repair, growth, metabolic enzyme production, and sustained post-meal satiety.",
    examples: ["Moong dal & Lentils", "Chickpeas (Chana)", "Paneer & Curd", "Eggs", "Sprouts", "Tofu & Soya"],
    inadequacyEffects: "Muscle wasting, weakened immune defenses, brittle hair, delayed wound healing, and constant hunger."
  },
  {
    id: "fats",
    name: "Healthy Fats",
    category: "Macronutrient",
    icon: "Droplets",
    color: "from-orange-500 to-amber-600",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    function: "Cell membrane integrity, nerve insulation (myelin sheath), and vital organ shock absorption.",
    importance: "Indispensable for absorbing fat-soluble vitamins (A, D, E, K) and producing essential steroid hormones.",
    examples: ["Mustard oil (cold-pressed)", "Almonds & Walnuts", "Flaxseeds & Chia", "Pure desi ghee (in moderation)", "Peanut butter"],
    inadequacyEffects: "Impaired fat-soluble vitamin absorption, hormonal imbalances, dry dermatological skin, and cognitive slowdown."
  },
  {
    id: "vitamins",
    name: "Vitamins",
    category: "Micronutrient",
    icon: "Sparkles",
    color: "from-lime-500 to-emerald-600",
    badgeColor: "bg-lime-500/20 text-lime-300 border-lime-500/30",
    function: "Organic co-factors regulating thousands of cellular enzymatic and metabolic biochemical reactions.",
    importance: "Maintains optimal vision, skin regeneration, bone mineralization (Vitamin D), and antioxidant defense (Vitamin C & E).",
    examples: ["Amla & Citrus (Vit C)", "Carrots & Spinach (Vit A)", "Sunlight & Fortified Milk (Vit D)", "Nuts (Vit E)", "Green leafy greens (Vit K)"],
    inadequacyEffects: "Night blindness (Vit A), scurvy & weak collagen (Vit C), rickets/osteomalacia (Vit D), and fatigue (B-complex)."
  },
  {
    id: "minerals",
    name: "Minerals",
    category: "Micronutrient",
    icon: "Shield",
    color: "from-cyan-500 to-blue-600",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    function: "Inorganic elements vital for hemoglobin oxygen transport, bone architecture, and nerve electrochemistry.",
    importance: "Regulates fluid osmolarity, cardiac muscle contractions, thyroid hormone synthesis, and structural skeletal density.",
    examples: ["Spinach & Jaggery (Iron)", "Curd & Sesame seeds (Calcium)", "Pumpkin seeds (Zinc)", "Bananas & Coconut water (Potassium)"],
    inadequacyEffects: "Iron-deficiency anemia, osteopenia/osteoporosis, cardiac arrhythmias, muscle cramps, and reduced immunity."
  },
  {
    id: "fibre_water",
    name: "Dietary Fibre & Water",
    category: "Vital Element",
    icon: "Waves",
    color: "from-sky-500 to-teal-500",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    function: "Fluid medium for cellular biochemical reactions, thermoregulation, and digestive peristalsis.",
    importance: "Soluble and insoluble fiber feeds the protective gut microbiota and moderates postprandial glucose absorption.",
    examples: ["Clean drinking water", "Psyllium husk (Isabgol)", "Whole fruit with skin", "Vegetable salads", "Millets & Pulses"],
    inadequacyEffects: "Constipation, diverticular strain, acute dehydration, impaired thermoregulation, and elevated LDL cholesterol."
  }
];

export const FOOD_GROUPS: FoodGroup[] = [
  {
    id: "fruits",
    name: "Fresh Fruits",
    tagline: "Nature's Micronutrient & Antioxidant Shields",
    icon: "Apple",
    portionGuidance: "150–200g daily (1–2 whole fruits)",
    keyNutrients: ["Vitamin C", "Potassium", "Dietary Fiber", "Flavonoids"],
    benefits: [
      "Natural hydration and digestive enzymatic support",
      "Cellular protection against oxidative free-radical stress",
      "Gradual glucose absorption via intact fibrous matrix"
    ],
    indianExamples: ["Papaya", "Guava (Amrood)", "Amla", "Banana", "Apple", "Pomegranate (Anaar)"],
    imageUrl: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "vegetables",
    name: "Vegetables & Greens",
    tagline: "Dense Phyto-Nutrients & Protective Fibre",
    icon: "Carrot",
    portionGuidance: "300–400g daily (including green leafy vegetables)",
    keyNutrients: ["Folate", "Beta-carotene", "Magnesium", "Insoluble Fiber"],
    benefits: [
      "Substantial volume with minimal caloric density",
      "Supports gut microbiome and bowel regularity",
      "Protects cardiovascular endothelium and blood pressure"
    ],
    indianExamples: ["Spinach (Palak)", "Fenugreek (Methi)", "Bottle Gourd (Lauki)", "Carrots", "Tomatoes", "Okra (Bhindi)"],
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "grains",
    name: "Whole Grains & Millets",
    tagline: "Complex Sustained Energy & B-Complex Vitamins",
    icon: "Wheat",
    portionGuidance: "200–250g cooked per day",
    keyNutrients: ["Complex Starches", "Thiamine (B1)", "Iron", "Zinc"],
    benefits: [
      "Steady, sustained glucose delivery preventing insulin spikes",
      "Traditional millets provide superior calcium and iron content",
      "High satiety keeping hunger controlled for 4-5 hours"
    ],
    indianExamples: ["Ragi (Finger Millet)", "Jowar (Sorghum)", "Bajra (Pearl Millet)", "Whole Wheat Atta", "Brown Rice"],
    imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pulses",
    name: "Pulses, Dals & Legumes",
    tagline: "Plant-Based Protein Powerhouses & Amino Acids",
    icon: "Bean",
    portionGuidance: "60–80g raw (1–2 bowls cooked dal)",
    keyNutrients: ["Plant Protein", "Lysine", "Soluble Fiber", "Non-Heme Iron"],
    benefits: [
      "Crucial for muscle repair and enzymatic synthesis in vegetarian diets",
      "Low glycemic index supporting healthy blood glucose control",
      "Complements cereal proteins to form complete biological proteins"
    ],
    indianExamples: ["Moong Dal", "Chana (Chickpeas)", "Rajma (Kidney Beans)", "Toor Dal", "Black Gram (Urad)"],
    imageUrl: "https://images.unsplash.com/photo-1585728748178-577c28384c3c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dairy",
    name: "Dairy & Probiotics",
    tagline: "Bioavailable Calcium & Gut Microbiome Culture",
    icon: "Milk",
    portionGuidance: "300ml equivalent (Milk / Curd / Chaas)",
    keyNutrients: ["Calcium", "Vitamin B12", "Riboflavin", "Probiotic Lactobacilli"],
    benefits: [
      "Essential for peak bone mineral density and tooth enamel",
      "Fermented curd/dahi enhances gut microbiome and digestion",
      "High biological value protein for tissue regeneration"
    ],
    indianExamples: ["Fresh Curd (Dahi)", "Buttermilk (Chaas)", "Paneer (Cottage Cheese)", "Toned Milk"],
    imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "nuts_seeds",
    name: "Nuts, Seeds & Healthy Fats",
    tagline: "Omega Fatty Acids, Vitamin E & Mineral Reserves",
    icon: "Nut",
    portionGuidance: "20–30g daily (handful of mixed nuts/seeds)",
    keyNutrients: ["Omega-3/6 Fatty Acids", "Vitamin E", "Selenium", "Zinc"],
    benefits: [
      "Supports neural synaptic plasticity and brain cell membrane health",
      "Powerful antioxidant shield for cardiovascular capillaries",
      "Healthy satiety snack reducing sweet cravings"
    ],
    indianExamples: ["Almonds (Badam)", "Walnuts (Akhrot)", "Flaxseeds (Alsi)", "Roasted Peanuts", "Sesame (Til)"],
    imageUrl: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=600&q=80"
  }
];

export const HABIT_ITEMS: HabitItem[] = [
  {
    id: "h1",
    title: "Honor Regular Meal Timings",
    desc: "Maintain consistent windows for breakfast, lunch, and dinner to synchronize peripheral digestive circadian clocks.",
    benefit: "Improves insulin sensitivity, metabolic rhythm, and prevents erratic hunger hormone spikes.",
    category: "Timing",
    iconName: "Clock"
  },
  {
    id: "h2",
    title: "Never Routinely Skip Breakfast",
    desc: "Break your overnight fast with balanced complex carbohydrates and protein within 90 minutes of waking.",
    benefit: "Prevents morning cognitive slump, reduces midday binge cravings, and stabilizes cortisol.",
    category: "Timing",
    iconName: "Sun"
  },
  {
    id: "h3",
    title: "Practice Slow, Mindful Chewing",
    desc: "Chew every mouthful thoroughly until liquid-like before swallowing; avoid eating in under 15 minutes.",
    benefit: "Ensures salivary enzymes initiate digestion and allows the 20-minute leptin satiety signal to reach the brain.",
    category: "Mindfulness",
    iconName: "Smile"
  },
  {
    id: "h4",
    title: "Screen-Free Mindful Eating",
    desc: "Step away from laptops, smartphones, and televisions during mealtime to focus on sensory food signals.",
    benefit: "Prevents unconscious overconsumption and heightens satisfaction from smaller, wholesome portions.",
    category: "Mindfulness",
    iconName: "SmartphoneOff"
  },
  {
    id: "h5",
    title: "Fill Half Your Plate with Color",
    desc: "Ensure 50% of your thali consists of raw salads, cooked seasonal vegetables, or greens.",
    benefit: "Guarantees sufficient fiber and diverse phytonutrients while keeping overall caloric density moderate.",
    category: "Nutritional Choice",
    iconName: "Salad"
  },
  {
    id: "h6",
    title: "Choose Smart Whole-Food Snacks",
    desc: "Replace fried samosas or chips with roasted chana, makhana, seasonal fruit, or a handful of nuts.",
    benefit: "Avoids trans-fats and refined flours while delivering steady protein and micronutrients.",
    category: "Nutritional Choice",
    iconName: "Apple"
  },
  {
    id: "h7",
    title: "Consciously Limit Added Sugar & Salt",
    desc: "Keep added sugar under 25g/day (approx 5 tsp) and sodium intake under 5g of salt (1 teaspoon).",
    benefit: "Protects vascular endothelial integrity, reduces hypertension risk, and avoids glucose volatility.",
    category: "Nutritional Choice",
    iconName: "Scale"
  },
  {
    id: "h8",
    title: "Strict Food Hygiene & Safe Prep",
    desc: "Wash hands with soap before eating, sanitize raw produce thoroughly, and store cooked meals safely.",
    benefit: "Prevents gastrointestinal infections, foodborne pathogen exposure, and systemic gut inflammation.",
    category: "Hygiene",
    iconName: "ShieldCheck"
  }
];

export const UNHEALTHY_COMPARISONS: UnhealthyComparison[] = [
  {
    id: "c1",
    unhealthyItem: "Packaged Sugary Carbonated Soda (350ml)",
    unhealthyDetails: "Contains ~38g of added free sugar, zero micronutrients, and phosphoric acid.",
    effects: [
      "Rapid glycemic surge followed by reactive hypoglycemia and exhaustion",
      "Increases dental enamel demineralization and caries risk",
      "Supplies ~150 'empty liquid calories' without triggering neurological satiety"
    ],
    healthyAlternative: "Fresh Spiced Buttermilk (Chaas) or Coconut Water",
    alternativeBenefits: [
      "Provides natural electrolytes (potassium, magnesium) and probiotic lactobacilli",
      "Hydrates cellular tissues without raising blood glucose levels",
      "Aids gastric soothing and digestion after spicy meals"
    ],
    whyItMatters: "Liquid sugar bypasses normal chewing satiety cues, making it the #1 driver of unintended excess caloric intake."
  },
  {
    id: "c2",
    unhealthyItem: "Deep-Fried Potato Chips / Namkeen",
    unhealthyDetails: "Cooked in thermally oxidized oils; laden with high sodium and industrial trans-fats.",
    effects: [
      "Promotes vascular endothelial inflammation and raises atherogenic LDL cholesterol",
      "Excess sodium promotes extracellular fluid retention and elevated blood pressure",
      "Hyper-palatable combination of salt and fat triggers compulsive overeating"
    ],
    healthyAlternative: "Roasted Bengal Gram (Chana) & Roasted Makhana",
    alternativeBenefits: [
      "Rich in plant-based protein (7g per cup) and prebiotic soluble fiber",
      "Low glycemic index and sustained digestive satisfaction",
      "Naturally rich in magnesium and iron without trans-fats"
    ],
    whyItMatters: "Replacing deep-fried snacks with roasted legumes cuts harmful oxidized lipids while delivering true body-building protein."
  },
  {
    id: "c3",
    unhealthyItem: "Refined Flour (Maida) Fast Food / Pastries",
    unhealthyDetails: "Stripped of cereal germ, bran, and essential B-vitamins; rapid starch digestion.",
    effects: [
      "Fast gastrointestinal absorption causing dramatic postprandial glucose spikes",
      "Depleted of dietary fiber, contributing to sluggish bowel motility and dysbiosis",
      "Leaves you feeling hungry and fatigued again within 90 minutes"
    ],
    healthyAlternative: "Multi-Millet Roti / Whole Wheat Wrap with Veggies & Paneer",
    alternativeBenefits: [
      "Intact dietary fiber slows down glucose release into capillaries",
      "Provides natural B-complex vitamins, zinc, and protective antioxidants",
      "Promotes sustained mental stamina during long college lectures"
    ],
    whyItMatters: "Refined maida spikes insulin repeatedly; whole grains and millets supply steady, calm energy for hours."
  }
];

export const ROUTINE_SLOTS: RoutineTimeSlot[] = [
  {
    time: "07:00 – 08:30 AM",
    period: "Morning",
    title: "Awaken, Hydrate & Brain Fuel",
    actionItems: [
      "Drink 1–2 glasses of room-temperature water to rehydrate metabolic systems",
      "Spend 10 minutes in morning sunlight to synchronize master circadian pacemakers",
      "Eat a protein-rich breakfast (e.g. Vegetable Poha with Peanuts, Moong Dal Cheela, or Boiled Eggs)"
    ],
    studentTip: "Never rush out on an empty stomach. A nutritious breakfast boosts morning lecture retention by up to 25%.",
    focusNutrient: "Complex Carbs + High-Quality Protein",
    iconName: "Sun"
  },
  {
    time: "12:30 – 02:00 PM",
    period: "Afternoon",
    title: "Balanced Midday Fuel & Recharge",
    actionItems: [
      "Follow the 50-25-25 plate rule: Half thali vegetables/salad, quarter dal/legume, quarter roti/rice",
      "Include a bowl of fresh curd or buttermilk for digestion and calcium",
      "Take a brief 10-minute leisurely walk after eating before returning to desk"
    ],
    studentTip: "Avoid heavy, oily deep-fried mess lunches that cause severe 2:00 PM classroom somnolence.",
    focusNutrient: "Vegetables, Fiber & Probiotics",
    iconName: "Utensils"
  },
  {
    time: "04:30 – 06:00 PM",
    period: "Evening",
    title: "Smart Snack & Physical Movement",
    actionItems: [
      "Rehydrate with water, fresh coconut water, or green tea instead of sugary milky chai with biscuits",
      "Snack on a handful of roasted chana, almonds, or one fresh seasonal fruit (apple/guava)",
      "Engage in at least 30–45 minutes of moderate physical sport, gym, or brisk campus walk"
    ],
    studentTip: "This is the danger zone where students cave into roadside fried snacks. Keep roasted chana in your bag!",
    focusNutrient: "Antioxidants & Healthy Fats",
    iconName: "Activity"
  },
  {
    time: "07:30 – 10:30 PM",
    period: "Night",
    title: "Light Digestible Dinner & Rest",
    actionItems: [
      "Eat dinner at least 2 to 2.5 hours prior to lying down in bed",
      "Keep evening meals lighter than lunch: vegetable soup, khichdi with kadhi, or grilled paneer with veggies",
      "Turn off intense blue-screen devices 45 minutes before sleep to facilitate natural melatonin surge"
    ],
    studentTip: "Late-night midnight binging on Maggi or pizza triggers acid reflux and ruins deep restorative sleep.",
    focusNutrient: "Light Digestible Protein & Minerals",
    iconName: "Moon"
  }
];

export const CHALLENGE_ROUNDS: FoodChallengeRound[] = [
  {
    id: 1,
    question: "You need an afternoon energy lift between college lectures. Which snack do you pick?",
    optionA: {
      name: "Fresh Whole Orange or Guava",
      description: "Whole seasonal fruit with intact cellular fiber, bioflavonoids, and vitamin C.",
      caloriesApprox: "60 kcal",
      nutritionProfile: "3.5g Fiber • 70mg Vit C • Low Glycemic",
      isHealthy: true
    },
    optionB: {
      name: "Packaged Tetra-Pak Fruit Juice",
      description: "Pasteurized reconstituted fruit concentrate with added sugar and all fiber removed.",
      caloriesApprox: "140 kcal",
      nutritionProfile: "0g Fiber • 28g Liquid Sugar • High Glycemic",
      isHealthy: false
    },
    correctOption: "A",
    explanation: "Whole fruit contains intact insoluble and soluble fiber that slows fructose absorption. Packaged juice is virtually liquid sugar that triggers rapid insulin spikes!",
    takeaway: "Eat your fruit, don't drink it!"
  },
  {
    id: 2,
    question: "You are studying for exams and craving something crunchy. Which one wins?",
    optionA: {
      name: "Commercial Salted Potato Chips (50g)",
      description: "Thinly sliced potatoes deep-fried in reused refined palm oil with chemical flavourings.",
      caloriesApprox: "270 kcal",
      nutritionProfile: "18g Oxidized Fat • 420mg Sodium • Minimal Protein",
      isHealthy: false
    },
    optionB: {
      name: "Dry Roasted Bengal Gram (Chana) & Makhana",
      description: "Traditional dry-roasted legumes with light rock salt, turmeric, and pinch of black pepper.",
      caloriesApprox: "120 kcal",
      nutritionProfile: "7g Plant Protein • 5g Fiber • Zero Trans-Fats",
      isHealthy: true
    },
    correctOption: "B",
    explanation: "Roasted chana delivers 7 grams of body-building protein and complex carbs with zero saturated trans-fats, keeping you alert and satisfied.",
    takeaway: "Swap fried crunch for roasted protein crunch!"
  },
  {
    id: 3,
    question: "It is a hot 34°C afternoon on campus. You are thirsty. What is your drink?",
    optionA: {
      name: "Chilled Buttermilk (Chaas) / Pure Water",
      description: "Traditional churned curd with fresh coriander, ginger, cumin, and rock salt.",
      caloriesApprox: "35 kcal",
      nutritionProfile: "Active Probiotics • Natural Electrolytes • Calcium",
      isHealthy: true
    },
    optionB: {
      name: "Chilled Carbonated Cola Can (330ml)",
      description: "Carbonated water, high-fructose syrup/sugar, caramel color, and phosphoric acid.",
      caloriesApprox: "145 kcal",
      nutritionProfile: "39g Added Sugar • Phosphoric Acid • Zero Nutrients",
      isHealthy: false
    },
    correctOption: "A",
    explanation: "Chaas naturally cools the GI tract, provides living gut-friendly probiotic bacteria, and replenishes sodium-potassium balance without artificial sugar.",
    takeaway: "Chaas and coconut water beat soda every single time!"
  },
  {
    id: 4,
    question: "Ordering lunch at the college cafeteria. What is the smarter carbohydrate base?",
    optionA: {
      name: "White Bread Maida Burger / Patty",
      description: "Heavily refined white wheat flour stripped of bran, layered with trans-fat sauces.",
      caloriesApprox: "380 kcal",
      nutritionProfile: "High Glycemic Load • Minimal Fiber • Processed Fats",
      isHealthy: false
    },
    optionB: {
      name: "Multi-Millet / Whole Wheat Thali Roti",
      description: "Freshly made roti from 100% whole grain wheat, ragi, or jowar with natural bran.",
      caloriesApprox: "160 kcal (2 rotis)",
      nutritionProfile: "Complex Starches • Iron & Magnesium • 4g Fiber",
      isHealthy: true
    },
    correctOption: "B",
    explanation: "Whole grain rotis release glucose gradually into your bloodstream over 3-4 hours, avoiding the post-burger lethargy and brain fog.",
    takeaway: "Whole grains and millets fuel academic stamina!"
  },
  {
    id: 5,
    question: "Dinner time: You have 20 minutes before night studies. What is the better meal?",
    optionA: {
      name: "Homemade Dal, Brown Rice/Roti & Sabzi with Ghee",
      description: "Freshly cooked moong dal, seasonal bottle gourd/spinach sabzi, and a teaspoon of ghee.",
      caloriesApprox: "420 kcal",
      nutritionProfile: "Complete Amino Acids • High Micronutrients • Easy Digestion",
      isHealthy: true
    },
    optionB: {
      name: "Delivered Extra-Cheese Fast Food Pizza Slice",
      description: "Industrial refined dough, processed hydrogenated cheese blend, and high-sodium meats.",
      caloriesApprox: "650 kcal",
      nutritionProfile: "28g Saturated Fat • 1100mg Sodium • Refined Carbs",
      isHealthy: false
    },
    correctOption: "A",
    explanation: "Dal-Chawal or Dal-Roti provides a complete protein profile with easy gastrointestinal transit, ensuring sound sleep and optimal recovery.",
    takeaway: "Simple traditional thali is peak human nutrition!"
  }
];

export const FINAL_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: "According to ICMR-NIN 2024 and WHO guidelines, what proportion of your daily food plate should ideally consist of vegetables and fruits?",
    options: [
      "Approximately 10% (small side garnish)",
      "Exactly 50% (half of your total plate)",
      "75% (only raw salads)",
      "Zero percent if you take a multivitamin tablet"
    ],
    correctIndex: 1,
    explanation: "WHO and ICMR-NIN emphasize that 50% (half of the plate) should be colorful vegetables and fruits to guarantee adequate micronutrients, antioxidants, and protective fiber."
  },
  {
    id: 2,
    question: "Why does eating food very quickly (in under 10 minutes) frequently lead to unhealthy weight gain and indigestion?",
    options: [
      "Fast food has more chemical calories than slow food",
      "It takes ~20 minutes for stomach satiety hormones (leptin) to reach the brain to signal fullness",
      "Chewing food is scientifically unnecessary for digestion",
      "Stomach acid only works after 30 minutes"
    ],
    correctIndex: 1,
    explanation: "It takes approximately 15 to 20 minutes for gut hormones like leptin and peptide YY to reach the brain's satiety centers. Eating too quickly causes you to overeat before your brain realizes you are full!"
  },
  {
    id: 3,
    question: "Which of the following is scientifically recognized as the most effective daily hydration guideline?",
    options: [
      "Everyone must rigidly drink exactly 8 glasses, regardless of body size or climate",
      "Hydration needs vary (typically 2.0 to 3.5L) based on activity, climate, and body size; water is prioritized",
      "Replacing all water with carbonated diet sodas is equally beneficial",
      "You should only drink water when you are experiencing severe dry-mouth thirst"
    ],
    correctIndex: 1,
    explanation: "Scientific bodies like ICMR-NIN emphasize that water requirements are individual — depending on ambient climate, physical exertion, and metabolism. Plain water should always be the primary fluid."
  }
];
