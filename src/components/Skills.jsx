import Reveal from './Reveal.jsx'

const SKILL_GROUPS = [
  {
    title: 'Process & Collaboration',
    items: ['Agile software development', 'Cross-team collaboration', 'Project scheduling & delivery'],
  },
  {
    title: 'Content & Standards',
    items: ['Markdown', 'HTML', 'JSON', 'XML / DITA', 'Structured authoring', 'Microsoft Manual of Style'],
  },
  {
    title: 'Version Control & Platforms',
    items: ['Git / GitHub', 'Confluence', 'JIRA', 'SharePoint', 'Subversion'],
  },
  {
    title: 'Tools',
    items: ['Swagger', 'Postman', 'cURL', 'Adobe Dreamweaver', 'FrameMaker', 'Oxygen', 'Snagit', 'Photoshop', 'Articulate', 'MS Office'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal as="h2" className="section-title">Skills</Reveal>
        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <Reveal as="div" className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
