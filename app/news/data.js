export const updates = [
  {
    slug: 'evaluation-first-model-development',
    label: 'Research note',
    title: 'Evaluation-first model development',
    body: 'How the lab reviews model behavior before broader release, with emphasis on reliability, safeguards, and measurable risk reduction.',
    publishedAt: '2026-06-10',
    content: [
      'Before any model is released broadly, the lab runs a structured evaluation phase designed to surface failure modes early.',
      'This includes red-teaming sessions, automated behavioral probes, and manual review of edge cases across high-stakes domains.',
      'The goal is not perfection but measurable risk reduction — knowing where the model is likely to fail and documenting it clearly.',
    ],
  },
  {
    slug: 'human-review-high-impact-workflows',
    label: 'Safety practice',
    title: 'Human review for high-impact workflows',
    body: 'A practical overview of where human oversight remains required when AI systems assist planning, analysis, or operational decisions.',
    publishedAt: '2026-06-04',
    content: [
      'AI systems can accelerate planning and analysis workflows significantly, but certain decision points still require a human in the loop.',
      'This note outlines the categories where automated outputs should be treated as drafts, not final answers — including resource allocation, risk assessments, and external communications.',
      'Teams adopting AI tooling should document which steps require human sign-off before action is taken.',
    ],
  },
  {
    slug: 'build-with-responsible-ai-patterns',
    label: 'Learning resource',
    title: 'Build with responsible AI patterns',
    body: 'Guidance for teams adopting AI tools while documenting assumptions, monitoring outputs, and preserving user control.',
    publishedAt: '2026-05-28',
    content: [
      'Responsible AI adoption starts before the first API call — with clearly documented assumptions about what the model can and cannot do.',
      'This resource covers three core patterns: assumption logging, output monitoring, and graceful degradation when the model is uncertain.',
      'Teams that build these patterns in early spend significantly less time debugging trust failures later.',
    ],
  },
];

export default updates;
