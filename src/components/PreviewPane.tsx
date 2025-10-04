import type { SectionKey } from "../content/types";
import {
  brandColors,
  contactLinks,
  educationHistory,
  experiences,
  skillGroups,
} from "../content/resume";

interface PreviewPaneProps {
  sectionKey: SectionKey;
}

export function PreviewPane({ sectionKey }: PreviewPaneProps) {
  switch (sectionKey) {
    case "about":
      return (
        <div className="preview-pane about">
          <h1>Daniel Cousino</h1>
          <h2>Senior Software Engineer ⚙️</h2>
          <p>
            I transform messy telemetry and tangled data ecosystems into
            resilient, observable platforms. My toolkit spans Azure cloud, React
            front ends, and the quiet confidence that comes from shipping for
            customers at scale.
          </p>
          <p>
            Career roots in the United States Marine Corps taught me rigor,
            accountability, and that checklists save lives. Today, I channel
            that precision into engineering practices that balance innovation
            with reliability.
          </p>
          <blockquote>
            “Months of testing and bug fixes can save you hours of planning”
          </blockquote>
        </div>
      );
    case "skills":
      return (
        <div className="preview-pane skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case "experience":
      return (
        <div className="preview-pane experience">
          {experiences.map((role) => (
            <article
              key={role.company}
              className="experience-card"
              style={{
                borderImageSource: `linear-gradient(120deg, ${
                  brandColors[role.brand]
                } 0%, rgba(255,255,255,0.1) 100%)`,
              }}
            >
              <header>
                <h3>{role.company}</h3>
                <div>
                  <span>{role.role}</span>
                  <span>{role.timeframe}</span>
                </div>
              </header>
              <ul>
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      );
    case "education":
      return (
        <div className="preview-pane education">
          {educationHistory.map((entry) => (
            <div className="education-card" key={entry.school}>
              <h3>{entry.school}</h3>
              <p>{entry.credential}</p>
              <span>{entry.year}</span>
            </div>
          ))}
        </div>
      );
    case "contact":
      return (
        <div className="preview-pane contact">
          <h2>Let&rsquo;s collaborate</h2>
          <p>
            I&rsquo;m always open to conversations about engineering leadership,
            data-intensive platforms, and any project that rewards thoughtful
            craftsmanship.
          </p>
          <ul>
            {Object.values(contactLinks).map((link) => (
              <li key={link.label}>
                <span>{link.label}</span>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}
