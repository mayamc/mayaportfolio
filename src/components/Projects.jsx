import Reveal from './Reveal.jsx'
import VisionStudioCard from './VisionStudioCard.jsx'

export default function Projects() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <Reveal as="h2" className="section-title">Documentation Projects</Reveal>
        <Reveal as="p" className="section-subtitle">
          A sample of the guides, references, and tutorials I've authored.
        </Reveal>

        <div className="card-grid">
          <VisionStudioCard />

          <Reveal as="article" className="card">
            <h3>
              <a href="https://docs.oracle.com/en/middleware/idm/identity-governance/12.2.1.4/omadm/index.html" target="_blank" rel="noopener">
                Administering Oracle Identity Governance
              </a>
            </h3>
            <p>
              Guide for enterprises setting up delegated administrators — users empowered to manage the
              identities, passwords, password policies, and access of other users.
            </p>
          </Reveal>

          <Reveal as="article" className="card">
            <h3>
              <a href="https://docs.oracle.com/en/middleware/idm/identity-governance-connectors/12.2.1.3/cgmst/index.html" target="_blank" rel="noopener">
                Configuration Guide
              </a>
            </h3>
            <p>
              Step-by-step configuration for integrating the Microsoft Teams connector with Oracle Identity
              Governance and external identity-aware applications.
            </p>
          </Reveal>

          <Reveal as="article" className="card">
            <h3>REST API Documentation</h3>
            <p>Reference documentation for the Oracle Identity Governance REST API surface.</p>
            <ul className="link-list">
              <li><a href="https://docs.oracle.com/en/middleware/idm/identity-governance/12.2.1.4/oigsp/index.html" target="_blank" rel="noopener">System Property REST API</a></li>
              <li><a href="https://docs.oracle.com/en/middleware/idm/identity-governance/12.2.1.4/oigsc/index.html" target="_blank" rel="noopener">Scheduler REST API</a></li>
              <li><a href="https://docs.oracle.com/en/middleware/idm/identity-governance/12.2.1.4/oigmn/index.html" target="_blank" rel="noopener">Manage Notification REST API</a></li>
            </ul>
          </Reveal>

          <Reveal as="article" className="card">
            <h3>
              <a href="https://support.inmobi.com/monetize/reporting-api" target="_blank" rel="noopener">
                InMobi Reporting API
              </a>
            </h3>
            <p>
              Written during my tenure at InMobi — covers key API features and use cases for automating and
              downloading data via the InMobi Publisher Reporting API 3.0.
            </p>
          </Reveal>

          <Reveal as="article" className="card">
            <h3>Oracle by Example Tutorials</h3>
            <p>Hands-on, step-by-step tutorials for implementing Oracle Identity Management solutions.</p>
            <ul className="link-list">
              <li><a href="https://docs.oracle.com/en-us/iaas/developer-tutorials/tutorials/tf-compute/01-summary.htm" target="_blank" rel="noopener">Create a Compute Instance</a></li>
              <li><a href="https://docs.oracle.com/en-us/iaas/Content/GSG/Reference/overviewworkflow.htm#Tutorial__Launching_Your_First_Linux_Instance" target="_blank" rel="noopener">Launching Your First Linux Instance</a></li>
            </ul>
          </Reveal>

          <Reveal as="article" className="card">
            <h3><a href={`${base}SampleInstallationGuide.docx`} download>Sample Installation Guide</a></h3>
            <p>
              Procedures for installing and configuring the Microsoft Office Communicator 2007 client on
              end-user machines.
            </p>
            <a className="card-link" href={`${base}SampleInstallationGuide.docx`} download>Download .docx ↓</a>
          </Reveal>

          <Reveal as="article" className="card">
            <h3>
              <a href="https://support.inmobi.com/monetize/getting-started" target="_blank" rel="noopener">
                InMobi SDK Guide
              </a>
            </h3>
            <p>Teaches SDK users how to get started monetizing apps and websites through InMobi.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
