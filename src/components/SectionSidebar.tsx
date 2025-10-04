import type { Language, SectionData, SectionKey } from "../content/types";

interface SectionSidebarProps {
  activeSection: SectionKey;
  onSelect: (section: SectionKey) => void;
  languageBadges: Record<Language, string>;
  sectionOrder: SectionKey[];
  sectionMap: Record<SectionKey, SectionData>;
}

export function SectionSidebar({
  activeSection,
  onSelect,
  languageBadges,
  sectionOrder,
  sectionMap,
}: SectionSidebarProps) {
  return (
    <aside className="side-bar" aria-label="Section navigation">
      <div className="explorer-header">EXPLORER</div>
      <div className="folder-name">portfolio</div>
      <ul className="file-tree">
        {sectionOrder.map((key) => {
          const section = sectionMap[key];
          const accent = section.accent ?? "#007acc";

          return (
            <li key={key}>
              <button
                type="button"
                className={key === activeSection ? "active" : ""}
                onClick={() => onSelect(key)}
                aria-current={key === activeSection ? "page" : undefined}
                style={{ ["--pane-accent" as string]: accent }}
              >
                <span className="chevron">›</span>
                <span className="file-label">
                  <span className="badge">
                    {languageBadges[section.language]}
                  </span>
                  {section.fileName}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
