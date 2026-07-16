// Shared opponent-move vocabulary.
// These are the hostile tactics the player learns to recognise before choosing a counter.

export const TACTICS = {
  "guilt-trip": { label: "Guilt-trip", blurb: "Using your guilt or obligation as the lever.", image: "/Cards Opponent Patterns/card-guilt-trip.jpg" },
  martyrdom: { label: "Martyrdom", blurb: "Listing their sacrifices so any 'no' feels like betrayal.", image: "/Cards Opponent Patterns/card-martyrdom.jpg" },
  darvo: { label: "DARVO", blurb: "Deny, Attack, Reverse Victim & Offender - they become the wronged one.", image: "/Cards Opponent Patterns/card-darvo.jpg" },
  gaslighting: { label: "Gaslighting", blurb: "Rewriting facts until you doubt your own memory.", image: "/Cards Opponent Patterns/card-gaslighting.jpg" },
  triangulation: { label: "Triangulation", blurb: "Dragging in a third person to provoke jealousy or competition.", image: "/Cards Opponent Patterns/card-triangulation.jpg" },
  "moving-goalposts": { label: "Moving goalposts", blurb: "The bar keeps shifting so you can never satisfy it.", image: "/Cards Opponent Patterns/card-moving-goalposts.jpg" },
  "scope-creep": { label: "Scope creep", blurb: "A small ask quietly balloons into a huge one.", image: "/Cards Opponent Patterns/card-scope-creep.jpg" },
  "public-shaming": { label: "Public shaming", blurb: "Humiliating you in front of others to control you.", image: "/Cards Opponent Patterns/card-public-shaming.jpg" },
  "credit-theft": { label: "Credit theft", blurb: "Taking ownership of work that was yours.", image: "/Cards Opponent Patterns/card-credit-theft.jpg" },
  minimizing: { label: "Minimizing", blurb: "'It was a joke' - shrinking your hurt into oversensitivity.", image: "/Cards Opponent Patterns/card-minimizing.jpg" },
  comparison: { label: "Invidious comparison", blurb: "Measuring you against someone 'better'.", image: "/Cards Opponent Patterns/card-comparison.jpg" },
  "silent-treatment": { label: "Silent treatment", blurb: "Withdrawal and stonewalling used as punishment.", image: "/Cards Opponent Patterns/card-silent-treatment.jpg" },
  "loyalty-test": { label: "Loyalty test", blurb: "'If you really cared, you'd...' - devotion on demand.", image: "/Cards Opponent Patterns/card-loyalty-test.jpg" },
  "empathy-trap": { label: "Empathy trap", blurb: "Baiting your compassion so you drop your guard.", image: "/Cards Opponent Patterns/card-empathy-trap.jpg" },
} as const;

export type TacticId = keyof typeof TACTICS;

export type TacticCardDetail = {
  tell: string;
  trap: string;
  counter: string;
  examples: string[];
  trapExamples: string[];
  counterExamples: string[];
};

export type LiveTacticBriefing = {
  label: string;
  blurb: string;
  details: TacticCardDetail;
};

const liveBriefing = (
  label: string,
  blurb: string,
  details: TacticCardDetail,
  patterns: RegExp[],
): LiveTacticBriefing & { patterns: RegExp[] } => ({ label, blurb, details, patterns });

