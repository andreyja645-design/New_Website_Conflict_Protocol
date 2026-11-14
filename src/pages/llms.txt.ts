import { COMMUNICATION_STYLES } from "../lib/communicationStyles";

export function GET() {
  const styleList = COMMUNICATION_STYLES.map((s) => `- /styles/${s.id}/ (${s.label})`).join("\n");
  return new Response(
    `# Conflict Protocol Companion Site\n\nA static field guide for spotting conversational pressure and finding scripts to use under stress.\n\nCore routes:\n- /\n- /play/\n- /start-here/\n- /patterns/\n- /techniques/\n- /situations/\n- /styles/\n- /style-quiz/\n- /about/\n- /privacy/\n\nContent model:\n- 14 pattern pages answer "what are they doing?"\n- 12 technique pages answer "what do I do back?"\n- 8 situation pages answer "what do I literally say in this scene?"\n- ${COMMUNICATION_STYLES.length} communication style profiles describe how players react under pressure\n- A 12-question assessment at /style-quiz/ identifies your likely communication style\n\nCommunication styles:\n${styleList}\n\nUseful starting points:\n- /start-here/\n- /play/\n- /patterns/gaslighting/\n- /techniques/grey-rock/\n- /situations/you-froze-in-a-meeting/\n- /situations/saying-no-without-jade/\n- /style-quiz/\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
}
