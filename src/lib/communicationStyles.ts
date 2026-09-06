export interface CommunicationStyle {
  id: string;
  label: string;
  tagline: string;
  category: "constructive" | "trap" | "neutral";
  categoryLabel: string;
  tone: "good" | "bad" | "warn" | "neutral";
  badgeColor: string;
  detail: string;
  habits: string[];
  counterMeasure: string;
  image: string;
  stats: {
    frameControl: number; // 1-100
    temperatureShift: string; // e.g. "Cools room", "Heats room", "Absorbs"
    vulnerabilityLevel: "Low" | "Moderate" | "Critical" | "High";
  };
}

export const COMMUNICATION_STYLES: CommunicationStyle[] = [
  {
    id: "unmovable",
    label: "The Unmovable",
    tagline: "Calm, non-reactive, hard to grab — you gave them nothing to pull on.",
    category: "constructive",
    categoryLabel: "Constructive Defense",
    tone: "good",
    badgeColor: "#10b981",
    detail:
      "The Unmovable stays calm and non-reactive under pressure. By refusing to feed the conflict — no justifying, no taking the bait — you deny the other side anything to grab onto. It's the core defensive posture: hard to provoke, hard to destabilise.",
    habits: ["Grey Rocking", "Broken Record holds", "Refusing to JADE (Justify, Argue, Defend, Explain)"],
    counterMeasure: "Pair this posture with strategic exit questions once the opponent tires out.",
    image: "/assets/styles/Unmovable.webp",
    stats: {
      frameControl: 95,
      temperatureShift: "Cools room (-40%)",
      vulnerabilityLevel: "Low"
    }
  },
  {
    id: "operative",
    label: "The Operative",
    tagline: "Boundaries with teeth — you named the line and held it.",
    category: "constructive",
    categoryLabel: "Constructive Assertive",
    tone: "good",
    badgeColor: "#2fb8ff",
    detail:
      "The Operative sets boundaries with consequences and names the line clearly. Instead of just absorbing pressure, you state what you will and won't accept and hold it — most effective when you have the standing to back it up.",
    habits: ["Clear boundary naming", "Enforceable consequence setting", "Direct tactic calling"],
    counterMeasure: "Always specify the precise conditional trigger before executing consequences.",
    image: "/assets/styles/Operative.webp",
    stats: {
      frameControl: 92,
      temperatureShift: "Anchors room (Neutral)",
      vulnerabilityLevel: "Low"
    }
  },
  {
    id: "diplomat",
    label: "The Diplomat",
    tagline: "You led with empathy — validating and naming feelings to defuse.",
    category: "constructive",
    categoryLabel: "Constructive Empathic",
    tone: "good",
    badgeColor: "#a855f7",
    detail:
      "The Diplomat leads with empathy — validating, labelling and mirroring feelings to lower the temperature. You de-escalate by making the other side feel heard rather than meeting force with force.",
    habits: ["Emotional labeling", "Tactical mirroring", "De-escalatory pacing"],
    counterMeasure: "Ensure empathy validates their emotional reality without conceding on the objective boundary.",
    image: "/assets/styles/Diplomat.webp",
    stats: {
      frameControl: 88,
      temperatureShift: "Rapid cooling (-60%)",
      vulnerabilityLevel: "Low"
    }
  },
  {
    id: "tactician",
    label: "The Tactician",
    tagline: "You absorbed and redirected — reframing their energy instead of clashing.",
    category: "constructive",
    categoryLabel: "Constructive Strategic",
    tone: "good",
    badgeColor: "#ec4899",
    detail:
      "The Tactician absorbs incoming pressure and redirects it — reframing the other side's energy or using verbal aikido to turn an attack into a question. You change the frame instead of clashing inside theirs.",
    habits: ["Verbal aikido turns", "Cognitive reframing", "Inquiry-led pivot questions"],
    counterMeasure: "Keep questions open-ended ('How would that work?') rather than defensive.",
    image: "/assets/styles/tactician.webp",
    stats: {
      frameControl: 90,
      temperatureShift: "Redirects momentum",
      vulnerabilityLevel: "Low"
    }
  },
  {
    id: "improviser",
    label: "The Improviser",
    tagline: "No single pattern — you read the room and switched tools.",
    category: "constructive",
    categoryLabel: "Constructive Adaptive",
    tone: "good",
    badgeColor: "#38bdf8",
    detail:
      "The Improviser shows no single pattern — you read each moment and switched tools. Versatility is a strength when each choice fits the moment, though it can also mean you hadn't settled on a core game.",
    habits: ["Situational flexibility", "Dynamic tool switching", "Fluid tempo management"],
    counterMeasure: "Anchor to at least one primary boundary so adaptability doesn't slip into ambiguity.",
    image: "/assets/styles/improviser.webp",
    stats: {
      frameControl: 84,
      temperatureShift: "Variable modulation",
      vulnerabilityLevel: "Moderate"
    }
  },
  {
    id: "minimalist",
    label: "The Minimalist",
    tagline: "Sparse and quiet — you barely gave them a surface to work with.",
    category: "neutral",
    categoryLabel: "Neutral Baseline",
    tone: "neutral",
    badgeColor: "#94a3b8",
    detail:
      "The Minimalist gave little to work with — sparse, quiet replies. Saying less can be a valid hold, but with so few scored moves there wasn't enough signal to read a fuller style.",
    habits: ["One-word responses", "Calculated silence", "Zero informational surface area"],
    counterMeasure: "Silence buys time, but eventually requires a clean line to conclude the interaction.",
    image: "/assets/styles/minimalist.webp",
    stats: {
      frameControl: 70,
      temperatureShift: "Stagnant (Zero fuel)",
      vulnerabilityLevel: "Low"
    }
  },
  {
    id: "over-explainer",
    label: "The Over-Explainer",
    tagline: "You kept justifying and defending — the bait they wanted you to take.",
    category: "trap",
    categoryLabel: "Pressure Vulnerability",
    tone: "bad",
    badgeColor: "#f43f5e",
    detail:
      "The Over-Explainer keeps justifying, arguing and defending — the exact bait a manipulator wants you to take. Every explanation hands them a new thread to pull. The fix is to stop explaining and hold a flat, repeatable line.",
    habits: ["Paragraph-long justifications", "Unprompted proof-gathering", "Compulsive defense loops"],
    counterMeasure: "Use the 10-word rule: Cut your answer down to one neutral sentence and stop speaking.",
    image: "/assets/styles/over-explainer.webp",
    stats: {
      frameControl: 25,
      temperatureShift: "Accelerates debate (+45%)",
      vulnerabilityLevel: "Critical"
    }
  },
  {
    id: "appeaser",
    label: "The Appeaser",
    tagline: "You folded to keep the peace — concession bought you nothing.",
    category: "trap",
    categoryLabel: "Pressure Vulnerability",
    tone: "bad",
    badgeColor: "#fb7185",
    detail:
      "The Appeaser folds to keep the peace. Conceding may end the moment, but it teaches the other side that pressure works — so the demands come back. Buying calm with surrender quietly costs you standing.",
    habits: ["Instant agreement under tension", "Compromising boundaries early", "Apologizing for basic needs"],
    counterMeasure: "Replace 'I'm sorry' with 'I need a second to review that before agreeing.'",
    image: "/assets/styles/appeaser.webp",
    stats: {
      frameControl: 20,
      temperatureShift: "False calm (Pending surge)",
      vulnerabilityLevel: "Critical"
    }
  },
  {
    id: "brawler",
    label: "The Brawler",
    tagline: "You came out swinging — heat over technique.",
    category: "trap",
    categoryLabel: "Reactive Escalation",
    tone: "bad",
    badgeColor: "#ef4444",
    detail:
      "The Brawler came out swinging — heat over technique. Matching hostility with hostility raises the temperature and usually plays into an escalation trap. Power here comes from control, not volume.",
    habits: ["Shouting / All-caps aggression", "Counter-attacks", "Adrenaline-fueled accusations"],
    counterMeasure: "Drop your vocal volume and slow your pacing to break the symmetrical surge.",
    image: "/assets/styles/brawler.webp",
    stats: {
      frameControl: 30,
      temperatureShift: "Explosive heat (+90%)",
      vulnerabilityLevel: "High"
    }
  },
  {
    id: "troll",
    label: "The Troll",
    tagline: "You answered with sarcasm and jabs — every reaction was fuel.",
    category: "trap",
    categoryLabel: "Reactive Provocation",
    tone: "bad",
    badgeColor: "#f97316",
    detail:
      "The Troll meets pressure with sarcasm, mockery and needling. It feels like winning, but a reactive jab IS a reaction — and a reaction is exactly what they're fishing for. Against supply-seekers especially, every barb feeds the cycle and raises the heat. The counter isn't a better comeback; it's giving them nothing — go flat.",
    habits: ["Sarcastic side comments", "Derisive mockery", "Snarky retorts"],
    counterMeasure: "Starve the dynamic: Replace biting irony with flat, uninflected factual acknowledgement.",
    image: "/assets/styles/troll.webp",
    stats: {
      frameControl: 35,
      temperatureShift: "Sustained fuel supply",
      vulnerabilityLevel: "High"
    }
  },
  {
    id: "wildcard",
    label: "The Wildcard",
    tagline: "Half your replies didn't land clean — chaos isn't a strategy.",
    category: "trap",
    categoryLabel: "Unstable / Erratic",
    tone: "warn",
    badgeColor: "#eab308",
    detail:
      "The Wildcard's replies didn't land cleanly — mixed signals and unclear moves. Chaos can occasionally disrupt, but it isn't a strategy: the other side can't be steered by something they can't read, and neither can you.",
    habits: ["Contradictory moves", "Unfocused topic leaps", "Erratic boundary shifts"],
    counterMeasure: "Establish one clear objective for the conversation and anchor all responses to it.",
    image: "/assets/styles/wildcard.webp",
    stats: {
      frameControl: 40,
      temperatureShift: "Unpredictable swings",
      vulnerabilityLevel: "Moderate"
    }
  }
];