const LIVE_TACTIC_BRIEFINGS = [
  liveBriefing(
    "Concern trolling",
    "Control disguised as worry: they sound caring while planting doubt or shrinking your confidence.",
    {
      tell: "The concern arrives exactly where confidence would help you. Their worry makes your competence, judgment, or safety feel questionable.",
      trap: "You reassure them, defend your readiness, or let their anxiety become the frame for your decision.",
      counter: "Name the care without accepting the doubt. Keep the decision anchored in your own judgment.",
      examples: [
        "I just worry you are taking on too much.",
        "Are you sure you can handle that kind of pressure?",
        "I only say this because I care about you.",
      ],
      trapExamples: [
        "Maybe you are right, maybe I am not ready.",
        "Let me prove why I can handle it.",
        "I should slow down so they stop worrying.",
      ],
      counterExamples: [
        "I hear the concern. I am comfortable with my decision.",
        "I am not debating my readiness right now.",
        "I can appreciate the worry without handing it the wheel.",
      ],
    },
    [/concern[-\s]?troll|concern|worried|worry|just care|care about you|control disguised as care/i],
  ),
  liveBriefing(
    "Devaluation",
    "A win, gift, boundary, or identity is made smaller so you start chasing their approval again.",
    {
      tell: "Praise comes with a cut, approval arrives as a backhanded compliment, or a good moment is immediately reframed as not enough.",
      trap: "You try to earn the warmth that was withheld, explain your intent, or compete with the standard they just invented.",
      counter: "Do not audition for approval. Acknowledge the comment briefly and keep your value separate from their reaction.",
      examples: [
        "That is great, but do not let it go to your head.",
        "It is the thought that counts, I guess.",
        "Most people would have remembered what I like.",
      ],
      trapExamples: [
        "I can fix it, just tell me how to make it right.",
        "I did not mean to disappoint you, let me explain.",
        "I should downplay my win so they feel better.",
      ],
      counterExamples: [
        "I am not going to shrink this to make it easier to receive.",
        "You do not have to like it. I am not negotiating my intent.",
        "I hear that you are disappointed. I am not chasing approval here.",
      ],
    },
    [/devalu|backhanded|undermin|shrink|must be nice|not enough|manufactured grievance|bad gift/i],
  ),
  liveBriefing(
    "False urgency",
    "Pressure is inflated into a crisis so you skip your own limits and comply before thinking.",
    {
      tell: "Everything is framed as immediate, tiny, or impossible to question, even when the urgency mostly benefits them.",
      trap: "You abandon your boundary because the timer feels more important than the request itself.",
      counter: "Slow the tempo. Separate real deadlines from pressure theatre before answering.",
      examples: [
        "Drop what you are doing, this cannot wait.",
        "It is just ten minutes, hop on now.",
        "I need this by morning, no excuses.",
      ],
      trapExamples: [
        "I should say yes because there is no time to discuss it.",
        "It sounds urgent, so my plans do not matter.",
        "I will absorb it now and sort out the cost later.",
      ],
      counterExamples: [
        "I am not available on that timeline.",
        "I can discuss what is urgent, not accept the whole ask on pressure.",
        "A short deadline does not change my boundary.",
      ],
    },
    [/false urgency|urgent|urgency|drop it|right now|ten minutes|10 minutes|won't wait|cannot wait|critical/i],
  ),
  liveBriefing(
    "Assumed compliance",
    "They speak as if your yes already happened, making refusal feel like you are breaking a promise.",
    {
      tell: "The request skips the consent step: they plan around your labor, thank you before you agree, or assign the work as a done deal.",
      trap: "You feel late to an agreement you never made and comply to avoid seeming difficult.",
      counter: "Reset the consent line. Make it explicit that the request is still a request.",
      examples: [
        "I knew I could count on you.",
        "Great, so you will handle the rest.",
        "Since you are already helping, take this part too.",
      ],
      trapExamples: [
        "They already expect it, so I have to follow through.",
        "I do not want to disappoint them after they counted on me.",
        "It is easier to do it than correct the assumption.",
      ],
      counterExamples: [
        "I have not agreed to that.",
        "That is a request, not a commitment from me.",
        "I can do the original piece, not the extra work.",
      ],
    },
    [/assumed compliance|assume compliance|count on you|already helping|done deal|take the rest|you'll handle/i],
  ),
  liveBriefing(
    "Tone policing",
    "They dodge the substance by making your delivery, mood, or timing the real offense.",
    {
      tell: "The conversation shifts from what happened to whether you sounded too upset, direct, emotional, political, or ungrateful.",
      trap: "You start defending your tone and lose the original issue.",
      counter: "Acknowledge tone only if useful, then return to the concrete behavior or decision.",
      examples: [
        "Do not make this political.",
        "I would listen if your tone were better.",
        "You are being dramatic instead of constructive.",
      ],
      trapExamples: [
        "Let me prove I am calm enough to raise this.",
        "Maybe I should apologize for my tone and drop the issue.",
        "If I say it perfectly, then they will finally answer.",
      ],
      counterExamples: [
        "We can discuss tone after we address the issue.",
        "My delivery is not the main point. The decision still needs an answer.",
        "I am staying with the behavior I named.",
      ],
    },
    [/tone[-\s]?polic|tone|delivery|dramatic|political|constructive|attitude/i],
  ),
  liveBriefing(
    "Promotion bait",
    "A future reward is kept vague and conditional so you keep overperforming without a real commitment.",
    {
      tell: "The prize is always near but never concrete. The standard shifts from work to loyalty, maturity, attitude, or one more sacrifice.",
      trap: "You chase a moving promise and accept unfair terms because the next approval might unlock it.",
      counter: "Ask for concrete criteria, dates, and decision rights. Treat vague reward talk as pressure, not a contract.",
      examples: [
        "You are almost there, just prove your loyalty.",
        "This is how people get promoted around here.",
        "A few more sacrifices and leadership will notice.",
      ],
      trapExamples: [
        "I should accept this because it might finally pay off.",
        "If I question the promise, I will look disloyal.",
        "One more weekend could be the thing that gets me promoted.",
      ],
      counterExamples: [
        "What are the written criteria and timeline?",
        "I am not trading my boundary for a vague future maybe.",
        "I can discuss growth when the expectations are concrete.",
      ],
    },
    [/promotion|carrot|almost there|prove your loyalty|director track|advancement|future reward|loyalty extraction/i],
  ),
  liveBriefing(
    "Weaponized illness",
    "Health, frailty, or danger is hinted at so your no feels like abandonment or risk.",
    {
      tell: "The symptom is vague enough to be deniable but serious enough to make you feel responsible for preventing harm.",
      trap: "You drop your boundary to manage their fear, body, or safety, even when they have other responsible options.",
      counter: "Take genuine safety seriously without accepting emotional blackmail. Offer appropriate help, not surrender.",
      examples: [
        "My heart has been acting up, but do not worry about me.",
        "If something happens, the neighbors will find me.",
        "I will manage alone somehow.",
      ],
      trapExamples: [
        "I cannot say no if they might get hurt.",
        "I should cancel everything so they feel safe.",
        "If I hold the boundary, whatever happens is my fault.",
      ],
      counterExamples: [
        "If this is medical, call a doctor. I am not changing my answer through fear.",
        "I care about your health, and I am still not available tonight.",
        "I can help you make a practical plan, not take the guilt.",
      ],
    },
    [/weaponi[sz]ed illness|health blackmail|heart|hospital|ambulance|neighbors|neighbours|medical|illness/i],
  ),
  liveBriefing(
    "False release",
    "They appear to let you go while loading the release with disappointment, danger, or guilt.",
    {
      tell: "The words say permission; the subtext punishes you for accepting it.",
      trap: "You treat the fake release as a debt and rush back to prove you are not selfish.",
      counter: "Take the stated permission at face value and refuse the hidden invoice.",
      examples: [
        "No, no, do not come. I will be fine.",
        "You have your own life now.",
        "Do whatever you want, I am used to it.",
      ],
      trapExamples: [
        "They said it was fine, but I know I am supposed to fix it.",
        "I should reverse my boundary so they stop sounding wounded.",
        "If I accept the permission, I am cruel.",
      ],
      counterExamples: [
        "I hear you saying not to come. I will check in tomorrow.",
        "I am not going to answer the guilt behind that.",
        "I care about you, and my plan is unchanged.",
      ],
    },
    [/false release|don't come|do not come|i'll be fine|i will be fine|your own life|used to it|fine by myself/i],
  ),
  liveBriefing(
    "Sacrifice ledger",
    "They total up past sacrifice as if it creates an open-ended debt you must keep repaying.",
    {
      tell: "Old effort is presented as present-day ownership over your time, choices, or obedience.",
      trap: "You start negotiating the debt instead of answering the current request.",
      counter: "Acknowledge what they gave without accepting that it buys your consent now.",
      examples: [
        "After everything I did for you, this is what I get?",
        "I gave up my best years for you.",
        "I went without so you could have everything.",
      ],
      trapExamples: [
        "I owe them, so I should say yes.",
        "I need to repay the past before I can hold a limit.",
        "Their sacrifice decides my answer.",
      ],
      counterExamples: [
        "I know you gave a lot. I am still saying no to this.",
        "Gratitude does not mean automatic agreement.",
        "I can respect the past without handing over this decision.",
      ],
    },
    [/sacrifice ledger|debt of life|unpayable debt|after everything|best years|repay|owed?|obligation/i],
  ),
  liveBriefing(
    "Boundary intrusion",
    "They cross a line first, then frame the violation as care, help, authority, or entitlement.",
    {
      tell: "The access is taken before consent is asked for. If you object, the objection becomes proof that you are ungrateful or incapable.",
      trap: "You defend your right to privacy while they keep debating whether their intent was loving.",
      counter: "Keep the focus on access and future limits. Intent does not erase the boundary.",
      examples: [
        "I let myself in because you clearly needed help.",
        "A mother knows best.",
        "I have a key for a reason.",
      ],
      trapExamples: [
        "Maybe I should accept it because they meant well.",
        "I need to prove I am capable before I can ask them to stop.",
        "If I object, I am rejecting their love.",
      ],
      counterExamples: [
        "Do not let yourself in without asking.",
        "Help still requires permission.",
        "I am changing how access works from now on.",
      ],
    },
    [/boundary intrusion|intrusion|let myself in|key|permission|access|mother knows best|only trying to help/i],
  ),
  liveBriefing(
    "Weaponized history",
    "The past is pulled out as ammunition so you answer shame instead of the present issue.",
    {
      tell: "Old mistakes, childhood stories, secrets, or vulnerable moments appear exactly when you are asserting yourself.",
      trap: "You defend the old wound and abandon the current boundary.",
      counter: "Refuse the time jump. Return to the present behavior and the limit in front of you.",
      examples: [
        "You have always been like this, even as a child.",
        "Remember when you embarrassed yourself back then?",
        "Nothing has changed, you are still that same kid.",
      ],
      trapExamples: [
        "I need to explain why that old story is unfair.",
        "I feel ashamed, so I should back down.",
        "If they know my past, maybe they get to define me.",
      ],
      counterExamples: [
        "I am not discussing childhood shame right now.",
        "That old story does not decide this boundary.",
        "We are talking about what is happening today.",
      ],
    },
    [/weaponi[sz]ed (history|past|secret)|childhood|remember when|always been like this|bedwet|shame|ammunition/i],
  ),
  liveBriefing(
    "Jealousy bait",
    "A rival, ex, or outside admirer is introduced to make you compete for approval or attention.",
    {
      tell: "The third person is not relevant to the decision; they are there to trigger insecurity, urgency, or comparison.",
      trap: "You compete with the absent person and make their approval the prize.",
      counter: "Decline the contest. Respond to the actual request or give the bait no emotional reward.",
      examples: [
        "My ex still knows how to treat me.",
        "At least someone appreciates me.",
        "Other people would be grateful for this.",
      ],
      trapExamples: [
        "I need to prove I am better than them.",
        "I should chase reassurance so I do not lose ground.",
        "Their attention means I am failing.",
      ],
      counterExamples: [
        "I am not competing with them.",
        "That comparison does not change my answer.",
        "If you have a request for me, say it directly.",
      ],
    },
    [/jealousy|ex\b|rival|someone appreciates|at least someone|competition|scarcity/i],
  ),
  liveBriefing(
    "Wounded victim",
    "They perform hurt so your boundary becomes the harm and their pressure disappears from view.",
    {
      tell: "The focus flips from what they did to how injured they feel that you noticed, resisted, or changed your behavior.",
      trap: "You comfort the wound and forget the pattern that caused it.",
      counter: "Acknowledge the feeling without accepting the reversal. Return to the behavior or choice.",
      examples: [
        "I guess I know where I stand.",
        "I was trying to help, and now I am the bad one.",
        "I cannot believe you would treat me like this.",
      ],
      trapExamples: [
        "I should make them feel better before I hold the boundary.",
        "Maybe I am the hurtful one for raising it.",
        "I need to prove I care by backing down.",
      ],
      counterExamples: [
        "I hear that you are hurt. My boundary stays the same.",
        "Feeling hurt does not erase what happened.",
        "I am not debating whether noticing this makes me cruel.",
      ],
    },
    [/wounded victim|victim reversal|performative hurt|hurt by you|where i stand|bad one|villain|after everything/i],
  ),
] as const;

const titleFromLiveLabel = (label: string) =>
  label
    .trim()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (ch) => ch.toUpperCase());

export function resolveLiveTacticBriefing(label: string | null | undefined): LiveTacticBriefing | null {
  const raw = (label ?? "").trim();
  if (!raw || ["none", "null", "undefined"].includes(raw.toLowerCase())) return null;
  const match = LIVE_TACTIC_BRIEFINGS.find((briefing) =>
    briefing.patterns.some((pattern) => pattern.test(raw))
  );
  if (match) {
    const { patterns: _patterns, ...briefing } = match;
    return briefing;
  }
  const title = titleFromLiveLabel(raw);
  return {
    label: title || "Live tactic",
    blurb: "A live-read pressure move: the exact label is new, but the useful question is still what it is trying to make you do.",
    details: {
      tell: "The line creates pressure, confusion, guilt, fear, urgency, or status threat before you have had space to choose a response.",
      trap: "You react to the pressure instead of the actual request: explaining, appeasing, chasing approval, or defending your character.",
      counter: "Slow down and name the demand underneath the label. Answer the demand, not the emotional fog around it.",
      examples: [
        raw,
        "A new angle appears right when your boundary starts to hold.",
        "The conversation shifts from the issue to your duty to soothe them.",
      ],
      trapExamples: [
        "I should answer every implication before I can say no.",
        "If I do not fix their reaction, I am the problem.",
        "I need to prove I am reasonable before I hold the line.",
      ],
      counterExamples: [
        "What are you asking me to agree to?",
        "I am not taking the pressure as the decision.",
        "I can respond to the request, not the accusation around it.",
      ],
    },
  };
}

export const TACTIC_CARD_DETAILS: Record<TacticId, TacticCardDetail> = {
  "guilt-trip": {
    tell: "The ask is wrapped in disappointment, duty, or the suggestion that a decent person would comply.",
    trap: "You start proving you are good, loyal, or grateful instead of answering the actual request.",
    counter: "Validate the feeling, then answer the demand plainly. Warmth first, consent second.",
    examples: [
      "After everything I have done for you, this is how you treat me?",
      "I guess I know where I stand if you cannot do this one thing.",
      "You would not leave me hanging if you actually cared.",
      "I never ask for anything, but apparently even this is too much.",
      "It hurts that you can say no so easily after all I have given you.",
    ],
    trapExamples: [
      "You are right, I am being selfish. I will do it.",
      "I feel terrible saying no, so never mind, I will handle it.",
      "I guess I owe you, so I should not complain.",
    ],
    counterExamples: [
      "I hear that you are disappointed, and my answer is still no.",
      "I appreciate what you have done. I am not available for this.",
      "I care about you, and I am not taking that on.",
    ],
  },
  martyrdom: {
    tell: "They list sacrifice as evidence that your boundary is cruel.",
    trap: "You repay the emotional debt by giving ground you did not choose.",
    counter: "Acknowledge the sacrifice without accepting that it creates an open-ended claim on you.",
    examples: [
      "I gave up so much for this family, but sure, do whatever you want.",
      "Do not worry about me. I am used to doing everything alone.",
      "I will just suffer quietly like I always do.",
      "No, it is fine. My needs have never mattered anyway.",
      "I suppose my sacrifices only count when they are convenient for you.",
    ],
    trapExamples: [
      "Fine, I will cancel my plans so you do not feel abandoned.",
      "You have done enough for me, so I should just say yes.",
      "I cannot let you feel like the only one sacrificing.",
    ],
    counterExamples: [
      "I know you have carried a lot. I am still keeping this boundary.",
      "Your sacrifice matters, and it does not decide this for me.",
      "I am not dismissing what you gave up. I am saying no to this request.",
    ],
  },
  darvo: {
    tell: "They deny the harm, attack your response, then recast themselves as the injured party.",
    trap: "You defend your character and lose the original issue.",
    counter: "Do not litigate the reversal. Mirror the flip or return to the concrete behavior.",
    examples: [
      "I cannot believe you are accusing me after the way you attacked me.",
      "That did not happen, and honestly your tone is abusive.",
      "You are the one hurting me by bringing this up.",
      "I was trying to help, and now you are making me the villain.",
      "You twist everything, then act like I am the problem.",
    ],
    trapExamples: [
      "I am not attacking you, I promise, please believe me.",
      "Maybe I did sound harsh. I am sorry for bringing it up.",
      "Let me explain why I am not the bad one here.",
    ],
    counterExamples: [
      "We can talk about my tone after we address what happened.",
      "I am not debating who is the victim. I am naming the behavior.",
      "The issue is the comment you made, not whether I am unfair for noticing it.",
    ],
  },
  gaslighting: {
    tell: "They challenge your memory, perception, or sanity until the facts feel slippery.",
    trap: "You argue every detail and let them turn certainty into fog.",
    counter: "Anchor to your account. Keep it short, factual, and non-defensive.",
    examples: [
      "That never happened. You always remember things wrong.",
      "You are imagining a problem that is not there.",
      "I never said that. You must have misunderstood again.",
      "You are too emotional to remember this clearly.",
      "Everyone knows you exaggerate when you are upset.",
    ],
    trapExamples: [
      "Maybe I am remembering it wrong. Forget I said anything.",
      "I need to prove every detail before I can hold this boundary.",
      "If you say it did not happen, maybe I overreacted.",
    ],
    counterExamples: [
      "I remember it differently, and I am acting from my account.",
      "I am not going to argue my memory in circles.",
      "The detail I am clear on is that I am not okay with it happening again.",
    ],
  },
  triangulation: {
    tell: "A third person is dragged in to create pressure, jealousy, rivalry, or social proof.",
    trap: "You compete with the absent person or chase approval.",
    counter: "Refuse the contest. Keep the conversation between the people actually present.",
    examples: [
      "Everyone else understands this. Why are you the only difficult one?",
      "Alex already agreed with me, so I do not know why you are resisting.",
      "Maybe I should ask someone who actually supports me.",
      "Your sister never gives me this much trouble.",
      "The whole team thinks this is obvious.",
    ],
    trapExamples: [
      "What did Alex say about me? I need to fix that.",
      "I can be as supportive as they are. I will do it.",
      "I do not want everyone thinking I am difficult.",
    ],
    counterExamples: [
      "I am not discussing Alex. What are you asking me for?",
      "Other people's opinions do not change my answer.",
      "Let's keep this between us and the decision in front of us.",
    ],
  },
  "moving-goalposts": {
    tell: "The promised finish line moves after you meet it.",
    trap: "You sprint harder each time, teaching them that the bar can move again.",
    counter: "Name the original agreement and ask for a fixed standard before doing more.",
    examples: [
      "Yes, you finished that, but now I need the whole thing redone by Monday.",
      "That is a start, but it is not enough anymore.",
      "I know I said one section, but the expectation has changed.",
      "If you really owned this, you would have anticipated the next part.",
      "Good, now prove you can handle the harder version.",
    ],
    trapExamples: [
      "I will redo it again until it finally meets the new standard.",
      "I should have guessed you wanted more, so I will keep going.",
      "I cannot stop now or it will look like I failed.",
    ],
    counterExamples: [
      "I completed the agreed scope. What is the new standard before I do more?",
      "That is a new request, so let's define it separately.",
      "I can discuss the next version after we close the original ask.",
    ],
  },
  "scope-creep": {
    tell: "A small request quietly expands into a much larger commitment.",
    trap: "You accept each extra piece because each one sounds minor in isolation.",
    counter: "Separate the original ask from the new ask, then decide on the new scope explicitly.",
    examples: [
      "Since you are already helping, just take the rest of the deck too.",
      "Can you also clean up the data while you are in there?",
      "It is basically the same task, so add the client version too.",
      "One more small thing: stay late and finish the appendix.",
      "If you can do the summary, the full report should be easy.",
    ],
    trapExamples: [
      "Sure, it is only one more thing. I will absorb it.",
      "I already started, so I might as well finish everything.",
      "I do not want to seem unhelpful, so I will add the extra work.",
    ],
    counterExamples: [
      "That is beyond the original ask. I can discuss it as a separate request.",
      "I can do the summary, not the full report.",
      "Before I add anything, we need to reset the scope and timing.",
    ],
  },
  "public-shaming": {
    tell: "They use an audience to make resistance feel embarrassing or dangerous.",
    trap: "You over-explain in public or comply to stop the humiliation.",
    counter: "Keep the response controlled. Move the decision out of the public arena when possible.",
    examples: [
      "Can everyone see why this project is late now?",
      "Maybe you can explain to the room why you dropped the ball.",
      "Let us all wait while you justify this decision.",
      "This is exactly the attitude I was warning everyone about.",
      "Since you wanted attention, tell everyone why you said no.",
    ],
    trapExamples: [
      "I will agree now so this stops happening in front of everyone.",
      "Let me explain every detail so no one thinks badly of me.",
      "I should apologize publicly even though the issue is not settled.",
    ],
    counterExamples: [
      "I am not going to resolve this in front of the group.",
      "I can discuss the timeline after this meeting.",
      "Let's take the decision offline and keep this meeting on track.",
    ],
  },
  "credit-theft": {
    tell: "Your work, idea, or effort is quietly presented as theirs.",
    trap: "You swallow it to stay agreeable, then lose leverage and authorship.",
    counter: "State the contribution cleanly and attach your name to the work without pleading.",
    examples: [
      "I pulled together the strategy from your notes, so I will present it.",
      "I took your rough idea and made it client-ready.",
      "Let me walk them through the plan I developed from our discussion.",
      "Your draft helped, but the final direction is mine.",
      "I will mention you supported the work after I present it.",
    ],
    trapExamples: [
      "It is okay, you can present it. I do not want to make it awkward.",
      "I should stay quiet so I still seem like a team player.",
      "Maybe my contribution was not important enough to name.",
    ],
    counterExamples: [
      "I want to clarify that I built the original strategy and draft.",
      "Please include my name on the work before it goes out.",
      "I am glad the idea is moving forward. I need my contribution represented accurately.",
    ],
  },
  minimizing: {
    tell: "They shrink the harm into a joke, misunderstanding, or proof that you are too sensitive.",
    trap: "You argue whether your reaction is valid instead of naming the impact.",
    counter: "Hold the impact steady. Do not debate whether it was 'serious enough.'",
    examples: [
      "Relax, it was just a joke. You take everything personally.",
      "You are making a huge deal out of nothing.",
      "Nobody else would be upset by that.",
      "I was only teasing. You need thicker skin.",
      "This is not serious enough for a whole conversation.",
    ],
    trapExamples: [
      "Maybe I am too sensitive. Forget it.",
      "I should prove why it hurt before I ask for it to stop.",
      "I will laugh it off so I do not seem difficult.",
    ],
    counterExamples: [
      "It may have been a joke to you. I do not want it repeated.",
      "I am not debating whether it was serious enough. It did not work for me.",
      "The impact matters here, and I am asking you to stop.",
    ],
  },
  comparison: {
    tell: "You are measured against someone supposedly better, easier, or more loyal.",
    trap: "You compete for approval on their terms.",
    counter: "Decline the contest and return to the specific request or boundary.",
    examples: [
      "Your cousin never makes this difficult. Why cannot you be more like him?",
      "Other people manage this without all the drama.",
      "I wish you had Maya's attitude about helping.",
      "Everyone else on the team can handle pressure.",
      "Your brother would have said yes already.",
    ],
    trapExamples: [
      "I can be more like them. I will do it.",
      "I need to prove I am not worse than the person you named.",
      "I will compete for approval instead of answering the request.",
    ],
    counterExamples: [
      "I am not comparing myself to them. My answer is about this request.",
      "Their choice does not decide mine.",
      "I am staying with what I can do, not competing with someone else.",
    ],
  },
  "silent-treatment": {
    tell: "Withdrawal becomes a punishment designed to make you chase repair.",
    trap: "You panic, apologize, or over-function to end the silence.",
    counter: "Stay regulated. Offer one clean opening, then stop feeding the punishment loop.",
    examples: [
      "Fine. If that is how you feel, I have nothing to say to you.",
      "Do whatever you want. I am done talking.",
      "You can figure out what you did wrong.",
      "No reply is the reply you deserve right now.",
      "Maybe silence will help you understand.",
    ],
    trapExamples: [
      "Please talk to me. I will take it back.",
      "I will apologize for anything if you stop ignoring me.",
      "I should keep texting until they respond.",
    ],
    counterExamples: [
      "I am available to talk when you are ready to speak directly.",
      "I will not chase silence. We can revisit this later.",
      "I am stepping back now and keeping my boundary.",
    ],
  },
  "loyalty-test": {
    tell: "They turn compliance into proof that you care, belong, or are on the team.",
    trap: "You accept a bad demand to avoid looking disloyal.",
    counter: "Separate loyalty from the specific request. Caring does not mean automatic yes.",
    examples: [
      "A real team player would not make me ask twice.",
      "If you cared about this family, you would be here.",
      "I need to know you are with me, so say yes.",
      "People who are loyal do not question requests like this.",
      "This is how you prove I can count on you.",
    ],
    trapExamples: [
      "I do not want you to doubt me, so yes.",
      "I should prove my loyalty by agreeing.",
      "If I say no, I am failing the relationship.",
    ],
    counterExamples: [
      "I am committed to the team, and I am not available for this.",
      "My loyalty is not measured by automatic yes.",
      "I care about us. This specific request is still a no.",
    ],
  },
  "empathy-trap": {
    tell: "Your compassion is used as the door through which the boundary gets bypassed.",
    trap: "You rescue them from their feeling and abandon your own limit.",
    counter: "Care without surrender. Acknowledge the hardship and keep the limit intact.",
    examples: [
      "I thought you would understand after everything I am dealing with.",
      "I am barely holding it together, and now you are saying no?",
      "After my week, I cannot believe you would make this harder.",
      "I guess compassion only matters when it is convenient.",
      "If you had any heart, you would help me this once.",
    ],
    trapExamples: [
      "You are struggling, so I should drop my boundary.",
      "I cannot let you feel unsupported, so I will rescue this.",
      "Your pain matters more than my limit right now.",
    ],
    counterExamples: [
      "I am sorry this is hard, and I am still not able to do it.",
      "I care about what you are carrying. My boundary stays the same.",
      "I can listen for a few minutes, but I cannot take over the problem.",
    ],
  },
};

const TACTIC_PATTERNS: Record<TacticId, RegExp[]> = {
  "guilt-trip": [/guilt[-\s]?trip|guilt\b|obligation|ungrateful/i],
  martyrdom: [/martyr|sacrifice|debt|after all i/i],
  darvo: [/darvo|deny.*attack|reverse victim|victim.*offender|flipping victim|wronged one/i],
  gaslighting: [/gaslight|rewrit|reality|memory|that never happened|deny|denial/i],
  triangulation: [/triangulat|third person|jealous|everyone else|other people/i],
  "moving-goalposts": [/moving[-\s]?goalposts?|goalposts?|target keeps shifting|bar keeps shifting|never enough/i],
  "scope-creep": [/scope[-\s]?creep|balloons?|small ask|one more thing|just add|extra work/i],
  "public-shaming": [/public[-\s]?sham|humiliat|in front of|all[-\s]?hands|everyone saw/i],
  "credit-theft": [/credit[-\s]?theft|taking credit|stole credit|my work|ownership of work/i],
  minimizing: [/minimi[sz]|just a joke|oversensitive|overreact|not a big deal|too sensitive/i],
  comparison: [/comparison|compared|why can't you|better than|look at how/i],
  "silent-treatment": [/silent[-\s]?treatment|stonewall|withholding|withdrawal|not talking/i],
  "loyalty-test": [/loyalty[-\s]?test|team player|if you really cared|if you cared|devotion|prove you/i],
  "empathy-trap": [/empathy[-\s]?trap|compassion|heartless|be kind|after what i've been through/i],
};

export function resolveTacticIds(
  label: string | null | undefined,
  flags?: { darvo?: boolean; martyr?: boolean; scopeCreep?: boolean },
): TacticId[] {
  const hits: TacticId[] = [];
  const add = (id: TacticId) => {
    if (!hits.includes(id)) hits.push(id);
  };

  if (flags?.darvo) add("darvo");
  if (flags?.martyr) add("martyrdom");
  if (flags?.scopeCreep) add("scope-creep");

  const raw = (label ?? "").trim();
  if (!raw || raw.toLowerCase() === "none") return hits;

  for (const [id, patterns] of Object.entries(TACTIC_PATTERNS) as [TacticId, RegExp[]][]) {
    if (patterns.some((pattern) => pattern.test(raw))) add(id);
  }

  return hits;
}
