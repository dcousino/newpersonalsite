import type { CodeLine, SectionData, SectionKey, Token } from "./types";
import { brandColors, educationHistory, experiences } from "./resume";

const t = (
  text: string,
  type?: Token["type"],
  brand?: Token["brand"]
): Token => ({
  text,
  type,
  brand,
});

const line = (indent: number, tokens: Token[]): CodeLine => ({
  indent,
  tokens,
});

export const sectionOrder: SectionKey[] = [
  "about",
  "skills",
  "experience",
  "education",
  "contact",
];

export const defaultSection: SectionKey = sectionOrder[0];

export const activityIcons: Record<SectionKey, string> = {
  about: "🗂️",
  skills: "🎨",
  experience: "🛠️",
  education: "📚",
  contact: "📮",
};

export const languageBadges = {
  html: "</>",
  css: "{}",
  js: "JS",
  json: "{ }",
  yaml: "YML",
  tsx: "⚛︎",
} as const;

export const languageLabels = {
  html: "HTML",
  css: "CSS",
  js: "JavaScript",
  json: "JSON",
  yaml: "YAML",
  tsx: "TSX",
} as const;

export const sections: Record<SectionKey, SectionData> = {
  about: {
    key: "about",
    fileName: "about.html",
    language: "html",
    title: "About Daniel",
    accent: "#7fdbff",
    lines: [
      line(0, [t("<!DOCTYPE", "tag"), t(" html"), t(">", "punct")]),
      line(0, [
        t("<html", "tag"),
        t(" lang", "attr"),
        t('="en"', "string"),
        t(">", "punct"),
      ]),
      line(1, [t("<head>", "tag")]),
      line(2, [
        t("<meta", "tag"),
        t(" charset", "attr"),
        t('="utf-8"', "string"),
        t(" />", "punct"),
      ]),
      line(2, [
        t("<title>", "tag"),
        t("Daniel Cousino // shipping resilient data platforms"),
        t("</title>", "tag"),
      ]),
      line(1, [t("</head>", "tag")]),
      line(1, [t("<body>", "tag")]),
      line(2, [
        t("<main", "tag"),
        t(" class", "attr"),
        t('="story"', "string"),
        t(">", "punct"),
      ]),
      line(3, [
        t("<h1>", "tag"),
        t("Senior Software Engineer"),
        t("</h1>", "tag"),
      ]),
      line(3, [
        t("<p", "tag"),
        t(" class", "attr"),
        t('="tagline"', "string"),
        t(">", "punct"),
        t("I translate telemetry into momentum for data teams."),
        t("</p>", "tag"),
      ]),
      line(3, [
        t("<p", "tag"),
        t(" class", "attr"),
        t('="details"', "string"),
        t(">", "punct"),
        t("From Azure pipelines to React UIs, I ship calm in the chaos."),
        t("</p>", "tag"),
      ]),
      line(3, [
        t("<!--", "comment"),
        t(
          " TODO: Resist rewriting entire front end at 2 AM (again). ",
          "comment"
        ),
        t("-->", "comment"),
      ]),
      line(2, [t("</main>", "tag")]),
      line(1, [t("</body>", "tag")]),
      line(0, [t("</html>", "tag")]),
    ],
  },
  skills: {
    key: "skills",
    fileName: "skills.css",
    language: "css",
    title: "Skills",
    accent: "#c586c0",
    lines: [
      line(0, [t(":root", "tag"), t(" {", "punct")]),
      line(1, [
        t("--languages", "attr"),
        t(": ", "punct"),
        t('"C#, TypeScript, JavaScript, PowerShell, Python"', "string"),
        t(";", "punct"),
      ]),
      line(1, [
        t("--frameworks", "attr"),
        t(": ", "punct"),
        t(
          '"React, Redux, .NET Core, Node.js, Spark, Entity Framework"',
          "string"
        ),
        t(";", "punct"),
      ]),
      line(1, [
        t("--platforms", "attr"),
        t(": ", "punct"),
        t('"Azure, AWS, Windows, Windows Server"', "string"),
        t(";", "punct"),
      ]),
      line(1, [
        t("--data-toys", "attr"),
        t(": ", "punct"),
        t('"MSSQL, SQL DW, ADLS Gen1/Gen2, Power BI"', "string"),
        t(";", "punct"),
      ]),
      line(1, [
        t("--devops-magic", "attr"),
        t(": ", "punct"),
        t('"Azure DevOps, Terraform, Data Factory, Git, Agile"', "string"),
        t(";", "punct"),
      ]),
      line(0, [t("}", "punct")]),
      line(0, [t(".engineer", "tag"), t(" {", "punct")]),
      line(1, [
        t("display", "attr"),
        t(": ", "punct"),
        t("grid", "value"),
        t(";", "punct"),
      ]),
      line(1, [
        t("grid-template-columns", "attr"),
        t(": ", "punct"),
        t("repeat(auto-fit, minmax(220px, 1fr))", "value"),
        t(";", "punct"),
      ]),
      line(1, [
        t("gap", "attr"),
        t(": ", "punct"),
        t("clamp(1rem, 2vw, 1.5rem)", "value"),
        t(";", "punct"),
      ]),
      line(1, [
        t("filter", "attr"),
        t(": ", "punct"),
        t("drop-shadow(0 0 12px rgba(127, 219, 255, 0.35))", "value"),
        t(";", "punct"),
      ]),
      line(0, [t("}", "punct")]),
      line(0, [t(".engineer::after", "tag"), t(" {", "punct")]),
      line(1, [
        t("content", "attr"),
        t(": ", "punct"),
        t('"Bonus skill: debugging prod without breaking a sweat."', "string"),
        t(";", "punct"),
      ]),
      line(1, [
        t("color", "attr"),
        t(": ", "punct"),
        t("var(--languages-color, #9cdcfe)", "value"),
        t(";", "punct"),
      ]),
      line(0, [t("}", "punct")]),
      line(0, [
        t("/*", "comment"),
        t(" Verified: caffeine-driven continuous delivery. ", "comment"),
        t("*/", "comment"),
      ]),
    ],
  },
  experience: {
    key: "experience",
    fileName: "experience.js",
    language: "js",
    title: "Experience",
    accent: "#569cd6",
    lines: [
      line(0, [
        t("const", "keyword"),
        t(" brandPalette", "constant"),
        t(" = ", "operator"),
        t("{", "punct"),
      ]),
      ...Object.entries(brandColors).map(([brand, color], index, arr) =>
        line(1, [
          t(brand, "attr"),
          t(": ", "punct"),
          t(`"${color}"`, "string", brand as Token["brand"]),
          t(index < arr.length - 1 ? "," : "", "punct"),
        ])
      ),
      line(0, [t("};", "punct")]),
      line(0, [
        t("const", "keyword"),
        t(" experience", "constant"),
        t(" = [", "punct"),
      ]),
      ...experiences.flatMap((role, roleIndex) => {
        const lines: CodeLine[] = [];
        lines.push(line(1, [t("{", "punct")]));
        lines.push(
          line(2, [
            t("company", "attr"),
            t(": ", "punct"),
            t(`"${role.company}"`, "string", role.brand),
            t(",", "punct"),
          ])
        );
        lines.push(
          line(2, [
            t("role", "attr"),
            t(": ", "punct"),
            t(`"${role.role}"`, "string"),
            t(",", "punct"),
          ])
        );
        lines.push(
          line(2, [
            t("years", "attr"),
            t(": ", "punct"),
            t(`"${role.timeframe}"`, "string"),
            t(",", "punct"),
          ])
        );
        lines.push(
          line(2, [
            t("brand", "attr"),
            t(": ", "punct"),
            t(`brandPalette.${role.brand}`, "value"),
            t(",", "punct"),
          ])
        );
        lines.push(
          line(2, [
            t("achievements", "attr"),
            t(": ", "punct"),
            t("[", "punct"),
          ])
        );
        role.highlights.forEach((highlight, highlightIndex) => {
          lines.push(
            line(3, [
              t(`"${highlight}"`, "string"),
              t(
                highlightIndex < role.highlights.length - 1 ? "," : "",
                "punct"
              ),
            ])
          );
        });
        lines.push(line(2, [t("]", "punct"), t(",", "punct")]));
        lines.push(
          line(1, [
            t("}", "punct"),
            t(roleIndex < experiences.length - 1 ? "," : "", "punct"),
          ])
        );
        return lines;
      }),
      line(0, [t("];", "punct")]),
      line(0, [
        t("experience.forEach", "function"),
        t("(({ company, brand, achievements }) => {", "punct"),
      ]),
      line(1, [
        t("console.info", "function"),
        t("(", "punct"),
        t("`%c${company}`", "string"),
        t(", ", "punct"),
        t("`color: ${brand}; font-weight: 700;`", "string"),
        t(", ", "punct"),
        t("achievements[0]", "value"),
        t(");", "punct"),
      ]),
      line(0, [t("});", "punct")]),
      line(0, [
        t(
          '// TODO: Add "professional snack tester" once peer reviewed.',
          "comment"
        ),
      ]),
    ],
  },
  education: {
    key: "education",
    fileName: "education.yml",
    language: "yaml",
    title: "Education",
    accent: "#4ec9b0",
    lines: [
      line(0, [t("education:", "keyword")]),
      ...educationHistory.flatMap((entry) => [
        line(1, [
          t("- ", "punct"),
          t("school", "attr"),
          t(": ", "punct"),
          t(`"${entry.school}"`, "string"),
        ]),
        line(2, [
          t("credential", "attr"),
          t(": ", "punct"),
          t(`"${entry.credential}"`, "string"),
        ]),
        line(2, [
          t("year", "attr"),
          t(": ", "punct"),
          t(entry.year.replace(/[^0-9]/g, ""), "number"),
        ]),
      ]),
      line(0, [
        t(
          "# Bonus credit: countless flight checks courtesy of the USMC.",
          "comment"
        ),
      ]),
    ],
  },
  contact: {
    key: "contact",
    fileName: "contact.tsx",
    language: "tsx",
    title: "Contact",
    accent: "#9cdcfe",
    lines: [
      line(0, [
        t("export", "keyword"),
        t(" const", "keyword"),
        t(" contactCard", "function"),
        t(" = () => (", "punct"),
      ]),
      line(1, [
        t("<section", "tag"),
        t(" className", "attr"),
        t('="contact-card"', "string"),
        t(">", "punct"),
      ]),
      line(2, [t("<h2>", "tag"), t("Let’s collaborate"), t("</h2>", "tag")]),
      line(2, [
        t("<ContactField", "tag"),
        t(" label", "attr"),
        t('="Phone"', "string"),
        t(" href", "attr"),
        t('="tel:14084837029"', "string"),
        t(" value", "attr"),
        t('="408-483-7029"', "string"),
        t(" />", "punct"),
      ]),
      line(2, [
        t("<ContactField", "tag"),
        t(" label", "attr"),
        t('="Email"', "string"),
        t(" href", "attr"),
        t('="mailto:daniel.cousino27@gmail.com"', "string"),
        t(" value", "attr"),
        t('="daniel.cousino27@gmail.com"', "string"),
        t(" />", "punct"),
      ]),
      line(2, [
        t("<ContactField", "tag"),
        t(" label", "attr"),
        t('="Website"', "string"),
        t(" href", "attr"),
        t('="https://www.danielcousino.com"', "string"),
        t(" value", "attr"),
        t('="danielcousino.com"', "string"),
        t(" />", "punct"),
      ]),
      line(2, [
        t("<ContactField", "tag"),
        t(" label", "attr"),
        t('="LinkedIn"', "string"),
        t(" href", "attr"),
        t('="https://www.linkedin.com/in/daniel-cousino-8b826410"', "string"),
        t(" value", "attr"),
        t('="linkedin.com/in/daniel-cousino-8b826410"', "string"),
        t(" />", "punct"),
      ]),
      line(2, [
        t("{/*", "comment"),
        t(" PSA: best reached before second coffee. ", "comment"),
        t("*/}", "comment"),
      ]),
      line(1, [t("</section>", "tag")]),
      line(0, [t(");", "punct")]),
      line(0, [
        t(
          "// FYI: Accepts meeting invites with proper agenda + donuts.",
          "comment"
        ),
      ]),
    ],
  },
};
