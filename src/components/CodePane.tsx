import type { CSSProperties } from "react";
import type { SectionData } from "../content/types";
import { languageLabels } from "../content/sections";

interface CodePaneProps {
  section: SectionData;
}

export function CodePane({ section }: CodePaneProps) {
  const { fileName, language, lines, accent } = section;
  const paneStyle: CSSProperties = {
    ["--pane-accent" as string]: accent ?? "#007acc",
  };

  return (
    <div
      className={`code-pane language-${language} animate-in`}
      style={paneStyle}
    >
      <div className="code-pane__header">
        <div className="code-pane__dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="code-pane__title">{fileName}</span>
        <span className="code-pane__language">{languageLabels[language]}</span>
      </div>
      <pre className="code-pane__body">
        {lines.map((codeLine, index) => {
          const indentStyle: CSSProperties = {
            ["--indent" as string]: String(codeLine.indent ?? 0),
          };

          return (
            <div
              key={`${fileName}-line-${index}`}
              className="code-line"
              style={indentStyle}
            >
              <span className="line-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="line-content">
                {codeLine.tokens.map((token, tokenIndex) => {
                  const tokenClasses = [
                    "token",
                    token.type ?? "plain",
                    token.brand ? `brand-${token.brand}` : "",
                  ]
                    .filter(Boolean)
                    .join(" ");

                  return (
                    <span
                      key={`${fileName}-line-${index}-token-${tokenIndex}`}
                      className={tokenClasses}
                    >
                      {token.text}
                    </span>
                  );
                })}
              </span>
            </div>
          );
        })}
      </pre>
    </div>
  );
}
