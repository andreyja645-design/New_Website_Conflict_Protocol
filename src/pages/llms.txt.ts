export function GET() {
  return new Response(
    `# Conflict Protocol Companion Site\n\nA static field guide for spotting conversational pressure and finding scripts to use under stress.\n\nCore routes:\n- /\n- /patterns/\n- /techniques/\n- /situations/\n- /start-here/\n\nPhase 1 exemplar pages:\n- /patterns/gaslighting/\n- /techniques/grey-rock/\n- /situations/saying-no-without-jade/\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
}
