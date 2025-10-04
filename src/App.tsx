import { useState } from "react";
import "./App.css";
import { CodePane } from "./components/CodePane";
import { PreviewPane } from "./components/PreviewPane";
import {
  activityIcons,
  defaultSection,
  languageBadges,
  sectionOrder,
  sections,
} from "./content/sections";
import type { SectionKey } from "./content/types";
import { SectionSidebar } from "./components/SectionSidebar";

type ViewMode = "preview" | "code";

function App() {
  const [activeSection, setActiveSection] =
    useState<SectionKey>(defaultSection);
  const [viewMode, setViewMode] = useState<ViewMode>("preview");
  const [transitionNonce, setTransitionNonce] = useState(0);

  const handleSectionChange = (key: SectionKey) => {
    setActiveSection(key);
    setTransitionNonce((current) => current + 1);
  };

  const handleViewChange = (mode: ViewMode) => {
    setViewMode(mode);
    setTransitionNonce((current) => current + 1);
  };

  const activeData = sections[activeSection];

  return (
    <div className="app-shell">
      <header className="title-bar">
        <div className="title">Daniel Cousino</div>
        <div className="window-controls" aria-hidden>
          <span className="control minimize" />
          <span className="control maximize" />
          <span className="control close" />
        </div>
      </header>
      <div className="workspace">
        <nav className="activity-bar" aria-label="Primary">
          {sectionOrder.map((key) => (
            <button
              key={key}
              className={key === activeSection ? "active" : ""}
              onClick={() => handleSectionChange(key)}
              aria-label={sections[key].title}
              type="button"
            >
              {activityIcons[key]}
            </button>
          ))}
        </nav>
        <SectionSidebar
          activeSection={activeSection}
          onSelect={handleSectionChange}
          languageBadges={languageBadges}
          sectionOrder={sectionOrder}
          sectionMap={sections}
        />
        <main className="editor" aria-live="polite">
          <div className="tab-bar">
            <div
              className="tab active"
              style={{
                ["--pane-accent" as string]: activeData.accent ?? "#007acc",
              }}
            >
              <span className="tab-icon">
                {languageBadges[activeData.language]}
              </span>
              <span>{activeData.fileName}</span>
              <span className="tab-close">×</span>
            </div>
            <div
              className="view-toggle"
              role="group"
              aria-label="Toggle preview or code view"
            >
              <button
                type="button"
                className={viewMode === "preview" ? "active" : ""}
                onClick={() => handleViewChange("preview")}
              >
                Preview
              </button>
              <button
                type="button"
                className={viewMode === "code" ? "active" : ""}
                onClick={() => handleViewChange("code")}
              >
                Code
              </button>
            </div>
          </div>
          <article className={`editor-surface view-${viewMode}`}>
            {viewMode === "preview" ? (
              <PreviewPane
                key={`preview-${activeSection}-${transitionNonce}`}
                sectionKey={activeSection}
              />
            ) : (
              <CodePane
                key={`code-${activeSection}-${transitionNonce}`}
                section={activeData}
              />
            )}
          </article>
        </main>
      </div>
      <footer className="status-bar">
        <span>Daniel Cousino</span>
        <span>Senior Software Engineer</span>
        <span>Built with React + Vite</span>
      </footer>
    </div>
  );
}

export default App;
