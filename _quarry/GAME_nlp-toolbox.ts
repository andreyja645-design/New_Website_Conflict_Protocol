export interface NlpTechnique {
  id: string;
  name: string;
  purpose: string;
  examples: string[];
  /** Poster key-art under /public. Omit when art doesn't exist yet — the card renders a styled "art incoming" back instead of a broken image. */
  image?: string;
  /** Skill rating shown on the card (matches the SKILL ★ badge on the posters). */
  stars: number;
  /** Bottom-banner line from the poster art. */
  tagline: string;
  /** One-line tactical job — what this move is FOR. Shown on the card detail + compact preview. */
  job?: string;
  /** One-line cost/failure mode — when this move goes wrong. Card detail only. */
  risk?: string;
}

export const NLP_TOOLBOX: NlpTechnique[] = [
  {
    id: "grey-rock",
    name: "Grey Rock",
    purpose: "Become uninteresting. Starve the manipulator of emotional fuel.",
    image: "/Cards User Techniques/card-grey-rock.jpg",
    stars: 2,
    tagline: "No reaction. No fuel. No power.",
    job: "Denies emotional fuel.",
    risk: "Against an active demand, silence can read as consent.",
    examples: [
      "Noted.",
      "OK.",
      "Sure.",
      "Fine.",
      "Mm.",
    ],
  },
  {
    id: "fogging",
    name: "Fogging",
    purpose: "Agree with a fragment of truth. Deflate the attack without conceding.",
    image: "/Cards User Techniques/card-fogging.jpg",
    stars: 3,
    tagline: "Not every attack deserves a defense.",
    job: "Absorbs an attack without conceding.",
    risk: "Concede only a fragment — full agreement is caving.",
    examples: [
      "You might be right about that.",
      "I can see why it looks that way.",
      "That's a fair point.",
      "There's probably some truth to that.",
      "I hear you.",
    ],
  },
  {
    id: "i-statement",
    name: "I-Statements",
    purpose: "Name your experience. Avoid blame triggers.",
    image: "/Cards User Techniques/card-i-statement.jpg",
    stars: 2,
    tagline: "Name it without blaming.",
    job: "States your position without attack.",
    risk: "Weak at high Heat — can read as pleading.",
    examples: [
      "I feel uncomfortable when conversations go this way.",
      "I'm not okay with being spoken to like this.",
      "I feel hurt when this happens.",
      "I need a moment before I can respond.",
      "I feel overwhelmed right now.",
    ],
  },
  {
    id: "broken-record",
    name: "Broken Record",
    purpose: "Calmly repeat your stance. No new arguments.",
    image: "/Cards User Techniques/card-broken-record.jpg",
    stars: 3,
    tagline: "Hold the line. You don't have to change.",
    job: "Holds the line under repeat pressure.",
    risk: "Word-for-word repeats turn mechanical — vary the phrasing.",
    examples: [
      "I won't be discussing that.",
      "My answer remains the same.",
      "I've already said what I have to say.",
      "I'm not going to change my position on this.",
      "That's my final answer.",
    ],
  },
  {
    id: "aikido",
    name: "Psychological Aikido",
    purpose: "Absorb the blow. Redirect to the next step.",
    image: "/Cards User Techniques/card-aikido.jpg",
    stars: 3,
    tagline: "Flow is power. You lead the next step.",
    job: "Concedes a point to take the lead.",
    risk: "Concede a POINT, never the demand.",
    examples: [
      "You're right, I could have handled that better. What would help now?",
      "Fair point. What's the next step we should focus on?",
      "Noted — let's talk about how to move forward.",
      "You may be right. What outcome are you looking for?",
      "I hear that. What would make this better?",
    ],
  },
  {
    id: "validation",
    name: "Validation",
    purpose: "Acknowledge their feeling without agreeing to their demand. Lowers heat, costs nothing.",
    image: "/Cards User Techniques/card-validation.jpg",
    stars: 1,
    tagline: "Acknowledge the feeling, not the demand.",
    job: "Lowers Heat. Costs nothing.",
    risk: "Alone, it never resolves the demand — overuse reads as agreement.",
    examples: [
      "That sounds really hard.",
      "I can see this matters a lot to you.",
      "I hear that you're upset.",
      "It makes sense you'd feel that way.",
      "I get why this is frustrating.",
    ],
  },
  {
    id: "reframe",
    name: "Reframe",
    purpose: "Refuse the frame you're handed. Redirect to the ground you choose.",
    image: "/Cards User Techniques/card-reframe.jpg",
    stars: 3,
    tagline: "Don't fight the frame. Change it.",
    job: "Moves the fight to your ground.",
    risk: "At high Heat it reads as dodging.",
    examples: [
      "Let's look at this another way.",
      "What matters now is the next step.",
      "I see it differently — here's how.",
      "Let's focus on what we do from here.",
      "Stepping back, the real question is what happens next.",
    ],
  },
  {
    id: "boundary",
    name: "Boundary",
    purpose: "State your limit plainly. No justification, no negotiation.",
    image: "/Cards User Techniques/card-boundary.jpg",
    stars: 2,
    tagline: "State the limit. Don't defend it.",
    job: "Protects Frame. May raise Heat.",
    risk: "Needs Frame behind it — an empty line is weaker than silence.",
    examples: [
      "That doesn't work for me.",
      "I'm not willing to discuss this right now.",
      "I won't be doing that.",
      "My answer is no.",
      "I'm not available for this.",
    ],
  },
  {
    id: "mirroring",
    name: "Mirroring",
    purpose: "Reflect their words back so they hear their own claim — and you concede nothing.",
    image: "/Cards User Techniques/card-mirroring.jpg",
    stars: 2,
    tagline: "Reflect it back. Make them hear it.",
    job: "Makes them hear their own claim.",
    risk: "In public scenes it can amplify the attack.",
    examples: [
      "So you're saying you feel let down.",
      "It sounds like you mean I wasn't there for you.",
      "Let me make sure I follow you.",
      "What I'm hearing is that you wanted more from me.",
      "If I've got this right, you're saying it's my fault.",
    ],
  },
  {
    id: "labeling",
    name: "Labeling",
    purpose: "Name the emotion in the room neutrally. Defuses tension without taking the bait.",
    image: "/Cards User Techniques/card-labeling.jpg",
    stars: 2,
    tagline: "Name the feeling. Lower the heat.",
    job: "Names the emotion, drains its charge.",
    risk: "Mislabeling hands them a correction.",
    examples: [
      "It seems like you're frustrated.",
      "You sound hurt by this.",
      "I get the sense you feel ignored.",
      "It looks like this caught you off guard.",
      "I can hear that you're angry.",
    ],
  },
  {
    id: "tactic-naming",
    name: "Tactic Naming",
    purpose: "Name the manipulation out loud. High-risk: it lands or it backfires.",
    image: "/Cards User Techniques/card-tactic-naming.jpg",
    stars: 3,
    tagline: "Name the move. Break the spell.",
    job: "Exposes the manipulation pattern.",
    risk: "Costs Frame — said angrily it becomes an attack.",
    examples: [
      "I notice the subject keeps changing.",
      "That's shifting this onto me.",
      "This is starting to feel like pressure.",
      "I'm noticing we circle back to my faults every time.",
      "Naming it: that's guilt, not a reason.",
    ],
  },
  {
    id: "consequence-setting",
    name: "Consequence Setting",
    purpose: "A boundary with teeth. Name the limit AND the action you'll take if it's crossed. Spend the standing you've built.",
    stars: 3,
    tagline: "Say what you'll do. Then do it.",
    job: "A boundary with teeth. Spends Frame.",
    risk: "Backfires without Frame — and bluffs decay.",
    examples: [
      "If you keep speaking to me like that, I'll end the conversation.",
      "If this keeps happening, I'm going to step away for now.",
      "If we can't keep this respectful, I'll need to take a break from it.",
      "I'll stay and talk, but if the insults continue, I'm leaving.",
      "If you keep bringing this up, I won't keep responding to it.",
    ],
  },
];

const JADE_PATTERNS = [
  /\bi'?m sorry\b/i,
  /\bi just\b/i,
  /\bbut i\b/i,
  /\byou don'?t understand\b/i,
  /\bi can explain\b/i,
  /\bi have to\b/i,
  /\bi need to justify\b/i,
];

export function detectJade(text: string): boolean {
  return JADE_PATTERNS.some((p) => p.test(text));
}
