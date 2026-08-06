import Reveal from './Reveal.jsx'

const AIDLC_ITEMS = [
  {
    emoji: '🔄',
    title: 'AIDLC workflow',
    body: 'AWS AI-Driven Development Lifecycle with Inception → Construction → Operations phases.',
  },
  {
    emoji: '📋',
    title: 'Document generation',
    body: 'Generate AIDLC deliverables — Vision, Requirements, Technical Spec, and more.',
  },
  {
    emoji: '✅',
    title: 'Phase gates',
    body: 'Track phase completion and transition requirements.',
  },
  {
    emoji: '🔁',
    title: 'Sync status',
    body: 'Keep AIDLC documents synchronized with specs.',
  },
]

const SCREENSHOTS = [
  {
    src: 'images/workflow.png',
    alt: 'VisionStudio workflow view showing multiple selectable spec workflows, including custom workflows',
    caption: 'Workflow view — select from multiple workflows, including custom ones',
  },
  {
    src: 'images/spec-editor.png',
    alt: 'VisionStudio spec editor showing an individual specification with LLM-as-a-Judge evaluation scores',
    caption: 'Spec editor — individual specs with LLM-as-a-Judge evaluations',
  },
  {
    src: 'images/findings.png',
    alt: 'VisionStudio findings list showing all issues found across specs in one view',
    caption: 'Findings/issues overview — every finding listed for easy scanning',
  },
]

export default function VisionStudioCard() {
  const base = import.meta.env.BASE_URL

  return (
    <Reveal as="article" className="card card-featured">
      <span className="badge">Featured</span>
      <h3>
        <a href="https://github.com/ProductBuildersHQ/visionstudio" target="_blank" rel="noopener">
          VisionStudio — Spec-Driven Development
        </a>
      </h3>
      <p>
        Documentation and workflow design for an LLM-powered spec authoring platform that brings a
        structured, spec-driven approach to product development.
      </p>
      <ul className="feature-list">
        <li>
          <strong>Workflow &amp; specs:</strong> visual workflow diagrams sequence specs through dual
          methodology tracks (requirements and implementation) and AIDLC phase gates.
        </li>
        <li>
          <strong>Spec viewer/editor:</strong> Markdown spec editor with live preview, paired with
          LLM-as-a-Judge evaluation that scores specs against rubrics and per-dimension ratings.
        </li>
        <li>
          <strong>Issues overview:</strong> a consolidated findings page surfaces every open issue
          across all specs in one place, so reviewers can triage without opening each document.
        </li>
      </ul>

      <h4 className="card-subheading">AIDLC Integration</h4>
      <ul className="feature-list feature-list-emoji">
        {AIDLC_ITEMS.map((item) => (
          <li key={item.title}>
            {item.emoji} <strong>{item.title}:</strong> {item.body}
          </li>
        ))}
      </ul>

      <div className="screenshot-gallery">
        {SCREENSHOTS.map((shot) => (
          <figure key={shot.src}>
            <img src={`${base}${shot.src}`} alt={shot.alt} loading="lazy" />
            <figcaption>{shot.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="card-links">
        <a className="card-link" href="https://github.com/ProductBuildersHQ/visionstudio" target="_blank" rel="noopener">
          View on GitHub ↗
        </a>
        <a className="card-link" href="https://productbuildershq.com/visionstudio/" target="_blank" rel="noopener">
          Docs &amp; workflow guide ↗
        </a>
      </div>
    </Reveal>
  )
}
