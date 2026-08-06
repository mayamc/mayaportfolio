import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal as="h2" className="section-title">About</Reveal>
        <div className="about-grid">
          <Reveal as="p" className="about-text">
            I'm a passionate advocate for writing technically accurate content, development, and delivery of
            quality technical content. My work includes technical documentation, context-sensitive help, API
            guides, training materials, tutorials, and user assistance resources.
          </Reveal>
          <Reveal as="p" className="about-text">
            I've worked across deadline-driven Agile environments, partnering with engineering, product, and
            support teams to turn deep product knowledge into content that's accurate, consistent, and easy
            to follow — whether that's a step-by-step tutorial or a full API reference.
          </Reveal>
        </div>
      </div>
    </section>
  )
}
