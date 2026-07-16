export function GET() {
  return new Response(
    `# Conflict Protocol Companion Site\n\nA static field guide for spotting conversational pressure and finding scripts to use under stress.\n\nCore routes:\n- /\n- /start-here/\n- /patterns/\n- /techniques/\n- /situations/\n- /about/\n- /privacy/\n\nContent model:\n- 14 pattern pages answer \"what are they doing?\"\n- 12 technique pages answer \"what do I do back?\"\n- 8 situation pages answer \"what do I literally say in this scene?\"\n\nUseful starting points:\n- /start-here/\n- /patterns/gaslighting/\n- /techniques/grey-rock/\n- /situations/you-froze-in-a-meeting/\n- /situations/saying-no-without-jade/\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
}
